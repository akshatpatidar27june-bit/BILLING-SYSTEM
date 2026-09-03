"use client";

const works = [
  { title: "Wedding Story 01", file: "/dist/videos/Video-13808.mp4" },
  { title: "Wedding Story 02", file: "/dist/videos/Video-24838.mp4" },
  { title: "Wedding Story 03", file: "/dist/videos/Video-32117.mp4" },
];

export default function WorksAdmin() {
  return (
    <main className="simple-admin">
      <header className="simple-admin-header">
        <div><p>STORYCREATEEDITOR</p><h1>Works</h1></div>
        <a href="/admin">Back to Admin</a>
      </header>
      <section className="simple-admin-content">
        <h2>Website works</h2>
        <p className="simple-admin-intro">These videos are shown on the public Works page.</p>
        <div className="simple-work-list">
          {works.map((work) => (
            <article className="simple-work-card" key={work.file}>
              <div><strong>{work.title}</strong><span>{work.file}</span></div>
              <video src={work.file} controls playsInline preload="metadata" />
            </article>
          ))}
        </div>
        <div className="simple-admin-note"><strong>Adding a new work</strong><span>Put the video or photo inside <code>public/dist/</code>, then add it to the Works page.</span></div>
      </section>
    </main>
  );
}
