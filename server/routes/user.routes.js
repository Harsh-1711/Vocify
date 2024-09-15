const express = require("express");
const { handleSignup, handleLogin } = require("../controllers/user");

const router = express.Router();

router.post("/signup", handleSignup).post("/login", handleLogin);

module.exports = router;
