const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  aadharCard: {
    type: String,
    required: true,
  },
  certification: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("sellers", userSchema);
