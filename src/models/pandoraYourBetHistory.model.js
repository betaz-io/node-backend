const mongoose = require("mongoose");

const pandoraYourBetHistorySchema = new mongoose.Schema({
  player: {
    type: String,
  },
  sessionId: {
    type: Number,
  },
  ticketId: {
    type: Number,
  },
  betNumber: {
    type: Number,
  },
  timeStamp: {
    type: Number,
  },
});

const PandoraYourBetHistory = mongoose.model(
  "PandoraYourBetHistory",
  pandoraYourBetHistorySchema
);

module.exports = PandoraYourBetHistory;
