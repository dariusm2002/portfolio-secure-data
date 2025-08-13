import { NextResponse } from "next/server";
import { MockOidcProvider } from "@/lib/secretProvider";
export async function GET(){
  const p = new MockOidcProvider({ env: process.env.APP_ENV });
  const token = await p.get("API_TOKEN");
  return NextResponse.json({ ok:true, token_preview: token.slice(0,4) + "…" });
}
