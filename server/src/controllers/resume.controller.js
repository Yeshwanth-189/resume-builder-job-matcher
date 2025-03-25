const Resume = require("../models/Resume");

// CREATE Resume with file
const createResume = async (req, res) => {
  const { name, originalText, parsedData } = req.body;

  const file = req.file;
  const fileData = file
    ? {
        fileName: file.originalname,
        mimeType: file.mimetype,
        data: file.buffer,
      }
    : null;

  const resume = await Resume.create({
    user: req.user._id,
    name,
    originalText,
    parsedData: parsedData ? JSON.parse(parsedData) : undefined,
    file: fileData,
  });

  res.status(201).json(resume);
};

// READ All Resumes
const getResumes = async (req, res) => {
  const resumes = await Resume.find({ user: req.user._id }).select("-file.data");
  res.json(resumes);
};

// READ Resume by ID
const getResumeById = async (req, res) => {
  const resume = await Resume.findOne({ _id: req.params.id, user: req.user._id });
  if (!resume) return res.status(404).json({ error: "Resume not found" });

  res.json(resume);
};

// UPDATE Resume + file
const updateResume = async (req, res) => {
  const file = req.file;

  const fileData = file
    ? {
        fileName: file.originalname,
        mimeType: file.mimetype,
        data: file.buffer,
      }
    : undefined;

  const updated = await Resume.findOneAndUpdate(
    { _id: req.params.id, user: req.user._id },
    {
      ...req.body,
      ...(fileData && { file: fileData }),
      ...(req.body.parsedData && { parsedData: JSON.parse(req.body.parsedData) }),
    },
    { new: true }
  );

  if (!updated) return res.status(404).json({ error: "Resume not found" });
  res.json(updated);
};

// DELETE Resume
const deleteResume = async (req, res) => {
  const deleted = await Resume.findOneAndDelete({ _id: req.params.id, user: req.user._id });
  if (!deleted) return res.status(404).json({ error: "Resume not found" });
  res.json({ message: "Resume deleted" });
};

const downloadResume = async (req, res) => {
  const resume = await Resume.findOne({ _id: req.params.id, user: req.user._id });

  if (!resume || !resume.file || !resume.file.data) {
    return res.status(404).json({ error: "Resume file not found" });
  }

  res.set({
    "Content-Type": resume.file.mimeType,
    "Content-Disposition": `attachment; filename="${resume.file.fileName}"`,
  });

  res.send(resume.file.data);
};


module.exports = {
  createResume,
  getResumes,
  getResumeById,
  updateResume,
  deleteResume,
  downloadResume,
};
