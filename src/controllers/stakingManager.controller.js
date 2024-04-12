require("dotenv").config();
const {
  getTotalPendingUnstakedByAccount,
  getRequestUnstakeTime,
  getPendingUnstakingAmount,
  getLimitUnstakeTime,
} = require("../contracts/staking_contract_calls");
let { convertTimeStampToNumber } = require("../utils/utils");
const { STATUS, MESSAGE } = require("../utils/constant");

const db = require("../models");
const StakeManager = db.stakeManager;
const HistoryStaking = db.historyStaking;
const ClaimEvent = db.claimEvent;

exports.updatePendingUnstake = async (req, res) => {
  try {
    if (!req.body)
      return res
        .status(400)
        .send({ status: STATUS.FAILED, message: MESSAGE.NO_INPUT });
    const { caller } = req.body;

    let limitTime = await getLimitUnstakeTime();
    let total = await getTotalPendingUnstakedByAccount(caller);
    let pendingUnstakeList = [];

    await StakeManager.deleteMany({ caller });

    for (let i = 0; i < parseInt(total); i++) {
      let [amount, time] = await Promise.all([
        getPendingUnstakingAmount(caller, i),
        getRequestUnstakeTime(caller, i),
      ]);

      const pendingUnstakeInfo = {};

      pendingUnstakeInfo.caller = caller;
      pendingUnstakeInfo.callerIndex = i;
      pendingUnstakeInfo.amount = amount.replace(/\,/g, "") / 10 ** 12;
      pendingUnstakeInfo.time =
        convertTimeStampToNumber(time) + convertTimeStampToNumber(limitTime);

      pendingUnstakeList.push(pendingUnstakeInfo);
    }

    // console.log({ pendingUnstakeList });

    await StakeManager.insertMany(pendingUnstakeList)
      .then((data) => {
        if (!data) {
          res.status(404).send({
            status: STATUS.FAILED,
            message: ERROR_MESSAGE.CAN_NOT_UPDATE,
          });
        } else {
          res.send({
            status: STATUS.OK,
            message: MESSAGE.SUCCESS,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          status: STATUS.FAILED,
          message: ERROR_MESSAGE.CAN_NOT_UPDATE,
        });
      });
  } catch (error) {
    res.status(500).send({ status: STATUS.FAILED, message: error.message });
  }
};

exports.getPendingUnstake = async (req, res) => {
  try {
    if (!req.body)
      return res
        .status(400)
        .send({ status: STATUS.FAILED, message: MESSAGE.NO_INPUT });
    let { caller, limit, offset, status } = req.body;
    if (!limit) limit = 15;
    if (!offset) offset = 0;
    if (!status) status = 0;
    if (!caller) {
      return res
        .status(400)
        .send({ status: STATUS.FAILED, message: MESSAGE.INVALID_ADDRESS });
    }

    let data = await StakeManager.find({ caller: caller });

    let total = data.length;
    if (status == 1) {
      data = data.filter((e) => {
        return +new Date() < e.time;
      });
      total = data.length;
    } else if (status == 2) {
      data = data.filter((e) => {
        return +new Date() >= e.time;
      });
      total = data.length;
    }

    // pagination
    data = data.slice(parseInt(offset), parseInt(offset) + parseInt(limit));

    // format result
    const dataTable = data.map((data) => ({
      index: data.callerIndex,
      caller: data.caller,
      amount: data.amount,
      time: data.time,
    }));

    return res.send({ status: STATUS.OK, ret: dataTable, total: total });
  } catch (error) {
    res.status(500).send({ status: STATUS.FAILED, message: error.message });
  }
};

exports.updateHistoryStaking = async (req, res) => {
  try {
    if (!req.body)
      return res
        .status(400)
        .send({ status: STATUS.FAILED, message: MESSAGE.NO_INPUT });
    const { caller, amount, currentTime, status } = req.body;

    const historyOptions = {
      caller: caller,
      amount: amount,
      currentTime: currentTime,
      status: status,
    };

    await HistoryStaking.create(historyOptions)
      .then((data) => {
        if (!data) {
          res.status(404).send({
            status: STATUS.FAILED,
            message: ERROR_MESSAGE.CAN_NOT_UPDATE,
          });
        } else {
          res.send({
            status: STATUS.OK,
            message: MESSAGE.SUCCESS,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message: "Could not added",
        });
      });
  } catch (error) {
    res.status(500).send({ status: STATUS.FAILED, message: error.message });
  }
};

exports.getHistoryStaking = async (req, res) => {
  try {
    if (!req.body)
      return res
        .status(400)
        .send({ status: STATUS.FAILED, message: MESSAGE.NO_INPUT });
    let { caller, limit, offset, status } = req.body;
    if (!limit) limit = 15;
    if (!offset) offset = 0;
    if (!status) status = 0;
    if (!caller) {
      return res
        .status(400)
        .send({ status: STATUS.FAILED, message: MESSAGE.INVALID_ADDRESS });
    }

    let data = await HistoryStaking.find({ caller: caller }).sort({
      currentTime: -1,
    });

    let total = data.length;

    // pagination
    data = data.slice(parseInt(offset), parseInt(offset) + parseInt(limit));

    // format result
    const dataTable = data.map((data) => ({
      caller: data.caller,
      amount: data.amount,
      currentTime: data.currentTime,
      status: data.status,
    }));

    return res.send({ status: STATUS.OK, ret: dataTable, total: total });
  } catch (error) {
    res.status(500).send({ status: STATUS.FAILED, message: error.message });
  }
};

exports.getRewardByCaller = async (req, res) => {
  try {
    if (!req.body)
      return res
        .status(400)
        .send({ status: STATUS.FAILED, message: MESSAGE.NO_INPUT });
    const { caller, limit, offset } = req.body;
    if (!limit) limit = 15;
    if (!offset) offset = 0;
    if (!caller) {
      return res
        .status(400)
        .send({ status: STATUS.FAILED, message: MESSAGE.INVALID_INPUT });
    }

    let data = await ClaimEvent.find({ staker: caller });

    let total = data.length;

    // pagination
    data = data.slice(parseInt(offset), parseInt(offset) + parseInt(limit));

    // format result
    const dataTable = data.map((data) => ({
      staker: data.staker,
      time: data.time,
      reward_amount: data.reward_amount,
    }));

    return res.send({ status: STATUS.OK, ret: dataTable, total: total });
  } catch (error) {
    res.status(500).send({ status: STATUS.FAILED, message: error.message });
  }
};
