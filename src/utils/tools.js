require("dotenv").config();

module.exports.convertToUTCTime = (date) => {
  return date.toISOString().replace(/T/, " ").replace(/\..+/, "");
};
