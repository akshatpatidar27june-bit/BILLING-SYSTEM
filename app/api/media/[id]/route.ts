import { NextResponse } from "next/server";
import { db } from "../../../../lib/db";

export const runtime = "nodejs";

export async function GET(_request: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;
    const pool = await db();
    const result = await pool.query(`select mime_type,data,file_name from media where id=$1`, [id]);
    if (!result.rowCount) return new NextResponse("Not found", { status: 404 });
    const row = result.rows[0];
    return new NextResponse(row.data, {
      headers: {
        "Content-Type": row.mime_type,
        "Content-Disposition": `inline; filename="${String(row.file_name).replace(/[^a-zA-Z0-9._-]/g, "_")}"`,
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (error) {
    console.error("media read failed", error);
    return new NextResponse("Media unavailable", { status: 500 });
  }
}
