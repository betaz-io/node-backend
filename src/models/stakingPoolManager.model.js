const mongoose = require("mongoose");

const UpdateStakingPoolchema = new mongoose.Schema({
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

const StakingPoolManager = mongoose.model(
  "StakingPoolManager",
  UpdateStakingPoolchema
);

module.exports = StakingPoolManager;
