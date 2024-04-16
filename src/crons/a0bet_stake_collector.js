let mongoose = require("mongoose");
let { ApiPromise, WsProvider } = require("@polkadot/api");
let { ContractPromise, Abi } = require("@polkadot/api-contract");
let jsonrpc = require("@polkadot/types/interfaces/jsonrpc");
let { staking_contract } = require("../contracts/staking_contract.js");

require("dotenv").config();
const dbConfig = require("../config/db.config.js");
const db = require("../models/index.js");
const { STAKING_HISTORY_STATUS } = require("../utils/constant.js");
const ScannedBlocks = db.scannedBlocks;
const HistoryStaking = db.historyStaking;

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
                if (contract_address == staking_contract.CONTRACT_ADDRESS) {
                    console.log("Event from A0BET Contract...");
                    //console.log(phase.toString() + ' : ' + section + '.' + method + ' ' + data.toString());
                    const decodedEvent = abi_contract.decodeEvent(bytes);
                    let event_name = decodedEvent.event.identifier;
                    const eventValues = [];

                    for (let i = 0; i < decodedEvent.args.length; i++) {
                        const value = decodedEvent.args[i];
                        eventValues.push(value.toString());
                    }

                    if (event_name == "StakeEvent") {
                        let obj = {
                            caller: eventValues[2],
                            amount: eventValues[3] ? eventValues[3] / 10 ** 12 : 0,
                            currentTime: new Date().getTime(),
                            status: STAKING_HISTORY_STATUS.STAKE,
                        };
                        let found = await HistoryStaking.findOne(obj);
                        if (!found) {
                            await HistoryStaking.create(obj);
                            console.log("added historyStaking", obj);
                        }
                    } else if (event_name == "RequestUnstakeEvent") {
                        let obj = {
                            caller: eventValues[2],
                            amount: eventValues[3] ? eventValues[3] / 10 ** 12 : 0,
                            currentTime: new Date().getTime(),
                            status: STAKING_HISTORY_STATUS.REQUEST_UNSTAKE,
                        };
                        let found = await HistoryStaking.findOne(obj);
                        if (!found) {
                            await HistoryStaking.create(obj);
                            console.log("added historyStaking", obj);
                        }
                    } else if (event_name == "CancelRequestUnstakeEvent") {
                        let obj = {
                            caller: eventValues[2],
                            amount: eventValues[3] ? eventValues[3] / 10 ** 12 : 0,
                            currentTime: new Date().getTime(),
                            status: STAKING_HISTORY_STATUS.CANCEL_REQUEST_UNSTAKE,
                        };
                        let found = await HistoryStaking.findOne(obj);
                        if (!found) {
                            await HistoryStaking.create(obj);
                            console.log("added historyStaking", obj);
                        }
                    } else if (event_name == "UnstakeEvent") {
                        let obj = {
                            caller: eventValues[2],
                            amount: eventValues[3] ? eventValues[3] / 10 ** 12 : 0,
                            currentTime: new Date().getTime(),
                            status: STAKING_HISTORY_STATUS.UNSTAKE,
                        };
                        let found = await HistoryStaking.findOne(obj);
                        if (!found) {
                            await HistoryStaking.create(obj);
                            console.log("added historyStaking", obj);
                        }
                    }
                }
            } catch (e) {
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

        abi_contract = new Abi(staking_contract.CONTRACT_ABI);
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
