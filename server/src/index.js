require("dotenv").config();
const express = require("express");
const app = require("./app");

const PORT = process.env.PORT || 5000;
app.use(express.json());


const connectDB = require("./config/db");

connectDB();

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});