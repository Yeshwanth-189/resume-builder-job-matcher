const express = require("express");
const cors = require("cors");

const matcherRoutes = require("./routes/matcher.routes");

const app = express();
app.use(express.json());

const authRoutes = require("./routes/auth.routes");
app.use("/api/auth", authRoutes);
const resumeRoutes = require("./routes/resume.routes");
app.use("/api/resumes", resumeRoutes); 



// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/match", matcherRoutes);

module.exports = app;