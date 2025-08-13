import { promises as fs } from "node:fs";
import { Vault } from "./types.js";

export async function loadVault(path = "vault.json"): Promise<Vault | null> {
  try {
    const raw = await fs.readFile(path, "utf8");
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export async function saveVault(v: Vault, path = "vault.json") {
  await fs.writeFile(path, JSON.stringify(v, null, 2));
}
