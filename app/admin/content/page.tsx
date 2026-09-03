"use client";

import { useEffect, useState } from "react";

const fields = [
  ["hero_title", "Homepage heading"],
  ["hero_text", "Homepage text"],
  ["about_text", "About text"],
  ["contact_text", "Contact text"],
] as const;

export default function ContentAdmin() {
  const [values, setValues] = useState<Record<string,string>>({});
  const [message, setMessage] = useState("");
  useEffect(() => { fetch("/api/content").then((r) => r.json()).then(setValues).catch(() => setMessage("Could not load content.")); }, []);
  async function save() {
    setMessage("Saving…");
    const response = await fetch("/api/content", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(values) });
    setMessage(response.ok ? "Saved." : "Could not save. Check the database connection.");
  }
  return <main className="simple-admin"><header className="simple-admin-header"><div><p>STORYCREATEEDITOR</p><h1>Website Content</h1></div><a href="/admin">Back to Admin</a></header><section className="simple-admin-content"><h2>Change website text</h2><p className="simple-admin-intro">Edit the main text shown on the public website.</p><div className="simple-content-form">{fields.map(([key,label]) => <label key={key}>{label}{key === "hero_title" || key === "hero_text" ? <input value={values[key] || ""} onChange={(e) => setValues((v) => ({ ...v, [key]: e.target.value }))} /> : <textarea rows={5} value={values[key] || ""} onChange={(e) => setValues((v) => ({ ...v, [key]: e.target.value }))} />}</label>)}<button className="simple-admin-save" onClick={save}>Save changes</button>{message && <p>{message}</p>}</div></section></main>;
}
