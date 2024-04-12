const mongoose = require("mongoose");

const UpdatePandoraPoolchema = new mongoose.Schema({
    blockNumber: {
      type: Number,
    },
    contract_address: {
      type: String,
    },
    caller: {
      type: String,
    },
    from: {
      type: String,
    },
    to: {
      type: String,
    },
    amount: {
      type: Number,
    },
    time: {
      type: Number,
    },
  });

const PandoraPoolManager = mongoose.model("PandoraPoolManager", UpdatePandoraPoolchema);

module.exports = PandoraPoolManager;