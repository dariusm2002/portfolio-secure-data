# Portfolio — Secure-by-Default Engineering

This portfolio showcases advanced, security-focused software engineering projects.  
It spans end-to-end encryption, identity-based cloud automation, secure code scanning,  
data ranking pipelines, fraud detection, and runtime secret management in applications.

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

## Skills Demonstrated
- **Security Engineering**: E2EE, key rotation, least privilege IAM, secret scanning
- **Cloud DevOps**: OIDC federation, GitHub Actions CI/CD
- **Data Engineering**: ETL pipelines, ranking algorithms
- **Machine Learning**: Anomaly detection for fraud
- **Full-Stack Development**: Next.js runtime integrations

---

## How to Run Locally
Clone the repo:
```bash
git clone https://github.com/<your-username>/portfolio-secure-data.git
