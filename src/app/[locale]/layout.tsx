import { i18n } from "@/i18n/config";
import { ReactNode } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getLocaleData, type Locale } from "@/lib/localeData";
import { LocaleProvider } from "@/context/LocaleContext";
import type { Metadata } from "next";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://jaapgoedemoed.com";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const localeData = getLocaleData(locale as Locale);

  return {
    title: `${localeData.hero.title} | Jaap Goedemoed`,
    description: localeData.hero.description,
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        en: `${baseUrl}/en`,
        nl: `${baseUrl}/nl`,
        zh: `${baseUrl}/zh`,
        "x-default": `${baseUrl}/en`,
      },
    },
    openGraph: {
      title: `${localeData.hero.title} | Jaap Goedemoed`,
      description: localeData.hero.description,
      url: `${baseUrl}/${locale}`,
      siteName: "Jaap Goedemoed",
      locale:
        locale === "zh" ? "zh_CN" : locale === "nl" ? "nl_NL" : "en_US",
      type: "website",
      images: [
        {
          url: `${baseUrl}/2020/05/6-Composition-2017-Final-state-003-1320x1320.jpg`,
          width: 1320,
          height: 1320,
          alt: "Composition 2017 by Jaap Goedemoed",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${localeData.hero.title} | Jaap Goedemoed`,
      description: localeData.hero.description,
      images: [
        `${baseUrl}/2020/05/6-Composition-2017-Final-state-003-1320x1320.jpg`,
      ],
    },
  };
}

// JSON-LD structured data for the artist and website
function generateJsonLd(locale: string) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Jaap Goedemoed",
      url: baseUrl,
      description:
        "Portfolio of Dutch contemporary artist Jaap Goedemoed — geometric compositions, abstract art, and mixed media.",
      inLanguage: [locale, "en", "nl", "zh"],
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Jaap Goedemoed",
      url: baseUrl,
      jobTitle: "Artist",
      birthDate: "1956",
      birthPlace: {
        "@type": "Place",
        name: "De Bilt, The Netherlands",
      },
      nationality: {
        "@type": "Country",
        name: "Netherlands",
      },
      knowsAbout: [
        "Abstract art",
        "Geometric art",
        "Mixed media",
        "Collage",
        "Old stock paper art",
      ],
      description:
        "Dutch contemporary artist (b. 1956, De Bilt) whose work spans geometric compositions, abstract art, mixed media collages, and works on old stock paper. Exhibited internationally since 1984.",
      image: `${baseUrl}/2020/05/6-Composition-2017-Final-state-003-1320x1320.jpg`,
    },
  ];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const localeData = getLocaleData(locale as Locale);
  const jsonLd = generateJsonLd(locale);

  return (
    <LocaleProvider locale={locale as Locale} data={localeData}>
      {/* Structured data for search engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation locale={locale as Locale} localeData={localeData} />
      <main className="flex-grow">{children}</main>
      <Footer locale={locale as Locale} localeData={localeData} />
    </LocaleProvider>
  );
}
