"use client";

export default function AdminDashboard() {
  return <main className="simple-admin"><header className="simple-admin-header"><div><p>STORYCREATEEDITOR</p><h1>Admin Panel</h1></div><a href="/">View Website</a></header><section className="simple-admin-content"><h2>What do you want to manage?</h2><p className="simple-admin-intro">Only the four things you need.</p><div className="simple-admin-links"><a href="/admin/enquiries"><strong>1. Enquiries</strong><span>See every client enquiry sent from the website.</span></a><a href="/admin/bookings"><strong>2. Bookings</strong><span>See the dates created from client enquiries.</span></a><a href="/admin/works"><strong>3. Works</strong><span>Select and upload videos or photos. They become visible on the public Works page.</span></a><a href="/admin/content"><strong>4. Website Content</strong><span>Change the homepage and About page text.</span></a></div></section></main>;
}
