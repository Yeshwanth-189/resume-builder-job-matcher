const axios = require("axios");

const MATCH_URL = process.env.ML_SERVICE_URL;
const PARSE_URL = process.env.PARSE_SERVICE_URL;
const API_KEY = process.env.ML_API_KEY;

const getMatchResult = async (resume_text, job_description) => {
  const response = await axios.post(MATCH_URL, {
    resume_text,
    job_description
  }, {
    headers: { "x-api-key": API_KEY }
  });
  return response.data;
};

const getParsedResume = async (text) => {
  const response = await axios.post(PARSE_URL, {
    text
  }, {
    headers: { "x-api-key": API_KEY }
  });
  return response.data;
};

module.exports = { getMatchResult, getParsedResume };
