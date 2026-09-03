"use client";

import { FormEvent, useState } from "react";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);
    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!response.ok) throw new Error();
      window.location.href = "/admin";
    } catch {
      setError("Incorrect password. Please try again.");
      setLoading(false);
    }
  }

  return (
    <main className="admin-login-page">
      <section className="admin-login-card">
        <div className="admin-login-brand">STORY<span>CREATE</span>EDITOR</div>
        <div className="admin-login-rule" />
        <p className="admin-login-kicker">PRIVATE AREA</p>
        <h1>Admin access.</h1>
        <p className="admin-login-copy">Manage enquiries, bookings, projects and website content from one place.</p>
        <form onSubmit={submit} className="admin-login-form">
          <label htmlFor="admin-password">Password</label>
          <input id="admin-password" autoFocus type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter admin password" required />
          {error && <p className="admin-login-error" role="alert">{error}</p>}
          <button disabled={loading} type="submit">{loading ? "Checking…" : "Enter dashboard  →"}</button>
        </form>
        <a className="admin-login-back" href="/">← Back to website</a>
      </section>
    </main>
  );
}
