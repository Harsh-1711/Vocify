// server/controllers/buyerController.js
const Buyer = require("../models/Buyer");
const bcrypt = require("bcrypt");

const handleBuyerSignup = async (req, res) => {
  const { name, email, phone, address, password, confirmPassword, state, zip } =
    req.body;

  // Validate the request
  if (
    !name ||
    !email ||
    !phone ||
    !address ||
    !password ||
    !confirmPassword ||
    !state ||
    !zip
  ) {
    return res.status(400).json({ error: "All fields are required." });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ error: "Passwords must match." });
  }

  try {
    // Check if the user already exists
    const existingUser = await Buyer.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists." });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new Buyer({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
      state,
      zip,
    });

    // Save the user to the database
    await newUser.save();
    res.status(201).json({ message: "Sign-up successful.", user: newUser });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ error: "Error creating user. Please try again." });
  }
};

// Handle buyer login
const handleBuyerLogin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ error: "Both email and password are required." });
  }

  try {
    // Find the user
    const user = await Buyer.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: "User doesn't exist." });
    }
    if (!(await user.matchPassword(password))) {
      return res.status(400).json({ error: "Incorrect password" });
    }

    res.status(200).json({ message: "Login successful.", user });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "Error logging in. Please try again." });
  }
};

module.exports = { handleBuyerSignup, handleBuyerLogin };
