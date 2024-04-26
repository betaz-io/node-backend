require("dotenv").config();
let mongoose = require("mongoose");
let { ApiPromise, WsProvider } = require("@polkadot/api");
let { ContractPromise, Abi } = require("@polkadot/api-contract");
let jsonrpc = require("@polkadot/types/interfaces/jsonrpc");
let { pandora_psp34_contract } = require("../contracts/pandora_psp34.js");
let {
  setPadoraPsp34Contract,
  getTotalNFT,
} = require("../contracts/pandora_psp34_calls.js");
let { pandora_contract } = require("../contracts/pandora_contract.js");
let {
  setPadoraPoolContract,
  getPlayerByNftId,
  getNftInfo,
} = require("../contracts/pandora_contract_calls.js");
const dbConfig = require("../config/db.config.js");
const db = require("../models/index.js");
const {
  global_vars,
  CONFIG_TYPE_NAME,
  CONFIG_QUEUE_SCAN,
} = require("../utils/constant.js");
const { convertToUTCTime } = require("../utils/tools.js");
const cron = require("node-cron");
const { CRONJOB_ENABLE, CRONJOB_TIME } = require("../utils/constant.js");

const PandoraYourBetHistory = db.pandoraYourBetHistory;
const PandoraNFTQueue = db.pandoraNFTQueue;

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

var api = null;

const scan_all_NFT = async () => {
  if (global_vars.is_scan_NFT_all) return;
  global_vars.is_scan_NFT_all = true;
  try {
    const total_ticket = await getTotalNFT();
    const total = Number(total_ticket);
    console.log({ total });
    if (!total || total === 0) {
      return;
    }

    console.log(
      `${
        CONFIG_TYPE_NAME.AZ_PROCESSING_ALL_QUEUE_NFT
      } - Start processing ${total} NFTs in pandora contract at ${convertToUTCTime(
        new Date()
      )}`
    );

    for (let i = 0; i <= total; i++) {
      const ticketId = i;
      console.log(`Scan nft ${ticketId}`)
      const playerUsedTicket = await getPlayerByNftId(ticketId);
      if (!playerUsedTicket) continue;
      let found_NFT = await PandoraYourBetHistory.findOne({
        ticketId: ticketId,
      });
      if (!found_NFT) {
        console.log(
          `${CONFIG_TYPE_NAME.AZ_PROCESSING_ALL_NFT} - CREATE DATA IN PandoraYourBetHistory DB`
        );
        const nftIdInfo = await getNftInfo(ticketId);
        const obj = {
          player: playerUsedTicket,
          sessionId: nftIdInfo.sessionId,
          ticketId: ticketId,
          betNumber: Number(nftIdInfo.betNumber?.replace(/\,/g, "")),
          timeStamp: Number(nftIdInfo.time?.replace(/\,/g, "")),
        };
        let found = await PandoraYourBetHistory.findOne(obj);
        if (!found) {
          await PandoraYourBetHistory.create(obj);
        }
        continue;
      }
      continue;
    }
  } catch (error) {
    console.log("scan_NFT_all - " + error.message);
    global_vars.is_scan_NFT_all = false;
  }
  global_vars.is_scan_NFT_all = false;
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

    setPadoraPsp34Contract(api, pandora_psp34_contract);
    console.log("Pandora psp34 Contract is ready");

    setPadoraPoolContract(api, pandora_contract);
    console.log("Pandora pool Contract is ready");

    if (CRONJOB_ENABLE.AZ_PANDORA_NFT_SCAN_ALL_COLLECTOR) {
      cron.schedule(
        CRONJOB_TIME.EACH_DAY,
        async () => {
          await scan_all_NFT();
        },
        {
          scheduled: true,
          timezone: "Asia/Ho_Chi_Minh",
        }
      );
    }
  });

  api.on("error", (err) => {
    console.log("error", err);
  });
});
