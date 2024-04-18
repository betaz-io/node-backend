const mongoose = require("mongoose");

const pandoraNftSchema = new mongoose.Schema(
  {
    player: {
      type: String,
    },
    nftId: {
      type: Number,
    },
  },
  { timestamps: true }
);

const PandoraNft = mongoose.model("pandoraNft", pandoraNftSchema);

module.exports = PandoraNft;
