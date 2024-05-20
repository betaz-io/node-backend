const mongoose = require("mongoose");

const EmailSubscribeSchema = new mongoose.Schema(
  {
    email: {
      type: String,
    },
  },
  { timestamps: true }
);

const EmailSubscribe = mongoose.model("EmailSubscribe", EmailSubscribeSchema)

module.exports = EmailSubscribe;
