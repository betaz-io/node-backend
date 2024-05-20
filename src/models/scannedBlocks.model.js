const mongoose = require("mongoose");

const ScannedBlocksSchema = new mongoose.Schema({
  lastScanned: {
    type: Boolean,
  },
  blockNumber: {
    type: Number,
  },
});

const ScannedBlocks = mongoose.model("ScannedBlocks", ScannedBlocksSchema);

module.exports = ScannedBlocks;
