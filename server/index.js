require("dotenv").config({ path: "./config/.env" });

const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");
const UserRouter = require("./routes/user.routes");
const BuyerRouter = require("./routes/buyer.routes");

const port = process.env.PORT || 3001;
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.error("MongoDB connection error:", error));

app.get("/", (req, res) => {
  return res.json({ msg: "Hello Server" });
});
app.use("/api/users", UserRouter);
app.use("/api/buyers", BuyerRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
