require("dotenv").config();
let { decodeAddress, encodeAddress } = require("@polkadot/keyring");
let { hexToU8a, isHex, BN, BN_ONE } = require("@polkadot/util");
let { ContractPromise } = require("@polkadot/api-contract");
let { Keyring } = require("@polkadot/api");

const toStream = require("it-to-stream");
let FileType = require("file-type");
let axios = require("axios");

module.exports.send_telegram_message = async (message) => {
  const { data } = await axios({
    baseURL:
      "https://api.telegram.org/bot5345932208:AAHTgUrXV3TBDsJpASGRzh5_NxRpt1RV4ws",
    url: "/sendMessage",
    method: "post",
    data: {
      chat_id: -646752258,
      text: message,
    },
    headers: {
      "Content-Type": "application/json",
      "cache-control": "no-cache",
      "Access-Control-Allow-Origin": "*",
    },
  });
};

module.exports.splitFileName = function (path) {
  return str.split("\\").pop().split("/").pop();
};

module.exports.randomString = function (length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

module.exports.getFileTypeFromCID = async function (ipfs, cid) {
  let fileExt = await FileType.fromStream(
    toStream(
      ipfs.cat(cid, {
        length: 100, // or however many bytes you need
      })
    )
  );
  return fileExt;
};

module.exports.isValidAddressPolkadotAddress = function (address) {
  try {
    encodeAddress(isHex(address) ? hexToU8a(address) : decodeAddress(address));

    return true;
  } catch (error) {
    //console.log(error);
    return false;
  }
};

module.exports.delay = function (timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

module.exports.todayFolder = function () {
  var dateObj = new Date();
  var month = dateObj.getUTCMonth() + 1; //months = require(1-12
  var day = dateObj.getUTCDate();
  var year = dateObj.getUTCFullYear();
  var hour = dateObj.getHours();

  return year + "/" + month + "/" + day + "/" + hour;
};

// randomNumber
module.exports.randomInt = function (min, max) {
  const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomValue;
};

module.exports.convertTimeStampToNumber = function (timeStamp) {
  let endTimeString = timeStamp ? timeStamp.toString() : 0;
  let endTimeWithoutCommas = endTimeString
    ? endTimeString.replace(/\,/g, "")
    : "";
  return +new Date(parseInt(endTimeWithoutCommas));
}

// getEstimatedGas
const toContractAbiMessage = (contractPromise, message) => {
  const value = contractPromise.abi.messages.find((m) => m.method === message);

  if (!value) {
    const messages = contractPromise?.abi.messages
      .map((m) => m.method)
      .join(", ");

    const error = `"${message}" not found in metadata.spec.messages: [${messages}]`;
    console.error(error);

    return { ok: false, error };
  }

  return { ok: true, value };
};

// readOnlyGasLimit
module.exports.readOnlyGasLimit = function (contract) {
  if (!contract) {
    console.log("contract invalid...");
    return;
  }
  try {
    const ret = contract?.api?.registry?.createType("WeightV2", {
      refTime: new BN(1_000_000_000_000),
      proofSize: new BN(5_000_000_000_000).isub(BN_ONE),
    });

    return ret;
  } catch (error) {
    console.log("error", error);
  }
};

async function getGasLimit(
  api,
  userAddress,
  message,
  contract,
  options = {},
  args = []
) {
  const abiMessage = toContractAbiMessage(contract, message);

  if (!abiMessage.ok) return abiMessage;

  const { value, gasLimit, storageDepositLimit } = options;

  const { gasRequired } = await api.call.contractsApi.call(
    userAddress,
    contract.address,
    value ?? new BN(0),
    gasLimit ?? null,
    storageDepositLimit ?? null,
    abiMessage.value.toU8a(args)
  );

  return { ok: true, value: gasRequired };
}

module.exports.getEstimatedGas = async function (
  address,
  contract,
  value,
  queryName,
  ...args
) {
  let ret;
  try {
    const gasLimitResult = await getGasLimit(
      contract?.api,
      address,
      queryName,
      contract,
      { value },
      args
    );

    if (!gasLimitResult.ok) {
      console.log(queryName, "getEstimatedGas err", gasLimitResult.error);
      return;
    }

    ret = gasLimitResult?.value;
  } catch (error) {
    console.log("error fetchGas xx>>", error.message);
  }

  return ret;
};
