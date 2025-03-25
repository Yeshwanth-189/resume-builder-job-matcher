// src/routes/resume.routes.js

const express = require("express");
const multer = require("multer");
const { protect } = require("../middleware/auth.middleware");
const {
  createResume,
  getResumes,
  getResumeById,
  updateResume,
  deleteResume,
  downloadResume
} = require("../controllers/resume.controller");

const router = express.Router();
router.use(protect); 

// Multer config
const storage = multer.memoryStorage(); 
const upload = multer({ 
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, 
});

// ✅ Routes
router.post("/", upload.single("resume"), createResume); 
router.get("/:id/download", downloadResume); 
router.get("/", getResumes);
router.get("/:id", getResumeById);
router.put("/:id", upload.single("resume"), updateResume);
router.delete("/:id", deleteResume);

module.exports = router;
