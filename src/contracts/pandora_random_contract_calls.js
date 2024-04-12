// ETH
const { ethers } = require("ethers");

const dbConfig = require("../config/db.config.js");
const chainConfig = require("../config/chain.config.js");

const private_key = chainConfig.METAMASK_WALLET_PRIVATE_KEY;
let contract;
let signer;

const setConsumerContract = (data, eth_provider) => {
  signer = new ethers.Wallet(private_key, eth_provider);
  contract = new ethers.Contract(
    data.CONTRACT_ADDRESS,
    data.CONTRACT_ABI.abi,
    signer
  );
};

const getLastRequestId = async function () {
  if (!contract) {
    return null;
  }

  return await contract.lastRequestId();
};

const requestRandomWords = async function (session_id) {
  if (!contract) {
    return null;
  }

  try {
    const tx = await contract.requestRandomWords(session_id);

    // // Check the transaction status
    // tx.wait().then(async (receipt) => {
    //   if (receipt && receipt.status === 1) {
    //     console.log("Transaction successful");
    //   } else {
    //     console.log("Transaction failed");
    //   }
    // });
  } catch (error) {
    console.error("error", error);
  }
};

const getRequestStatus = async function (requestId) {
  if (!contract) {
    return null;
  }

  return await contract.getRequestStatus(requestId);
};

module.exports = {
  getLastRequestId,
  getRequestStatus,
  requestRandomWords,
  setConsumerContract,
};
