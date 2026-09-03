const featuredWorks = [
  { no: "01", title: "The First Look", meta: "Wedding Film · Indore", tone: "rose" },
  { no: "02", title: "A Day To Remember", meta: "Wedding Film · Mandsaur", tone: "gold" },
  { no: "03", title: "After The Vows", meta: "Same-Day Edit · Neemuch", tone: "violet" },
];

export default function Home() {
  return (
    <main className="site-shell">
      <nav className="site-nav container">
        <a className="brand" href="/">STORY<span>CREATE</span>EDITOR</a>
        <div className="nav-links">
          <a href="/works">Works</a>
          <a href="/about">About</a>
          <a className="nav-cta" href="/book">Book your date <span>↗</span></a>
        </div>
      </nav>

      <section className="hero-3d" id="top">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />
        <div className="hero-orbit orbit-one" />
        <div className="hero-orbit orbit-two" />
        <div className="hero-content container">
          <div className="hero-copy-block">
            <p className="eyebrow">WEDDING FILMS · REELS · EDITS</p>
            <h1>Your day.<br /><em>Your story.</em></h1>
            <p className="hero-copy">Beautiful wedding films and reels made to keep your best moments close.</p>
            <div className="actions">
              <a className="button button-accent" href="/works">See our work <span>↗</span></a>
              <a className="text-link" href="/book">Check your date <span>→</span></a>
            </div>
          </div>
          <div className="hero-card-stack" aria-hidden="true">
            <div className="floating-card card-back"><span>FRAME 03</span></div>
            <div className="floating-card card-mid"><span>FRAME 02</span></div>
            <div className="floating-card card-front"><span>FRAME 01</span><strong>YOUR<br />STORY</strong><small>WEDDING FILMS · 2026</small></div>
          </div>
        </div>
        <div className="hero-bottom container"><span>INDIA · WORLDWIDE</span><span>SCROLL ↓</span></div>
      </section>

      <section className="intro-section container">
        <div className="section-label"><span>01</span><span>OUR STYLE</span></div>
        <div className="intro-grid">
          <h2>Real moments.<br /><em>Beautifully made.</em></h2>
          <p>We capture the smiles, emotions, family, friends and fun — then turn them into a film that feels like you.</p>
        </div>
      </section>

      <section className="works-preview container">
        <div className="section-heading">
          <div><p className="eyebrow dark-eyebrow">02 · OUR WORK</p><h2>Some stories<br /><em>we made.</em></h2></div>
          <a className="text-link dark" href="/works">View all works →</a>
        </div>
        <div className="work-stage">
          {featuredWorks.map((work, index) => (
            <a href="/works" className={`work-tile work-${work.tone}`} key={work.title}>
              <span className="work-no">{work.no}</span>
              <span className="work-play">▶</span>
              <div className="work-info"><small>{work.meta}</small><h3>{work.title}</h3></div>
              <span className={`depth-ring ring-${index + 1}`} />
            </a>
          ))}
        </div>
      </section>

      <section className="booking-banner">
        <div className="container booking-banner-inner">
          <div><p className="eyebrow">03 · BOOKING</p><h2>Have a date?<br /><em>Let&apos;s talk.</em></h2></div>
          <div className="booking-side"><p>Tell us your date, place and what you need. It only takes a few minutes.</p><a className="button button-light" href="/book">Book your date <span>↗</span></a></div>
        </div>
      </section>

      <section className="about-strip container">
        <div className="section-label"><span>04</span><span>ABOUT</span></div>
        <div className="about-strip-content"><h2>One studio.<br /><em>Your story.</em></h2><div><p>StoryCreateEditor makes cinematic wedding films, reels and quick edits with a simple goal: make your memories feel special.</p><a className="text-link dark" href="/about">About us →</a></div></div>
      </section>

      <footer className="site-footer container"><a className="brand" href="/">STORY<span>CREATE</span>EDITOR</a><span>WEDDING FILMS · REELS · EDITING</span><a href="/book">BOOK YOUR DATE ↗</a></footer>
    </main>
  );
}
