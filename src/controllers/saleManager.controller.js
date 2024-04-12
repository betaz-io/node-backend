require("dotenv").config();
const { STATUS, MESSAGE, ERROR_MESSAGE } = require("../utils/constant");

const db = require("../models");
const WhitelistManager = db.whitelistManager;

exports.addWhitelist = async (req, res) => {
  try {
    const { poolType, buyer, amount, price } = req.body;
    if (!req.body)
      return res
        .status(400)
        .send({ status: STATUS.FAILED, message: MESSAGE.NO_INPUT });

    const whitelistOptions = {
      poolType: poolType,
      buyer: buyer,
      amount: amount,
      price: price,
    };

    await WhitelistManager.create(whitelistOptions)
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
      .catch((error) => {
        console.log(error);
        res.status(500).send({ status: STATUS.FAILED, message: error.message });
      });
  } catch (error) {
    res.status(500).send({ status: STATUS.FAILED, message: error.message });
  }
};

exports.updateWhitelist = async (req, res) => {
  try {
    if (!req.body)
      return res
        .status(400)
        .send({ status: STATUS.FAILED, message: MESSAGE.NO_INPUT });
    const { poolType, buyer, amount, price } = req.body;

    const filter = {
      poolType: poolType,
      buyer: buyer,
    };

    const update = {
      amount: amount,
      price: price,
    };

    await WhitelistManager.findOneAndUpdate(filter, update)
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
      .catch((error) => {
        console.log(error);
        res.status(500).send({ status: STATUS.FAILED, message: error.message });
      });
  } catch (error) {
    res.status(500).send({ status: STATUS.FAILED, message: error.message });
  }
};

exports.getWhitelist = async (req, res) => {
  try {
    if (!req.body)
      return res
        .status(400)
        .send({ status: STATUS.FAILED, message: MESSAGE.NO_INPUT });
    const { poolType, limit, offset } = req.body;
    if (!limit) limit = 15;
    if (!offset) offset = 0;
    if (!poolType) {
      return res
        .status(400)
        .send({ status: STATUS.FAILED, message: MESSAGE.INVALID_INPUT });
    }

    let data = await WhitelistManager.find({ poolType: poolType });

    let total = data.length;

    // pagination
    data = data.slice(parseInt(offset), parseInt(offset) + parseInt(limit));

    // format result
    const dataTable = data.map((data) => ({
      // poolType: data.poolType,
      buyer: data.buyer,
      amount: data.amount,
      price: data.price,
    }));

    return res.send({ status: STATUS.OK, ret: dataTable, total: total });
  } catch (error) {
    res.status(500).send({ status: STATUS.FAILED, message: error.message });
  }
};
