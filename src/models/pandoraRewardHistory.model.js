const mongoose = require("mongoose");

const PandoraRewardHistorySchema = new mongoose.Schema({
  withdrawer: {
    type: String,
  },
  receiver: {
    type: String,
  },
  amount: {
    type: Number,
  },
  time: {
    type: Number,
  },
});

const PandoraRewardHistory = mongoose.model("PandoraRewardHistory", PandoraRewardHistorySchema);

module.exports = PandoraRewardHistory;
