import { NextResponse } from "next/server";
import { db } from "../../../lib/db";
import { isAdminRequest } from "../../../lib/admin-auth";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name || "").trim();
    const phone = String(body.phone || "").trim();
    const email = String(body.email || "").trim();
    if (!name || !phone || !email) return NextResponse.json({ error: "Name, phone and email are required." }, { status: 400 });

    const services = Array.isArray(body.services) ? body.services.map(String) : [];
    const pool = await db();
    const result = await pool.query(
      `insert into enquiries(name, partner, phone, email, services, wedding_date, city, venue, events, story, reference_link)
       values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) returning id`,
      [name, String(body.partner || ""), phone, email, services, body.weddingDate || null, String(body.city || ""), String(body.venue || ""), String(body.events || ""), String(body.story || ""), String(body.referenceLink || "")]
    );
    const enquiryId = result.rows[0].id;

    if (body.weddingDate) {
      await pool.query(
        `insert into bookings(enquiry_id, client_name, wedding_date, city, venue, services) values($1,$2,$3,$4,$5,$6)`,
        [enquiryId, name, body.weddingDate, String(body.city || ""), String(body.venue || ""), services]
      );
    }

    return NextResponse.json({ ok: true, id: enquiryId });
  } catch (error) {
    console.error("enquiry create failed", error);
    return NextResponse.json({ error: "Could not save enquiry." }, { status: 500 });
  }
}

export async function GET(request: Request) {
  if (!isAdminRequest(request)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  try {
    const pool = await db();
    const result = await pool.query(`select id,name,partner,phone,email,services,wedding_date,city,venue,events,story,reference_link,status,created_at from enquiries order by created_at desc`);
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error("enquiry list failed", error);
    return NextResponse.json({ error: "Could not load enquiries." }, { status: 500 });
  }
}
