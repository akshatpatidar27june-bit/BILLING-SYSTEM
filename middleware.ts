import { NextRequest, NextResponse } from "next/server";

// Vercel is the presentation layer. Render owns the API, admin session,
// and PostgreSQL connection. Keeping authorization in one place prevents
// Vercel/Render session-secret mismatches.
export async function middleware(request: NextRequest) {
  const backend = process.env.RENDER_BACKEND_URL?.trim().replace(/\/$/, "");

  if (backend && request.nextUrl.pathname.startsWith("/api/")) {
    const target = new URL(`${backend}${request.nextUrl.pathname}${request.nextUrl.search}`);
    return NextResponse.rewrite(target);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/:path*"],
};
