import sodium from "libsodium-wrappers";

export async function ready() {
  if (!sodium.ready) await sodium.ready;
  return sodium;
}

export function randomId() {
  return Buffer.from(globalThis.crypto.getRandomValues(new Uint8Array(8))).toString("hex");
}
