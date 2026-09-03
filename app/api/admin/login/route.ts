import { createHmac, timingSafeEqual } from "node:crypto";
import { NextResponse } from "next/server";

const COOKIE_NAME = "sce_admin_session";

function sessionToken() {
  const password = process.env.ADMIN_PASSWORD;
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!password || !secret) return null;
  return createHmac("sha256", secret).update(password).digest("hex");
}

export async function POST(request: Request) {
  const configuredPassword = process.env.ADMIN_PASSWORD;
  const configuredSecret = process.env.ADMIN_SESSION_SECRET;
  if (!configuredPassword || !configuredSecret) {
    return NextResponse.json({ error: "Admin authentication is not configured." }, { status: 503 });
  }

  let body: { password?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const supplied = Buffer.from(String(body.password ?? ""));
  const expected = Buffer.from(configuredPassword);
  const valid = supplied.length === expected.length && timingSafeEqual(supplied, expected);
  if (!valid) return NextResponse.json({ error: "Invalid password." }, { status: 401 });

  const token = sessionToken();
  if (!token) return NextResponse.json({ error: "Authentication configuration error." }, { status: 503 });

  const response = NextResponse.json({ ok: true });
  response.cookies.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 12,
  });
  return response;
}
