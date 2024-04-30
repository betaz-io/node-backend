require("dotenv").config();
const {
  getBalanceNftPlayer,
  getOwnersTokenByIndex,
} = require("../contracts/pandora_psp34_calls");
let { convertTimeStampToNumber } = require("../utils/utils");
const { STATUS, MESSAGE } = require("../utils/constant");

const db = require("../models");
const pandoraNFTQueue = db.pandoraNFTQueue;

exports.updateNFTQueue = async (req, res) => {
  try {
    if (!req.body)
      return res
        .status(400)
        .send({ status: STATUS.FAILED, message: MESSAGE.NO_INPUT });
    const { ticketId } = req.body;
    if (!ticketId)
      return res
        .status(400)
        .send({ status: STATUS.FAILED, message: MESSAGE.INVALID_INPUT });

    const record = {
      ticketId: ticketId,
    };

    let found = await pandoraNFTQueue.findOne(record);
    if (!found) {
      record.isProcessing = false;
      await pandoraNFTQueue
        .create(record)
        .then((data) => {
          if (!data) {
            res.status(404).send({
              status: STATUS.FAILED,
              message: ERROR_MESSAGE.CAN_NOT_UPDATE,
            });
          } else {
            res.send({
              ret: record,
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
    } else {
      res.send({
        status: STATUS.FAILED,
        message: MESSAGE.INVALID_INPUT,
      });
    }
  } catch (error) {
    res.status(500).send({ status: STATUS.FAILED, message: error.message });
  }
};
