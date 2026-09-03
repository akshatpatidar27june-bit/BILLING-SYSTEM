"use client";

import { useEffect, useState } from "react";

type Enquiry = { id:number; name:string; partner:string; phone:string; email:string; services:string[]; wedding_date:string|null; city:string; venue:string; events:string; story:string; reference_link:string; status:string; created_at:string };

export default function EnquiriesAdmin() {
  const [items, setItems] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => { fetch("/api/enquiries").then(async (r) => { const data = await r.json(); if (!r.ok) throw new Error(data.error || "Could not load enquiries"); setItems(data); }).catch((e) => setError(e.message)).finally(() => setLoading(false)); }, []);
  return <main className="simple-admin"><header className="simple-admin-header"><div><p>STORYCREATEEDITOR</p><h1>Enquiries</h1></div><a href="/admin">Back to Admin</a></header><section className="simple-admin-content"><h2>Client enquiries</h2><p className="simple-admin-intro">New enquiries from the website appear here.</p>{loading && <p>Loading…</p>}{error && <div className="simple-admin-note"><strong>Database not connected</strong><span>{error}</span></div>}{!loading && !error && items.length === 0 && <div className="simple-admin-note"><strong>No enquiries yet</strong><span>When a client submits the booking form, it will appear here.</span></div>}<div className="simple-enquiry-list">{items.map((item) => <article className="simple-enquiry-card" key={item.id}><div><strong>{item.name}{item.partner ? ` & ${item.partner}` : ""}</strong><span>{item.phone} · {item.email}</span><span>{item.wedding_date || "Date not set"} · {item.city || "City not set"}{item.venue ? ` · ${item.venue}` : ""}</span><span>{item.services?.join(", ") || "No service selected"}</span></div><p>{item.story || "No message."}</p></article>)}</div></section></main>;
}
