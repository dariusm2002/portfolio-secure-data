# Secure Systems & Data Engineering Portfolio — Darius McCullough

This portfolio is a curated set of **six production-minded projects** demonstrating secure-by-default engineering, scalable data workflows, and practical DevSecOps skills.  
It’s designed to show **both depth and breadth** — from client-side encryption to CI/CD hardening, leak-prevention tooling, ETL APIs, and cost-aware ML pipelines.

> Each project is minimal, **runnable**, and built with clarity, security, and maintainability in mind.

---

## 📂 Projects Overview

### 1. **`secrets-e2ee-demo/`** — End-to-End Encrypted Vault (TypeScript)
- **Per-device sealed-box envelopes** (X25519) and AEAD (XChaCha20-Poly1305)
- **Key rotation** with append-only audit log
- CLI for `init`, `add-device`, `add-secret`, `get-secret`, `rotate`, `audit`
- Security principle: server only ever stores ciphertext

### 2. **`actions-oidc-aws-iac/`** — GitHub → AWS OIDC Pipeline with Terraform
- Infrastructure-as-Code IAM role with **least privilege**
- GitHub Actions workflow for OIDC role assumption (no stored long-lived creds)
- Runtime secret fetch + SARIF upload stub for security scanning

### 3. **`secret-scanner/`** — Diff-Aware Secret Leak Prevention
- Regex + entropy heuristics
- **Baseline** & **allowlist** support
- Ships as both a **pre-commit hook** and a **GitHub Action**
- Prevents accidental credential leaks before they hit the repo

### 4. **`places-etl-ranking/`** — DuckDB ETL + FastAPI
- ETL pipeline that ingests, cleans, and ranks store locations
- Lightweight **data validation checks**
- Serves ranked data via `/top` endpoint in FastAPI
- Mirrors real-world data engineering & API deployment patterns

### 5. **`fraud-detection-lab/`** — Cost-Aware Anomaly Detection
- **IsolationForest + graph risk** ensemble scoring
- Threshold tuned for false-positive / false-negative cost
- Saves review-ready alerts and a **model card**
- Example of ML + operations integration

### 6. **`infisical-integrations-demo/`** — Runtime Secret Provider Interface
- Abstract `SecretProvider` interface with `get`, `rotate`, and `with_cache(ttl)`
- Mock provider now; swap with Infisical SDK later without changing app code
- Example FastAPI endpoints: `/health`, `/db`
