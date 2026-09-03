const featuredFilms = [
  { title: "A Story Worth Remembering", meta: "Wedding Film · Cinematic" },
  { title: "Two Families, One Frame", meta: "Wedding Film · Emotional" },
  { title: "The Celebration Begins", meta: "Reel · Same-Day Edit" },
];

const services = [
  "Wedding Films",
  "Wedding Reels",
  "Same-Day Edits",
  "Pre-Wedding Films",
  "Event Films",
  "Creator Editing",
];

export default function Home() {
  return (
    <main>
      <nav className="nav container">
        <a className="brand" href="#top">STORY<span>CREATE</span>EDITOR</a>
        <div className="nav-links">
          <a href="#films">Films</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a className="nav-cta" href="#contact">Book Your Date</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-overlay" />
        <div className="hero-content container">
          <p className="eyebrow">WEDDING FILMS · REELS · EDITING</p>
          <h1>Your story.<br /><em>Told like a film.</em></h1>
          <p className="hero-copy">Cinematic wedding stories crafted around the moments, people and energy that make your day yours.</p>
          <div className="actions">
            <a className="button button-light" href="#films">Watch Films <span>↗</span></a>
            <a className="text-link" href="#contact">Let&apos;s create your story <span>→</span></a>
          </div>
        </div>
        <div className="scroll-note">SCROLL TO EXPLORE <span>↓</span></div>
      </section>

      <section className="statement container">
        <p className="eyebrow">THE APPROACH</p>
        <h2>Not just coverage.<br /><em>A story you can feel.</em></h2>
        <p className="section-copy">From the quiet seconds before the ceremony to the chaos on the dance floor, we turn real moments into films that still feel alive years later.</p>
      </section>

      <section className="films container" id="films">
        <div className="section-head">
          <div><p className="eyebrow">SELECTED STORIES</p><h2>Recent <em>films</em></h2></div>
          <a className="text-link dark" href="#contact">View all stories →</a>
        </div>
        <div className="film-grid">
          {featuredFilms.map((film, index) => (
            <article className={`film-card film-${index + 1}`} key={film.title}>
              <div className="film-number">0{index + 1}</div>
              <div className="film-card-bottom"><p>{film.meta}</p><h3>{film.title}</h3></div>
              <div className="play">▶</div>
            </article>
          ))}
        </div>
      </section>

      <section className="services" id="services">
        <div className="container">
          <p className="eyebrow">WHAT WE CREATE</p>
          <div className="services-layout">
            <h2>Built around<br /><em>your story.</em></h2>
            <div className="service-list">
              {services.map((service, index) => <div className="service-row" key={service}><span>0{index + 1}</span><strong>{service}</strong><span>↗</span></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="about container" id="about">
        <div><p className="eyebrow">THE PERSON BEHIND THE EDIT</p><h2>Every wedding has<br /><em>its own rhythm.</em></h2></div>
        <div className="about-copy"><p>StoryCreateEditor is built around one idea: your wedding film should feel like <em>you</em>, not a template.</p><p>We chase the in-between moments, the honest reactions and the little details that become your favourite memories.</p><a className="text-link dark" href="#contact">Meet the creator →</a></div>
      </section>

      <section className="contact" id="contact">
        <div className="container contact-inner">
          <p className="eyebrow">LET&apos;S MAKE SOMETHING MEANINGFUL</p>
          <h2>Your date.<br /><em>Your people. Your film.</em></h2>
          <p>Tell us a little about your wedding and the story you want to remember.</p>
          <a className="button button-light" href="mailto:hello@storycreateeditor.com">Start an enquiry <span>↗</span></a>
        </div>
      </section>

      <footer className="footer container"><span>© 2026 STORYCREATEEDITOR</span><span>CINEMATIC WEDDING STORIES</span></footer>
    </main>
  );
}
