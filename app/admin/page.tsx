"use client";

export default function AdminDashboard() {
  return (
    <main className="simple-admin">
      <header className="simple-admin-header">
        <div><p>STORYCREATEEDITOR</p><h1>Admin Panel</h1></div>
        <a href="/">View Website</a>
      </header>
      <section className="simple-admin-content">
        <h2>What do you want to manage?</h2>
        <p className="simple-admin-intro">Choose one option below.</p>
        <div className="simple-admin-links">
          <a href="/admin/enquiries"><strong>Enquiries</strong><span>See messages and booking requests from clients.</span></a>
          <a href="/admin/bookings"><strong>Bookings</strong><span>See booked dates and manage the calendar.</span></a>
          <a href="/admin/works"><strong>Works</strong><span>Manage the films and videos shown on the website.</span></a>
        </div>
      </section>
    </main>
  );
}
