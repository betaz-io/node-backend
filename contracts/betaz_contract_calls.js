let { ContractPromise, Abi } = require("@polkadot/api-contract");
let { Keyring } = require("@polkadot/api");
let { readOnlyGasLimit, getEstimatedGas } = require("../utils");
require("dotenv").config();

let contract;
let abi_contract;
let defaultCaller = process.env.DEFAULT_CALLER_ADDRESS;

const setBetazContract = (api, data) => {
  contract = new ContractPromise(
    api,
    data?.CONTRACT_ABI,
    data?.CONTRACT_ADDRESS
  );
};

const setBetazAbiContract = (data) => {
  abi_contract = new Abi(data.CONTRACT_ABI);
};

module.exports = {
  setBetazContract,
  setBetazAbiContract,
};
