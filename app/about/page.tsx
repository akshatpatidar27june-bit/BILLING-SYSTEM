"use client";

import { useEffect, useState } from "react";

export default function AboutPage() {
  const [about, setAbout] = useState("StoryCreateEditor creates cinematic wedding stories with a clean, emotional and modern editing style.");
  useEffect(() => { fetch("/api/content").then((r) => r.ok ? r.json() : null).then((d) => d?.about_text && setAbout(d.about_text)).catch(() => {}); }, []);
  return <main className="archive-page"><nav className="archive-nav container"><a className="brand" href="/">STORY<span>CREATE</span>EDITOR</a><div className="nav-links"><a href="/works">Works</a><a href="/about">About</a><a className="nav-cta" href="/book">Book your date ↗</a></div></nav><header className="archive-hero container"><p className="eyebrow dark-eyebrow">ABOUT STORYCREATEEDITOR</p><h1>Small moments.<br /><em>Big feelings.</em></h1><p>{about}</p></header><section className="about-strip container" style={{paddingTop:20}}><div className="section-label"><span>01</span><span>THE APPROACH</span></div><div className="about-strip-content"><h2>We film the<br /><em>in-between.</em></h2><div><p>{about}</p><p>The ceremony matters. The portraits matter. But so does the look before the entrance, the laugh your friends cannot stop, and the five seconds nobody planned.</p></div></div></section><section className="booking-banner"><div className="container booking-banner-inner"><div><p className="eyebrow">02 · THE PROMISE</p><h2>No templates.<br /><em>No copy-paste stories.</em></h2></div><div className="booking-side"><p>Every couple gets a film built around their people, their pace and their personality. From full wedding films to quick-turnaround same-day edits.</p><a className="button button-accent" href="/book">Start your enquiry ↗</a></div></div></section></main>;
}
