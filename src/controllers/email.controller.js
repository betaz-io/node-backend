require("dotenv").config();
const nodemailer = require("nodemailer");
const emailConfig = require("../config/email.config");
const { STATUS, MESSAGE, ERROR_MESSAGE } = require("../utils/constant");

const db = require("../models");
const EmailSubscribe = db.email;

const adminEmail = emailConfig.ADMIN_EMAIL;
const adminEmailPass = emailConfig.ADMIN_EMAIL_PASS;

exports.sendEmail = async (req, res) => {
  try {
    if (!req.body)
      return res
        .status(400)
        .send({ status: STATUS.FAILED, message: MESSAGE.NO_INPUT });
    const { email, subject, text } = req.body;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: adminEmail,
        pass: adminEmailPass,
      },
    });

    const mailOptions = {
      from: adminEmail,
      to: email,
      subject: subject,
      text: text,
    };

    const existingEmail = await EmailSubscribe.findOne({
      email: email,
    });
    if (!existingEmail) {
      await EmailSubscribe.create({ email });
    }

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.status(500).send({ status: STATUS.FAILED, message: error.message });
      } else {
        console.log("Email sent: " + info.response);
        res.send({
          status: STATUS.OK,
          ret: email,
        });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ status: STATUS.FAILED, message: error.message });
  }
};

exports.getSubcribeEmail = async (req, res) => {
  try {
    let limit = req.body.limit;
    let offset = req.body.offset;
    if (!limit) limit = 15;
    if (!offset) offset = 0;

    let data = await EmailSubscribe.find();

    let total = data.length;

    // pagination
    data = data.slice(parseInt(offset), parseInt(offset) + parseInt(limit));

    // format result
    const dataTable = data.map((data) => ({
      email: data.email,
      subcribeAt: data.createdAt,
    }));

    return res.send({ status: STATUS.OK, ret: dataTable, total: total });
  } catch (error) {
    res.status(500).send({ status: STATUS.FAILED, message: error.message });
  }
};

exports.getEmailExist = async (req, res) => {
  try {
    if (!req.body)
      return res
        .status(400)
        .send({ status: STATUS.FAILED, message: MESSAGE.NO_INPUT });
    const { email } = req.body;
    if (!email)
      return res
        .status(400)
        .send({ status: STATUS.FAILED, message: MESSAGE.INVALID_INPUT });

    const existingEmail = await EmailSubscribe.findOne({
      email: email,
    });

    return res.send({ status: STATUS.OK, ret: existingEmail?.email });
  } catch (error) {
    res.status(500).send({ status: STATUS.FAILED, message: error.message });
  }
};
