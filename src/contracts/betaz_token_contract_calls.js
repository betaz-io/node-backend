let { ContractPromise, Abi } = require("@polkadot/api-contract");
let { Keyring } = require("@polkadot/api");
let { readOnlyGasLimit, getEstimatedGas } = require("../utils/utils.js");
require("dotenv").config();

const dbConfig = require("../config/db.config.js");
const chainConfig = require("../config/chain.config.js");

let contract;
let abi_contract;
let defaultCaller = chainConfig.AZ_PROVIDER;

const setBetazTokenContract = (api, data) => {
  contract = new ContractPromise(
    api,
    data?.CONTRACT_ABI,
    data?.CONTRACT_ADDRESS
  );
};

const setBetazTokenAbiContract = (data) => {
  abi_contract = new Abi(data.CONTRACT_ABI);
};

module.exports = {
  setBetazTokenContract,
  setBetazTokenAbiContract,
};
