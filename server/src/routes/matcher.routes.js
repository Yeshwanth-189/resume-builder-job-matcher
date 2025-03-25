const express = require("express");
const router = express.Router();

const { handleMatchRequest, handleParseRequest } = require("../controllers/matcher.controller");
const { protect } = require("../middleware/auth.middleware");

// 🔐 Protect both routes with `protect`
router.post("/", protect, handleMatchRequest);
router.post("/parse", protect, handleParseRequest);

module.exports = router;
