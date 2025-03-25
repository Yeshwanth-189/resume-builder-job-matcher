from pydantic import BaseModel

class ResumeText(BaseModel):
    text: str

class MatchRequest(BaseModel):
    resume_text: str
    job_description: str
