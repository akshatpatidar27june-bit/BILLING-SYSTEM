import type { Metadata } from "next";
import "./globals.css";
import "./admin/admin.css";
import "./films/films.css";
import WhatsAppButton from "../components/WhatsAppButton";

export const metadata: Metadata = {
  title: "StoryCreateEditor — Wedding Films & Edits",
  description: "Cinematic wedding films, reels and same-day edits by StoryCreateEditor.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
