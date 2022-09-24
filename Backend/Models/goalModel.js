const mongoose = require("mongoose");

const goalSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Please add a text field"],
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("Goals", goalSchema);
