const mongoose = require("mongoose");

const LoseEventSchema = new mongoose.Schema({
  blockNumber: {
    type: Number,
  },
  player: {
    type: String,
  },
  is_over: {
    type: Boolean,
  },
  random_number: {
    type: Number,
  },
  bet_number: {
    type: Number,
  },
  bet_amount: {
    type: Number,
  },
  reward_amount: {
    type: Number,
  },
  oracle_round: {
    type: Number,
  },
});

const LoseEvent = mongoose.model("LoseEvent", LoseEventSchema);

module.exports = LoseEvent;
