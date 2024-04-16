require("dotenv").config();
const { } = require("../contracts/pandora_contract_calls");
let { convertTimeStampToNumber } = require("../utils/utils");
const { STATUS, MESSAGE } = require("../utils/constant");

const db = require("../models");
const PandoraBetHistory = db.pandoraBetHistory;
const PandoraYourBetHistroy = db.pandoraYourBetHistory;

exports.updatePendingUnstake = async (req, res) => {
  // ....


};

exports.getPandoraYourBetHistory = async (req, res) => {
  try {
    if (!req.body)
      return res
        .status(400)
        .send({ status: STATUS.FAILED, message: MESSAGE.NO_INPUT });
    let { sessionId, limit, offset } = req.body;
    if (!limit) limit = 15;
    if (!offset) offset = 0;

    if (!sessionId) {
      return res
        .status(400)
        .send({ status: STATUS.FAILED, message: MESSAGE.INVALID_SESSION_ID });
    }

    let data = await PandoraYourBetHistroy.find({ sessionId: sessionId }).sort({
      timeStamp: -1,
    });

    let total = data.length;

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
