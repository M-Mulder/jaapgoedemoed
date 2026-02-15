import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { Space_Mono } from "next/font/google";
import { headers } from "next/headers";
import Script from "next/script";
import "./globals.css";

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

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://jaapgoedemoed.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Jaap Goedemoed | Artist — Geometric Allegories",
    template: "%s | Jaap Goedemoed",
  },
  description:
    "Portfolio of Dutch contemporary artist Jaap Goedemoed (b. 1956). Geometric compositions, abstract art, mixed media collages, and works on old stock paper. Exhibited internationally since 1984.",
  keywords: [
    "Jaap Goedemoed",
    "Dutch artist",
    "contemporary art",
    "geometric art",
    "abstract art",
    "mixed media",
    "collage",
    "old stock paper art",
    "Amsterdam artist",
    "geometric compositions",
  ],
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
    apple: { url: "/favicon-large.svg", type: "image/svg+xml" },
    other: {
      rel: "mask-icon",
      url: "/favicon.svg",
      color: "#D4AF37",
    },
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    siteName: "Jaap Goedemoed",
    images: [
      {
        url: "/2020/05/6-Composition-2017-Final-state-003-1320x1320.jpg",
        width: 1320,
        height: 1320,
        alt: "Composition 2017 by Jaap Goedemoed",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/2020/05/6-Composition-2017-Final-state-003-1320x1320.jpg"],
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Read locale from middleware-injected header for correct <html lang>
  const headersList = await headers();
  const locale = headersList.get("x-locale") || "en";

  return (
    <html lang={locale} className="dark">
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-W4V4V4PCCM"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-W4V4V4PCCM');
        `}
      </Script>
      <body
        className={`${manrope.variable} ${playfair.variable} ${spaceMono.variable} min-h-screen flex flex-col text-[#e6e6e6] bg-[#0f0f0f]`}
      >
        {children}
      </body>
    </html>
  );
}
