const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config(); //This reads your .env file and makes its variables available through process.env.

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
  }),
);

app.use(express.json());

//Test route
app.get("/", (req, res) => {
  res.send("Express Tracker Backend is running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
