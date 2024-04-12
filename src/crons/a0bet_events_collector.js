let mongoose = require("mongoose");
let { ApiPromise, WsProvider } = require("@polkadot/api");
let { ContractPromise, Abi } = require("@polkadot/api-contract");
let jsonrpc = require("@polkadot/types/interfaces/jsonrpc");
let { contract } = require("../contracts/core_contract.js");

require("dotenv").config();
const dbConfig = require("../config/db.config.js");
const db = require("../models/index.js");
const ScannedBlocks = db.scannedBlocks;
const WinEvent = db.winEvent;
const LoseEvent = db.loseEvent;
const CorePoolManager = db.corePoolManager;
const StakingPoolManager = db.stakingPoolManager;
const PandoraPoolManager = db.pandoraPoolManager;
const TreasuryPoolManager = db.treasuryPoolManager;
const RewardPoolManager = db.rewardPoolManager;
const PlatformFeeManager = db.platformFeeManager;

const DATABASE_HOST = dbConfig.DB_HOST;
const DATABASE_PORT = dbConfig.DB_PORT;
const DATABASE_NAME = dbConfig.DB_NAME;
const CONNECTION_STRING = `${dbConfig.DB_CONNECTOR}://${DATABASE_HOST}:${DATABASE_PORT}`;

const connectDb = () => {
  return mongoose.connect(CONNECTION_STRING, {
    dbName: DATABASE_NAME,
    useNewUrlParser: true,
  });
};

var global_vars = {};
var abi_contract = null;
var api = null;

const scanBlocks = async (blocknumber) => {
  if (global_vars.isScanning) {
    //This to make sure always process the latest block in case still scanning old blocks
    console.log("Process latest block", blocknumber);
    const blockHash = await api.rpc.chain.getBlockHash(blocknumber);
    const eventRecords = await api.query.system.events.at(blockHash);
    processEventRecords(eventRecords, blocknumber);
    return;
  }
  global_vars.isScanning = true;

  try {
    //Check database to see the last checked blockNumber
    let lastBlock_db = await ScannedBlocks.findOne({
      lastScanned: true,
    });
    let last_scanned_blocknumber = 0;
    if (lastBlock_db) {
      last_scanned_blocknumber = lastBlock_db.blockNumber;
    } else {
      let lastBlock_db = await ScannedBlocks.create({
        lastScanned: true,
        blockNumber: 0,
      });
    }
    if (last_scanned_blocknumber == 0) last_scanned_blocknumber = blocknumber;
    console.log(
      "last_scanned_blocknumber",
      last_scanned_blocknumber,
      "blocknumber",
      blocknumber
    );
    for (
      var to_scan = last_scanned_blocknumber;
      to_scan <= blocknumber;
      to_scan++
    ) {
      console.log("Scanning block", to_scan);
      const blockHash = await api.rpc.chain.getBlockHash(to_scan);
      const eventRecords = await api.query.system.events.at(blockHash);
      //console.log('eventRecords',eventRecords.length);
      processEventRecords(eventRecords, to_scan);

      await ScannedBlocks.updateOne({
        lastScanned: true,
        blockNumber: to_scan,
      });
    }
  } catch (e) {
    console.log(e.message);
  }

  global_vars.isScanning = false;
};

const processEventRecords = async (eventRecords, to_scan) => {
  eventRecords.forEach(async (record) => {
    // Extract the phase, event and the event types
    const {
      phase,
      event: { data, method, section },
    } = record;
    //console.log(data, method, section);
    if (section == "contracts" && method == "ContractEmitted") {
      //console.log(phase.toString() + ' : ' + section + '.' + method + ' ' + data.toString());
      const [accId, bytes] = data.map((data, _) => data).slice(0, 2);
      const contract_address = accId.toString();
      // console.log(contract_address,contract.CONTRACT_ADDRESS);
      try {
        if (contract_address == contract.CONTRACT_ADDRESS) {
          console.log("Event from A0BET Contract...");
          //console.log(phase.toString() + ' : ' + section + '.' + method + ' ' + data.toString());
          const decodedEvent = abi_contract.decodeEvent(bytes);
          let event_name = decodedEvent.event.identifier;
          const eventValues = [];

          for (let i = 0; i < decodedEvent.args.length; i++) {
            const value = decodedEvent.args[i];
            eventValues.push(value.toString());
          }

          if (event_name == "WinEvent") {
            let obj = {
              blockNumber: to_scan,
              player: eventValues[0],
              is_over: eventValues[1] == 1 ? true : false,
              random_number: eventValues[2],
              bet_number: eventValues[3],
              bet_amount: eventValues[4] ? eventValues[4] / 10 ** 12 : 0,
              win_amount: eventValues[5] ? eventValues[5] / 10 ** 12 : 0,
              reward_amount: eventValues[6] / 10 ** 12,
              oracle_round: eventValues[7],
            };
            let found = await WinEvent.findOne(obj);
            if (!found) {
              await WinEvent.create(obj);
              console.log("added WinEvent", obj);
            }
          } else if (event_name == "LoseEvent") {
            let obj = {
              blockNumber: to_scan,
              player: eventValues[0],
              is_over: eventValues[1] == 1 ? true : false,
              random_number: eventValues[2],
              bet_number: eventValues[3],
              bet_amount: eventValues[4] ? eventValues[4] / 10 ** 12 : 0,
              reward_amount: eventValues[5] / 10 ** 12,
              oracle_round: eventValues[6],
            };
            let found = await LoseEvent.findOne(obj);
            if (!found) {
              await LoseEvent.create(obj);
              console.log("added LoseEvent", obj);
            }
          } else if (event_name == "UpdateCorePoolAmount") {
            let obj = {
              blockNumber: to_scan,
              contract_address: eventValues[0],
              caller: eventValues[1],
              from: eventValues[2],
              to: eventValues[3],
              amount: eventValues[4] ? eventValues[4] / 10 ** 12 : 0,
              time: eventValues[5],
            };
            let found = await CorePoolManager.findOne(obj);
            if (!found) {
              await CorePoolManager.create(obj);
              console.log("added CorePoolManager", obj);
            }
          } else if (event_name == "UpdateRewardPoolAmount") {
            let obj = {
              blockNumber: to_scan,
              contract_address: eventValues[0],
              caller: eventValues[1],
              from: eventValues[2],
              to: eventValues[3],
              amount: eventValues[4] ? eventValues[4] / 10 ** 12 : 0,
              time: eventValues[5],
            };
            let found = await RewardPoolManager.findOne(obj);
            if (!found) {
              await RewardPoolManager.create(obj);
              console.log("added RewardPoolManager", obj);
            }
          } else if (event_name == "UpdateTreasuryPoolAmount") {
            let obj = {
              blockNumber: to_scan,
              contract_address: eventValues[0],
              caller: eventValues[1],
              from: eventValues[2],
              to: eventValues[3],
              amount: eventValues[4] ? eventValues[4] / 10 ** 12 : 0,
              time: eventValues[5],
            };
            let found = await TreasuryPoolManager.findOne(obj);
            if (!found) {
              await TreasuryPoolManager.create(obj);
              console.log("added TreasuryPoolManager", obj);
            }
          } else if (event_name == "UpdateStakingPoolAmount") {
            let obj = {
              blockNumber: to_scan,
              contract_address: eventValues[0],
              caller: eventValues[1],
              from: eventValues[2],
              to: eventValues[3],
              amount: eventValues[4] ? eventValues[4] / 10 ** 12 : 0,
              time: eventValues[5],
            };
            let found = await StakingPoolManager.findOne(obj);
            if (!found) {
              await StakingPoolManager.create(obj);
              console.log("added StakingPoolManager", obj);
            }
          } else if (event_name == "UpdatePandoraPoolAmount") {
            let obj = {
              blockNumber: to_scan,
              contract_address: eventValues[0],
              caller: eventValues[1],
              from: eventValues[2],
              to: eventValues[3],
              amount: eventValues[4] ? eventValues[4] / 10 ** 12 : 0,
              time: eventValues[5],
            };
            let found = await PandoraPoolManager.findOne(obj);
            if (!found) {
              await PandoraPoolManager.create(obj);
              console.log("added PandoraPoolManager", obj);
            }
          } else if (event_name == "UpdatePlatformFeeAmount") {
            let obj = {
              blockNumber: to_scan,
              contract_address: eventValues[0],
              caller: eventValues[1],
              from: eventValues[2],
              to: eventValues[3],
              amount: eventValues[4] ? eventValues[4] / 10 ** 12 : 0,
              time: eventValues[5],
            };
            let found = await PlatformFeeManager.findOne(obj);
            if (!found) {
              await PlatformFeeManager.create(obj);
              console.log("added PlatformFeeManager", obj);
            }
          }

          //console.log(to_scan,contract_address,event_name,eventValues);
        }
      } catch (e) {
        //send_telegram_message("scanBlocks - " + e.message);
        console.log(e);
      }
    }
  });
};

mongoose.set("strictQuery", false);
connectDb().then(async () => {
  const provider = new WsProvider("wss://ws.test.azero.dev");
  api = new ApiPromise({
    provider,
    rpc: jsonrpc,
    types: {
      ContractsPsp34Id: {
        _enum: {
          U8: "u8",
          U16: "u16",
          U32: "u32",
          U64: "u64",
          U128: "u128",
          Bytes: "Vec<u8>",
        },
      },
    },
  });
  api.on("connected", () => {
    api.isReady.then((api) => {
      console.log("Testnet AZERO Connected");
    });
  });

  api.on("ready", async () => {
    console.log("Testnet AZERO Ready");
    global_vars.isScanning = false;

    abi_contract = new Abi(contract.CONTRACT_ABI);
    console.log("Contract ABI is ready");

    const unsubscribe = await api.rpc.chain.subscribeNewHeads((header) => {
      console.log(`Chain is at block: #${header.number}`);
      scanBlocks(parseInt(header.number));
    });
  });

  api.on("error", (err) => {
    console.log("error", err);
  });
});
