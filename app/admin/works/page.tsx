"use client";

import { useState } from "react";

export default function WorksAdmin() {
  const [type, setType] = useState("Film");
  return (
    <main className="admin-shell">
      <aside className="admin-sidebar"><div className="admin-brand">STORY<span>CREATE</span><small>EDITOR / STUDIO</small></div><nav className="admin-nav"><a href="/admin">⌂ <span>Overview</span></a><a href="/admin/enquiries">◎ <span>Enquiries</span></a><a href="/admin/bookings">◷ <span>Bookings</span></a><a className="active" href="/admin/works">▣ <span>Works & Uploads</span></a><div className="admin-nav-label">WEBSITE</div><a href="/admin/content">Aa <span>Home & About</span></a><a href="/admin/settings">⚙ <span>Settings</span></a></nav></aside>
      <section className="admin-main"><header className="admin-topbar"><div><p className="admin-kicker">PORTFOLIO</p><h1>Works & uploads.</h1></div><a className="admin-preview" href="/">View website ↗</a></header><div className="admin-content">
        <section className="upload-card"><div><span className="panel-kicker">NEW WORK</span><h2>Publish something<br /><em>beautiful.</em></h2><p>Add a film, reel or photo set. The final version will be designed to appear on the public Works page.</p></div><label className="dropzone"><input type="file" accept="video/*,image/*" multiple /><strong>Drop files here</strong><span>or click to choose videos / photos</span></label></section>
        <section className="editor-card"><div className="panel-head"><div><span className="panel-kicker">DETAILS</span><h2>Work information</h2></div></div><div className="editor-grid"><label>Title<input placeholder="e.g. The First Look" /></label><label>Location<input placeholder="e.g. Indore, MP" /></label><label>Type<select value={type} onChange={e => setType(e.target.value)}><option>Film</option><option>Reel</option><option>Photo set</option></select></label><label>Project date<input type="date" /></label><label className="full">Description<textarea placeholder="A short story about this wedding or project..." rows={5} /></label></div><div className="editor-footer"><span>Drafts can be saved before publishing.</span><button>Save draft</button><button className="publish">Publish work ↗</button></div></section>
      </div></section>
    </main>
  );
}
