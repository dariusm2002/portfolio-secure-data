# Design Note — E2EE Secret Vault

**Goals:** client-side encryption; per-device access; cheap rotation; auditable usage.

## Trust Model
- Workspace PK is public; each device holds its own keypair (private key never leaves device).
- Secrets use a random symmetric key (AEAD XChaCha20-Poly1305). The key is sealed for each device (X25519).

## Device Enrollment
1) Device generates an X25519 keypair locally  
2) Public key is added to vault metadata  
3) Future secrets include an envelope for that device; re-wrap to backfill

## Key Rotation
- **Per-secret rotation:** decrypt with old key, re-encrypt with new key, append version, re-seal envelopes
- **Device rotation:** generate new device keypair → create new envelopes only (no data re-encrypt)

## Audit Logging
- Append-only JSONL `audit.jsonl`: `ts`, `op`, `actor/device`, `secret`, `version` (no plaintext)
- Signals to watch: unusual get frequency, failed decrypts, rotate bursts

## Future Hardening
- WebCrypto + WASM sodium, MACed metadata, hash-chained logs, M-of-N recovery
