export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919717052853?text=Hi%20StoryCreateEditor%2C%20I%20would%20like%20to%20enquire%20about%20your%20wedding%20films."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with StoryCreateEditor on WhatsApp"
      style={{
        position: "fixed",
        right: 22,
        bottom: 22,
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        gap: 9,
        padding: "13px 17px",
        borderRadius: 999,
        background: "#25D366",
        color: "white",
        fontSize: 12,
        fontWeight: 700,
        boxShadow: "0 12px 28px rgba(20, 80, 45, .24)",
        textDecoration: "none",
      }}
    >
      <span aria-hidden="true" style={{ fontSize: 17, lineHeight: 1 }}>◉</span>
      WhatsApp us
    </a>
  );
}
