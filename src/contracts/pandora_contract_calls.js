let { ContractPromise, Abi } = require("@polkadot/api-contract");
let { Keyring } = require("@polkadot/api");
let { readOnlyGasLimit, getEstimatedGas } = require("../utils/utils.js");
const { BN } = require("bn.js");
require("dotenv").config();

const dbConfig = require("../config/db.config.js");
const chainConfig = require("../config/chain.config.js");

let contract;
let abi_contract;
let defaultCaller = chainConfig.POLKADOT_WALLET_ADDRESS;

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
  const PHRASE = chainConfig.POLKADOT_WALLET_PHRASE;
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
  const PHRASE = chainConfig.POLKADOT_WALLET_PHRASE;
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

const updateIsLocked = async (state) => {
  let gasLimit;
  const value = 0;

  const keyring = new Keyring({ type: "sr25519" });
  const PHRASE = chainConfig.POLKADOT_WALLET_PHRASE;
  const keypair = keyring.createFromUri(PHRASE);

  gasLimit = await getEstimatedGas(
    keypair.address,
    contract,
    value,
    "pandoraPoolTraits::updateIsLocked",
    state
  );

  return new Promise((resolve, reject) => {
    contract.tx["pandoraPoolTraits::updateIsLocked"]({ gasLimit, value }, state)
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

const getIsLocked = async function () {
  if (!contract) {
    return null;
  }

  const gasLimit = readOnlyGasLimit(contract);
  const value = 0;

  try {
    const { result, output } = await contract.query[
      "pandoraPoolTraits::getIsLocked"
    ](defaultCaller, {
      gasLimit,
      value,
    });

    if (result.isOk) {
      const a = output.toHuman().Ok;
      return a;
    }
  } catch (error) {
    console.log("@_@ ", "getIsLocked", " error >>", error.message);
  }

  return null;
};

const getTotalWinAmount = async function () {
  if (!contract) {
    return null;
  }

  const gasLimit = readOnlyGasLimit(contract);
  const value = 0;

  try {
    const { result, output } = await contract.query[
      "pandoraPoolTraits::getTotalWinAmount"
    ](defaultCaller, {
      gasLimit,
      value,
    });

    if (result.isOk) {
      const a = output.toHuman().Ok;
      return a;
    }
  } catch (error) {
    console.log("@_@ ", "getTotalWinAmount", " error >>", error.message);
  }

  return null;
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
  const PHRASE = chainConfig.POLKADOT_WALLET_PHRASE;
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

const addChainlinkRequestId = async (session_id, request_id) => {
  let gasLimit;
  const value = 0;

  const keyring = new Keyring({ type: "sr25519" });
  const PHRASE = chainConfig.POLKADOT_WALLET_PHRASE;
  const keypair = keyring.createFromUri(PHRASE);

  gasLimit = await getEstimatedGas(
    keypair.address,
    contract,
    value,
    "pandoraPoolTraits::addChainlinkRequestId",
    { u32: session_id },
    request_id?.toString()
  );

  return new Promise((resolve, reject) => {
    contract.tx["pandoraPoolTraits::addChainlinkRequestId"](
      { gasLimit, value },
      { u32: session_id },
      request_id?.toString()
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
            `Add Chainlink Request Id: ${request_id?.toString()} to session ${session_id} ...`
          );
        } else if (status.isFinalized) {
          console.log(`Add Chainlink finalized`);
          resolve();
        }
      })
      .catch((e) => {
        console.log("changeState ERROR", e);
        reject(e); // Reject the promise with the error
      });
  });
};

const getChainlinkRequestIdBySessionId = async function (session_id) {
  if (!contract) {
    return null;
  }

  const gasLimit = readOnlyGasLimit(contract);
  const value = 0;

  try {
    const { result, output } = await contract.query[
      "pandoraPoolTraits::getChainlinkRequestIdBySessionId"
    ](
      defaultCaller,
      {
        gasLimit,
        value,
      },
      session_id
    );

    if (result.isOk) {
      const a = output.toHuman().Ok;
      return a;
    }
  } catch (error) {
    console.log(
      "@_@ ",
      "getChainlinkRequestIdBySessionId",
      " error >>",
      error.message
    );
  }

  return null;
};

const getBetSession = async function (session_id) {
  if (!contract) {
    return null;
  }

  const gasLimit = readOnlyGasLimit(contract);
  const value = 0;

  try {
    const { result, output } = await contract.query[
      "pandoraPoolTraits::getBetSession"
    ](
      defaultCaller,
      {
        gasLimit,
        value,
      },
      session_id
    );

    if (result.isOk) {
      const a = output.toHuman().Ok;
      return a;
    }
  } catch (error) {
    console.log("@_@ ", "getBetSession", " error >>", error.message);
  }

  return null;
};

const getIdInSessionByRandomNumberAndIndex = async function (
  session_id,
  random_number,
  index
) {
  if (!contract) {
    return null;
  }

  const gasLimit = readOnlyGasLimit(contract);
  const value = 0;

  try {
    const { result, output } = await contract.query[
      "pandoraPoolTraits::getIdInSessionByRandomNumberAndIndex"
    ](
      defaultCaller,
      {
        gasLimit,
        value,
      },
      { u32: session_id },
      { u32: random_number },
      { u128: index }
    );

    if (result.isOk) {
      const a = output.toHuman().Ok;
      return a;
    }
  } catch (error) {
    console.log(
      "@_@ ",
      "getIdInSessionByRandomNumberAndIndex",
      " error >>",
      error.message
    );
  }

  return null;
};

const getPlayerByNftId = async function (token_id) {
  if (!contract) {
    return null;
  }

  const gasLimit = readOnlyGasLimit(contract);
  const value = 0;

  try {
    const { result, output } = await contract.query[
      "pandoraPoolTraits::getPlayerByNftId"
    ](
      defaultCaller,
      {
        gasLimit,
        value,
      },
      { u64: token_id }
    );

    if (result.isOk) {
      const a = output.toHuman().Ok;
      return a;
    }
  } catch (error) {
    console.log("@_@ ", "getPlayerByNftId", " error >>", error.message);
  }

  return null;
};

const getHoldPlayerCount = async function () {
  if (!contract) {
    return null;
  }

  const gasLimit = readOnlyGasLimit(contract);
  const value = 0;

  try {
    const { result, output } = await contract.query[
      "pandoraPoolTraits::getHoldPlayerCount"
    ](defaultCaller, {
      gasLimit,
      value,
    });

    if (result.isOk) {
      const a = output.toHuman().Ok;
      return a;
    }
  } catch (error) {
    console.log("@_@ ", "getHoldPlayerCount", " error >>", error.message);
  }

  return null;
};

const getHoldPlayersByIndex = async function (index) {
  if (!contract) {
    return null;
  }

  const gasLimit = readOnlyGasLimit(contract);
  const value = 0;

  try {
    const { result, output } = await contract.query[
      "pandoraPoolTraits::getHoldPlayersByIndex"
    ](
      defaultCaller,
      {
        gasLimit,
        value,
      },
      { u64: index }
    );

    if (result.isOk) {
      const a = output.toHuman().Ok;
      return a;
    }
  } catch (error) {
    console.log("@_@ ", "getHoldPlayersByIndex", " error >>", error.message);
  }

  return null;
};

const getHoldAmountPlayers = async function (player) {
  if (!contract) {
    return null;
  }

  const gasLimit = readOnlyGasLimit(contract);
  const value = 0;

  try {
    const { result, output } = await contract.query[
      "pandoraPoolTraits::getHoldAmountPlayers"
    ](
      defaultCaller,
      {
        gasLimit,
        value,
      },
      player
    );

    if (result.isOk) {
      const a = output.toHuman().Ok;
      return a?.replaceAll(",", "") / 10 ** 12;
    }
  } catch (error) {
    console.log("@_@ ", "getHoldAmountPlayers", " error >>", error.message);
  }

  return null;
};

const withdrawHoldAmount = async (receiver, amount) => {
  let gasLimit;
  const value = 0;

  const keyring = new Keyring({ type: "sr25519" });
  const PHRASE = chainConfig.POLKADOT_WALLET_PHRASE;
  const keypair = keyring.createFromUri(PHRASE);

  let azero_amount = new BN(amount * 10 ** 6).mul(new BN(10 ** 6)).toString();

  gasLimit = await getEstimatedGas(
    keypair.address,
    contract,
    value,
    "pandoraPoolTraits::withdrawHoldAmount",
    receiver,
    azero_amount
  );

  return new Promise((resolve, reject) => {
    contract.tx["pandoraPoolTraits::withdrawHoldAmount"](
      { gasLimit, value },
      receiver,
      azero_amount
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
            `Withdraw hold amount player: ${receiver} and amount: ${amount} ...`
          );
        } else if (status.isFinalized) {
          console.log(`Withdraw hold amount player: ${receiver} finalized`);
          resolve(receiver);
        }
      })
      .catch((e) => {
        console.log("changeState ERROR", e);
        reject(e); // Reject the promise with the error
      });
  });
};

module.exports = {
  setPadoraPoolContract,
  setPandoraPoolAbiContract,
  finalize,
  updateIsLocked,
  getIsLocked,
  getTotalWinAmount,
  getLastSessionId,
  handle_find_winner,
  totalTicketsWin,
  multipleMintTicket,
  isAdmin,
  addChainlinkRequestId,
  getChainlinkRequestIdBySessionId,
  getBetSession,
  getIdInSessionByRandomNumberAndIndex,
  getPlayerByNftId,
  getHoldPlayerCount,
  getHoldPlayersByIndex,
  getHoldAmountPlayers,
  withdrawHoldAmount,
};
