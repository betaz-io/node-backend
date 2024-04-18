require("dotenv").config();
const {
  getBalanceNftPlayer,
  getOwnersTokenByIndex,
} = require("../contracts/pandora_psp34_calls");
let { convertTimeStampToNumber } = require("../utils/utils");
const { STATUS, MESSAGE } = require("../utils/constant");

const db = require("../models");
const PandoraBetHistory = db.pandoraBetHistory;
const PandoraYourBetHistroy = db.pandoraYourBetHistory;
const PandoraNft = db.pandoraNft;

exports.updateNftByCaller = async (req, res) => {
  try {
    if (!req.body)
      return res
        .status(400)
        .send({ status: STATUS.FAILED, message: MESSAGE.NO_INPUT });
    const { caller } = req.body;
    console.log({ caller });
    if (!caller)
      return res
        .status(400)
        .send({ status: STATUS.FAILED, message: MESSAGE.INVALID_ADDRESS });

    let total = await getBalanceNftPlayer(caller);
    console.log({ total });
    let NftList = [];

    await PandoraNft.deleteMany({ player: caller });

    for (let i = 0; i < parseInt(total); i++) {
      const nftId = await getOwnersTokenByIndex(caller, i);

      const playerNft = {};

      playerNft.player = caller;
      playerNft.nftId = nftId;

      NftList.push(playerNft);
    }

    await PandoraNft.insertMany(NftList)
      .then((data) => {
        if (!data) {
          res.status(404).send({
            status: STATUS.FAILED,
            message: ERROR_MESSAGE.CAN_NOT_UPDATE,
          });
        } else {
          res.send({
            ret: NftList,
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
    let { caller, limit, offset } = req.body;
    if (!limit) limit = 15;
    if (!offset) offset = 0;
    if (!caller) {
      return res
        .status(400)
        .send({ status: STATUS.FAILED, message: MESSAGE.INVALID_ADDRESS });
    }

    let data = await PandoraNft.find({ player: caller });

    let total = data.length;

    // pagination
    data = data.slice(parseInt(offset), parseInt(offset) + parseInt(limit));

    // format result
    const dataTable = data.map((data) => ({
      player: data.player,
      nftId: data.nftId,
    }));

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
    data.sort((a, b) => (parseInt(a.timeStamp) - parseInt(b.timeStamp)) * sort);

    data = data.slice(parseInt(offset), parseInt(offset) + parseInt(limit));

    const dataTable = data.map((data) => ({
      sessionId: data.sessionId,
      chainlinkRequestId: data.chainlinkRequestId,
      betNumberWin: data.betNumberWin,
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
