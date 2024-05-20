let { ContractPromise, Abi } = require("@polkadot/api-contract");
let { Keyring } = require("@polkadot/api");
let { readOnlyGasLimit, getEstimatedGas } = require("../utils/utils.js");

const dbConfig = require("../config/db.config.js");
const chainConfig = require("../config/chain.config.js");

let contract;
let abi_contract;
let defaultCaller = chainConfig.POLKADOT_WALLET_ADDRESS;

const setBetazCoreContract = (api, data) => {
  contract = new ContractPromise(
    api,
    data?.CONTRACT_ABI,
    data?.CONTRACT_ADDRESS
  );
};

const setBetazCoreAbiContract = (data) => {
  abi_contract = new Abi(data.CONTRACT_ABI);
};

const transferAndUpdateSessionPandorapool = async (session_id) => {
  let gasLimit;
  const value = 0;

  const keyring = new Keyring({ type: "sr25519" });
  const PHRASE = chainConfig.POLKADOT_WALLET_PHRASE;
  const keypair = keyring.createFromUri(PHRASE);

  gasLimit = await getEstimatedGas(
    keypair.address,
    contract,
    value,
    "transferAndUpdateSessionPandoraPool",
    { u32: session_id }
  );

  return new Promise((resolve, reject) => {
    contract.tx["transferAndUpdateSessionPandoraPool"](
      { gasLimit, value },
      { u32: session_id }
    )
      .signAndSend(keypair, async ({ status, dispatchError }) => {
        if (dispatchError) {
          if (dispatchError.isModule) {
            console.log(dispatchError);
          } else {
            console.log("dispatchError", dispatchError.toString());
          }
        }

        if (status.isInBlock) {
          console.log(
            `tranfer amounts to pandora pool and update session ${session_id} ...`
          );
        } else if (status.isFinalized) {
          console.log(
            `tranfer amounts to pandora pool and update session ${session_id} finalize ...`
          );
          resolve();
        }
      })
      .catch((e) => {
        console.log("e", e);
        reject(e); // Reject the promise with the error
      });
  });
};

module.exports = {
  setBetazCoreContract,
  setBetazCoreAbiContract,
  transferAndUpdateSessionPandorapool,
};
