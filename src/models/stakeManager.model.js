const mongoose = require("mongoose");

const StakeManagerSchema = new mongoose.Schema({
  caller: {
    type: String,
  },
  amount: {
    type: Number,
  },
  callerIndex: {
    type: Number,
  },
  time: {
    type: Number,
  },
});

const stakeManager = mongoose.model("PendingUnstake", StakeManagerSchema);

module.exports = stakeManager;
