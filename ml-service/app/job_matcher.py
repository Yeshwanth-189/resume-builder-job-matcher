# app/job_matcher.py
import re
from sentence_transformers import SentenceTransformer, util
import spacy
import pandas as pd

model = SentenceTransformer('stsb-roberta-large')

skill_set=["Python", "Java", "C", "C++", "JavaScript", "TypeScript", "C#", "Ruby", "PHP", "Swift", "Kotlin", "Go", "Rust","HTML", "CSS", "React", "Angular", "Vue", "Node.js", "Django", "Flask", "ASP.NET", "Spring Boot", "Laravel", "Ruby on Rails","SQL", "NoSQL", "MongoDB", "PostgreSQL", "MySQL", "Oracle", "Cassandra", "Hadoop", "Spark", "Data Analysis", "Data Mining","Machine Learning", "Deep Learning", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy","AWS", "Azure", "Google Cloud Platform", "Docker", "Kubernetes", "Jenkins", "CI/CD", "Terraform", "Ansible", "Git", "GitHub", "GitLab","Agile", "Scrum", "Kanban", "Waterfall", "DevOps", "Continuous Integration", "Continuous Deployment","Project Management", "Communication", "Leadership", "Problem Solving", "Time Management", "Teamwork", "Critical Thinking", "Adaptability", "Decision Making", "Negotiation", "Strategic Planning","Financial Analysis", "Risk Management", "Regulatory Compliance", "HIPAA", "EMR", "EHR", "Supply Chain Management", "Logistics", "Marketing", "SEO", "SEM","Social Media Marketing", "Digital Marketing", "Content Strategy", "UX Design", "UI Design", "Graphic Design", "Adobe Creative Suite", "Video Editing", "3D Modeling","R", "MATLAB", "Julia", "Scala", "Perl", "Haskell", "Objective-C", "Assembly", "Elixir", "Clojure", "Dart", "Lua", "Groovy", "F#", "COBOL", "Fortran", "VBA", "PowerShell", "Bash", "Shell Scripting","Tailwind CSS", "Bootstrap", "Sass", "Less", "jQuery", "Redux", "Next.js", "Gatsby", "Express.js", "Fastify", "Svelte", "Ember.js", "Meteor", "Cordova", "Ionic", "Flutter", "React Native", "Xamarin","GraphQL", "REST API", "SOAP", "gRPC", "WebSockets", "Apache Kafka", "RabbitMQ", "Redis", "Elasticsearch", "Splunk", "Prometheus", "Grafana", "Logstash", "Kibana", "ELK Stack", "Snowflake","MS SQL Server", "SQLite", "Firebase", "DynamoDB", "Neo4j", "CouchDB", "InfluxDB", "MariaDB", "Couchbase", "Realm", "Supabase", "Prisma", "TypeORM", "Sequelize", "Mongoose","Natural Language Processing", "Computer Vision", "Reinforcement Learning", "Generative AI", "Large Language Models", "GANs", "Transformers", "BERT", "GPT", "Data Visualization", "Tableau", "Power BI", "D3.js", "Matplotlib", "Seaborn", "Plotly", "Looker", "Qlik","Heroku", "DigitalOcean", "Cloudflare", "Netlify", "Vercel", "Linode", "AWS Lambda", "Azure Functions", "CircleCI", "TravisCI", "GitHub Actions", "Bitbucket", "GitOps", "ArgoCD", "Helm", "Istio", "Service Mesh", "Pulumi", "Chef", "Puppet", "SaltStack", "Vagrant","Blockchain", "Smart Contracts", "Solidity", "Ethereum", "Hyperledger", "Web3.js", "Cryptography", "Cybersecurity", "Penetration Testing", "Ethical Hacking", "OWASP", "SOC", "SIEM", "Firewall", "IDS/IPS", "Zero Trust", "Vulnerability Assessment","Salesforce", "SAP", "Oracle ERP", "Microsoft Dynamics", "Workday", "ServiceNow", "Jira", "Confluence", "Trello", "Asana", "Monday.com", "Notion", "Clickup", "PeopleSoft", "Zendesk", "HubSpot","Six Sigma", "Lean Manufacturing", "ITIL", "TOGAF", "PRINCE2", "Business Analysis", "Requirements Gathering", "Process Mapping", "Stakeholder Management", "Change Management", "Conflict Resolution", "Facilitation", "Public Speaking", "Technical Writing", "CRM", "ERP","Quantum Computing", "Edge Computing", "IoT", "Embedded Systems", "Robotics", "Augmented Reality", "Virtual Reality", "Mixed Reality", "Game Development", "Unity", "Unreal Engine", "WebGL", "OpenGL", "WebGPU", "WebAssembly", "Microservices", "Progressive Web Apps", "Serverless Architecture", "JAMstack","A/B Testing", "User Research", "Wireframing", "Prototyping", "Usability Testing", "Accessibility", "WCAG", "Section 508", "Design Thinking", "Figma", "Sketch", "Adobe XD", "InVision", "Zeplin", "Photoshop", "Illustrator", "After Effects", "Blender", "Maya", "Cinema 4D", "ZBrush", "AutoCAD", "Revit", "SketchUp","ABAP", "ActionScript", "Ada", "Apex", "Awk", "Ballerina", "Carbon", "Crystal", "Delphi", "Erlang", "Forth", "Hack", "Lisp", "Logo", "Nim", "OCaml", "Prolog", "PureScript", "Racket", "Raku", "ReasonML", "VHDL", "Verilog", "Visual Basic","Android Development", "Capacitor", "Electron", "GWT", "iOS Development", "Knockout.js", "Micronaut", "NestJS", "PhoneGap", "Play Framework", "Polymer", "Preact", "Quarkus", "Qwik", "Selenium", "Sencha", "SolidJS", "Stimulus", "Strapi", "Struts", "Symfony", "Titanium", "WebAssembly", "Wicket", "WinForms", "WPF", "Yii","Apache Airflow", "Apache Beam", "Apache Camel", "Apache Druid", "Apache HBase", "Apache Hive", "Apache NiFi", "Apache Pinot", "Apache Pulsar", "Apache Storm", "Bun", "Celery", "Consul", "Deno", "Etcd", "Flink", "Kong", "Luigi", "Memcached", "Nginx", "PM2", "RxJS", "Vault", "ZooKeeper","BigQuery", "Clickhouse", "CockroachDB", "Cosmos DB", "DataStax", "FaunaDB", "Google Bigtable", "H2", "IBM Db2", "PlanetScale", "RethinkDB", "SingleStore", "TimeScaleDB", "TiDB", "Trino", "YugabyteDB","Anomaly Detection", "Apache Mahout", "AutoML", "Bayesian Networks", "Catboost", "Dask", "DataRobot", "Decision Trees", "Dimensionality Reduction", "Feature Engineering", "Gradient Boosting", "H2O.ai", "Hugging Face", "Jupyter", "Keras", "Knowledge Graphs", "LightGBM", "MLflow", "MLOps", "Neural Networks", "PCA", "Random Forest", "Ray", "Recommender Systems", "SageMaker", "Spark MLlib", "Stable Diffusion", "Time Series Analysis", "UMAP", "XGBoost","AKS", "Amazon ECS", "Anthos", "API Gateway", "AppEngine", "Artifactory", "AWS CDK", "AWS CloudFormation", "AWS CodeDeploy", "Azure DevOps", "Bamboo", "Cloud Foundry", "Crossplane", "Drone CI", "Firebase Hosting", "GCP GKE", "Gitlab CI", "Nexus", "OpenShift", "Rancher", "SonarQube", "Spinnaker", "TeamCity","Business Intelligence", "Compliance Management", "Customer Experience", "Data Governance", "Data Privacy", "Data Stewardship", "GDPR", "Information Architecture", "ISO 27001", "NIST", "PCI DSS", "Process Optimization", "SOC 2", "Value Stream Mapping","5G", "FPGA", "MQTT", "NLP Processing", "OpenCV", "Quantum Algorithms", "ROS (Robot Operating System)", "SDN", "Tensorflow Lite", "UAV/Drone Technology", "Voice Recognition","Agile Coaching", "Big Data Architecture", "Business Continuity", "Cloud Migration", "Cross-functional Collaboration", "Data Strategy", "Digital Transformation", "Enterprise Architecture", "Innovation Management", "Product Ownership", "Servant Leadership", "System Design", "Technical Debt Management","After Action Review", "Algorithmic Thinking", "BPMN", "Cost-Benefit Analysis", "Design Patterns", "HIPA", "Impact Analysis", "Microeconomics", "Multivariate Testing", "Root Cause Analysis", "Service-Oriented Architecture", "SOLID Principles", "System Thinking", "UML", "FastAPI","Account Management", "Accounts Payable", "Accounts Receivable", "Acquisition Integration", "Advertising", "Affiliate Marketing", "Asset Management", "Audit", "B2B Sales", "B2C Sales", "Balance Sheet Analysis", "Benchmarking", "Bookkeeping", "Brand Development", "Brand Management", "Budget Forecasting", "Business Development", "Business Intelligence", "Business Modeling", "Business Valuation","Cash Flow Management", "Category Management", "Channel Management", "Churn Analysis", "Commercial Awareness", "Competitive Analysis", "Conflict Resolution", "Contract Management", "Corporate Finance", "Corporate Governance", "Cost Accounting", "Cost Optimization", "Crisis Management", "Cross-selling", "Customer Acquisition", "Customer Journey Mapping", "Customer Relationship Management", "Customer Retention", "Customer Segmentation","Data-Driven Decision Making", "Demand Planning", "Direct Marketing", "Distribution Management", "Diversity & Inclusion", "E-commerce Operations", "Econometrics", "Employer Branding", "Enterprise Resource Planning", "Entrepreneurship", "Executive Coaching","Financial Modeling", "Financial Planning", "Financial Reporting", "Foreign Exchange", "Franchise Management", "Fundraising", "GAAP", "Go-to-Market Strategy", "Gross Margin Analysis", "Growth Hacking", "Human Resources Management", "IFRS", "Income Statement Analysis", "Influencer Marketing", "Inventory Management", "Investment Analysis", "Invoice Processing", "IPO Management", "Key Account Management","Leadership Development", "Lean Six Sigma", "Loss Prevention", "M&A Due Diligence", "Management Consulting", "Market Analysis", "Market Entry Strategy", "Market Research", "Marketing Automation", "Marketing Campaign Management", "Marketing Mix Modeling", "Merchandising", "Merger Integration", "Metaverse Marketing", "Mobile Marketing", "Monetization Strategy", "Multi-channel Marketing","Negotiation", "New Product Development", "Omnichannel Strategy", "Operational Excellence", "Organizational Development", "Outsourcing Management", "P&L Management", "Performance Management", "Portfolio Management", "Pricing Strategy", "Private Equity", "Procurement", "Product Launch", "Product Lifecycle Management", "Product Marketing", "Profit Optimization", "Public Relations", "Purchase Order Processing","Regulatory Compliance", "Relationship Building", "Retail Operations", "Revenue Forecasting", "Revenue Management", "Revenue Recognition", "Risk Assessment", "ROI Analysis", "Sales Analytics", "Sales Enablement", "Sales Forecasting", "Sales Operations", "Sales Pipeline Management", "SaaS Business Models", "Scale-up Management", "Scenario Planning", "Social Selling", "Sourcing", "Stakeholder Management", "Strategic Partnerships", "Supply Chain Analytics", "SWOT Analysis","Talent Acquisition", "Talent Development", "Tax Planning", "Team Building", "Trade Marketing", "Trade Show Management", "Treasury Management", "Turnaround Management", "Upselling", "Vendor Management", "Venture Capital", "Workforce Planning", "Working Capital Management", "Yield Management", "Active Listening", "Advanced Excel", "Advanced PowerPoint", "Analytical Skills", "AP/AR Management", "Attention to Detail", "Bilingual/Multilingual", "Business Correspondence", "Business Etiquette", "Calendar Management", "Client Onboarding", "Client Relations", "Cold Calling", "Collaboration", "Conflict Management", "CPC Certification", "Creative Problem Solving", "Cross-Cultural Communication", "Customer Satisfaction", "Data Entry","Database Administration", "Deadline Management", "Delegation", "Detail-Oriented", "Documentation", "Email Management", "Emotional Intelligence", "Employee Relations", "Event Coordination", "Event Planning", "Executive Assistant", "Expense Reporting", "Fast Learner", "Filing", "Foreign Language Proficiency", "Google Workspace", "Industry Knowledge", "Interdepartmental Communication", "Internal Communications", "Interpersonal Skills","Interview Coordination", "KPI Tracking", "Listening Skills", "Meeting Coordination", "Meeting Facilitation", "Microsoft Office Suite", "Minute Taking", "Multitasking", "Office Administration", "Office Management", "Onboarding", "Organizational Skills", "Patience", "Performance Reviews", "Phone Etiquette", "Policy Implementation", "Presentation Skills", "Prioritization", "Problem Resolution", "Professionalism","Project Coordination", "Proofreading", "Purchase Order Management", "Receptionist Duties", "Record Keeping", "Recruiting", "Relationship Management", "Remote Work Proficiency", "Report Generation", "Research", "Resource Allocation", "Results-Driven", "Resume Screening", "Self-Motivated", "Self-Starter", "Sharepoint", "Situational Awareness", "Social Media Presence", "Spreadsheet Management", "Staff Training","Statistical Analysis", "Statutory Compliance", "Strategic Thinking", "Stress Management", "Team Coordination", "Team Motivation", "Technical Documentation", "Telephone Skills", "Time Blocking", "Time Management", "Touch Typing", "Training & Development", "Travel Arrangement", "Travel Coordination", "Verbal Communication", "Virtual Meeting Management", "Written Communication", "Zoom Management""Adaptability to Change", "Business Process Improvement", "Coaching and Mentoring", "Confidentiality", "Cost-Benefit Analysis", "Cross-Functional Team Leadership", "Cultural Sensitivity", "Customer Needs Assessment", "Data Visualization", "Delegation of Authority", "Equipment Maintenance", "Ethics and Compliance", "Forecasting", "Goal Setting", "Independent Work", "Initiative", "Innovation", "Mentoring", "Microsoft Dynamics", "Networking","Operations Management", "Payroll Processing", "Performance Metrics", "Professional Development", "Program Development", "Quality Assurance", "Quality Control", "Regulatory Reporting", "Resource Management", "Results Tracking", "Safety Compliance", "Scheduling", "Service Excellence", "Staff Supervision", "Succession Planning", "Surveys Design", "Systems Analysis", "Technical Aptitude", "Workflow Optimization", "Work-Life Balance Promotion"]

def compute_similarity(resume_text: str, job_description: str) -> float:
    resume_emb = model.encode(resume_text, convert_to_tensor=True)
    job_emb = model.encode(job_description, convert_to_tensor=True)
    similarity = util.cos_sim(resume_emb, job_emb).item() * 100
    scaled_score = similarity * 1.357  
    return scaled_score


def clean_text(text: str) -> str:
    """
    Clean the input text by removing unnecessary bullet points, extra newlines, 
    and multiple spaces.
    
    Args:
        text (str): The original text.
        
    Returns:
        str: The cleaned text.
    """
    # Remove bullet points and similar list markers at the beginning of lines
    text = re.sub(r'^[\-\*\u2022\u2023\u25E6]+\s*', '', text, flags=re.MULTILINE)
    
    # Remove multiple newlines and replace them with a single space
    text = re.sub(r'\n+', ' ', text)
    
    # Remove extra whitespace (multiple spaces, tabs, etc.)
    text = re.sub(r'\s+', ' ', text)
    
    # Trim any leading or trailing whitespace
    return text.strip()


def extract_keywords(text):
    text = clean_text(text)
    found = set()
    for keyword in skill_set:
        normalized = keyword.lower().replace(".", "")  
        if normalized in text:
            found.add(normalized)
    return found

def extract_resume_headers(resume_text: str):
    # Define the headers you expect to find in a resume.
    headers_to_search = [
        "Work Experience", 
        "Education", 
        "Skills", 
        "Linkedin",
    ]
    
    found_headers = []
    missing_headers = []
    
    # Convert the resume text to lowercase for a case-insensitive search.
    resume_text_lower = resume_text.lower()
    
    for header in headers_to_search:
        # Check if the header (in lowercase) is present in the resume text.
        if header.lower() in resume_text_lower:
            found_headers.append(header)
        else:
            missing_headers.append(header)
    
    return found_headers, missing_headers

def match_resume_to_job(resume: str, job_desc: str):
    match_score = compute_similarity(resume, job_desc)
    resume_skills = extract_keywords(resume)
    jd_skills = extract_keywords(job_desc)
    headers_found, headers_missing = extract_resume_headers(resume)

    if not jd_skills:
        return {
            "match_score": 0.0,
            "verdict": "No matchable skills in job description",
            "skills_matched": [],
            "missing_skills": [],
            "resume_skills": list(resume_skills),
            "jd_skills": list(jd_skills),
            "found_headers": headers_found,
            "missing_headers": headers_missing,
        }

    overlap = resume_skills.intersection(jd_skills)
    missing = jd_skills.difference(resume_skills)
    

    return {
        "match_score": round(match_score, 0),
        "verdict": (
            "Strong match" if match_score >= 75 else
            "Moderate match" if match_score >= 40 else
            "Weak match"
        ),
        "skills_matched": list(overlap),
        "missing_skills": list(missing),
        "resume_skills": list(resume_skills),
        "jd_skills": list(jd_skills),
        "found_headers": headers_found,
        "missing_headers": headers_missing,
    }

