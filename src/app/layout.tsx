import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { Space_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jaap Goedemoed | Artist",
  description: "Portfolio website for artist Jaap Goedemoed, showcasing artworks, exhibitions, and more.",
  keywords: ["artist", "art", "portfolio", "Jaap Goedemoed", "paintings", "exhibitions"],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.svg',
    apple: { url: '/favicon-large.svg', type: 'image/svg+xml' },
    other: {
      rel: 'mask-icon',
      url: '/favicon.svg',
      color: '#D4AF37',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${manrope.variable} ${playfair.variable} ${spaceMono.variable} min-h-screen flex flex-col text-[#e6e6e6] bg-[#0f0f0f]`}
      >
        <Navigation />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
