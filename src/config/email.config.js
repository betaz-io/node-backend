require("dotenv").config();

module.exports = {
  ADMIN_EMAIL: process.env.ADMIN_EMAIL.toString(),
  ADMIN_EMAIL_PASS: process.env.ADMIN_EMAIL_PASS.toString(),
};