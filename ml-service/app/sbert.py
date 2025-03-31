from sentence_transformers import SentenceTransformer, util

# Load a pre-trained SBERT model
model = SentenceTransformer('stsb-roberta-large')

# Example texts
resume_text = """YESHWANTH NANJEGOWDA
Riverside, CA, USA | +1-951-453-2926 | ynanj002@ucr.edu

Summary
Associate Software Engineer experienced in collaborating with key stakeholders to review and break down work items into actionable tasks, provide accurate estimations, and escalate delays when necessary. Adept at supporting feature deployments with a focus on user impact, safety, and compliance. Proven ability to develop maintainable, extensible code through rigorous code reviews, proactive debugging, and integrated automation testing. Skilled in live service operations, telemetry integration, and restoring system functionality within SLA timeframes to ensure high performance and reliability.

Education
University of California, Riverside, CA, USA (Sep 2024 - Present)
Masters, Computer Science (GPA: 3.9/4.00)

RNS Institute of Technology, Bangalore, India (Aug 2019 - Jun 2023)
Bachelors, Computer Science (GPA: 9.11/10.00)

Work Experience
BETSOL | Associate Software Engineer (Jul 2023 - Sep 2024)
• Collaborated with stakeholders to review work items, decompose them into tasks, provide accurate estimations, and escalate delays to support effective sprint planning.
• Supported feature deployments by integrating user and service impact considerations, ensuring adherence to best deployment practices for safety and reliability.
• Defined and refined feature requirements in partnership with key stakeholders, establishing continuous feedback loops for design improvements and enhanced customer metrics.
• Participated in detailed code reviews to learn and enforce coding standards and best practices, ensuring the development of maintainable, extensible code.
• Utilized advanced debugging tools both proactively and reactively to diagnose and resolve critical issues, maintaining high code quality and system stability.
• Documented dependencies and contributed to comprehensive design documentation, supporting architectural processes and technical validation efforts.
• Developed test code to validate technical hypotheses and collaborated on quality assurance plans—augmenting test cases and integrating automation into testing workflows.
• Acted as the Designated Responsible Individual (DRI) for monitoring live service operations, integrating telemetry data, and restoring system functionality within SLA timeframes.

Techie Aid | Web Application Developer Intern (Jun 2022 - Dec 2022)
• Developed a feature-rich e-commerce platform from inception to deployment, collaborating with stakeholders to review work items, estimate tasks, and escalate delays as needed.
• Implemented robust CRUD operations within an MVC framework while enforcing coding standards and best practices through systematic code reviews and effective debugging.
• Optimized user experience by integrating Material-UI and Ant Design libraries, ensuring the final product met security, privacy, safety, and accessibility standards.

Projects
Cloud-Based AI Inference with Kubernetes HPA & VPA
• Deployed a FastAPI ResNet18 inference service on Kubernetes with Horizontal and Vertical Pod Autoscaling, integrating telemetry for dynamic performance monitoring and ensuring system reliability within SLA guidelines.

Network Intrusion Detection System using Machine Learning Algorithms
• Designed and implemented a system to detect and classify network attacks using Decision Trees, incorporating comprehensive debugging and testing practices to achieve high accuracy and operational reliability.

SnapIt
• Developed an Android application using Java and Firebase Authentication, incorporating stakeholder feedback, real-time debugging, and quality assurance processes to deliver a user-centric experience.

Technical Skills
• Domain: Full Stack Web Application Development, Android Application, Quality Assurance, and Live Service Operations.
• Professional Expertise: ReactJS, Redux, Saga, REST API, ASP.NET MVC, Vue, Code Reviews, Debugging, and Quality Assurance.
• Programming Languages & Fundamentals: C, C++, C#, Java, Python, HTML, CSS, JavaScript, SQL, Object-Oriented Programming, Data Structures, Algorithms.
• Tools & Platforms: NodeJS, Docker, AWS, Git, TFS, Android Studio, Debugging Tools, Telemetry Integration, Automation Testing Tools.
• Operating Systems: Linux, macOS, Windows.

Achievements
• Spot Award at Betsol for exemplary collaboration in feature deployment, proactive debugging, and live service monitoring that ensured system reliability.
• Team Excellence Award at Betsol for consistently delivering high-quality projects under tight deadlines while strictly adhering to industry best practices and compliance standards.

ynanj002@ucr.edu"""


# Compute embeddings for each text"
job_description = """Learns to review and break down work items into tasks with stakeholder collaboration, provide estimations, and escalate delays, while also supporting feature deployments to customers, considering user and service impacts, and adhering to best deployment practices for safety.
Collaborates with key stakeholders to define feature requirements, integrates feedback to enhance design, and establishes feedback loops for continuous improvement based on customer metrics.
Learns and applies coding standards and best practices through code reviews, developing maintainable and extensible code with guidance. Utilizes debugging tools to proactively and reactively address issues in product features, ensuring code quality and reliability.
Supports the identification of dependencies and design documentation for product features, learns about system interactions and back-end dependencies, and contributes to architectural processes under guidance. Produces code to test hypotheses for technical solutions and assists with technical validation efforts. Collaborates on quality assurance plans, augments test cases, and integrates automation into testing, while understanding the implications of security and compliance in system architecture.
Contributes to data analysis and feedback integration for product engineering decisions, acting as a Designated Responsible Individual (DRI) for monitoring and restoring system functionality within Service Level Agreement (SLA) timeframe. Participates in live service operations, and supports telemetry data integration for system behavior insights, with a focus on performance, reliability, and safety.
Develops and applies best practices for reliable code building, understands global and local regulations, customer scaling requirements, and support communication with key partners across Microsoft for user experience enhancement and partner needs.
Ensures compliance with security, privacy, safety, and accessibility standards, leverages developer tools for code creation and debugging, contributes to automation in production and deployment, and proactively seeks knowledge to improve product availability, reliability, efficiency, and performance at scale."""


# Compute embeddings for each text"

# Compute embeddings for each text
resume_embedding = model.encode(resume_text, convert_to_tensor=True)
job_embedding = model.encode(job_description, convert_to_tensor=True)

# Calculate cosine similarity between embeddings
similarity_score = util.cos_sim(resume_embedding, job_embedding).item() * 100

print(f"Match Score: {similarity_score:.2f}%")
