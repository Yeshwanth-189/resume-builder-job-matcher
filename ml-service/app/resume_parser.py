import spacy
from spacy.matcher import PhraseMatcher
from typing import Dict, List

# Predefined lists of keywords
SKILL_KEYWORDS = [
    "python", "javascript", "react", "node.js", "nodejs", 
    "express", "mongodb", "docker", "aws", "html", 
    "css", "sql", "kubernetes", "flask", "django", "cloud"
]

JOB_TITLES = [
    "software engineer", "backend developer", "frontend developer", 
    "full stack developer", "data scientist", "project manager", 
    "cloud architect", "machine learning engineer"
]

def create_matcher(nlp, patterns: List[str]) -> PhraseMatcher:
    """
    Create a PhraseMatcher for given patterns.
    
    Args:
        nlp: SpaCy NLP model
        patterns (List[str]): List of patterns to match
    
    Returns:
        PhraseMatcher: Configured phrase matcher
    """
    matcher = PhraseMatcher(nlp.vocab)
    pattern_docs = [nlp.make_doc(pattern.lower()) for pattern in patterns]
    matcher.add("PATTERNS", pattern_docs)
    return matcher

def parse_resume(text: str, model: str = "en_core_web_sm") -> Dict[str, List[str]]:
    """
    Parse resume text and extract key information.
    
    Args:
        text (str): Resume text to parse
        model (str): SpaCy language model to use
    
    Returns:
        Dict containing skills, education, and experience
    """
    # Load SpaCy model
    nlp = spacy.load(model)
    
    # Preprocess text
    text = text.lower().strip()
    doc = nlp(text)
    
    # Create matchers
    skill_matcher = create_matcher(nlp, SKILL_KEYWORDS)
    job_title_matcher = create_matcher(nlp, JOB_TITLES)
    
    # Use sets for efficient, unique collection
    skills = set()
    education = set()
    experience = set()
    
    # Match skills
    skills.update(
        doc[start:end].text 
        for _, start, end in skill_matcher(doc)
    )
    
    # Match job titles
    experience.update(
        doc[start:end].text 
        for _, start, end in job_title_matcher(doc)
    )
    
    # Extract education keywords
    education_keywords = ["degree", "graduated", "studied at", "university"]
    education.update(
        sent.text.strip() 
        for sent in doc.sents 
        if any(keyword in sent.text.lower() for keyword in education_keywords)
    )
    
    # Extract organizations and locations
    for ent in doc.ents:
        if ent.label_ == "ORG" and ent.text.lower() not in skills:
            experience.add(ent.text)
        elif ent.label_ == "GPE" and "university" in ent.text.lower():
            education.add(ent.text)
    
    return {
        "skills": sorted(list(skills)),
        "education": sorted(list(education)),
        "experience": sorted(list(experience))
    }
