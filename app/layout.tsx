import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://gamehub-iftyzubaer.vercel.app'),
  title: "GameHub - Discover Your Next Favorite Game",
  description: "Browse and discover top-rated games across all genres and platforms. Search through thousands of games with real-time results powered by RAWG API.",
  keywords: ["games", "gaming", "game discovery", "RAWG", "video games", "pc games", "console games", "Next.js"],
  authors: [{ name: "Ifty Zubaer", url: "https://iftyzubaer.vercel.app" }],
  openGraph: {
    title: "GameHub - Discover Your Next Favorite Game",
    description: "Game discovery platform with real-time search across 10,000+ games. Built with Next.js 15, TypeScript, and Tailwind CSS.",
    url: "https://gamehub-iftyzubaer.vercel.app",
    siteName: "GameHub",
    images: [
      {
        url: "/preview.png", // We'll create this
        width: 1200,
        height: 630,
        alt: "GameHub - Game Discovery Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GameHub - Discover Your Next Favorite Game",
    description: "Game discovery platform with real-time search across 10,000+ games.",
    images: ["/preview.png"],
    creator: "@iftyzubaer", // Add your Twitter handle if you have one
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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}