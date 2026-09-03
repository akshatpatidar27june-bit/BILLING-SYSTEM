export default function EnquiriesAdmin() {
  return (
    <main className="simple-admin">
      <header className="simple-admin-header">
        <div><p>STORYCREATEEDITOR</p><h1>Enquiries</h1></div>
        <a href="/admin">Back to Admin</a>
      </header>
      <section className="simple-admin-content">
        <h2>Client enquiries</h2>
        <p className="simple-admin-intro">New enquiries will appear here once the booking form is connected to the database.</p>
        <div className="simple-admin-note"><strong>No enquiries yet</strong><span>The current booking form is a front-end form. I have not added fake enquiry data.</span></div>
      </section>
    </main>
  );
}
