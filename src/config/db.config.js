require("dotenv").config();

module.exports = {
  DB_CONNECTOR: process.env.DB_CONNECTOR,
  DB_HOST: process.env.MONGO_HOST || "127.0.0.1",
  DB_PORT: process.env.MONGO_PORT || 27017,
  DB_NAME: process.env.MONGO_DB_NAME,
  DB_USER: "",
  DB_PASS: "",
};
