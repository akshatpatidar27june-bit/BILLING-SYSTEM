import { NextResponse } from "next/server";
import { db } from "../../../lib/db";
import { isAdminRequest } from "../../../lib/admin-auth";

export const runtime = "nodejs";

export async function GET(request: Request) {
  if (!isAdminRequest(request)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  try {
    const pool = await db();
    const result = await pool.query(`select id,enquiry_id,client_name,wedding_date,city,venue,services,status,created_at from bookings order by wedding_date asc, created_at desc`);
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error("booking list failed", error);
    return NextResponse.json({ error: "Could not load bookings." }, { status: 500 });
  }
}
