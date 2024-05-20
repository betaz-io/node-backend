const mongoose = require("mongoose");

const UpdateRewardPoolchema = new mongoose.Schema({
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

const RewardPoolManager = mongoose.model(
  "RewardPoolManager",
  UpdateRewardPoolchema
);

module.exports = RewardPoolManager;
