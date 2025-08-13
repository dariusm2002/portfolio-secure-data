export type Device = {
  id: string;
  userId: string;
  publicKey: string; // base64
  secretKeyEnc: string; // device-encrypted workspace symmetric key (per secret key envelope)
};

export type SecretRecord = {
  name: string;
  ciphertext: string; // secret value encrypted with secretKey
  envelopes: { deviceId: string; encSecretKey: string }[]; // secretKey encrypted for each device
};

export type Vault = {
  workspace: string;
  workspacePublicKey: string;
  users: { id: string; email: string }[];
  devices: Device[];
  secrets: SecretRecord[];
};
