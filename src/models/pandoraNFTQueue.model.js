const mongoose = require("mongoose");

const pandoraNFTQueueSchema = new mongoose.Schema({
  ticketId: {
    type: Number,
  },
  isProcessing: {
    type: Boolean,
  },
});

const pandoraNFTQueue = mongoose.model(
  "pandoraNFTQueue",
  pandoraNFTQueueSchema
);

module.exports = pandoraNFTQueue;
