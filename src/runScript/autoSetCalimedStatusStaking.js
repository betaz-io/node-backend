const { Keyring, ApiPromise, WsProvider } = require("@polkadot/api");
const { jsonrpc } = require("@polkadot/types/interfaces/jsonrpc");
const { staking_contract } = require("../contracts/staking_contract.js");
const {
  isAdmin,
  getIsLocked,
  getRewardStarted,
  getTotalCountOfStakeholders,
  getStakedAccountsByIndex,
  setClaimedStatus,
  isClaimed,
  setStakingContract,
} = require("../contracts/staking_contract_calls.js");
let { delay } = require("../utils");

const dbConfig = require("../config/db.config.js");
const chainConfig = require("../config/chain.config.js");

const socket = chainConfig.AZ_PROVIDER;
const provider = new WsProvider(socket);
const api = new ApiPromise({ provider, rpc: jsonrpc });

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

      await auto_set_claim_status();
    });
  } catch (err) {
    console.log(err);
  }
};

// auto set claim status
const auto_set_claim_status = async () => {
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
      `is_reward_started must be FALSE and is_locked must be TRUE to set Claimable`
    );

    let is_admin = await isAdmin(keypair.address);
    console.log(`is_admin: ${is_admin}`);

    if (!is_admin) {
      console.log({
        count,
        listAddress,
      });
      return {
        count,
        listAddress,
      };
    }

    if (is_locked && !is_reward_started) {
      let staker_count = await getTotalCountOfStakeholders();
      console.log(`staker_count: ${staker_count}`);
      for (let i = 0; i < staker_count; i++) {
        try {
          let staker = await getStakedAccountsByIndex(i);
          console.log(`staker: ${staker}`);
          let is_claimed = await isClaimed(staker);
          console.log(
            `setClaimedStatus: ${
              i + 1
            } staker: ${staker} is claimed ${is_claimed}`
          );
          console.log(
            `setClaimedStatus - set isClaimed to FALSE for ${staker}`
          );
          if (is_claimed) {
            await setClaimedStatus(keypair, staker, false);
            await delay(3000);
          }
          is_claimed = await isClaimed(staker);
          console.log(
            `setClaimedStatus: ${
              i + 1
            } staker: ${staker} is claimed ${is_claimed}`
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

connect();
