const mongoose = require("mongoose");

const HistoryStakingSchema = new mongoose.Schema({
  caller: {
    type: String,
  },
  amount: {
    type: Number,
  },
  currentTime: {
    type: Number,
  },
  status: {
    type: String,
  },
});

const HistoryStaking = mongoose.model("HistoryStaking", HistoryStakingSchema);

module.exports = HistoryStaking;
