let { ContractPromise, Abi } = require("@polkadot/api-contract");
let { Keyring } = require("@polkadot/api");
let { readOnlyGasLimit, getEstimatedGas } = require("../utils/utils");
require("dotenv").config();

let contract;
let abi_contract;
let defaultCaller = process.env.DEFAULT_CALLER_ADDRESS;

const setBetRandomContract = (api, data) => {
  contract = new ContractPromise(
    api,
    data?.CONTRACT_ABI,
    data?.CONTRACT_ADDRESS
  );
};

const setBetRandomContractAbiContract = (data) => {
  abi_contract = new Abi(data.CONTRACT_ABI);
};

const getRandomNumberForRound = async function (round) {
  if (!contract) {
    return null;
  }

  const gasLimit = readOnlyGasLimit(contract);
  const value = 0;

  try {
    const { result, output } = await contract.query["getRandomNumberForRound"](
      defaultCaller,
      {
        gasLimit,
        value,
      },
      { u64: round }
    );

    if (result.isOk) {
      const a = output.toHuman().Ok;
      return a;
    }
  } catch (error) {
    console.log("@_@ ", "getRandomNumberForRound", " error >>", error.message);
  }

  return null;
};

module.exports = {
  setBetRandomContract,
  setBetRandomContractAbiContract,
  getRandomNumberForRound,
};
