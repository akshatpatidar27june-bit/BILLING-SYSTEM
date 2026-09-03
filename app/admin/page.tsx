"use client";

import { useState } from "react";

const actions = [
  ["01", "New enquiry", "Review incoming couples", "/admin/enquiries"],
  ["02", "Add booking", "Block a date on calendar", "/admin/bookings"],
  ["03", "Upload work", "Add a film, reel or photo", "/admin/works"],
  ["04", "Edit website", "Update the public story", "/admin/content"],
];

export default function AdminDashboard() {
  const [open, setOpen] = useState(false);
  return (
    <div className="admin-shell">
      <aside className={`admin-sidebar ${open ? "open" : ""}`}>
        <div className="admin-brand">STORY<span>CREATE</span><small>EDITOR / STUDIO</small></div>
        <nav className="admin-nav">
          <a className="active" href="/admin">⌂ <span>Overview</span></a>
          <a href="/admin/enquiries">◎ <span>Enquiries</span></a>
          <a href="/admin/bookings">◷ <span>Bookings</span></a>
          <a href="/admin/works">▣ <span>Works & Uploads</span></a>
          <div className="admin-nav-label">WEBSITE</div>
          <a href="/admin/content">Aa <span>Home & About</span></a>
          <a href="/admin/settings">⚙ <span>Settings</span></a>
        </nav>
        <div className="admin-user"><div className="avatar">SC</div><div><strong>Studio Admin</strong><span>StoryCreateEditor</span></div></div>
      </aside>

      <main className="admin-main">
        <header className="admin-topbar">
          <button className="menu-button" onClick={() => setOpen(!open)}>☰</button>
          <div><p className="admin-kicker">STUDIO CONTROL</p><h1>Your workspace.</h1></div>
          <div className="admin-actions"><a className="admin-preview" href="/">View website ↗</a></div>
        </header>

        <section className="admin-content">
          <section className="studio-welcome">
            <div><span className="panel-kicker">KEEP IT SIMPLE</span><h2>One place for<br /><em>your bookings & work.</em></h2><p>Manage enquiries, block dates and publish new films without touching code.</p></div>
            <a className="studio-primary" href="/admin/works">＋ Upload new work</a>
          </section>

          <div className="admin-focus-grid">
            <a href="/admin/enquiries" className="focus-panel"><span>01</span><small>INBOX</small><strong>Enquiries</strong><p>New couple enquiries and follow-ups live here.</p><b>Open inbox →</b></a>
            <a href="/admin/bookings" className="focus-panel focus-dark"><span>02</span><small>CALENDAR</small><strong>Bookings</strong><p>See confirmed dates and avoid double-booking.</p><b>Open calendar →</b></a>
            <a href="/admin/works" className="focus-panel focus-accent"><span>03</span><small>PORTFOLIO</small><strong>Works</strong><p>Upload films, reels and photos and publish them.</p><b>Manage works →</b></a>
          </div>

          <section className="quick-actions">
            <div className="panel-head"><div><span className="panel-kicker">QUICK ACTIONS</span><h2>What do you want to do?</h2></div></div>
            <div className="quick-action-grid">{actions.map(([no,title,copy,href]) => <a href={href} key={no}><span>{no}</span><strong>{title}</strong><small>{copy}</small><b>→</b></a>)}</div>
          </section>

          <section className="admin-note"><span>TIP</span><p>We&apos;re building this panel around the real workflow: <strong>enquiry → booking → shoot → upload work → publish.</strong> More third-party integrations can plug into this flow later.</p></section>
        </section>
      </main>
    </div>
  );
}
