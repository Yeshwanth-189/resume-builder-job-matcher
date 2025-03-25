# app/job_matcher.py
import re

SKILL_KEYWORDS = [
    "python", "javascript", "nodejs",  
    "react", "angular", "vue",
    "express", "mongodb", "sql", "apis", "restful",
    "docker", "kubernetes", "aws", "html", "css", "typescript"
]


def clean_text(text):
    text = text.lower()
    text = re.sub(r'[^\w\s]', '', text)
    return text

def extract_keywords(text):
    text = clean_text(text)
    found = set()
    for keyword in SKILL_KEYWORDS:
        normalized = keyword.lower().replace(".", "")  
        if normalized in text:
            found.add(normalized)
    return found

def match_resume_to_job(resume: str, job_desc: str):
    resume_skills = extract_keywords(resume)
    jd_skills = extract_keywords(job_desc)

    if not jd_skills:
        return {
            "match_score": 0.0,
            "verdict": "No matchable skills in job description",
            "skills_matched": [],
            "missing_skills": [],
            "resume_skills": list(resume_skills),
            "jd_skills": list(jd_skills)
        }

    overlap = resume_skills.intersection(jd_skills)
    missing = jd_skills.difference(resume_skills)
    match_score = (len(overlap) / len(jd_skills)) * 100

    return {
        "match_score": round(match_score, 2),
        "verdict": (
            "Strong match" if match_score >= 75 else
            "Moderate match" if match_score >= 40 else
            "Weak match"
        ),
        "skills_matched": list(overlap),
        "missing_skills": list(missing),
        "resume_skills": list(resume_skills),
        "jd_skills": list(jd_skills)
    }

