import { NextResponse } from "next/server";
import { db } from "../../../lib/db";
import { isAdminRequest } from "../../../lib/admin-auth";

export const runtime = "nodejs";

export async function GET() {
  try {
    const pool = await db();
    const result = await pool.query(`select id,title,file_name,mime_type,created_at from media order by created_at desc`);
    return NextResponse.json(result.rows.map((row) => ({ ...row, url: `/api/media/${row.id}` })));
  } catch (error) {
    console.error("media list failed", error);
    return NextResponse.json({ error: "Could not load works." }, { status: 500 });
  }
}

export async function POST(request: Request) {
  if (!isAdminRequest(request)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  try {
    const form = await request.formData();
    const file = form.get("file");
    const title = String(form.get("title") || "").trim();
    if (!(file instanceof File) || !file.size) return NextResponse.json({ error: "Choose a video or image first." }, { status: 400 });
    if (!file.type.startsWith("video/") && !file.type.startsWith("image/")) return NextResponse.json({ error: "Only videos and images are allowed." }, { status: 400 });
    if (file.size > 100 * 1024 * 1024) return NextResponse.json({ error: "Maximum file size is 100 MB." }, { status: 400 });

    const pool = await db();
    const result = await pool.query(`insert into media(title,file_name,mime_type,data) values($1,$2,$3,$4) returning id`, [title || file.name.replace(/\.[^.]+$/, ""), file.name, file.type, Buffer.from(await file.arrayBuffer())]);
    return NextResponse.json({ ok: true, id: result.rows[0].id, url: `/api/media/${result.rows[0].id}` });
  } catch (error) {
    console.error("media upload failed", error);
    return NextResponse.json({ error: "Upload failed." }, { status: 500 });
  }
}
