const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String }, // Optional for Google OAuth
  authProvider: { type: String, enum: ["local", "google"], default: "local" },
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);