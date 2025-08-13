import { MockOidcProvider } from "@/lib/secretProvider";
export default async function Page(){
  const provider = new MockOidcProvider({ env: process.env.APP_ENV });
  const db = await provider.get("DB_URL");
  return (<main><h1>Next.js Runtime Secret Demo</h1><p>Fetched server-side (not printed): {db ? "yes" : "no"}</p>
  <p>API route: <code>/api/secret</code></p></main>);
}
