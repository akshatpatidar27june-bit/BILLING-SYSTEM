const works = [
  { number: "01", title: "Wedding Story 01", file: "/dist/videos/Video-13808.mp4" },
  { number: "02", title: "Wedding Story 02", file: "/dist/videos/Video-24838.mp4" },
  { number: "03", title: "Wedding Story 03", file: "/dist/videos/Video-32117.mp4" },
];

export default function FilmsPage() {
  return (
    <main className="archive-page">
      <header className="archive-nav"><a className="brand dark-brand" href="/">STORY<span>CREATE</span>EDITOR</a><a href="/book">Book your date →</a></header>
      <section className="archive-hero"><p className="eyebrow">WORKS</p><h1>Wedding films.</h1><p>A selection of recent films and edits by StoryCreateEditor.</p></section>
      <section className="story-list">
        {works.map((work) => (
          <article className="story-item" key={work.number}>
            <span>{work.number}</span>
            <div><p>Wedding Film</p><h2>{work.title}</h2><video className="work-video" src={work.file} controls playsInline preload="metadata" /></div>
          </article>
        ))}
      </section>
      <section className="archive-cta"><p className="eyebrow">YOUR TURN</p><h2>Your story could<br /><em>be next.</em></h2><a className="button button-dark" href="/book">Start an enquiry <span>→</span></a></section>
    </main>
  );
}
