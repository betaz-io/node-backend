const mongoose = require("mongoose");

const UpdatePlatformFeechema = new mongoose.Schema({
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

const PlatformFeeManager = mongoose.model(
  "PlatformFeeManager",
  UpdatePlatformFeechema
);

module.exports = PlatformFeeManager;
