const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },

  password: {
    type: String,
    required: true,
  },

  verificationCode: {
    type: String,
    default: "",
  },

  createdAt: { type: Date, default: Date.now },

  updatedAt: { type: Date, default: Date.now },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
