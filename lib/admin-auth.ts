import { createHmac, timingSafeEqual } from "node:crypto";

const COOKIE_NAME = "sce_admin_session";

export function adminSessionToken() {
  const password = process.env.ADMIN_PASSWORD;
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!password || !secret) return null;
  return createHmac("sha256", secret).update(password).digest("hex");
}

export function isAdminRequest(request: Request) {
  const expected = adminSessionToken();
  if (!expected) return false;
  const cookie = request.headers.get("cookie") || "";
  const match = cookie.match(new RegExp(`${COOKIE_NAME}=([^;]+)`));
  const supplied = match?.[1] || "";
  const a = Buffer.from(supplied);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}

export { COOKIE_NAME };
