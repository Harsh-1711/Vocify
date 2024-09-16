const express = require("express");
const router = express.Router();
const { handleSignup, handleLogin } = require("../controllers/user");
const upload = require("../middlewares/multer");

// Signup route with file uploads
router.post(
  "/signup",
  upload.fields([
    { name: "aadharCard", maxCount: 1 },
    { name: "certification", maxCount: 1 },
  ]),
  handleSignup
);

// Login route
router.post("/login", handleLogin);

module.exports = router;
