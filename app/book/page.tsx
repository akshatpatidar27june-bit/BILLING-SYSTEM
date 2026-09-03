"use client";

import { FormEvent, useState } from "react";

const steps = ["You", "Services", "Date & place", "Your story"];
const serviceOptions = ["Wedding Film", "Wedding Reels", "Same-Day Edit", "Pre-Wedding Film", "Event Film", "Creator Editing"];

export default function BookPage() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [services, setServices] = useState<string[]>([]);

  function toggleService(name: string) { setServices((current) => current.includes(name) ? current.filter((x) => x !== name) : [...current, name]); }
  function next(event: FormEvent) { event.preventDefault(); if (step < steps.length - 1) setStep(step + 1); else setSubmitted(true); }

  if (submitted) return <main className="booking-page"><div className="booking-card"><p className="eyebrow">ENQUIRY RECEIVED</p><h1>Let&apos;s make<br /><em>something meaningful.</em></h1><p>Thank you. Your details are ready for the StoryCreateEditor team. We&apos;ll get back to you shortly.</p><a className="button button-dark" href="/">Back to the website <span>→</span></a></div></main>;

  return <main className="booking-page"><div className="booking-top"><a className="brand dark-brand" href="/">STORY<span>CREATE</span>EDITOR</a><span>BOOK YOUR DATE</span></div><div className="booking-wrap"><aside><p className="eyebrow">LET&apos;S TALK</p><h1>Your story<br /><em>starts here.</em></h1><div className="step-list">{steps.map((item, i) => <div className={i === step ? "current" : i < step ? "done" : ""} key={item}><b>0{i + 1}</b><span>{item}</span></div>)}</div></aside><section className="booking-form"><div className="progress"><span style={{ width: `${((step + 1) / steps.length) * 100}%` }} /></div><p className="form-kicker">STEP 0{step + 1} / 0{steps.length}</p><form onSubmit={next}>{step === 0 && <><h2>Tell us about <em>you.</em></h2><div className="form-grid"><label>YOUR NAME<input required name="name" placeholder="Your name" /></label><label>PARTNER&apos;S NAME<input name="partner" placeholder="Partner's name" /></label><label>PHONE<input required name="phone" type="tel" placeholder="+91" /></label><label>EMAIL<input required name="email" type="email" placeholder="you@example.com" /></label></div></>}{step === 1 && <><h2>What are we <em>creating?</em></h2><div className="choice-grid">{serviceOptions.map((name) => <button type="button" className={services.includes(name) ? "choice selected" : "choice"} onClick={() => toggleService(name)} key={name}>{name}<span>{services.includes(name) ? "✓" : "＋"}</span></button>)}</div></>}{step === 2 && <><h2>When &amp; where is it <em>happening?</em></h2><div className="form-grid"><label>WEDDING DATE<input required type="date" /></label><label>CITY<input required placeholder="City" /></label><label>VENUE<input placeholder="Venue name" /></label><label>EVENTS<input placeholder="Wedding / Reception / Other" /></label></div></>}{step === 3 && <><h2>Give us the <em>feeling.</em></h2><label className="wide-label">TELL US ABOUT YOUR DAY<textarea rows={7} placeholder="What matters to you? What should the film feel like?" /></label><label className="wide-label">INSTAGRAM / REFERENCE LINK<input placeholder="Optional link" /></label></>}<div className="form-actions">{step > 0 && <button className="back-btn" type="button" onClick={() => setStep(step - 1)}>← Back</button>}<button className="button button-dark" type="submit">{step === steps.length - 1 ? "Send enquiry" : "Continue"}<span>→</span></button></div></form></section></div></main>;
}
