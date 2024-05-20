const mongoose = require("mongoose");

const UpdateCorePoolchema = new mongoose.Schema({
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

const CorePoolManager = mongoose.model("CorePoolManager", UpdateCorePoolchema);

module.exports = CorePoolManager;
