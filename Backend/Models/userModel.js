const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a Username"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please add an Email"],
  },
  password: {
    type: String,
    required: [true, "Please add a password"],
  },
}, {
    timestamps: true,
});

module.exports = mongoose.model('User', userSchema);