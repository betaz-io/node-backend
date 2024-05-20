const mongoose = require("mongoose");

const pandoraNftSchema = new mongoose.Schema(
  {
    nftId: {
      type: Number,
    },
    owner: {
      type: String,
    },
    isUsed: {
      type: Boolean,
    },
    sessionId: {
      type: Number,
    },
    betNumber: {
      type: Number,
    },
    time: {
      type: Number,
    },
  },
  { timestamps: true }
);

const PandoraNft = mongoose.model("pandoraNft", pandoraNftSchema);

module.exports = PandoraNft;
