require("dotenv").config();
let mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const express = require("express");
const cron = require("node-cron");
let fs = require("fs");
let https = require("https");
let privateKey = fs.readFileSync("./a0bet_net.key", "utf8");
let certificate = fs.readFileSync("./a0bet_net.crt", "utf8");
let credentials = { key: privateKey, cert: certificate };
const rateLimit = require("express-rate-limit");
let { Keyring, ApiPromise, WsProvider } = require("@polkadot/api");
const { jsonrpc } = require("@polkadot/types/interfaces/jsonrpc");
// ETH
const { ethers } = require("ethers");
// core contract
let { contract } = require("./src/contracts/core_contract.js");
let {
  setBetazCoreContract,
} = require("./src/contracts/core_contract_calls.js");
// DIA random contract
let { bet_random_contract } = require("./src/contracts/bet_random_contract.js");
let {
  setBetRandomContract,
} = require("./src/contracts/bet_random_contract_calls.js");
// staking contract
let { staking_contract } = require("./src/contracts/staking_contract.js");
let {
  setStakingContract,
} = require("./src/contracts/staking_contract_calls.js");
// betaz contract
let {
  betaz_token_contract,
} = require("./src/contracts/betaz_token_contract.js");
let {
  setBetazTokenContract,
} = require("./src/contracts/betaz_token_contract_calls.js");
// VRFV2CONSUMER
let {
  consumer_contract,
} = require("./src/contracts/pandora_random_contract.js");
let {
  setConsumerContract,
} = require("./src/contracts/pandora_random_contract_calls.js");
// pandora contract
let { pandora_contract } = require("./src/contracts/pandora_contract.js");
let {
  setPadoraPoolContract,
} = require("./src/contracts/pandora_contract_calls.js");
const dbConfig = require("./src/config/db.config.js");
const chainConfig = require("./src/config/chain.config.js");
const {
  pandora_cronjob,
} = require("./src/crons/betaz_pandora_flow_cronjob.js");
const { CRONJOB_ENABLE, CRONJOB_TIME } = require("./src/utils/constant.js");

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

// CRONJOB
// second (optional) - minute - hour - day of month - month - day of week (7)
if (CRONJOB_ENABLE.AZ_PANDORA_FLOW_COLLECTOR) {
  cron.schedule(
    CRONJOB_TIME.AZ_PANDORA_FLOW_COLLECTOR,
    async () => pandora_cronjob(),
    {
      scheduled: true,
      timezone: "Asia/Ho_Chi_Minh",
    }
  );
}

// ROUTERS
app.get("/", (req, res) => {
  res.send("Wellcome BET AZ!");
});
require("./src/routes/email.routes.js")(app);
require("./src/routes/playEvent.routes.js")(app);
require("./src/routes/stakingManager.routes.js")(app);
require("./src/routes/saleManager.routes.js")(app);

const DATABASE_HOST = dbConfig.DB_HOST;
const DATABASE_PORT = dbConfig.DB_PORT;
const DATABASE_NAME = dbConfig.DB_NAME;
const CONNECTION_STRING = `mongodb://${DATABASE_HOST}:${DATABASE_PORT}`;

mongoose.set("strictQuery", false);
const connectDb = () => {
  return mongoose.connect(CONNECTION_STRING, {
    dbName: DATABASE_NAME,
    maxPoolSize: 50,
    useNewUrlParser: true,
  });
};

const PORT = process.env.PORT || 3000;
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

/****************** Connect smartnet BETAZ ***********************/
// alephzero chain config
let socket = chainConfig.AZ_PROVIDER;
const provider = new WsProvider(socket);
const api = new ApiPromise({ provider, rpc: jsonrpc });

// polygon chain config
const polygon_socket = chainConfig.ETH_PROVIDER;
const polygon_provider = new ethers.WebSocketProvider(polygon_socket);
try {
  // connect to alephzero
  api.on("connected", () => {
    api.isReady.then(() => {
      console.log("Smartnet BETAZ Connected");
    });
  });

  api.on("ready", () => {
    console.log("Smartnet BETAZ Ready");

    setBetazCoreContract(api, contract);
    console.log("core Contract is ready");

    setBetRandomContract(api, bet_random_contract);
    console.log("DIA Contract is ready");

    setStakingContract(api, staking_contract);
    console.log("Staking Contract is ready");

    setBetazTokenContract(api, betaz_token_contract);
    console.log("Betaz Contract is ready");

    setPadoraPoolContract(api, pandora_contract);
    console.log("Pandora pool Contract is ready");

    // connect polygon contract
    setConsumerContract(consumer_contract, polygon_provider);
    console.log("Consumer Contract is ready");
  });

  api.on("error", (err) => {
    console.log("error", err);
  });

  // connect to polygon testnet
} catch (err) {
  console.log(err);
}
/****************** End connect smartnet BETAZ ***********************/
