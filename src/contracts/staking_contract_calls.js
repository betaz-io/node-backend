let { ContractPromise, Abi } = require("@polkadot/api-contract");
let { Keyring } = require("@polkadot/api");
let { hexToU8a, isHex, BN, BN_ONE } = require("@polkadot/util");
let { readOnlyGasLimit, getEstimatedGas } = require("../utils/utils.js");
let { staking_contract } = require("./staking_contract");
require("dotenv").config();

const dbConfig = require("../config/db.config.js");
const chainConfig = require("../config/chain.config.js");

let contract;
let abi_contract;
let defaultCaller = chainConfig.POLKADOT_WALLET_ADDRESS;

const setStakingContract = (api, data) => {
  contract = new ContractPromise(
    api,
    data?.CONTRACT_ABI,
    data?.CONTRACT_ADDRESS
  );
  abi_contract = new Abi(data.CONTRACT_ABI);
};

const getLimitUnstakeTime = async function () {
  if (!contract) {
    return null;
  }

  const gasLimit = readOnlyGasLimit(contract);
  const value = 0;

  try {
    const { result, output } = await contract.query[
      "stakingPoolTrait::getLimitUnstakeTime"
    ](defaultCaller, {
      gasLimit,
      value,
    });

    if (result.isOk) {
      const a = output.toHuman().Ok;
      return a;
    }
  } catch (error) {
    console.log("@_@ ", "getLimitUnstakeTime", " error >>", error.message);
  }

  return null;
};

const getTotalPendingUnstakedByAccount = async function (account) {
  if (!contract) {
    return null;
  }

  const gasLimit = readOnlyGasLimit(contract);
  const value = 0;

  try {
    const { result, output } = await contract.query[
      "stakingPoolTrait::getTotalPendingUnstakedByAccount"
    ](
      defaultCaller,
      {
        gasLimit,
        value,
      },
      account
    );

    if (result.isOk) {
      const a = output.toHuman().Ok;
      return a;
    }
  } catch (error) {
    console.log(
      "@_@ ",
      "getTotalPendingUnstakedByAccount",
      " error >>",
      error.message
    );
  }

  return null;
};

const getRequestUnstakeTime = async function (account, index) {
  if (!contract) {
    return null;
  }

  const gasLimit = readOnlyGasLimit(contract);
  const value = 0;

  try {
    const { result, output } = await contract.query[
      "stakingPoolTrait::getRequestUnstakeTime"
    ](
      defaultCaller,
      {
        gasLimit,
        value,
      },
      account,
      { u128: index }
    );

    if (result.isOk) {
      const a = output.toHuman().Ok;
      return a;
    }
  } catch (error) {
    console.log("@_@ ", "getRequestUnstakeTime", " error >>", error.message);
  }

  return null;
};

const getPendingUnstakingAmount = async function (account, index) {
  if (!contract) {
    return null;
  }

  const gasLimit = readOnlyGasLimit(contract);
  const value = 0;

  try {
    const { result, output } = await contract.query[
      "stakingPoolTrait::getPendingUnstakingAmount"
    ](
      defaultCaller,
      {
        gasLimit,
        value,
      },
      account,
      { u128: index }
    );

    if (result.isOk) {
      const a = output.toHuman().Ok;
      return a;
    }
  } catch (error) {
    console.log(
      "@_@ ",
      "getPendingUnstakingAmount",
      " error >>",
      error.message
    );
  }

  return null;
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

const getIsLocked = async function () {
  if (!contract) {
    return null;
  }

  const gasLimit = readOnlyGasLimit(contract);
  const value = 0;

  try {
    const { result, output } = await contract.query[
      "stakingPoolTrait::getIsLocked"
    ](defaultCaller, {
      gasLimit,
      value,
    });

    if (result.isOk) {
      return output.toHuman().Ok;
    }
  } catch (error) {
    console.log("@_@ ", "getIsLocked", " error >>", error.message);
  }

  return null;
};

const getRewardStarted = async function () {
  if (!contract) {
    return null;
  }

  const gasLimit = readOnlyGasLimit(contract);
  const value = 0;

  try {
    const { result, output } = await contract.query[
      "stakingPoolTrait::getRewardStarted"
    ](defaultCaller, {
      gasLimit,
      value,
    });

    if (result.isOk) {
      return output.toHuman().Ok;
    }
  } catch (error) {
    console.log("@_@ ", "getRewardStarted", " error >>", error.message);
  }

  return null;
};

const getTotalCountOfStakeholders = async function () {
  if (!contract) {
    return null;
  }

  const gasLimit = readOnlyGasLimit(contract);
  const value = 0;

  try {
    const { result, output } = await contract.query[
      "stakingPoolTrait::getStakedAccountsLastIndex"
    ](defaultCaller, {
      gasLimit,
      value,
    });

    if (result.isOk) {
      return new BN(output.toHuman().Ok, 10, "le").toNumber();
    }
  } catch (error) {
    console.log(
      "@_@ ",
      "getStakedAccountsLastIndex",
      " error >>",
      error.message
    );
  }

  return null;
};

const getStakedAccountsByIndex = async function (index) {
  if (!contract) {
    return null;
  }

  const gasLimit = readOnlyGasLimit(contract);
  const value = 0;

  try {
    const { result, output } = await contract.query[
      "stakingPoolTrait::getStakedAccountsByIndex"
    ](
      defaultCaller,
      {
        gasLimit,
        value,
      },
      index
    );

    if (result.isOk) {
      return output.toHuman().Ok;
    }
  } catch (error) {
    console.log("@_@ ", "getStakedAccountsByIndex", " error >>", error.message);
  }

  return null;
};

const claimRewardByAdmin = async (keypair, account, database, time) => {
  let gasLimit;
  const value = 0;

  // const keyring = new Keyring({ type: "sr25519" });
  // const PHRASE = process.env.PHRASE;
  // const keypair = keyring.createFromUri(PHRASE);
  gasLimit = await getEstimatedGas(
    keypair?.address,
    contract,
    value,
    "claimReward",
    account
  );

  return new Promise((resolve, reject) => {
    contract.tx["claimReward"]({ gasLimit, value }, account)
      .signAndSend(keypair, (result) => {
        if (result.status.isInBlock) {
          console.log(`claim reward by ${account} in a block`);
        } else if (result.status.isFinalized) {
          result.events?.forEach(
            async ({ event: { data, method, section }, phase }) => {
              if (section === "contracts" && method === "ContractEmitted") {
                const [accId, bytes] = data.map((data, _) => data).slice(0, 2);

                const contract_address = accId.toString();

                if (contract_address === staking_contract.CONTRACT_ADDRESS) {
                  const decodedEvent = abi_contract.decodeEvent(bytes);
                  let event_name = decodedEvent.event.identifier;

                  if (event_name === "ClaimEvent") {
                    const eventValues = [];
                    for (let i = 0; i < decodedEvent.args.length; i++) {
                      const value = decodedEvent.args[i];
                      eventValues.push(value.toString());
                    }

                    let obj = {
                      staker: eventValues[2],
                      staked_amount: eventValues[3] / 10 ** 12,
                      reward_amount: eventValues[4] / 10 ** 12,
                      time: time,
                    };
                    let found = await database.ClaimEvent.findOne(obj);
                    if (!found) {
                      await database.ClaimEvent.create(obj);
                      console.log("added ClaimEvent", obj);
                    }
                    console.log(`claim reward by ${account} finalized`);
                    resolve(obj);
                  }
                }
              }
            }
          );
        }
      })
      .catch((e) => {
        console.log("claimReward ERROR", e.message);
        reject(e); // Reject the promise with the error
      });
  });
};

const setClaimedStatus = async (keypair, account, state) => {
  let gasLimit;
  const value = 0;

  gasLimit = await getEstimatedGas(
    keypair?.address,
    contract,
    value,
    "stakingPoolTrait::setClaimedStatus",
    account,
    state
  );

  return new Promise((resolve, reject) => {
    contract.tx["stakingPoolTrait::setClaimedStatus"](
      { gasLimit, value },
      account,
      state
    )
      .signAndSend(keypair, (result) => {
        if (result.status.isInBlock) {
          console.log(`setClaimedStatus ${account} ${state} in a block`);
        } else if (result.status.isFinalized) {
          console.log(`setClaimedStatus ${account} ${state} finalized`);
          resolve();
        }
      })
      .catch((e) => {
        console.log("setClaimedStatus ERROR", e.message);
        reject(e); // Reject the promise with the error
      });
  });
};

const isClaimed = async function (account) {
  if (!contract) {
    return null;
  }

  const gasLimit = readOnlyGasLimit(contract);
  const value = 0;

  try {
    const { result, output } = await contract.query[
      "stakingPoolTrait::isClaimed"
    ](
      defaultCaller,
      {
        gasLimit,
        value,
      },
      account
    );

    if (result.isOk) {
      return output.toHuman().Ok;
    }
  } catch (error) {
    console.log("@_@ ", "isClaimed", " error >>", error.message);
  }

  return null;
};

module.exports = {
  setStakingContract,
  getTotalPendingUnstakedByAccount,
  getRequestUnstakeTime,
  getPendingUnstakingAmount,
  getLimitUnstakeTime,
  isAdmin,
  getIsLocked,
  getRewardStarted,
  getTotalCountOfStakeholders,
  getStakedAccountsByIndex,
  setClaimedStatus,
  isClaimed,
  claimRewardByAdmin,
};
