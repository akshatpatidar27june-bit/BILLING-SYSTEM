"use client";

import { FormEvent, useState } from "react";

const steps = ["You", "Services", "Date & place", "Your story"];
const serviceOptions = ["Wedding Film", "Wedding Reels", "Same-Day Edit", "Pre-Wedding Film", "Event Film", "Creator Editing"];

type FormData = { name: string; partner: string; phone: string; email: string; services: string[]; weddingDate: string; city: string; venue: string; events: string; story: string; referenceLink: string };
const initialData: FormData = { name: "", partner: "", phone: "", email: "", services: [], weddingDate: "", city: "", venue: "", events: "", story: "", referenceLink: "" };

export default function BookPage() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState<FormData>(initialData);

  function update(key: keyof FormData, value: string) { setData((current) => ({ ...current, [key]: value })); }
  function toggleService(name: string) { setData((current) => ({ ...current, services: current.services.includes(name) ? current.services.filter((x) => x !== name) : [...current.services, name] })); }

  async function submit(event: FormEvent) {
    event.preventDefault();
    setError("");
    if (step < steps.length - 1) { setStep(step + 1); return; }
    setSending(true);
    try {
      const response = await fetch("/api/enquiries", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Could not send enquiry.");
      setSubmitted(true);
    } catch (err) { setError(err instanceof Error ? err.message : "Could not send enquiry."); }
    finally { setSending(false); }
  }

  if (submitted) return <main className="booking-page"><div className="booking-card"><p className="eyebrow">ENQUIRY RECEIVED</p><h1>Let&apos;s make<br /><em>something meaningful.</em></h1><p>Your enquiry has been saved. The StoryCreateEditor team will get back to you shortly.</p><a className="button button-dark" href="/">Back to the website <span>→</span></a></div></main>;

  return <main className="booking-page"><div className="booking-top"><a className="brand dark-brand" href="/">STORY<span>CREATE</span>EDITOR</a><span>BOOK YOUR DATE</span></div><div className="booking-wrap"><aside><p className="eyebrow">LET&apos;S TALK</p><h1>Your story<br /><em>starts here.</em></h1><div className="step-list">{steps.map((item, i) => <div className={i === step ? "current" : i < step ? "done" : ""} key={item}><b>0{i + 1}</b><span>{item}</span></div>)}</div></aside><section className="booking-form"><div className="progress"><span style={{ width: `${((step + 1) / steps.length) * 100}%` }} /></div><p className="form-kicker">STEP 0{step + 1} / 0{steps.length}</p><form onSubmit={submit}>
    {step === 0 && <><h2>Tell us about <em>you.</em></h2><div className="form-grid"><label>YOUR NAME<input required value={data.name} onChange={(e) => update("name", e.target.value)} placeholder="Your name" /></label><label>PARTNER&apos;S NAME<input value={data.partner} onChange={(e) => update("partner", e.target.value)} placeholder="Partner&apos;s name" /></label><label>PHONE<input required value={data.phone} onChange={(e) => update("phone", e.target.value)} type="tel" placeholder="+91" /></label><label>EMAIL<input required value={data.email} onChange={(e) => update("email", e.target.value)} type="email" placeholder="you@example.com" /></label></div></>}
    {step === 1 && <><h2>What are we <em>creating?</em></h2><div className="choice-grid">{serviceOptions.map((name) => <button type="button" className={data.services.includes(name) ? "choice selected" : "choice"} onClick={() => toggleService(name)} key={name}>{name}<span>{data.services.includes(name) ? "✓" : "＋"}</span></button>)}</div></>}
    {step === 2 && <><h2>When &amp; where is it <em>happening?</em></h2><div className="form-grid"><label>WEDDING DATE<input required value={data.weddingDate} onChange={(e) => update("weddingDate", e.target.value)} type="date" /></label><label>CITY<input required value={data.city} onChange={(e) => update("city", e.target.value)} placeholder="City" /></label><label>VENUE<input value={data.venue} onChange={(e) => update("venue", e.target.value)} placeholder="Venue name" /></label><label>EVENTS<input value={data.events} onChange={(e) => update("events", e.target.value)} placeholder="Wedding / Reception / Other" /></label></div></>}
    {step === 3 && <><h2>Give us the <em>feeling.</em></h2><label className="wide-label">TELL US ABOUT YOUR DAY<textarea value={data.story} onChange={(e) => update("story", e.target.value)} rows={7} placeholder="What matters to you? What should the film feel like?" /></label><label className="wide-label">INSTAGRAM / REFERENCE LINK<input value={data.referenceLink} onChange={(e) => update("referenceLink", e.target.value)} placeholder="Optional link" /></label></>}
    {error && <p className="admin-login-error">{error}</p>}<div className="form-actions">{step > 0 && <button className="back-btn" type="button" onClick={() => setStep(step - 1)}>← Back</button>}<button className="button button-dark" type="submit" disabled={sending}>{sending ? "Sending…" : step === steps.length - 1 ? "Send enquiry" : "Continue"}<span>→</span></button></div>
  </form></section></div></main>;
}
