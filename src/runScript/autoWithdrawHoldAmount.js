const { Keyring, ApiPromise, WsProvider } = require("@polkadot/api");
const { jsonrpc } = require("@polkadot/types/interfaces/jsonrpc");
const { pandora_contract } = require("../contracts/pandora_contract.js");
const {
  isAdmin,
  setPadoraPoolContract,
  getHoldPlayerCount,
  getHoldPlayersByIndex,
  getHoldAmountPlayers,
  withdrawHoldAmount,
} = require("../contracts/pandora_contract_calls.js");
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
      setPadoraPoolContract(api, pandora_contract);
      console.log("Staking Contract is ready");

      await handle_withdraw();
    });
  } catch (err) {
    console.log(err);
  }
};

//
const handle_withdraw = async () => {
  const keyring = new Keyring({ type: "sr25519" });
  const PHRASE = chainConfig.POLKADOT_WALLET_PHRASE;
  const keypair = keyring.createFromUri(PHRASE);
  let withdrawPlayers = [];

  const total_hold_player = await getHoldPlayerCount();
  console.log({ total_hold_player });
  try {
    let is_admin = await isAdmin(keypair.address);
    console.log(`is_admin: ${is_admin}`);

    if (!is_admin) {
      console.log(`Caller: ${keypair.address} is not admin`);
    }

    if (total_hold_player > 0) {
      for (let i = 0; i < parseInt(total_hold_player); i++) {
        try {
          console.log(`round: ${i + 1} processing`);

          // get player
          let player = await getHoldPlayersByIndex(i);
          console.log({ player });

          if (player) {
            // get hold amount player
            let hold_amount = await getHoldAmountPlayers(player);
            console.log({
              hold_amount,
            });

            if (hold_amount) {
              // withdraw
              let result = await withdrawHoldAmount(player, hold_amount);

              if (result) {
                let data = {};
                data.player = player;
                data.hold_amount = hold_amount;
                withdrawPlayers.push(data);
              }
            }
          }
          await delay(2000);
          console.log(`round: ${i + 1} finalized`);
        } catch (e) {
          console.log(`ERROR: ${e.messages}`);
        }
      }
      console.log(`Process withdraw ${total_hold_player} player -  COMPLETED!`);
      console.log("Withdraw player success", withdrawPlayers);
    } else {
      console.log("Not hold player");
    }
  } catch (e) {
    console.error(`ERROR: ${e.messages}`);
  }
};

connect();
