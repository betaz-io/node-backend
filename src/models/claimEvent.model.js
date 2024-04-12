const mongoose = require("mongoose");

const ClaimEventSchema = new mongoose.Schema({
  staker: {
    type: String,
  },
  staked_amount: {
    type: Number,
  },
  reward_amount: {
    type: Number,
  },
  time: {
    type: Number,
  },
});

const ClaimEvent = mongoose.model("ClaimEvent", ClaimEventSchema);

module.exports = ClaimEvent;
