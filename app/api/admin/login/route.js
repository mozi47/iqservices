import fs from "fs";
import path from "path";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { signSession, COOKIE } from "@/lib/auth";

const hits = new Map(); // ip -> { n, reset }  (in-memory, fine for a single instance)
const MAX = 5, WINDOW = 15 * 60 * 1000;

export async function POST(req) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() || "local";
  const now = Date.now();
  const h = hits.get(ip);
  if (h && h.reset > now && h.n >= MAX) {
    return NextResponse.json({ error: "Too many attempts. Try later." }, { status: 429 });
  }

  const { username = "", password = "" } = await req.json().catch(() => ({}));
  const creds = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), "creds.json"), "utf8")
  );

  // always run bcrypt so response time doesn't reveal whether the username was right
  const passOk = await bcrypt.compare(String(password), creds.passwordHash);
  if (!(passOk && username === creds.username)) {
    hits.set(ip, h && h.reset > now ? { ...h, n: h.n + 1 } : { n: 1, reset: now + WINDOW });
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  hits.delete(ip);
  const res = NextResponse.json({ ok: true });
  res.cookies.set(COOKIE, await signSession(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 8,
  });
  return res;
}