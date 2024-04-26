require("dotenv").config();
const EACH_DAY = "0 0 * * *"; // At 00:00 every day
const EACH_HOUR = "0 * * * *"; // Every 1 hour
const EACH_3_HOUR = "0 */3 * * *"; // Every 3 hours
const EACH_MINUTE = "* * * * *"; // Every 1 minute
const EACH_3_MINUTES = "*/3 * * * *"; // Every 3 minute
const EACH_5_MINUTES = "*/5 * * * *"; // Every 5 minute
const EACH_7_MINUTES = "*/7 * * * *"; // Every 7 minute
const EACH_11_MINUTES = "*/11 * * * *"; // Every 11 minute
const EACH_13_MINUTES = "*/13 * * * *"; // Every 13 minute
const EACH_15_MINUTES = "*/15 * * * *"; // Every 15 minute
const EACH_30_MINUTES = "*/30 * * * *"; // Every 30 minutes
const EACH_SECOND = "*/1 * * * * *"; // Every 1 second
const EACH_3_SECONDS = "*/3 * * * * *"; // Every 3 seconds
const EACH_5_SECONDS = "*/5 * * * * *"; // Every 5 seconds
const EACH_7_SECONDS = "*/7 * * * * *"; // Every 7 seconds
const EACH_11_SECONDS = "*/11 * * * * *"; // Every 11 seconds
const EACH_13_SECONDS = "*/13 * * * * *"; // Every 13 seconds
const EACH_10_SECONDS = "*/10 * * * * *"; // Every 10 seconds
const EACH_15_SECONDS = "*/15 * * * * *"; // Every 15 seconds
const EACH_30_SECONDS = "*/30 * * * * *"; // Every 30 seconds

const STATUS = {
  FAILED: "FAILED",
  OK: "OK",
};

const MESSAGE = {
  SUCCESS: "SUCCESS",
  NO_INPUT: "No Input",
  NO_ADDRESS: "No address",
  INVALID_ADDRESS: "Invalid Address",
  INVALID_INPUT: "Invalid Input",
  INVALID_AUTHENTICATION: "Invalid Authentication",
  NOT_EXIST_ADDRESS: "Not Exist Address",
  INPUT_ALREADY_EXIST: "Input already exist",
};

const ERROR_MESSAGE = {
  SENDING_MAIL: "Error sending email",
  CAN_NOT_UPDATE: "Cannot update. Maybe data was not found!",
};

const CRONJOB_TIME = {
  AZ_PANDORA_FLOW_COLLECTOR: process.env.CRONJOB_TIME_AZ_PANDORA_FLOW_COLLECTOR,
  EACH_MINUTE: EACH_MINUTE,
  EACH_3_MINUTES: EACH_3_MINUTES,
  EACH_5_MINUTES: EACH_5_MINUTES,
  EACH_7_MINUTES: EACH_7_MINUTES,
  EACH_DAY: EACH_DAY,
};

const CRONJOB_ENABLE = {
  AZ_PANDORA_FLOW_COLLECTOR:
    process.env.IS_ENABLE_JOB_AZ_PANDORA_FLOW_COLLECTOR == "true",
  AZ_PANDORA_NFT_QUEUE_COLLECTOR:
    process.env.IS_ENABLE_JOB_AZ_PANDORA_NFT_QUEUE_COLLECTOR == "true",
  AZ_PANDORA_NFT_SCAN_ALL_COLLECTOR:
    process.env.IS_ENABLE_JOB_AZ_PANDORA_NFT_SCAN_ALL_COLLECTOR == "true",
};

const CONFIG_TYPE_NAME = {
  AZ_PANDORA_FLOW_COLLECTOR: "CronJobAzPandoraFlowCollector",
  AZ_PROCESSING_ALL_QUEUE_NFT: "CronJobAzProcessingQueueNft",
  AZ_PROCESSING_ALL_NFT: "CronJobAzProcessingAllNft",
};

const SOCKET_STATUS = {
  CONNECTED: "connected",
  READY: "ready",
  ERROR: "error",
};
let global_vars = {
  socketStatus: "error",
  socketStatusLocal: "error",
  caller: process.env.DEFAULT_CALLER_ADDRESS
    ? process.env.DEFAULT_CALLER_ADDRESS
    : "",
  isScanning: false,
  is_check_NFT_queue_all: false,
  is_scan_NFT_all: false,
};

const STAKING_HISTORY_STATUS = {
  STAKE: "Stake",
  REQUEST_UNSTAKE: "Request unstake",
  CANCEL_REQUEST_UNSTAKE: "Cancel request unstake",
  UNSTAKE: "Unstake",
};

const CONFIG_QUEUE_SCAN = {
  MAX_NFT_QUEUE_ALL_IN_PROCESSING: process.env.MAX_NFT_QUEUE_ALL_IN_PROCESSING
    ? parseInt(process.env.MAX_NFT_QUEUE_ALL_IN_PROCESSING)
    : 1000,
};

module.exports = {
  STATUS: STATUS,
  MESSAGE: MESSAGE,
  CRONJOB_TIME: CRONJOB_TIME,
  CRONJOB_ENABLE: CRONJOB_ENABLE,
  CONFIG_TYPE_NAME: CONFIG_TYPE_NAME,
  SOCKET_STATUS: SOCKET_STATUS,
  ERROR_MESSAGE: ERROR_MESSAGE,
  global_vars: global_vars,
  STAKING_HISTORY_STATUS: STAKING_HISTORY_STATUS,
  CONFIG_QUEUE_SCAN: CONFIG_QUEUE_SCAN,
};
