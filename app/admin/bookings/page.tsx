export default function BookingsAdmin() {
  return (
    <main className="simple-admin">
      <header className="simple-admin-header">
        <div><p>STORYCREATEEDITOR</p><h1>Bookings</h1></div>
        <a href="/admin">Back to Admin</a>
      </header>
      <section className="simple-admin-content">
        <h2>Booking calendar</h2>
        <p className="simple-admin-intro">Booked dates will appear here once enquiries are stored in the database.</p>
        <div className="simple-admin-note"><strong>No bookings yet</strong><span>The calendar is intentionally kept simple. No extra settings or unnecessary controls are included.</span></div>
      </section>
    </main>
  );
}
