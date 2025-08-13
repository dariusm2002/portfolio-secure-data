# secrets-e2ee-demo
A minimal end‑to‑end encrypted (E2EE) secret sharing proof‑of‑concept. Secrets are encrypted **client‑side** with a workspace public key; users decrypt with their own device key via envelope encryption. This mirrors the core trust model used by modern secret managers.

## Highlights
- Workspace keypair (Ed25519 -> X25519) and per‑user device keypairs
- Envelope encryption (secret symmetric key encrypted for each device)
- JSON "vault" stored server‑side is always ciphertext
- CLI: `init`, `add-secret`, `get-secret`, `invite-user`
- Role-based access sample

## Stack
TypeScript, Node 20, `libsodium-wrappers`, `zod`, `commander`

## Quick start
```bash
pnpm i
pnpm ts-node src/cli.ts init --workspace my-app
pnpm ts-node src/cli.ts add-secret --name STRIPE_KEY --value sk_live_***
pnpm ts-node src/cli.ts get-secret --name STRIPE_KEY
```
**Security callout:** Keys never leave the client; server only sees ciphertext.
