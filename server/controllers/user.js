const User = require("../models/User");
const bcrypt = require("bcrypt");

const handleSignup = async (req, res) => {
  const { name, email, phone, address, password, confirmPassword } = req.body;

  // Files are accessed through req.files
  const aadharCard = req.files?.aadharCard
    ? req.files.aadharCard[0].path
    : null;
  const certification = req.files?.certification
    ? req.files.certification[0].path
    : null;

  // Validation checks for non-file fields
  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }
  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }
  if (!phone) {
    return res.status(400).json({ error: "Phone number is required" });
  }
  if (!address) {
    return res.status(400).json({ error: "Address is required" });
  }
  if (!password) {
    return res.status(400).json({ error: "Password is required" });
  }
  if (password !== confirmPassword) {
    return res.status(400).json({ error: "Passwords do not match" });
  }
  if (!aadharCard) {
    return res.status(400).json({ error: "Aadhaar card is required" });
  }
  if (!certification) {
    console.log("Certification");
    return res.status(400).json({ error: "Certification is required" });
  }

  try {
    // Create the new user with all required fields, including file paths
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
      aadharCard,
      certification,
    });

    return res.status(200).json({ user: newUser, success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

const handleLogin = async (req, res) => {
  const { email, password } = req.body;
  // console.log("Request got");
  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }
  if (!password) {
    return res.status(400).json({ error: "Password is required" });
  }

  try {
    const existingUser = await User.findOne({ email: email });
    if (!existingUser) {
      return res.status(400).json({ error: "User doesn't exist" });
    }

    // if (existingUser.password !== password) {
    //   return res.status(400).json({ error: "Incorrect Password" });
    // }
    const isPasswordValid = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordValid) {
      return res.status(400).json({ error: "Incorrect Password" });
    }

    return res.status(200).json({
      user: existingUser,
      msg: "Login Successful",
    });
  } catch (error) {
    return res.status(500).json({ error: "Something went wrong" });
  }
};

module.exports = { handleSignup, handleLogin };
