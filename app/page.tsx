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
            <p className="eyebrow">WEDDING FILMS · REELS · SAME-DAY EDITS</p>
            <h1>Make it feel<br /><em>like a movie.</em></h1>
            <p className="hero-copy">Cinematic wedding stories for couples who want to remember the feeling, not just the footage.</p>
            <div className="actions">
              <a className="button button-accent" href="/works">Explore the work <span>↗</span></a>
              <a className="text-link" href="/book">Check your date <span>→</span></a>
            </div>
          </div>
          <div className="hero-card-stack" aria-hidden="true">
            <div className="floating-card card-back"><span>FRAME 03</span></div>
            <div className="floating-card card-mid"><span>FRAME 02</span></div>
            <div className="floating-card card-front"><span>FRAME 01</span><strong>YOUR<br />STORY</strong><small>cinematic / 2026</small></div>
          </div>
        </div>
        <div className="hero-bottom container"><span>INDIA · WORLDWIDE</span><span>SCROLL TO EXPLORE ↓</span></div>
      </section>

      <section className="intro-section container">
        <div className="section-label"><span>01</span><span>THE IDEA</span></div>
        <div className="intro-grid">
          <h2>Not a wedding video.<br /><em>A memory with a pulse.</em></h2>
          <p>We turn real moments into films that have rhythm, atmosphere and personality. The nervous laugh, the quiet look, the wild dance floor — all the little things that make your day yours.</p>
        </div>
      </section>

      <section className="works-preview container">
        <div className="section-heading">
          <div><p className="eyebrow dark-eyebrow">02 · SELECTED WORKS</p><h2>Stories we&apos;ve <em>made.</em></h2></div>
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
          <div><p className="eyebrow">03 · YOUR DATE</p><h2>Got a date?<br /><em>Let&apos;s make it a story.</em></h2></div>
          <div className="booking-side"><p>Tell us your dates, location and what you&apos;re dreaming of. The enquiry takes a couple of minutes.</p><a className="button button-light" href="/book">Start booking enquiry <span>↗</span></a></div>
        </div>
      </section>

      <section className="about-strip container">
        <div className="section-label"><span>04</span><span>ABOUT</span></div>
        <div className="about-strip-content"><h2>One creator.<br /><em>One story at a time.</em></h2><div><p>StoryCreateEditor is a wedding-film and editing studio focused on honest, cinematic storytelling and fast, social-first edits.</p><a className="text-link dark" href="/about">Meet the creator →</a></div></div>
      </section>

      <footer className="site-footer container"><a className="brand" href="/">STORY<span>CREATE</span>EDITOR</a><span>WEDDING FILMS · REELS · EDITING</span><a href="/book">BOOK YOUR DATE ↗</a></footer>
    </main>
  );
}
