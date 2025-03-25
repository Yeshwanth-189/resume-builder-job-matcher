const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String }, 
  originalText: { type: String }, 
  parsedData: {
    skills: [String],
    education: [String],
    experience: [String]
  },
  file: {
    fileName: String,
    mimeType: String,
    data: Buffer,
  }
}, { timestamps: true });

module.exports = mongoose.model("Resume", resumeSchema);
