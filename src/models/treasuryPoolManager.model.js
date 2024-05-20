const mongoose = require("mongoose");

const UpdateTreasuryPoolchema = new mongoose.Schema({
    blockNumber: {
      type: Number,
    },
    contract_address: {
      type: String,
    },
    caller: {
      type: String,
    },
    from: {
      type: String,
    },
    to: {
      type: String,
    },
    amount: {
      type: Number,
    },
    time: {
      type: Number,
    },
  });

const TreasuryPoolManager = mongoose.model("TreasuryPoolManager", UpdateTreasuryPoolchema);

module.exports = TreasuryPoolManager;