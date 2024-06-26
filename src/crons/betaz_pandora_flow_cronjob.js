require("dotenv").config();
const { WebSocketServer, WebSocket } = require("ws");
const PORT = process.env.WSS_PANDORA_PORT || 3011;
const wss = new WebSocketServer({ port: PORT });
let mongoose = require("mongoose");
let { ApiPromise, WsProvider } = require("@polkadot/api");
let { ContractPromise, Abi } = require("@polkadot/api-contract");
let jsonrpc = require("@polkadot/types/interfaces/jsonrpc");
const { ethers } = require("ethers");
// VRFV2CONSUMER
let { consumer_contract } = require("../contracts/pandora_random_contract.js");
let {
  setConsumerContract,
  getLastRequestId,
  getRequestStatus,
  requestRandomWords,
} = require("../contracts/pandora_random_contract_calls.js");
// pandora contract
let { pandora_contract } = require("../contracts/pandora_contract.js");
let {
  setPadoraPoolContract,
  finalize,
  updateIsLocked,
  getIsLocked,
  getLastSessionId,
  handle_find_winner,
  totalTicketsWin,
  getTotalWinAmount,
  addChainlinkRequestId,
  getChainlinkRequestIdBySessionId,
  getBetSession,
  getIdInSessionByRandomNumberAndIndex,
  getPlayerByNftId,
  getPlayerWinAmount,
} = require("../contracts/pandora_contract_calls.js");
let { delay } = require("../utils/utils.js");
let { contract } = require("../contracts/core_contract.js");
let {
  setBetazCoreContract,
  transferAndUpdateSessionPandorapool,
} = require("../contracts/core_contract_calls.js");

const dbConfig = require("../config/db.config.js");

/**Database config */
const db = require("../models/index.js");
const { global_vars, CONFIG_TYPE_NAME } = require("../utils/constant.js");
const { convertToUTCTime } = require("../utils/tools.js");
const cron = require("node-cron");
const { CRONJOB_ENABLE, CRONJOB_TIME } = require("../utils/constant.js");
const chainConfig = require("../config/chain.config.js");

const PandoraBetHistory = db.pandoraBetHistory;
const ChainLinkRequestHash = db.chainLinkRequestHash;

const DATABASE_HOST = dbConfig.DB_HOST;
const DATABASE_PORT = dbConfig.DB_PORT;
const DATABASE_NAME = dbConfig.DB_NAME;
const CONNECTION_STRING = `${dbConfig.DB_CONNECTOR}://${DATABASE_HOST}:${DATABASE_PORT}`;

/**Chain config */
const alephzero_socket = chainConfig.AZ_PROVIDER;
const eth_socket = chainConfig.ETH_PROVIDER;
const metamask_private_key = chainConfig.METAMASK_WALLET_PRIVATE_KEY;

/**Variable config */
// substrate api
let api = null;
// ethers api
let pandora_random_contract = null;
// is run transfer
const runTransferPandora = true;

/**Job */
const connectDb = () => {
  return mongoose.connect(CONNECTION_STRING, {
    dbName: DATABASE_NAME,
    useNewUrlParser: true,
  });
};

const runJob = async () => {
  // run
  console.log({
    Status: "Job Started",
  });

  try {
    /** INIT VARIABLE */
    let players = [];
    let txHash = null;
    let chainLinkRequestHashObj = {};
    chainLinkRequestHashObj.contractAddress =
      consumer_contract.CONTRACT_ADDRESS;
    chainLinkRequestHashObj.networkProvider = chainConfig.ETH_PROVIDER;

    let session_id = await getLastSessionId();
    session_id = parseInt(session_id);
    let total_win_amounts = await getTotalWinAmount();
    console.log({ session_id, total_win_amounts });

    /** INIT PADORA RANDOM CONTRACT */
    const ethers_provider = new ethers.WebSocketProvider(eth_socket);
    const ethers_signer = new ethers.Wallet(
      metamask_private_key,
      ethers_provider
    );
    pandora_random_contract = new ethers.Contract(
      consumer_contract.CONTRACT_ADDRESS,
      consumer_contract.CONTRACT_ABI.abi,
      ethers_signer
    );
    console.log("Pandora_random_contract Contract is ready");

    /** STEP 1 */
    console.log({
      "Step 1": "Locked padora pool contract",
    });
    let is_locked = await getIsLocked();
    if (!is_locked) {
      await updateIsLocked(true).catch((error) => {
        console.error("ErrorChangeState:", error);
        console.log("errorChangeState", error);
        return;
      });
    }

    /** STEP 2 */
    console.log({ "Step 2": "Find randomnumber with chainlink" });
    // Get last request id
    let lastRequestId = await pandora_random_contract.lastRequestId();
    console.log({ lastRequestId });

    // Handle request random
    let seconds = 0;
    await pandora_random_contract
      .requestRandomWords(session_id)
      .then((tx) => {
        console.log("Transaction hash:", tx.hash);
        txHash = tx.hash;
        chainLinkRequestHashObj.txHash = tx.hash;
      })
      .catch((error) => {
        console.error("Transaction failed:", error);
      });
    let check_id = false;
    while (!check_id) {
      try {
        const newRequestId = await pandora_random_contract.lastRequestId();
        if (newRequestId !== lastRequestId) {
          check_id = true;
          lastRequestId = newRequestId;
          chainLinkRequestHashObj.requestId = lastRequestId;
          let found = await ChainLinkRequestHash.find({
            requestId: lastRequestId,
          });
          if (!found || found?.length === 0)
            await ChainLinkRequestHash.create(chainLinkRequestHashObj)
              .then(() => {
                console.log("Success added chainlink request hash");
              })
              .catch((err) => console.log({ err }));
        } else {
          await delay(1000);
          seconds += 1;
          console.log({ seconds });
        }
      } catch (err) {
        console.log({ errorGetId: err });
        break;
      }
    }

    // Find random number
    let random_number = false;
    while (!random_number) {
      try {
        const requestStatus = await pandora_random_contract.getRequestStatus(
          lastRequestId
        );
        if (requestStatus[2].length === 0) {
          await delay(1000);
          seconds += 1;
          console.log({ seconds });
        } else {
          random_number = parseInt(requestStatus[2][0]);
          console.log("Find random number successfully");
          console.log({ random_number });
          session_id = parseInt(requestStatus[1]);
          console.log(
            `Get session id: ${session_id} by request id: ${lastRequestId} in chainlink contract`
          );
        }
      } catch (err) {
        console.log({ errorGetRandomNumber: err });
        break;
      }
    }

    /** STEP 3 */
    console.log({
      "Step 3": `Check session ${session_id} is finalized`,
    });
    let session = await getBetSession(session_id);
    console.log({ session });
    if (session.status !== "Finalized") {
      console.log("Session not Finalized");
      // transfer pandora
      console.log("Transfer pandora: ", runTransferPandora);
      if (runTransferPandora) {
        await transferAndUpdateSessionPandorapool(session_id).catch((error) => {
          console.log("ErrorTransfer:", error);
          return;
        });
      }
    }
    session = await getBetSession(session_id);
    if (session.status !== "Finalized") return;

    /** STEP 4 */
    console.log({ "Step 4": "Add request id to bet session" });
    let bet_session = await getBetSession(session_id);
    console.log({ bet_session });
    if (bet_session.status == "Finalized") {
      console.log(
        `Add request id ${lastRequestId} to session ${session_id} in pandora contract`
      );
      const request_id = lastRequestId?.toString();
      console.log({ request_id });
      const result = await addChainlinkRequestId(
        Number(session_id),
        request_id
      );

      // get request id by session id
      let requestId = await getChainlinkRequestIdBySessionId(session_id);
      console.log({ requestId });
      // get random number by request id
      const requestStatus = await pandora_random_contract.getRequestStatus(
        requestId
      );
      random_number = parseInt(requestStatus[2][0]);
      console.log({ session_id, requestId, random_number });
    } else console.log(`Session ${session_id} not Finalized`);

    /** STEP 5 */
    console.log({
      "Step 5": "Handle finalize",
    });

    bet_session = await getBetSession(session_id);
    console.log({ bet_session });
    // random_number = 123; // test
    if (bet_session.status == "Finalized") {
      await finalize(session_id, random_number).catch((error) => {
        console.error("ErrorFinalizeWinner:", error);
        console.log("errorFinalizeWinner", error);
      });
    } else console.log(`Session ${session_id} not Finalized`);

    // find winner
    console.log({ step4: "Find winner" });

    let totalTicketWin = await totalTicketsWin(session_id, random_number);
    console.log({ totalTicketWin });

    bet_session = await getBetSession(session_id);
    console.log({ bet_session });
    if (bet_session.status == "Completed") {
      for (let i = 0; i < parseInt(totalTicketWin); i++) {
        await handle_find_winner(session_id, i);

        const token_id = await getIdInSessionByRandomNumberAndIndex(
          session_id,
          random_number,
          i
        );

        if (token_id) {
          const player = await getPlayerByNftId(token_id);
          let obj = {
            playerWin: player,
            ticketIdWin: token_id?.U64,
          };
          console.log({ obj });
          players.push(obj);
        }
      }
    } else console.log(`Session ${session_id} not Completed`);

    /** STEP 6 */
    console.log({ "Step 6": "Open padora pool contract" });
    is_locked = await getIsLocked();
    if (is_locked) {
      await updateIsLocked(false).catch((error) => {
        console.error("ErrorChangeState:", error);
        console.log("errorChangeState", error);
      });
    }

    /** STEP 7 */
    console.log({ "Step 7": "Handle data" });
    // show player win
    // const win_player = Array.from(new Set(players));
    const winData = players.reduce((acc, current) => {
      const existingSession = acc.find(
        (item) => item.playerWin === current.playerWin
      );
      if (existingSession) {
        existingSession.ticketIdWin.push(current.ticketIdWin);
        existingSession.totalTicketWin++;
      } else {
        acc.push({
          sessionId: session_id,
          chainlinkRequestId: lastRequestId,
          betNumberWin: random_number,
          playerWin: current.playerWin,
          ticketIdWin: [current.ticketIdWin],
          totalTicketWin: 1,
          txHash: txHash,
        });
      }
      return acc;
    }, []);
    console.log({ winData });
    if (winData.length > 0) {
      const result = [];

      for (const item of winData) {
        const rewardAmount = await getPlayerWinAmount(
          item.sessionId,
          item.playerWin
        );
        const newItem = { ...item, rewardAmount: rewardAmount };
        result.push(newItem);
      }

      console.log({ result });

      await PandoraBetHistory.insertMany(result)
        .then(() => {
          console.log("Success added");
        })
        .catch((err) => console.log({ err }));
    } else {
      let obj = {
        ticketIdWin: ["No winning tickets"],
        sessionId: session_id,
        chainlinkRequestId: lastRequestId,
        betNumberWin: random_number,
        rewardAmount: 0,
        totalTicketWin: 0,
        playerWin: "No winning player",
        txHash: txHash,
      };

      let found = await PandoraBetHistory.find(obj);
      if (found.length === 0) {
        await PandoraBetHistory.create(obj)
          .then(() => {
            console.log("Success added");
          })
          .catch((err) => console.log({ err }));
      }
    }

    sendToAll("Job Competed", winData);
  } catch (error) {
    console.error("Error:", error);
    console.log("Error:", error);
  }

  console.log({
    Status: "Job ended",
  });
};

mongoose.set("strictQuery", false);
connectDb().then(async () => {
  const provider = new WsProvider(alephzero_socket);
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

    setPadoraPoolContract(api, pandora_contract);
    console.log("Pandora pool Contract is ready");

    setBetazCoreContract(api, contract);
    console.log("Core Contract is ready");

    // await runJob();
    if (CRONJOB_ENABLE.AZ_PANDORA_FLOW_COLLECTOR) {
      cron.schedule(
        CRONJOB_TIME.AZ_PANDORA_FLOW_COLLECTOR,
        async () => await runJob(),
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

wss.on("connection", function connection(ws) {
  ws.on("error", console.error);
  ws.on("message", function message(data) {
    console.log("received: %s", data);
  });
  ws.on("close", () => {
    console.log("WebSocket pandora client disconnected");
  });
});

wss.on("listening", () => {
  console.log(`WebSocket server listening on ws://localhost:${PORT}`);
});

// wss send messages
const sendToAll = (event, message) => {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      console.log("Send message from server:", message);
      client.send(JSON.stringify({ event: event, data: message }));
    }
  });
};
