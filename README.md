# Portfolio — Secure-by-Default Engineering

This portfolio demonstrates my ability to design, implement, and document production-ready, security-focused systems that scale. Drawing on advanced training in data science, AI applications, and software engineering from Cornell University, I have independently delivered solutions that combine robust encryption models, scalable cloud architectures, automated DevOps workflows, and machine learning pipelines. Each project reflects both technical depth and system-level thinking — the same qualities I bring to startup environments that demand rapid iteration, lean deployment, and long-term maintainability.

I’m Darius McCullough, a software engineer and data scientist with a focus on security-first architecture, scalable data systems, and applied machine learning. My background includes advanced coursework at Cornell University in data science, AI applications, and software engineering, complemented by independent projects spanning finance, education, and cloud-native infrastructure.

I specialize in:
Designing secure, high-availability systems with encryption, least-privilege access control, and automated secret management.
Building end-to-end data workflows — from ingestion and transformation to analytics and machine learning.
Developing full-stack prototypes that integrate cloud APIs, CI/CD pipelines, and runtime secrets securely.

This portfolio showcases systems I have designed, implemented, and documented — with an emphasis on code quality, rationale documentation, and security-by-default principles.

---

## Projects

### 1. **secrets-e2ee-demo** — End-to-End Encrypted Secret Sharing
A proof-of-concept implementing envelope encryption with per-device keys,  
mirroring modern secret manager designs.

- Ed25519 → X25519 key exchange for device enrollment
- Server-stored secrets are always ciphertext
- CLI for `init`, `add-secret`, `get-secret`, `invite-user`
- Role-based access control example  
[View code](./secrets-e2ee-demo)

---

### 2. **actions-oidc-aws-example** — GitHub OIDC to AWS Access
Minimal AWS IAM and GitHub Actions integration using OpenID Connect for  
short-lived, identity-based AWS credentials.

- Policy JSON for least privilege
- GitHub Actions workflow for secure AWS access  
[View code](./actions-oidc-aws-example)

---

### 3. **secret-scanner** — Codebase Secret Leak Prevention
A lightweight scanner to detect accidental commits of sensitive values.

- Regex-based and entropy-based scanning
- Extensible ruleset  
[View code](./secret-scanner)

---

### 4. **places-etl-ranking** — ETL & Ranking API
Pipeline that ingests location data, normalizes it, and ranks entities based on  
custom scoring rules.

- CSV ingestion
- Data normalization
- Ranking output with filter options  
[View code](./places-etl-ranking)

---

### 5. **fraud-detection-lab** — ML Anomaly Detection
A machine learning lab for detecting fraudulent transactions.

- Feature engineering for time-series and categorical data
- Isolation Forest model training and evaluation
- Modular design for model swap-out  
[View code](./fraud-detection-lab)

---

### 6. **nextjs-runtime-secret** — Runtime Secret Fetch with OIDC (Mock)
A minimal Next.js example fetching a secret at runtime using an Infisical-style provider.

- No secrets stored in the repo
- Swappable provider pattern
- Compatible with OIDC-based secret providers  
[View code](./nextjs-runtime-secret)

---

7. interactive-learning-dashboard — Clicker-Based Engagement Analytics
An R Shiny dashboard for analyzing student engagement and performance data from in-class clickers.
Aggregates demographic, attendance, and quiz data
Generates interactive visualizations for instructors and personalized feedback for students
Supports filtering by date, quiz, and performance tier
Designed for scalability across multiple courses and departments

---

## Skills Demonstrated
- **Security Engineering**: E2EE, key rotation, least privilege IAM, secret scanning
- **Cloud DevOps**: OIDC federation, GitHub Actions CI/CD
- **Data Engineering**: ETL pipelines, ranking algorithms
- **Machine Learning**: Anomaly detection for fraud
- **Full-Stack Development**: Next.js runtime integrations

---
