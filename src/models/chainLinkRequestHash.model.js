const mongoose = require("mongoose");

const ChainLinkRequestHashSchema = new mongoose.Schema(
  {
    requestId: {
      type: String,
    },
    networkProvider: {
      type: String,
    },
    contractAddress: {
      type: String,
    },
    txHash: {
      type: String,
    },
  },
  { timestamps: true }
);

const ChainLinkRequestHash = mongoose.model(
  "ChainLinkRequestHash",
  ChainLinkRequestHashSchema
);

module.exports = ChainLinkRequestHash;
