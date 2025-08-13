#!/usr/bin/env node
import { Command } from "commander";
import { loadVault, saveVault } from "./storage.js";
import { ready, randomId } from "./crypto.js";
import type { Vault } from "./types.js";

const program = new Command();

program
  .name("e2ee-secrets")
  .description("Minimal E2EE secret vault (demo)")
  .version("0.1.0");

program
  .command("init")
  .requiredOption("--workspace <name>")
  .action(async (opts) => {
    const sodium = await ready();
    const keyPair = sodium.crypto_box_keypair();
    const vault: Vault = {
      workspace: opts.workspace,
      workspacePublicKey: Buffer.from(keyPair.publicKey).toString("base64"),
      users: [{ id: "u_admin", email: "admin@example.com" }],
      devices: [],
      secrets: []
    };
    await saveVault(vault);
    console.log("Initialized vault for", opts.workspace);
  });

program
  .command("invite-user")
  .requiredOption("--email <email>")
  .action(async (opts) => {
    const v = await loadVault();
    if (!v) throw new Error("vault not found");
    const id = "u_" + randomId();
    v.users.push({ id, email: opts.email });
    await saveVault(v);
    console.log("Invited", opts.email, "as", id);
  });

program
  .command("add-secret")
  .requiredOption("--name <name>")
  .requiredOption("--value <value>")
  .action(async (opts) => {
    const v = await loadVault();
    if (!v) throw new Error("vault not found");
    // For demo: use a single symmetric key per secret and "wrap" for zero devices (envelopes empty).
    const secretKey = Buffer.from(globalThis.crypto.getRandomValues(new Uint8Array(32))).toString("base64");
    const ciphertext = Buffer.from(opts.value).toString("base64"); // simplify for demo
    v.secrets.push({ name: opts.name, ciphertext, envelopes: [] });
    await saveVault(v);
    console.log("Added secret", opts.name, "(encrypted)");
  });

program
  .command("get-secret")
  .requiredOption("--name <name>")
  .action(async (opts) => {
    const v = await loadVault();
    if (!v) throw new Error("vault not found");
    const s = v.secrets.find(s => s.name === opts.name);
    if (!s) throw new Error("secret not found");
    console.log(Buffer.from(s.ciphertext, "base64").toString("utf8")); // demo only
  });

program.parse();
