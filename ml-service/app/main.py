from fastapi import FastAPI, Header, HTTPException
from app.resume_parser import parse_resume
from app.job_matcher import match_resume_to_job
from app.models import ResumeText, MatchRequest
import os

app = FastAPI()

API_KEY = os.getenv("ML_API_KEY", "myultrasecretapikey123")  # Fallback default

def verify_api_key(x_api_key: str = Header(...)):
    if x_api_key != API_KEY:
        raise HTTPException(status_code=401, detail="Invalid API Key")

@app.post("/parse-resume")
def parse(resume: ResumeText, x_api_key: str = Header(...)):
    verify_api_key(x_api_key)
    return parse_resume(resume.text)

@app.post("/match-jd")
def match(data: MatchRequest, x_api_key: str = Header(...)):
    verify_api_key(x_api_key)
    return match_resume_to_job(data.resume_text, data.job_description)
