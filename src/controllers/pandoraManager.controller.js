require("dotenv").config();
const {
  getBalanceNftPlayer,
  getOwnersTokenByIndex,
} = require("../contracts/pandora_psp34_calls");
let { convertTimeStampToNumber } = require("../utils/utils");
const { STATUS, MESSAGE } = require("../utils/constant");

const db = require("../models");
const {
  getNftInfo,
  getPlayerByNftId,
} = require("../contracts/pandora_contract_calls");
const PandoraBetHistory = db.pandoraBetHistory;
const PandoraYourBetHistroy = db.pandoraYourBetHistory;
const PandoraRewardHistory = db.pandoraRewardHistory;
const PandoraNft = db.pandoraNft;
const ChainLinkRequestHash = db.chainLinkRequestHash;

exports.updateNftByCallerAndNftId = async (req, res) => {
  try {
    if (!req.body)
      return res
        .status(400)
        .send({ status: STATUS.FAILED, message: MESSAGE.NO_INPUT });
    let { nftId } = req.body;
    if (!nftId)
      return res
        .status(400)
        .send({ status: STATUS.FAILED, message: MESSAGE.INVALID_ADDRESS });

    const filter = { nftId };
    const options = {};
    const [nftOwner, nftInfo] = await Promise.all([
      getPlayerByNftId(nftId),
      getNftInfo(nftId),
    ]);
    if (nftOwner && nftInfo) {
      options.owner = nftInfo?.owner;
      options.isUsed = nftInfo?.isUsed;
      options.sessionId = nftInfo?.sessionId;
      options.betNumber = Number(nftInfo.betNumber?.replace(/\,/g, ""));
      options.time = Number(nftInfo.time?.replace(/\,/g, ""));
    } else {
      res.status(500).send({
        status: STATUS.FAILED,
        message: ERROR_MESSAGE.CAN_NOT_UPDATE,
      });
    }

    await PandoraNft.findOneAndUpdate(filter, options)
      .then((data) => {
        if (!data) {
          res.status(404).send({
            status: STATUS.FAILED,
            message: ERROR_MESSAGE.CAN_NOT_UPDATE,
          });
        } else {
          res.send({
            ret: options,
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

exports.getNftByCaller = async (req, res) => {
  try {
    if (!req.body)
      return res
        .status(400)
        .send({ status: STATUS.FAILED, message: MESSAGE.NO_INPUT });
    let { caller, limit, offset, sort } = req.body;
    if (!limit) limit = 15;
    if (!offset) offset = 0;
    if (!sort) sort = -1;
    if (!caller) {
      return res
        .status(400)
        .send({ status: STATUS.FAILED, message: MESSAGE.INVALID_ADDRESS });
    }

    let data = await PandoraNft.find({ owner: caller });

    let total = data.length;

    data.sort((a, b) => (parseInt(a.nftId) - parseInt(b.nftId)) * sort);

    data = data.slice(parseInt(offset), parseInt(offset) + parseInt(limit));

    // format result
    const dataTable = data.map((data) => {
      let obj = {};
      if (data.isUsed) {
        obj.nftId = data.nftId;
        obj.owner = data.owner;
        obj.isUsed = data.isUsed;
        obj.sessionId = data.sessionId;
        obj.betNumber = data.betNumber;
        obj.time = data.time;
        return obj;
      } else {
        obj.nftId = data.nftId;
        obj.owner = data.owner;
        obj.isUsed = data.isUsed;
        return obj;
      }
    });

    return res.send({ status: STATUS.OK, ret: dataTable, total: total });
  } catch (error) {
    res.status(500).send({ status: STATUS.FAILED, message: error.message });
  }
};

exports.getHashByRequestId = async (req, res) => {
  try {
    if (!req.body)
      return res
        .status(400)
        .send({ status: STATUS.FAILED, message: MESSAGE.NO_INPUT });
    let { requestId } = req.body;
    if (!requestId) {
      return res
        .status(400)
        .send({ status: STATUS.FAILED, message: MESSAGE.INVALID_INPUT });
    }

    let data = await ChainLinkRequestHash.findOne({
      requestId: requestId,
    });

    return res.send({ status: STATUS.OK, ret: data });
  } catch (error) {
    res.status(500).send({ status: STATUS.FAILED, message: error.message });
  }
};

exports.getNftUsedByCaller = async (req, res) => {
  try {
    if (!req.body)
      return res
        .status(400)
        .send({ status: STATUS.FAILED, message: MESSAGE.NO_INPUT });
    let { caller, limit, offset, sort, isUsed } = req.body;
    if (!limit) limit = 15;
    if (!offset) offset = 0;
    if (!sort) sort = -1;
    if (!caller || isUsed == null) {
      return res
        .status(400)
        .send({ status: STATUS.FAILED, message: MESSAGE.INVALID_ADDRESS });
    }

    const filter = {
      owner: caller,
      isUsed: isUsed,
    };
    let data = await PandoraNft.find(filter);

    let total = data.length;

    data.sort((a, b) => (parseInt(a.nftId) - parseInt(b.nftId)) * sort);

    data = data.slice(parseInt(offset), parseInt(offset) + parseInt(limit));

    // format result
    let dataTable = [];
    if (isUsed)
      dataTable = [...data].map((data) => ({
        nftId: data.nftId,
        owner: data.owner,
        isUsed: data.isUsed,
        sessionId: data.sessionId,
        betNumber: data.betNumber,
        time: data.time,
      }));
    else {
      dataTable = [...data].map((data) => ({
        nftId: data.nftId,
        owner: data.owner,
        isUsed: data.isUsed,
      }));
    }

    return res.send({ status: STATUS.OK, ret: dataTable, total: total });
  } catch (error) {
    res.status(500).send({ status: STATUS.FAILED, message: error.message });
  }
};

exports.getPandoraYourBetHistory = async (req, res) => {
  try {
    if (!req.body)
      return res
        .status(400)
        .send({ status: STATUS.FAILED, message: MESSAGE.NO_INPUT });
    let { caller, limit, offset, sort } = req.body;
    if (!limit) limit = 15;
    if (!offset) offset = 0;
    if (!sort) sort = -1;
    if (!caller) {
      return res
        .status(400)
        .send({ status: STATUS.FAILED, message: MESSAGE.INVALID_SESSION_ID });
    }

    let data = await PandoraYourBetHistroy.find({ player: caller });

    let total = data.length;

    // sort
    data.sort((a, b) => (parseInt(a.timeStamp) - parseInt(b.timeStamp)) * sort);

    data = data.slice(parseInt(offset), parseInt(offset) + parseInt(limit));

    const dataTable = data.map((data) => ({
      sessionId: data.sessionId,
      ticketId: data.ticketId,
      betNumber: data.betNumber,
      timeStamp: data.timeStamp,
    }));

    return res.send({ status: STATUS.OK, ret: dataTable, total: total });
  } catch (error) {
    res.status(500).send({ status: STATUS.FAILED, message: error.message });
  }
};

exports.getPandoraBetHistory = async (req, res) => {
  try {
    if (!req.body)
      return res
        .status(400)
        .send({ status: STATUS.FAILED, message: MESSAGE.NO_INPUT });
    let { limit, offset, sort } = req.body;
    if (!limit) limit = 15;
    if (!offset) offset = 0;
    if (!sort) sort = -1;

    let data = await PandoraBetHistory.find();

    let total = data.length;
    // sort
    data.sort(
      (a, b) =>
        (parseInt(new Date(a?.createdAt).getTime()) -
          parseInt(new Date(b?.createdAt).getTime())) *
        sort
    );

    data = data.slice(parseInt(offset), parseInt(offset) + parseInt(limit));

    const dataTable = data.map((data) => ({
      sessionId: data.sessionId,
      chainlinkRequestId: data.chainlinkRequestId,
      betNumberWin: {
        betNumberWin: data.betNumberWin,
        txHash: data.txHash,
      },
      rewardAmount: data.rewardAmount,
      totalTicketWin: data.totalTicketWin,
      playerWin: data.playerWin,
      ticketIdWin: data.ticketIdWin?.join(", "),
    }));

    return res.send({ status: STATUS.OK, ret: dataTable, total: total });
  } catch (error) {
    res.status(500).send({ status: STATUS.FAILED, message: error.message });
  }
};

exports.getPandoraRewardHistory = async (req, res) => {
  try {
    if (!req.body)
      return res
        .status(400)
        .send({ status: STATUS.FAILED, message: MESSAGE.NO_INPUT });
    let { receiver, limit, offset, sort } = req.body;
    if (!limit) limit = 15;
    if (!offset) offset = 0;
    if (!sort) sort = -1;
    if (!receiver) {
      return res
        .status(400)
        .send({ status: STATUS.FAILED, message: MESSAGE.INVALID_SESSION_ID });
    }

    let data = await PandoraRewardHistory.find({ receiver: receiver });

    let total = data.length;

    // sort
    data.sort((a, b) => (parseInt(a.time) - parseInt(b.time)) * sort);

    data = data.slice(parseInt(offset), parseInt(offset) + parseInt(limit));

    const dataTable = data.map((data) => ({
      withdrawer: data.withdrawer,
      receiver: data.receiver,
      amount: data.amount,
      time: data.time,
    }));

    return res.send({ status: STATUS.OK, ret: dataTable, total: total });
  } catch (error) {
    res.status(500).send({ status: STATUS.FAILED, message: error.message });
  }
};
