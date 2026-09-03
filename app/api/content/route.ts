import { NextResponse } from "next/server";
import { db } from "../../../lib/db";
import { isAdminRequest } from "../../../lib/admin-auth";

export const runtime = "nodejs";

export async function GET() {
  try {
    const pool = await db();
    const result = await pool.query(`select key,value from site_content order by key`);
    return NextResponse.json(Object.fromEntries(result.rows.map((row) => [row.key, row.value])));
  } catch (error) {
    console.error("content load failed", error);
    return NextResponse.json({ error: "Could not load website content." }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  if (!isAdminRequest(request)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  try {
    const body = await request.json();
    const pool = await db();
    for (const key of ["hero_title", "hero_text", "about_text", "contact_text"]) {
      if (typeof body[key] !== "string") continue;
      await pool.query(`insert into site_content(key,value,updated_at) values($1,$2,now()) on conflict(key) do update set value=excluded.value, updated_at=now()`, [key, body[key].trim()]);
    }
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("content update failed", error);
    return NextResponse.json({ error: "Could not save website content." }, { status: 500 });
  }
}
