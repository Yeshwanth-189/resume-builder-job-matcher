const {
    getMatchResult,
    getParsedResume,
  } = require("../services/mlService");
  
  const handleMatchRequest = async (req, res) => {
    const { resume_text, job_description } = req.body;
  
    if (!resume_text || !job_description) {
      return res.status(400).json({ error: "Missing resume_text or job_description" });
    }
  
    try {
      const result = await getMatchResult(resume_text, job_description);
      res.json(result);
    } catch (err) {
      console.error("Error calling ML service (match):", err.message);
      res.status(500).json({ error: "Failed to get match result" });
    }
  };
  
  const handleParseRequest = async (req, res) => {
    const { text } = req.body;
  
    if (!text) {
      return res.status(400).json({ error: "Missing resume text" });
    }
  
    try {
      const parsed = await getParsedResume(text);
      res.json(parsed);
    } catch (err) {
      console.error("Error calling ML service (parse):", err.message);
      res.status(500).json({ error: "Failed to parse resume" });
    }
  };
  
  module.exports = {
    handleMatchRequest,
    handleParseRequest,
  };