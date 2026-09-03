const works = [
  { no: "01", title: "The First Look", meta: "Wedding Film · Indore", tone: "rose" },
  { no: "02", title: "A Day To Remember", meta: "Wedding Film · Mandsaur", tone: "gold" },
  { no: "03", title: "After The Vows", meta: "Same-Day Edit · Neemuch", tone: "violet" },
  { no: "04", title: "The Celebration", meta: "Wedding Reel · Rajasthan", tone: "rose" },
];

export default function WorksPage() {
  return (
    <main className="archive-page">
      <nav className="archive-nav container"><a className="brand" href="/">STORY<span>CREATE</span>EDITOR</a><div className="nav-links"><a href="/works">Works</a><a href="/about">About</a><a className="nav-cta" href="/book">Book your date ↗</a></div></nav>
      <header className="archive-hero container"><p className="eyebrow dark-eyebrow">THE WORK · 2026</p><h1>Stories, not<br /><em>showreels.</em></h1><p>Every project is built around the people, pace and feeling of the day.</p></header>
      <section className="archive-grid container">
        {works.map((work) => <a href="/book" className={`work-tile archive-tile work-${work.tone}`} key={work.title}><span className="work-no">{work.no}</span><span className="work-play">▶</span><div className="work-info"><small>{work.meta}</small><h3>{work.title}</h3></div></a>)}
      </section>
      <section className="archive-cta"><div className="container"><p className="eyebrow">LIKE WHAT YOU SEE?</p><h2>Your story could<br /><em>be next.</em></h2><a className="button button-accent" href="/book">Check your date ↗</a></div></section>
    </main>
  );
}
