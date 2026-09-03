import { NextRequest, NextResponse } from "next/server";

const COOKIE_NAME = "sce_admin_session";

async function tokenFor(password: string, secret: string) {
  const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const signature = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(password));
  return Array.from(new Uint8Array(signature)).map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

export async function middleware(request: NextRequest) {
  if (!request.nextUrl.pathname.startsWith("/admin") || request.nextUrl.pathname.startsWith("/admin/login")) return NextResponse.next();

  const password = process.env.ADMIN_PASSWORD;
  const secret = process.env.ADMIN_SESSION_SECRET;
  const session = request.cookies.get(COOKIE_NAME)?.value;

  if (!password || !secret || !session) return NextResponse.redirect(new URL("/admin/login", request.url));

  const expected = await tokenFor(password, secret);
  if (session !== expected) return NextResponse.redirect(new URL("/admin/login", request.url));

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
