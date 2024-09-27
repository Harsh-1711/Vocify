// sendMail.js
const nodemailer = require("nodemailer");
require("dotenv").config({ path: "./config/.env" });

const sendMail = async (req, res) => {
  try {
    // Destructure user info and hire input from the request body
    const { user, hireInput } = req.body;

    // Validate user and hireInput
    if (!user || !hireInput) {
      return res
        .status(400)
        .json({ error: "User and hire input are required." });
    }

    const { email, phone, name } = user; // Assuming user contains these fields

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.USER,
        pass: process.env.APP_PASSWORD,
      },
    });

    let info = await transporter.sendMail({
      from: { name: "Vocify", address: process.env.USER },
      to: [
        "2001kumarharsh@gmail.com",
        "nimishanegi2003@gmail.com",
        "aksharasharma916@gmail.com",
      ],
      subject: "Hire Employees",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2 style="color: #333;">Hire Request Details</h2>
          <p><strong>Full Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone Number:</strong> ${phone || "N/A"}</p>
          <p><strong>Details:</strong> ${hireInput}</p>
          <br>
          <p>Thank you for considering this request.</p>
        </div>
      `,
    });

    console.log("Email sent: %s", info.messageId);
    res.json({ message: "Email sent successfully!", info });
  } catch (error) {
    console.error("Error sending email:", error);
    res
      .status(500)
      .json({ error: "Failed to send email. Please try again later." });
  }
};

module.exports = { sendMail };
