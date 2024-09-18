const mongoose = require("mongoose");
const bcrypt = require("bcrypt"); // Import bcrypt

const buyerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 20,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^([A-Za-z0-9]{5,15})@([A-Za-z]{5,10}).com$/,
  },
  phone: {
    type: String,
    required: true,
    match: /^[0-9]{10}$/, // Assuming phone numbers have 10 digits
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
    maxlength: 1024, // Increased length for bcrypt hashed passwords
  },
  address: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zip: {
    type: String,
    required: true,
    match: /^[0-9]{5,10}$/, // Assuming ZIP codes between 5 and 10 digits
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Method to compare provided password with hashed password
buyerSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const Buyer = mongoose.model("buyers", buyerSchema);

module.exports = Buyer;
