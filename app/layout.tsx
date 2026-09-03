import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StoryCreateEditor — Wedding Films & Edits",
  description: "Cinematic wedding films, reels and same-day edits by StoryCreateEditor.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
