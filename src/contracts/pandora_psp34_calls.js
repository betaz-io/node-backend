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

const setPadoraPsp34Contract = (api, data) => {
  contract = new ContractPromise(
    api,
    data?.CONTRACT_ABI,
    data?.CONTRACT_ADDRESS
  );
};

const setPandoraPsp34AbiContract = (data) => {
  abi_contract = new Abi(data.CONTRACT_ABI);
};

const getBalanceNftPlayer = async function (player) {
  if (!contract) {
    return null;
  }

  const gasLimit = readOnlyGasLimit(contract);
  const value = 0;

  try {
    const { result, output } = await contract.query["psp34::balanceOf"](
      defaultCaller,
      {
        gasLimit,
        value,
      },
      player
    );

    if (result.isOk) {
      const a = output.toHuman().Ok;
      return a;
    }
  } catch (error) {
    console.log("@_@ ", "getBalanceNftPlayer", " error >>", error.message);
  }

  return null;
};

const geNftOwner = async function (nftId) {
  if (!contract) {
    return null;
  }

  const gasLimit = readOnlyGasLimit(contract);
  const value = 0;

  try {
    const { result, output } = await contract.query["psp34::ownerOf"](
      defaultCaller,
      {
        gasLimit,
        value,
      },
      {u64: nftId}
    );

    if (result.isOk) {
      const a = output.toHuman().Ok;
      return a;
    }
  } catch (error) {
    console.log("@_@ ", "psp34ownerOf", " error >>", error.message);
  }

  return null;
};

const getOwnersTokenByIndex = async function (player, index) {
  if (!contract) {
    return null;
  }

  const gasLimit = readOnlyGasLimit(contract);
  const value = 0;

  try {
    const { result, output } = await contract.query[
      "psp34Enumerable::ownersTokenByIndex"
    ](
      defaultCaller,
      {
        gasLimit,
        value,
      },
      player,
      index
    );

    if (result.isOk) {
      const a = output.toHuman().Ok;
      return a?.Ok?.U64;
    }
  } catch (error) {
    console.log("@_@ ", "getOwnersTokenByIndex", " error >>", error.message);
  }

  return null;
};

const getTotalNFT = async function () {
  if (!contract) {
    return null;
  }

  const gasLimit = readOnlyGasLimit(contract);
  const value = 0;

  try {
    const { result, output } = await contract.query["psp34Traits::getLastTokenId"](
      defaultCaller,
      {
        gasLimit,
        value,
      },
    );

    if (result.isOk) {
      const a = output.toHuman().Ok;
      return a;
    }
  } catch (error) {
    console.log("@_@ ", "getLastTokenId", " error >>", error.message);
  }

  return null;
};

module.exports = {
  setPadoraPsp34Contract,
  setPandoraPsp34AbiContract,
  getBalanceNftPlayer,
  getOwnersTokenByIndex,
  getTotalNFT,
  geNftOwner
};
