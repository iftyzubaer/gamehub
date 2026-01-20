import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GameHub - Discover Your Next Favorite Game",
  description: "Browse and discover top-rated games across all genres and platforms. Search through thousands of games with real-time results.",
  keywords: ["games", "gaming", "game discovery", "RAWG", "video games", "pc games", "console games"],
  authors: [{ name: "Ifty Zubaer", url: "https://iftyzubaer.vercel.app" }],
  openGraph: {
    title: "GameHub - Discover Your Next Favorite Game",
    description: "Browse and discover top-rated games across all genres and platforms",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}