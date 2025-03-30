const express = require("express");
const cors = require("cors");



const app = express();
app.use(cors({
    origin: 'http://localhost:5173', 
    credentials: true 
  }));
app.use(express.json());

const matcherRoutes = require("./routes/matcher.routes");
app.use("/api/match", matcherRoutes);
const authRoutes = require("./routes/auth.routes");
app.use("/api/auth", authRoutes);
const resumeRoutes = require("./routes/resume.routes");
app.use("/api/resumes", resumeRoutes); 


module.exports = app;