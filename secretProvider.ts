export interface SecretProvider { get(name: string): Promise<string>; rotate?(name: string): Promise<void>; }
export class MockOidcProvider implements SecretProvider {
  constructor(private opts: { env?: string } = {}) {}
  async get(name: string): Promise<string> {
    const env = this.opts.env ?? process.env.APP_ENV ?? "local";
    if (name === "DB_URL") return env === "local" ? "postgres://user:pass@host/db_runtime_only" : "postgres://prod/db";
    if (name === "API_TOKEN") return "tok_runtime_redacted";
    throw new Error(`Unknown secret: ${name}`);
  }
}
