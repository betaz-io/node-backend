let { Keyring, ApiPromise, WsProvider } = require("@polkadot/api");
let { ContractPromise, Abi } = require("@polkadot/api-contract");
const { jsonrpc } = require("@polkadot/types/interfaces/jsonrpc");

// ETH
const { ethers, parseUnits } = require("ethers");

// core contract
let { contract } = require("./contracts/core_contract");
let {
  setBetazCoreContract,
  transferAndUpdateSessionPandorapool,
} = require("./contracts/core_contract_calls");

// DIA random contract
let { bet_random_contract } = require("./contracts/bet_random_contract.js");
let {
  setBetRandomContract,
  getRandomNumberForRound,
} = require("./contracts/bet_random_contract_calls.js");

// staking contract
let { staking_contract } = require("./contracts/staking_contract.js");
let {
  setStakingContract,
  getTotalPendingUnstakedByAccount,
  getRequestUnstakeTime,
  getPendingUnstakingAmount,
  getLimitUnstakeTime,
} = require("./contracts/staking_contract_calls.js");

// betaz contract
let { betaz_token_contract } = require("./contracts/betaz_token_contract.js");
let {
  setBetazTokenContract,
} = require("./contracts/betaz_token_contract_calls.js");

// VRFV2CONSUMER
let { consumer_contract } = require("./contracts/pandora_random_contract.js");
let {
  setConsumerContract,
  getLastRequestId,
  getRequestStatus,
  requestRandomWords,
} = require("./contracts/pandora_random_contract_calls.js");

// pandora contract
let { pandora_contract } = require("./contracts/pandora_contract.js");
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
} = require("./contracts/pandora_contract_calls.js");

let {
  getEstimatedGas,
  delay,
  convertTimeStampToNumber,
} = require("./utils/utils.js");

require("dotenv").config();

/****************** Connect smartnet BETAZ ***********************/
let socket = process.env.PROVIDER_URL;
const provider = new WsProvider(socket);
const api = new ApiPromise({ provider, rpc: jsonrpc });
let betaz_core_contract;

// eth
const eth_socket = process.env.ETH_PROVIDER_URL;
const eth_provider = new ethers.WebSocketProvider(eth_socket);
try {
  // connect to alephzero
  api.on("connected", () => {
    api.isReady.then(() => {
      console.log("Smartnet BETAZ Connected");
    });
  });

  api.on("ready", () => {
    console.log("Smartnet BETAZ Ready");

    const core_contract = new ContractPromise(
      api,
      contract.CONTRACT_ABI,
      contract.CONTRACT_ADDRESS
    );
    setBetazCoreContract(api, contract);
    console.log("core Contract is ready");
    betaz_core_contract = core_contract;

    setBetRandomContract(api, bet_random_contract);
    console.log("DIA Contract is ready");

    setStakingContract(api, staking_contract);
    console.log("Staking Contract is ready");

    setBetazTokenContract(api, betaz_token_contract);
    console.log("Betaz Contract is ready");

    setPadoraPoolContract(api, pandora_contract);
    console.log("Pandora pool Contract is ready");

    setConsumerContract(consumer_contract, eth_provider);
    console.log("Consumer Contract is ready");
  });

  api.on("error", (err) => {
    console.log("error", err);
  });

  // connect to eth testnet
} catch (err) {
  console.log(err);
}
/****************** End connect smartnet BETAZ ***********************/

let mongoose = require("mongoose");
let database = require("./database.js");

const cors = require("cors");
const bodyParser = require("body-parser");
const express = require("express");
const nodemailer = require("nodemailer");
const cron = require("node-cron");
const helmet = require("helmet");
let MobileDetect = require("mobile-detect");

let fs = require("fs");
let https = require("https");
let privateKey = fs.readFileSync("./a0bet_net.key", "utf8");
let certificate = fs.readFileSync("./a0bet_net.crt", "utf8");
let credentials = { key: privateKey, cert: certificate };
const rateLimit = require("express-rate-limit");
const { CRONJOB_ENABLE, CRONJOB_TIME } = require("./utils/constant.js");
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minutes
  max: 1000, // Limit each IP to 60 requests per `window` (here, per 1 minute)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});
const app = express();

// trust proxy
app.set("trust proxy", ["loopback", "linklocal", "uniquelocal"]);

// middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Apply the rate limiting middleware to all requests
app.use(limiter);

// router
app.get("/", (req, res) => {
  res.send("Wellcome BET AZ!");
});

app.get("/statistic", async (req, res) => {
  try {
    let winData = await database.WinEvent.find();
    let loseData = await database.LoseEvent.find();
    let result = winData.concat(loseData);

    // total player
    const playersArray = result.map((record) => record.player);
    const uniquePlayersSet = new Set(playersArray);
    const uniquePlayersArray = Array.from(uniquePlayersSet);
    const totalPlayers = uniquePlayersArray.length;

    // total reward
    const totalBetAmount = result.reduce(
      (total, record) => total + record.bet_amount,
      0
    );

    // total win amount
    const totalWinAmount = winData.reduce(
      (total, record) => total + record.win_amount,
      0
    );

    const winRate = (winData.length / result.length) * 100;
    const loseRate = 100 - winRate;

    // total bet amount
    const totalRewardAmount = result.reduce(
      (total, record) => total + record.reward_amount,
      0
    );

    const statistics = {
      totalPlayers,
      totalBetAmount,
      totalRewardAmount,
      totalWinAmount,
      winRate,
      loseRate,
    };

    // console.log(statistics);
    res.json(statistics);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/getEventsByPlayer", async (req, res) => {
  if (!req.body) return res.send({ status: "FAILED", message: "No Input" });
  let player = req.body.player;
  let limit = req.body.limit;
  let offset = req.body.offset;
  let sort = req.body.sort;
  if (!limit) limit = 15;
  if (!offset) offset = 0;
  if (!sort) sort = -1;
  if (!player) {
    return res.send({ status: "FAILED", message: "Invalid Address" });
  }

  let winData = await database.WinEvent.find({ player: player });
  let loseData = await database.LoseEvent.find({ player: player });

  var result = winData.concat(loseData);
  let total = result.length;

  // sort
  result.sort(
    (a, b) => (parseInt(a.blockNumber) - parseInt(b.blockNumber)) * sort
  );

  // pagination
  result = result.slice(parseInt(offset), parseInt(offset) + parseInt(limit));

  // format result
  const dataTable = result.map((result) => ({
    player: result.player,
    blockNumber: result.blockNumber,
    betAmount: result.bet_amount,
    type: result.is_over,
    prediction: result.bet_number,
    randomNumber: result.random_number,
    wonAmount: result?.win_amount - result.bet_amount || 0,
    rewardAmount: result.reward_amount,
    oracleRound: result.oracle_round,
  }));

  return res.send({ status: "OK", ret: dataTable, total: total });
});

app.post("/getEvents", async (req, res) => {
  if (!req.body) return res.send({ status: "FAILED", message: "No Input" });
  let limit = req.body.limit;
  let offset = req.body.offset;
  let sort = req.body.sort;
  if (!limit) limit = 15;
  if (!offset) offset = 0;
  if (!sort) sort = -1;

  let winData = await database.WinEvent.find();
  let loseData = await database.LoseEvent.find();

  var result = winData.concat(loseData);
  let total = result.length;
  //console.log(player,result);

  // sort
  result.sort(
    (a, b) => (parseInt(a.blockNumber) - parseInt(b.blockNumber)) * sort
  );

  // pagination
  result = result.slice(parseInt(offset), parseInt(offset) + parseInt(limit));

  // format result
  const dataTable = result.map((result) => ({
    player: result.player,
    blockNumber: result.blockNumber,
    betAmount: result.bet_amount,
    type: result.is_over,
    prediction: result.bet_number,
    randomNumber: result.random_number,
    wonAmount: result?.win_amount - result.bet_amount || 0,
    rewardAmount: result.reward_amount,
    oracleRound: result.oracle_round,
  }));

  return res.send({ status: "OK", ret: dataTable, total: total });
});

app.post("/getRareWins", async (req, res) => {
  if (!req.body) return res.send({ status: "FAILED", message: "No Input" });
  let limit = req.body.limit;
  let offset = req.body.offset;
  let sort = req.body.sort;
  if (!limit) limit = 15;
  if (!offset) offset = 0;
  if (!sort) sort = -1;

  let data = await database.WinEvent.find({
    $where: "this.win_amount > 10 * this.bet_amount",
  });

  let total = data.length;

  // sort
  data.sort(
    (a, b) => (parseInt(a.blockNumber) - parseInt(b.blockNumber)) * sort
  );

  // pagination
  data = data.slice(parseInt(offset), parseInt(offset) + parseInt(limit));

  // format result
  const dataTable = data.map((data) => ({
    player: data.player,
    blockNumber: data.blockNumber,
    betAmount: data.bet_amount,
    type: data.is_over,
    prediction: data.bet_number,
    randomNumber: data.random_number,
    wonAmount: data?.win_amount - data.bet_amount || 0,
    rewardAmount: data.reward_amount,
    oracleRound: data.oracle_round,
  }));

  return res.send({ status: "OK", ret: dataTable, total: total });
});

// finalize
app.post("/finalize", async (req, res) => {
  let { player, oracleRound } = req.body;

  if (!betaz_core_contract || !player) {
    return res.status(400).json({ error: "Invalid request" });
  }

  let numberForRound = false;
  while (!numberForRound) {
    try {
      numberForRound = await getRandomNumberForRound(
        oracleRound.replaceAll(",", "")
      );
      await delay(1000);
    } catch (err) {
      console.log({ errorGetRandomValueForRound: err });
      break;
    }
  }

  const randomNumber = numberForRound;
  console.log({
    player,
    randomNumber,
  });
  // handle finalize
  try {
    let gasLimit;
    const value = 0;

    const keyring = new Keyring({ type: "sr25519" });
    const PHRASE = process.env.PHRASE;
    const keypair = keyring.createFromUri(PHRASE);
    let unsubscribe;
    gasLimit = await getEstimatedGas(
      keypair.address,
      betaz_core_contract,
      value,
      "finalize",
      player,
      { u32: randomNumber }
    );

    await betaz_core_contract.tx
      .finalize({ gasLimit, value }, player, { u32: randomNumber })
      .signAndSend(keypair, async ({ status, events, txHash }) => {
        if (status.isInBlock || status.isFinalized) {
          events?.forEach(
            async ({ event: { data, method, section }, phase }) => {
              if (section === "contracts" && method === "ContractEmitted") {
                const [accId, bytes] = data.map((data, _) => data).slice(0, 2);

                const contract_address = accId.toString();

                if (contract_address === contract.CONTRACT_ADDRESS) {
                  const abi_contract = new Abi(contract.CONTRACT_ABI);

                  const decodedEvent = abi_contract.decodeEvent(bytes);

                  let event_name = decodedEvent.event.identifier;

                  if (event_name === "WinEvent" || event_name === "LoseEvent") {
                    const eventValues = [];
                    if (status.isFinalized) {
                      console.log(`player ${player} finalized`);
                      const blockHash = status.asFinalized;
                      const signedBlock = await api.rpc.chain.getBlock(
                        blockHash
                      );
                      const blockNumber = signedBlock
                        .toHuman()
                        .block.header.number.split(",")
                        .join("");

                      for (let i = 0; i < decodedEvent.args.length; i++) {
                        const value = decodedEvent.args[i];
                        eventValues.push(value.toString());
                      }

                      if (event_name === "LoseEvent") {
                        let obj = {
                          blockNumber: blockNumber,
                          player: eventValues[0],
                          is_over: eventValues[1] == 1 ? true : false,
                          random_number: eventValues[2],
                          bet_number: eventValues[3],
                          bet_amount: eventValues[4]
                            ? eventValues[4] / 10 ** 12
                            : 0,
                          reward_amount: eventValues[5] / 10 ** 12,
                          oracle_round: eventValues[6],
                        };

                        let found = await database.LoseEvent.findOne(obj);
                        if (!found) {
                          await database.LoseEvent.create(obj);
                          // console.log("added LoseEvent", obj);
                        }

                        return res.send({
                          status: "OK",
                          ret: {
                            is_win: false,
                            random_number: obj.random_number,
                            bet_amount: obj.bet_amount,
                            player: obj.player,
                            bet_number: obj.bet_number,
                            is_over: obj.is_over,
                            oracle_round: obj.oracle_round,
                          },
                        });
                      } else if (event_name === "WinEvent") {
                        let obj = {
                          blockNumber: blockNumber,
                          player: eventValues[0],
                          is_over: eventValues[1] == 1 ? true : false,
                          random_number: eventValues[2],
                          bet_number: eventValues[3],
                          bet_amount: eventValues[4]
                            ? eventValues[4] / 10 ** 12
                            : 0,
                          win_amount: eventValues[5]
                            ? eventValues[5] / 10 ** 12
                            : 0,
                          reward_amount: eventValues[6] / 10 ** 12,
                          oracle_round: eventValues[7],
                        };
                        let found = await database.WinEvent.findOne(obj);
                        if (!found) {
                          await database.WinEvent.create(obj);
                          // console.log("added WinEvent", obj);
                        }

                        return res.send({
                          status: "OK",
                          ret: {
                            is_win: true,
                            random_number: obj.random_number,
                            bet_amount: obj.bet_amount,
                            win_amount: obj.win_amount,
                            player: obj.player,
                            bet_number: obj.bet_number,
                            is_over: obj.is_over,
                            oracle_round: obj.oracle_round,
                          },
                        });
                      }
                    }
                  }
                }
              }
            }
          );
        }
      })
      .then((unsub) => (unsubscribe = unsub))
      .catch((error) => {
        console.error("ErrorWhenFinalize:", error);
        console.log("errorWhenFinalize", error);
        return res
          .status(500)
          .json({ error: "An error occurred when finalize" });
      });
  } catch (error) {
    console.error("ErrorFinalize:", error);
    console.log("errorFinalize", error);
    return res.status(500).json({ error: "An error occurred finalize" });
  }
});

// add pending unstake
app.post("/updatePendingUnstake", async (req, res) => {
  if (!req.body) return res.send({ status: "FAILED", message: "No Input" });
  const { caller } = req.body;

  let limitTime = await getLimitUnstakeTime();
  let total = await getTotalPendingUnstakedByAccount(caller);
  let pendingUnstakeList = [];

  await database.PendingUnstake.deleteMany({ caller });

  for (let i = 0; i < parseInt(total); i++) {
    let [amount, time] = await Promise.all([
      getPendingUnstakingAmount(caller, i),
      getRequestUnstakeTime(caller, i),
    ]);

    const pendingUnstakeInfo = {};

    pendingUnstakeInfo.caller = caller;
    pendingUnstakeInfo.callerIndex = i;
    pendingUnstakeInfo.amount = amount.replace(/\,/g, "") / 10 ** 12;
    pendingUnstakeInfo.time =
      convertTimeStampToNumber(time) + convertTimeStampToNumber(limitTime);

    pendingUnstakeList.push(pendingUnstakeInfo);
  }

  // console.log({ pendingUnstakeList });

  await database.PendingUnstake.insertMany(pendingUnstakeList)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot updatePendingUnstake. Maybe data was not found!`,
        });
      } else {
        res.send({
          message: "updated successfully!",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        message: "Could not update",
      });
    });
});

// get pending unstake
app.post("/getPendingUnstake", async (req, res) => {
  if (!req.body) return res.send({ status: "FAILED", message: "No Input" });
  let { caller, limit, offset, status } = req.body;
  if (!limit) limit = 15;
  if (!offset) offset = 0;
  if (!status) status = 0;
  if (!caller) {
    return res.send({ status: "FAILED", message: "Invalid Address" });
  }

  let data = await database.PendingUnstake.find({ caller: caller });

  let total = data.length;
  if (status == 1) {
    data = data.filter((e) => {
      return +new Date() < e.time;
    });
    total = data.length;
  } else if (status == 2) {
    data = data.filter((e) => {
      return +new Date() >= e.time;
    });
    total = data.length;
  }

  // pagination
  data = data.slice(parseInt(offset), parseInt(offset) + parseInt(limit));

  // format result
  const dataTable = data.map((data) => ({
    index: data.callerIndex,
    caller: data.caller,
    amount: data.amount,
    time: data.time,
  }));

  return res.send({ status: "OK", ret: dataTable, total: total });
});

// add pending unstake
app.post("/updateHistoryStaking", async (req, res) => {
  if (!req.body) return res.send({ status: "FAILED", message: "No Input" });
  const { caller, amount, currentTime, status } = req.body;

  const historyOptions = {
    caller: caller,
    amount: amount,
    currentTime: currentTime,
    status: status,
  };

  await database.HistoryStaking.create(historyOptions)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot add history staking. Maybe data was not found!`,
        });
      } else {
        res.send({
          message: "add history staking successfully!",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        message: "Could not added",
      });
    });
});

// get pending unstake
app.post("/getHistoryStaking", async (req, res) => {
  if (!req.body) return res.send({ status: "FAILED", message: "No Input" });
  let { caller, limit, offset, status } = req.body;
  if (!limit) limit = 15;
  if (!offset) offset = 0;
  if (!status) status = 0;
  if (!caller) {
    return res.send({ status: "FAILED", message: "Invalid Address" });
  }

  let data = await database.HistoryStaking.find({ caller: caller }).sort({
    currentTime: -1,
  });

  let total = data.length;

  // pagination
  data = data.slice(parseInt(offset), parseInt(offset) + parseInt(limit));

  // format result
  const dataTable = data.map((data) => ({
    caller: data.caller,
    amount: data.amount,
    currentTime: data.currentTime,
    status: data.status,
  }));

  return res.send({ status: "OK", ret: dataTable, total: total });
});

// send mail
const adminEmail = process.env.ADMIN_EMAIL.toString();
const adminEmailPass = process.env.ADMIN_EMAIL_PASS.toString();
app.post("/sendEmail", async (req, res) => {
  const { email, subject, text } = req.body;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: adminEmail,
      pass: adminEmailPass,
    },
  });

  const mailOptions = {
    from: adminEmail,
    to: email,
    subject: subject,
    text: text,
  };

  const existingEmail = await database.EmailSubscribe.findOne({
    email: email,
  });
  if (!existingEmail) {
    await database.EmailSubscribe.create({ email });
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent: " + info.response);
      res.send({
        status: "OK",
        ret: {
          email: email,
        },
      });
    }
  });
});

app.post("/getSubcribeEmail", async (req, res) => {
  if (!req.body) return res.send({ status: "FAILED", message: "No Input" });
  let limit = req.body.limit;
  let offset = req.body.offset;
  if (!limit) limit = 15;
  if (!offset) offset = 0;

  let data = await database.EmailSubscribe.find();

  let total = data.length;

  // pagination
  data = data.slice(parseInt(offset), parseInt(offset) + parseInt(limit));

  // format result
  const dataTable = data.map((data) => ({
    email: data.email,
    subcribeAt: data.createdAt,
  }));

  return res.send({ status: "OK", ret: dataTable, total: total });
});

app.post("/getEmailExist", async (req, res) => {
  const { email } = req.body;
  if (!req.body) return res.send({ status: "FAILED", message: "No Input" });

  const existingEmail = await database.EmailSubscribe.findOne({
    email: email,
  });

  return res.send({ status: "OK", ret: existingEmail?.email });
});

app.post("/addWhitelist", async (req, res) => {
  const { poolType, buyer, amount, price } = req.body;
  if (!req.body) return res.send({ status: "FAILED", message: "No Input" });

  const whitelistOptions = {
    poolType: poolType,
    buyer: buyer,
    amount: amount,
    price: price,
  };

  await database.WhitelistManager.create(whitelistOptions)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot add whitelist. Maybe data was not found!`,
        });
      } else {
        res.send({
          message: "add whitelist successfully!",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        message: "Could not added",
      });
    });
});

app.post("/updateWhitelist", async (req, res) => {
  const { poolType, buyer, amount, price } = req.body;
  if (!req.body) return res.send({ status: "FAILED", message: "No Input" });

  const filter = {
    poolType: poolType,
    buyer: buyer,
  };

  const update = {
    amount: amount,
    price: price,
  };

  await database.WhitelistManager.findOneAndUpdate(filter, update)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update whitelist. Maybe data was not found!`,
        });
      } else {
        res.send({
          message: "update whitelist successfully!",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        message: "Could not updated",
      });
    });
});

app.post("/getWhitelist", async (req, res) => {
  if (!req.body) return res.send({ status: "FAILED", message: "No Input" });
  const { poolType, limit, offset } = req.body;
  if (!limit) limit = 15;
  if (!offset) offset = 0;
  if (!poolType) {
    return res.send({ status: "FAILED", message: "Invalid pool type" });
  }

  let data = await database.WhitelistManager.find({ poolType: poolType });

  let total = data.length;

  // pagination
  data = data.slice(parseInt(offset), parseInt(offset) + parseInt(limit));

  // format result
  const dataTable = data.map((data) => ({
    // poolType: data.poolType,
    buyer: data.buyer,
    amount: data.amount,
    price: data.price,
  }));

  return res.send({ status: "OK", ret: dataTable, total: total });
});

app.post("/getRewardByCaller", async (req, res) => {
  if (!req.body) return res.send({ status: "FAILED", message: "No Input" });
  const { caller, limit, offset } = req.body;
  if (!limit) limit = 15;
  if (!offset) offset = 0;
  if (!caller) {
    return res.send({ status: "FAILED", message: "Invalid caller" });
  }

  let data = await database.ClaimEvent.find({ staker: caller });

  let total = data.length;

  // pagination
  data = data.slice(parseInt(offset), parseInt(offset) + parseInt(limit));

  // format result
  const dataTable = data.map((data) => ({
    staker: data.staker,
    time: data.time,
    reward_amount: data.reward_amount,
  }));

  return res.send({ status: "OK", ret: dataTable, total: total });
});

// second (optional) - minute - hour - day of month - month - day of week (7)
if (CRONJOB_ENABLE.AZ_PANDORA_FLOW_COLLECTOR) {
  cron.schedule(
    CRONJOB_TIME.AZ_PANDORA_FLOW_COLLECTOR,
    async () => {
      // run
      try {
        let players = [];
        let session_id = await getLastSessionId();
        session_id = parseInt(session_id);
        console.log({ session_id });

        // tranfer pandora amounts core pool to pandora pool
        // console.log({
        //   step0:
        //     "Tranfer pandora amounts core pool to pandora pool and set status Finalized for session",
        // });

        // await transferAndUpdateSessionPandorapool(session_id).catch((error) => {
        //   console.error("ErrorFinalizeWinner:", error);
        //   console.log("errorFinalizeWinner", error);
        // });

        let total_win_amounts = await getTotalWinAmount();
        console.log({ total_win_amounts });

        // pause padora pool contract
        console.log({
          step1: "Locked padora pool contract",
        });
        let is_locked = await getIsLocked();
        if (!is_locked) {
          await updateIsLocked(true).catch((error) => {
            console.error("ErrorChangeState:", error);
            console.log("errorChangeState", error);
          });
        }

        // consumer contract
        console.log({ step2: "Find randomnumber with chainlink" });
        /// get last request id
        let lastRequestId = await getLastRequestId();
        console.log({ lastRequestId });

        /// handle request random
        let seconds = 0;
        await requestRandomWords(session_id).catch((error) => {
          console.error("ErrorRequestRandomWords:", error);
          console.log("errorRequestRandomWords", error);
        });
        let check_id = false;
        while (!check_id) {
          try {
            const newRequestId = await getLastRequestId();
            if (newRequestId !== lastRequestId) {
              check_id = true;
              lastRequestId = newRequestId;
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

        /// find random number
        let random_number = false;
        while (!random_number) {
          try {
            const requestStatus = await getRequestStatus(lastRequestId);
            if (requestStatus[2].length === 0) {
              await delay(1000);
              seconds += 1;
              console.log({ seconds });
            } else {
              random_number = parseInt(requestStatus[2][0]);
              console.log("Find random number successfully");
              session_id = parseInt(requestStatus[1]);
              console.log(
                `Get session id: ${session_id} by request id: ${lastRequestId} in chainlick contract`
              );
            }
          } catch (err) {
            console.log({ errorGetRandomNumber: err });
            break;
          }
        }

        // Add request id to bet session
        let bet_session = await getBetSession(session_id);
        console.log({ bet_session });
        if (bet_session.status == "Finalized") {
          console.log(
            `Add request id: ${lastRequestId} to session id: ${session_id} in pandora contract`
          );
          await addChainlinkRequestId(session_id, lastRequestId);

          // get request id by session id
          let requestId = await getChainlinkRequestIdBySessionId(session_id);

          // get random number by request id
          const requestStatus = await getRequestStatus(requestId);
          random_number = parseInt(requestStatus[2][0]);
          console.log({ session_id, requestId, random_number });
        } else console.log("Session not Finalized");

        // handle finalize
        console.log({
          step3: "finalize",
        });

        bet_session = await getBetSession(session_id);
        console.log({ bet_session });
        // random_number = 123; // test
        if (bet_session.status == "Finalized") {
          await finalize(session_id, random_number).catch((error) => {
            console.error("ErrorFinalizeWinner:", error);
            console.log("errorFinalizeWinner", error);
          });
        } else console.log("Session not Finalized");

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
              players.push(player);
            }
          }
        } else console.log("Session not Completed");

        // unlock padora pool contract
        console.log({ step5: "Open padora pool contract" });
        is_locked = await getIsLocked();
        if (is_locked) {
          await updateIsLocked(false).catch((error) => {
            console.error("ErrorChangeState:", error);
            console.log("errorChangeState", error);
          });
        }

        // show player win
        const win_player = Array.from(new Set(players));
        console.log({ win_player });
      } catch (error) {
        console.error("Error:", error);
        console.log("Error:", error);
      }

      console.log("Run the job every 7 days at 6am on the last day");
    },
    {
      scheduled: true,
      timezone: "Asia/Ho_Chi_Minh",
    }
  );
}

const PORT = process.env.PORT || 3000;
const DATABASE_HOST = process.env.MONGO_HOST || "127.0.0.1";
const DATABASE_PORT = process.env.MONGO_PORT || 27017;
const DATABASE_NAME = process.env.MONGO_DB_NAME;
const CONNECTION_STRING = `mongodb://${DATABASE_HOST}:${DATABASE_PORT}`;

mongoose.set("strictQuery", false);
const connectDb = () => {
  return mongoose.connect(CONNECTION_STRING, {
    dbName: DATABASE_NAME,
    maxPoolSize: 50,
    useNewUrlParser: true,
  });
};

app.use(helmet());

connectDb().then(async () => {
  // let httpsServer = https.createServer(credentials, app);
  app.listen(PORT, () => {
    console.log(`BET AZ API listening on port ${PORT}!`);
  });
  // await checkSBData();
  // await checkAPY();
  // //await updateSupply();
  // setInterval(checkNewTrades, 5 * 1000);
  // setInterval(checkPendingRedemption, 10 * 1000);
  // setInterval(checkSBData, 5 * 60 * 1000);
  // setInterval(checkAPY, 1 * 60 * 60 * 1000);
  // setInterval(updateSupply, 24 * 60 * 60 * 1000);
});
