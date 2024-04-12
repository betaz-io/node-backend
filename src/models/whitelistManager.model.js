const mongoose = require("mongoose");

const WhitelistManagerSchema = new mongoose.Schema({
  poolType: {
    type: String,
  },
  buyer: {
    type: String,
  },
  amount: {
    type: Number,
  },
  price: {
    type: Number,
  },
});

const WhitelistManager = mongoose.model(
  "WhitelistManager",
  WhitelistManagerSchema
);
module.exports = WhitelistManager;
