"use client";

import { useState } from "react";

const stats = [
  ["Total Enquiries", "128", "+18% this month", "↗"],
  ["New Enquiries", "24", "Needs attention", "!"],
  ["Confirmed Bookings", "18", "+4 this month", "✓"],
  ["Upcoming Shoots", "07", "Next: 14 Sep", "◷"],
];

const enquiries = [
  { name: "Riya & Arjun", service: "Wedding Film + Reels", date: "14 Sep 2026", location: "Indore, MP", status: "NEW" },
  { name: "Kavya & Rohan", service: "Full Wedding Story", date: "28 Sep 2026", location: "Udaipur, RJ", status: "CONTACTED" },
  { name: "Mehak & Yash", service: "Same-Day Edit", date: "04 Oct 2026", location: "Mandsaur, MP", status: "PROPOSAL" },
  { name: "Ananya & Dev", service: "Pre-Wedding Film", date: "18 Oct 2026", location: "Jaipur, RJ", status: "NEW" },
];

const upcoming = [
  ["14", "SEP", "Riya & Arjun", "Wedding Film", "Indore"],
  ["28", "SEP", "Kavya & Rohan", "Full Wedding Story", "Udaipur"],
  ["04", "OCT", "Mehak & Yash", "Same-Day Edit", "Mandsaur"],
];

export default function AdminDashboard() {
  const [open, setOpen] = useState(false);
  return (
    <div className="admin-shell">
      <aside className={`admin-sidebar ${open ? "open" : ""}`}>
        <div className="admin-brand">STORY<span>CREATE</span><small>EDITOR / ADMIN</small></div>
        <nav className="admin-nav">
          <a className="active" href="/admin">⌂ <span>Dashboard</span></a>
          <a href="/admin/enquiries">◎ <span>Enquiries <b>24</b></span></a>
          <a href="/admin/bookings">◷ <span>Bookings & Calendar</span></a>
          <a href="/admin/projects">▣ <span>Projects</span></a>
          <div className="admin-nav-label">CONTENT</div>
          <a href="/admin/films">▶ <span>Films</span></a>
          <a href="/admin/reels">▻ <span>Reels</span></a>
          <a href="/admin/services">✦ <span>Services</span></a>
          <a href="/admin/testimonials">♡ <span>Testimonials</span></a>
          <a href="/admin/content">Aa <span>Website Content</span></a>
          <a href="/admin/media">▧ <span>Media Library</span></a>
          <div className="admin-nav-label">SYSTEM</div>
          <a href="/admin/settings">⚙ <span>Settings</span></a>
        </nav>
        <div className="admin-user"><div className="avatar">AK</div><div><strong>Admin</strong><span>StoryCreateEditor</span></div><span>•••</span></div>
      </aside>

      <main className="admin-main">
        <header className="admin-topbar">
          <button className="menu-button" onClick={() => setOpen(!open)}>☰</button>
          <div><p className="admin-kicker">THURSDAY · 03 SEPTEMBER 2026</p><h1>Good evening, Abhishek.</h1></div>
          <div className="admin-actions"><button className="icon-button">⌕</button><button className="icon-button">♢<i /></button><a className="admin-preview" href="/">View website ↗</a></div>
        </header>

        <section className="admin-content">
          <div className="stats-grid">
            {stats.map(([label, value, note, icon]) => <article className="stat-card" key={label}><div className="stat-icon">{icon}</div><span>{label}</span><strong>{value}</strong><small>{note}</small></article>)}
          </div>

          <div className="dashboard-grid">
            <section className="panel enquiries-panel">
              <div className="panel-head"><div><span className="panel-kicker">LEADS</span><h2>Recent enquiries</h2></div><a href="/admin/enquiries">View all →</a></div>
              <div className="table-wrap"><table><thead><tr><th>Couple</th><th>Service</th><th>Date</th><th>Location</th><th>Status</th></tr></thead><tbody>{enquiries.map(e => <tr key={e.name}><td><strong>{e.name}</strong></td><td>{e.service}</td><td>{e.date}</td><td>{e.location}</td><td><span className={`status ${e.status.toLowerCase()}`}>{e.status}</span></td></tr>)}</tbody></table></div>
            </section>

            <section className="panel calendar-panel">
              <div className="panel-head"><div><span className="panel-kicker">SCHEDULE</span><h2>Upcoming shoots</h2></div><a href="/admin/bookings">Calendar →</a></div>
              <div className="shoot-list">{upcoming.map(s => <div className="shoot" key={s[2]}><div className="date-box"><strong>{s[0]}</strong><span>{s[1]}</span></div><div><strong>{s[2]}</strong><span>{s[3]} · {s[4]}</span></div><span className="shoot-arrow">→</span></div>)}</div>
              <a className="add-booking" href="/admin/bookings">+ Add booking</a>
            </section>
          </div>

          <div className="quick-grid">
            <a href="/admin/enquiries" className="quick-card"><span>01</span><strong>New enquiry</strong><small>Add or review a lead →</small></a>
            <a href="/admin/projects" className="quick-card"><span>02</span><strong>Create project</strong><small>Start a new wedding story →</small></a>
            <a href="/admin/reels" className="quick-card"><span>03</span><strong>Publish a reel</strong><small>Add content to the website →</small></a>
            <a href="/admin/content" className="quick-card"><span>04</span><strong>Edit homepage</strong><small>Change what visitors see →</small></a>
          </div>
        </section>
      </main>
    </div>
  );
}
