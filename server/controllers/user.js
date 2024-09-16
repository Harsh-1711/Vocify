const User = require("../models/User");

const handleSignup = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }
  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }
  if (!password) {
    return res.status(400).json({ error: "Password is required" });
  }
  try {
    const newUser = await User.create({
      name: name,
      email: email,
      password: password,
    });

    return res.status(200).json({ user: newUser });
  } catch (error) {
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

    if (existingUser.password !== password) {
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
