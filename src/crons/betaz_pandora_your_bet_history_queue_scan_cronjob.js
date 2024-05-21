require("dotenv").config();
let mongoose = require("mongoose");
let { ApiPromise, WsProvider } = require("@polkadot/api");
let { ContractPromise, Abi } = require("@polkadot/api-contract");
let jsonrpc = require("@polkadot/types/interfaces/jsonrpc");
let { pandora_psp34_contract } = require("../contracts/pandora_psp34.js");
let {
  setPadoraPsp34Contract,
  geNftOwner,
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
const PandoraNft = db.pandoraNft;

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

const check_NFT_queue = async () => {
  if (global_vars.is_check_NFT_queue_all) return;
  global_vars.is_check_NFT_queue_all = true;
  try {
    console.log(
      `${
        CONFIG_TYPE_NAME.AZ_PROCESSING_ALL_QUEUE_NFT
      } - Start find and update status of ${
        CONFIG_QUEUE_SCAN.MAX_NFT_QUEUE_ALL_IN_PROCESSING
      } NFTs in check_NFT_queue_all at ${convertToUTCTime(new Date())}`
    );

    let queue_data = await PandoraNFTQueue.find({
      isProcessing: false,
    }).limit(CONFIG_QUEUE_SCAN.MAX_NFT_QUEUE_ALL_IN_PROCESSING);

    if (!queue_data || queue_data.length === 0) {
      return;
    }

    for (const queueData of queue_data) {
      try {
        await PandoraNFTQueue.findOneAndUpdate(
          { ticketId: queueData.ticketId },
          {
            isProcessing: true,
          }
        );
      } catch (e) {
        console.log(
          `${CONFIG_TYPE_NAME.AZ_PROCESSING_ALL_QUEUE_NFT} - WARNING: ${e.message}`
        );
      }
    }
    console.log(
      `${
        CONFIG_TYPE_NAME.AZ_PROCESSING_ALL_QUEUE_NFT
      } - Stop find and update status of ${
        queue_data.length
      } NFTs in check_NFT_queue_all at ${convertToUTCTime(new Date())}`
    );

    let records_length = queue_data.length;
    console.log(
      `${
        CONFIG_TYPE_NAME.AZ_PROCESSING_ALL_QUEUE_NFT
      } - Start processing ${records_length} NFTs in check_NFT_queue_all at ${convertToUTCTime(
        new Date()
      )}`
    );

    for (const queueData of queue_data) {
      let ticketId = queueData.ticketId;
      if (!ticketId) continue;
      let found_NFT = await PandoraYourBetHistory.findOne({
        ticketId: ticketId,
      });
      if (!found_NFT) {
        console.log(
          `${CONFIG_TYPE_NAME.AZ_PROCESSING_ALL_QUEUE_NFT} - CREATE DATA IN PandoraYourBetHistory DB`
        );
        const playerUsedTicket = await getPlayerByNftId(ticketId);
        const nftIdInfo = await getNftInfo(ticketId);
        const obj = {
          player: playerUsedTicket,
          sessionId: nftIdInfo.sessionId,
          ticketId: queueData.ticketId,
          betNumber: Number(nftIdInfo.betNumber?.replace(/\,/g, "")),
          timeStamp: Number(nftIdInfo.time?.replace(/\,/g, "")),
        };
        let found = await PandoraYourBetHistory.findOne({ticketId: obj.ticketId});
        if (!found) {
          await PandoraYourBetHistory.create(obj);
        }
      }

      // update nft
      const filter = { nftId: ticketId };
      const options = {};
      found_NFT = await PandoraNft.findOne(filter);
      if (!found_NFT) {
        const [nftOwner, nftInfo] = await Promise.all([
          getPlayerByNftId(ticketId),
          getNftInfo(ticketId),
        ]);
        console.log({ nftOwner, nftInfo });
        if (nftOwner && nftInfo) {
          options.nftId = ticketId;
          options.owner = nftOwner;
          options.isUsed = nftInfo?.used;
          options.sessionId = nftInfo?.sessionId;
          options.betNumber = Number(nftInfo.betNumber?.replace(/\,/g, ""));
          options.time = Number(nftInfo.time?.replace(/\,/g, ""));
          await PandoraNft.create(options)
            .then((data) => {
              console.log(`added Nft successfully`);
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          const owner = await geNftOwner(ticketId);
          options.nftId = ticketId;
          options.owner = owner;
          options.isUsed = false;
          if (owner) {
            await PandoraNft.create(options)
              .then((data) => {
                console.log(`added Nft successfully`);
              })
              .catch((err) => {
                console.log(err);
              });
          }
        }
      } else {
        const [nftOwner, nftInfo] = await Promise.all([
          getPlayerByNftId(ticketId),
          getNftInfo(ticketId),
        ]);
        if (nftOwner && nftInfo) {
          options.owner = nftOwner;
          options.isUsed = nftInfo?.used;
          options.sessionId = nftInfo?.sessionId;
          options.betNumber = Number(nftInfo.betNumber?.replace(/\,/g, ""));
          options.time = Number(nftInfo.time?.replace(/\,/g, ""));
          console.log({ found_NFT, options });
          if (
            options.owner !== found_NFT.owner ||
            options.isUsed !== found_NFT.isUsed
          ) {
            await PandoraNft.findOneAndUpdate(filter, options)
              .then((data) => {
                console.log(`updated Nft successfully`);
              })
              .catch((err) => {
                console.log(err);
              });
          }
        } else {
          const owner = await geNftOwner(ticketId);
          options.owner = owner;
          options.isUsed = false;
          if (owner) {
            if (
              options.owner !== found_NFT.owner ||
              options.isUsed !== found_NFT.isUsed
            ) {
              await PandoraNft.findOneAndUpdate(filter, options)
                .then((data) => {
                  console.log(`updated Nft successfully`);
                })
                .catch((err) => {
                  console.log(err);
                });
            }
          }
        }
      }

      await PandoraNFTQueue.deleteMany({
        ticketId: ticketId,
      });
      continue;
    }
  } catch (error) {
    console.log("check_NFT_queue_all - " + error.message);
    global_vars.is_check_NFT_queue_all = false;
  }
  global_vars.is_check_NFT_queue_all = false;
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

    if (CRONJOB_ENABLE.AZ_PANDORA_NFT_QUEUE_COLLECTOR) {
      cron.schedule(
        CRONJOB_TIME.EACH_7_MINUTES,
        async () => {
          await check_NFT_queue();
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
