let { ContractPromise, Abi } = require("@polkadot/api-contract");
let { Keyring } = require("@polkadot/api");
let { readOnlyGasLimit, getEstimatedGas } = require("../utils");
require("dotenv").config();

let contract;
let abi_contract;
let defaultCaller = process.env.DEFAULT_CALLER_ADDRESS;

const setPadoraPoolContract = (api, data) => {
  contract = new ContractPromise(
    api,
    data?.CONTRACT_ABI,
    data?.CONTRACT_ADDRESS
  );
};

const setPandoraPoolAbiContract = (data) => {
  abi_contract = new Abi(data.CONTRACT_ABI);
};

const finalize = async (session_id, random_number) => {
  let gasLimit;
  const value = 0;

  const keyring = new Keyring({ type: "sr25519" });
  const PHRASE = process.env.PHRASE;
  const keypair = keyring.createFromUri(PHRASE);

  gasLimit = await getEstimatedGas(
    keypair.address,
    contract,
    value,
    "pandoraPoolTraits::finalize",
    { u32: session_id },
    { u32: random_number }
  );

  return new Promise((resolve, reject) => {
    contract.tx["pandoraPoolTraits::finalize"](
      { gasLimit, value },
      { u32: session_id },
      { u32: random_number }
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
          console.log(`Finalize session ${session_id} ...`);
        } else if (status.isFinalized) {
          console.log(`Finalize session ${session_id} finalized`);
          resolve();
        }
      })
      .catch((e) => {
        console.log("finalize session ERROR", e.message);
        reject(e); // Reject the promise with the error
      });
  });
};

const handle_find_winner = async (session_id, index) => {
  let gasLimit;
  const value = 0;

  const keyring = new Keyring({ type: "sr25519" });
  const PHRASE = process.env.PHRASE;
  const keypair = keyring.createFromUri(PHRASE);

  gasLimit = await getEstimatedGas(
    keypair.address,
    contract,
    value,
    "pandoraPoolTraits::handleFindWinner",
    { u32: session_id },
    { u128: index }
  );

  return new Promise((resolve, reject) => {
    contract.tx["pandoraPoolTraits::handleFindWinner"](
      { gasLimit, value },
      { u32: session_id },
      { u128: index }
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
          console.log(`Find ${index} nft ...`);
        } else if (status.isFinalized) {
          console.log(`Find ${index} nft finalized`);
          resolve();
        }
      })
      .catch((e) => {
        console.log("handleFindWinner ERROR", e);
        reject(e); // Reject the promise with the error
      });
  });
};

const change_state = async (state) => {
  let gasLimit;
  const value = 0;

  const keyring = new Keyring({ type: "sr25519" });
  const PHRASE = process.env.PHRASE;
  const keypair = keyring.createFromUri(PHRASE);

  gasLimit = await getEstimatedGas(
    keypair.address,
    contract,
    value,
    "pandoraPoolTraits::changeState",
    state
  );

  return new Promise((resolve, reject) => {
    contract.tx["pandoraPoolTraits::changeState"]({ gasLimit, value }, state)
      .signAndSend(keypair, async ({ status, dispatchError }) => {
        if (dispatchError) {
          if (dispatchError.isModule) {
            console.log(dispatchError);
          } else {
            console.log("dispatchError", dispatchError.toString());
          }
        }

        if (status.isInBlock) {
          console.log(`${state ? "Lock" : "Unlock"} pandora pool contract ...`);
        } else if (status.isFinalized) {
          console.log(
            `${state ? "Lock" : "Unlock"} pandora pool contract finalized`
          );
          resolve();
        }
      })
      .catch((e) => {
        console.log("changeState ERROR", e);
        reject(e); // Reject the promise with the error
      });
  });
};

const getLastSessionId = async function () {
  if (!contract) {
    return null;
  }

  const gasLimit = readOnlyGasLimit(contract);
  const value = 0;

  try {
    const { result, output } = await contract.query[
      "pandoraPoolTraits::getLastSessionId"
    ](defaultCaller, {
      gasLimit,
      value,
    });

    if (result.isOk) {
      const a = output.toHuman().Ok;
      return a;
    }
  } catch (error) {
    console.log("@_@ ", "getLastSessionId", " error >>", error.message);
  }

  return null;
};

const totalTicketsWin = async function (session_id, random_number) {
  if (!contract) {
    return null;
  }

  const gasLimit = readOnlyGasLimit(contract);
  const value = 0;

  try {
    const { result, output } = await contract.query[
      "pandoraPoolTraits::totalTicketsWin"
    ](
      defaultCaller,
      {
        gasLimit,
        value,
      },
      { u32: session_id },
      { u32: random_number }
    );

    if (result.isOk) {
      const a = output.toHuman().Ok;
      return a;
    }
  } catch (error) {
    console.log("@_@ ", "totalTicketsWin", " error >>", error.message);
  }

  return null;
};

const multipleMintTicket = async (amounts) => {
  let gasLimit;
  const value = 0;

  const keyring = new Keyring({ type: "sr25519" });
  const PHRASE = process.env.PHRASE;
  const keypair = keyring.createFromUri(PHRASE);

  gasLimit = await getEstimatedGas(
    keypair.address,
    contract,
    value,
    "multipleMintTicket",
    { u64: amounts }
  );

  return new Promise((resolve, reject) => {
    contract.tx["multipleMintTicket"]({ gasLimit, value }, { u64: amounts })
      .signAndSend(keypair, async ({ status, dispatchError }) => {
        if (dispatchError) {
          if (dispatchError.isModule) {
            console.log(dispatchError);
          } else {
            console.log("dispatchError", dispatchError.toString());
          }
        }

        if (status.isInBlock) {
          console.log(`Mint ${amounts} ticket ...`);
        } else if (status.isFinalized) {
          console.log(`Mint ${amounts} ticket finalized`);
          resolve(amounts);
        }
      })
      .catch((e) => {
        console.log("multipleMintTicket ERROR", e);
        reject(e); // Reject the promise with the error
      });
  });
};

const isAdmin = async function (account) {
  if (!contract) {
    return null;
  }

  const gasLimit = readOnlyGasLimit(contract);
  const value = 0;

  try {
    const { result, output } = await contract.query["accessControl::hasRole"](
      defaultCaller,
      {
        gasLimit,
        value,
      },
      "3739740293",
      account
    );

    if (result.isOk) {
      return output.toHuman().Ok;
    }
  } catch (error) {
    console.log("@_@ ", "hasRole", " error >>", error.message);
  }

  return false;
};

module.exports = {
  setPadoraPoolContract,
  setPandoraPoolAbiContract,
  finalize,
  change_state,
  getLastSessionId,
  handle_find_winner,
  totalTicketsWin,
  multipleMintTicket,
  isAdmin
};
