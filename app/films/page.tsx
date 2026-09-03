"use client";

import { useEffect, useState } from "react";

type Media = { id:number; title:string; mime_type:string; url:string };

export default function FilmsPage() {
  const [works, setWorks] = useState<Media[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => { fetch("/api/media").then((r) => r.ok ? r.json() : []).then(setWorks).finally(() => setLoading(false)); }, []);
  return <main className="archive-page"><header className="archive-nav"><a className="brand dark-brand" href="/">STORY<span>CREATE</span>EDITOR</a><a href="/book">Book your date →</a></header><section className="archive-hero"><p className="eyebrow">WORKS</p><h1>Wedding films.</h1><p>A selection of recent films and edits by StoryCreateEditor.</p></section><section className="story-list">{loading && <p>Loading works…</p>}{!loading && works.length === 0 && <p>No works uploaded yet.</p>}{works.map((work, index) => <article className="story-item" key={work.id}><span>{String(index + 1).padStart(2,"0")}</span><div><p>Wedding Film</p><h2>{work.title}</h2>{work.mime_type.startsWith("video/") ? <video className="work-video" src={work.url} controls playsInline preload="metadata" /> : <img className="work-image" src={work.url} alt={work.title} />}</div></article>)}</section><section className="archive-cta"><p className="eyebrow">YOUR TURN</p><h2>Your story could<br /><em>be next.</em></h2><a className="button button-dark" href="/book">Start an enquiry <span>→</span></a></section></main>;
}
