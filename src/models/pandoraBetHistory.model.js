const mongoose = require("mongoose");

const pandoraBetHistorySchema = new mongoose.Schema(
  {
    sessionId: {
      type: Number,
    },
    chainlinkRequestId: {
      type: String,
    },
    betNumberWin: {
      type: Number,
    },
    rewardAmount: {
      type: Number,
    },
    totalTicketWin: {
      type: Number,
    },
    playerWin: {
      type: String,
    },
    ticketIdWin: {
      type: Array,
    },
    txHash: {
      type: String,
    }
  },
  { timestamps: true }
);

const PandoraBetHistory = mongoose.model(
  "PandoraBetHistory",
  pandoraBetHistorySchema
);

module.exports = PandoraBetHistory;
