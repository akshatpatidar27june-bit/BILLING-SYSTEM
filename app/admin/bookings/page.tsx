"use client";

import { useEffect, useState } from "react";

type Booking = { id:number; client_name:string; wedding_date:string; city:string; venue:string; services:string[]; status:string };

export default function BookingsAdmin() {
  const [items, setItems] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => { fetch("/api/bookings").then(async (r) => { const data = await r.json(); if (!r.ok) throw new Error(data.error || "Could not load bookings"); setItems(data); }).catch((e) => setError(e.message)).finally(() => setLoading(false)); }, []);
  return <main className="simple-admin"><header className="simple-admin-header"><div><p>STORYCREATEEDITOR</p><h1>Bookings</h1></div><a href="/admin">Back to Admin</a></header><section className="simple-admin-content"><h2>Booking calendar</h2><p className="simple-admin-intro">Dates are created automatically when a client submits an enquiry.</p>{loading && <p>Loading…</p>}{error && <div className="simple-admin-note"><strong>Database not connected</strong><span>{error}</span></div>}{!loading && !error && items.length === 0 && <div className="simple-admin-note"><strong>No bookings yet</strong><span>A booking will appear here after a client sends an enquiry with a date.</span></div>}<div className="simple-booking-list">{items.map((item) => <article className="simple-booking-card" key={item.id}><strong>{item.wedding_date}</strong><div>{item.client_name}</div><span>{item.city}{item.venue ? ` · ${item.venue}` : ""}</span><span>{item.services?.join(", ") || "No service selected"}</span></article>)}</div></section></main>;
}
