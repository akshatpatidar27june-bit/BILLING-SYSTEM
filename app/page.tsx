const films = [
  { title: "A Story Worth Remembering", meta: "Wedding Film · Cinematic", className: "film-one" },
  { title: "Two Families, One Frame", meta: "Wedding Film · Emotional", className: "film-two" },
  { title: "The Celebration Begins", meta: "Same-Day Edit · Reel", className: "film-three" },
];

const services = ["Wedding Films", "Wedding Reels", "Same-Day Edits", "Pre-Wedding Films", "Event Films", "Creator Editing"];

export default function Home() {
  return (
    <main>
      <nav className="nav container">
        <a className="brand" href="#top">STORY<span>CREATE</span>EDITOR</a>
        <div className="nav-links">
          <a href="#films">Films</a><a href="#services">Services</a><a href="#about">About</a>
          <a className="nav-cta" href="#contact">Book Your Date</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-overlay" />
        <div className="hero-content container">
          <p className="eyebrow">WEDDING FILMS · REELS · EDITING</p>
          <h1>Your story.<br /><em>Told like a film.</em></h1>
          <p className="hero-copy">Cinematic wedding stories built from real moments, honest reactions and the energy that makes your celebration yours.</p>
          <div className="actions">
            <a className="button button-light" href="#films">Watch Films <span>↗</span></a>
            <a className="text-link" href="#contact">Let&apos;s create your story <span>→</span></a>
          </div>
        </div>
        <div className="hero-meta"><span>INDIA · WORLDWIDE</span><span>SCROLL ↓</span></div>
      </section>

      <section className="statement container">
        <p className="eyebrow">THE APPROACH</p>
        <div><h2>Not just coverage.<br /><em>A story you can feel.</em></h2><p className="section-copy">From the quiet seconds before the ceremony to the chaos on the dance floor, every frame is shaped to preserve how the day actually felt.</p></div>
      </section>

      <section className="films container" id="films">
        <div className="section-head"><div><p className="eyebrow">SELECTED STORIES</p><h2>Recent <em>films</em></h2></div><a className="text-link dark" href="/films">View all stories →</a></div>
        <div className="film-grid">
          {films.map((film, i) => <a className={`film-card ${film.className}`} href="/films" key={film.title}><span className="film-number">0{i + 1}</span><div className="film-card-bottom"><p>{film.meta}</p><h3>{film.title}</h3></div><span className="play">▶</span></a>)}
        </div>
      </section>

      <section className="services" id="services"><div className="container"><p className="eyebrow">WHAT WE CREATE</p><div className="services-layout"><h2>Built around<br /><em>your story.</em></h2><div className="service-list">{services.map((service, i) => <a className="service-row" href="#contact" key={service}><span>0{i + 1}</span><strong>{service}</strong><span>↗</span></a>)}</div></div></div></section>

      <section className="about container" id="about"><div><p className="eyebrow">THE PERSON BEHIND THE EDIT</p><h2>Every wedding has<br /><em>its own rhythm.</em></h2></div><div className="about-copy"><p>StoryCreateEditor is built around one idea: your wedding film should feel like <em>you</em>, not a template.</p><p>We chase the in-between moments, the honest reactions and the details that become your favourite memories.</p><a className="text-link dark" href="#contact">Meet the creator →</a></div></section>

      <section className="contact" id="contact"><div className="container contact-inner"><p className="eyebrow">LET&apos;S MAKE SOMETHING MEANINGFUL</p><h2>Your date.<br /><em>Your people. Your film.</em></h2><p>Tell us about your wedding, your dates and the story you want to remember.</p><a className="button button-light" href="/book">Start an enquiry <span>↗</span></a></div></section>
      <footer className="footer container"><span>© 2026 STORYCREATEEDITOR</span><span>CINEMATIC WEDDING STORIES · WEDDING FILMS · REELS</span></footer>
    </main>
  );
}
