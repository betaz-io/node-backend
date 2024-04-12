let mongoose = require("mongoose");
let database = require("../database.js");
const { Keyring, ApiPromise, WsProvider } = require("@polkadot/api");
const { jsonrpc } = require("@polkadot/types/interfaces/jsonrpc");
const { staking_contract } = require("../contracts/staking_contract.js");
const {
  isAdmin,
  getIsLocked,
  getRewardStarted,
  getTotalCountOfStakeholders,
  getStakedAccountsByIndex,
  claimRewardByAdmin,
  isClaimed,
  setStakingContract,
} = require("../contracts/staking_contract_calls.js");
let { delay } = require("../utils");

const dbConfig = require("../config/db.config.js");
const chainConfig = require("../config/chain.config.js");
const DATABASE_HOST = dbConfig.DB_HOST;
const DATABASE_PORT = dbConfig.DB_PORT;
const DATABASE_NAME = dbConfig.DB_NAME;

const socket = chainConfig.AZ_PROVIDER;
const provider = new WsProvider(socket);
const api = new ApiPromise({ provider, rpc: jsonrpc });

const CONNECTION_STRING = `${dbConfig.DB_CONNECTOR}://${DATABASE_HOST}:${DATABASE_PORT}`;

const connectDb = () => {
  return mongoose.connect(CONNECTION_STRING, {
    dbName: DATABASE_NAME,
    useNewUrlParser: true,
  });
};

// connect to alephzero
const connect = async () => {
  try {
    api.on("connected", () => {
      api.isReady.then(() => {
        console.log("Smartnet BETAZ Connected");
      });
    });

    api.on("ready", async () => {
      console.log("Smartnet BETAZ Ready");

      // connect staking contract
      setStakingContract(api, staking_contract);
      console.log("Staking Contract is ready");

      await claim_reward_by_admin();
    });
  } catch (err) {
    console.log(err);
  }
};

//
const claim_reward_by_admin = async () => {
  const keyring = new Keyring({ type: "sr25519" });
  const PHRASE = chainConfig.POLKADOT_WALLET_PHRASE;
  const keypair = keyring.createFromUri(PHRASE);
  let count = 0;
  let listAddress = [];

  try {
    let is_locked = await getIsLocked();
    console.log(`is_locked: ${is_locked}`);
    let is_reward_started = await getRewardStarted();
    console.log(`is_reward_started: ${is_reward_started}`);
    console.log(
      `is_reward_started must be TRUE and is_locked must be TRUE to set Claimable`
    );

    let is_admin = await isAdmin(keypair.address);
    console.log(`is_admin: ${is_admin}`);

    if (!is_admin) {
      console.log(`Caller: ${keypair.address} is not admin`);
      return {
        count,
        listAddress,
      };
    }

    if (is_locked && is_reward_started) {
      let staker_count = await getTotalCountOfStakeholders();
      console.log(`staker_count: ${staker_count}`);
      for (let i = 0; i < staker_count; i++) {
        try {
          let staker = await getStakedAccountsByIndex(i);
          console.log(`staker: ${staker}`);
          let is_claimed = await isClaimed(staker);
          console.log(
            `ClaimedStatus: ${i + 1} staker: ${staker} is claimed ${is_claimed}`
          );
          console.log(`claimedReward for ${staker}`);
          if (!is_claimed) {
            const time = await api.query.timestamp.now();
            await claimRewardByAdmin(keypair, staker, database, time);
            await delay(3000);
          }
          is_claimed = await isClaimed(staker);
          console.log(
            `claimedStatus: ${i + 1} staker: ${staker} is claimed ${is_claimed}`
          );
          if (staker) {
            listAddress.push(staker);
          }
          await delay(1700);
        } catch (e) {
          console.log(`ERROR: ${e.messages}`);
        }
      }
      console.log(`Process ${staker_count} accounts -  COMPLETED!`);
      console.log({
        count: staker_count,
        listAddress: listAddress,
      });
      return {
        count: staker_count,
        listAddress: listAddress,
      };
    }
  } catch (e) {
    console.error(`ERROR: ${e.messages}`);
  }
};

connectDb().then(async () => {
  try {
    api.on("connected", () => {
      api.isReady.then(() => {
        console.log("Smartnet BETAZ Connected");
      });
    });

    api.on("ready", async () => {
      console.log("Smartnet BETAZ Ready");

      // connect staking contract
      setStakingContract(api, staking_contract);
      console.log("Staking Contract is ready");

      await claim_reward_by_admin();
    });
  } catch (err) {
    console.log(err);
  }
});
