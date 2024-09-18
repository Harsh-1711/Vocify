// server/routes/buyer.routes.js
const express = require("express");
const {
  handleBuyerSignup,
  handleBuyerLogin,
} = require("../controllers/buyerController");

const router = express.Router();

// Signup route for buyers
router.post("/signup", handleBuyerSignup);

// Login route for buyers
router.post("/login", handleBuyerLogin);

module.exports = router;
