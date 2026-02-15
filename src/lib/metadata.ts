import { Metadata } from "next";
import { Locale } from "@/i18n/config";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://jaapgoedemoed.com';
const defaultOgImage = `${baseUrl}/2020/05/6-Composition-2017-Final-state-003-1320x1320.jpg`;

/**
 * Generate metadata with proper hreflang alternates, OG images, and Twitter cards
 * @param locale - Current locale
 * @param path - Path without locale prefix (e.g., 'artworks' or 'biography')
 * @param title - Page title
 * @param description - Page description
 * @param image - Optional OG image URL (defaults to representative artwork)
 * @returns Metadata object with alternates, OG, and Twitter
 */
export function generateLocalizedMetadata({
  locale,
  path = '',
  title,
  description,
  image,
}: {
  locale: Locale;
  path?: string;
  title: string;
  description: string;
  image?: string;
}): Metadata {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  const ogImage = image || defaultOgImage;
  
  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}/${locale}${cleanPath}`,
      languages: {
        'en': `${baseUrl}/en${cleanPath}`,
        'nl': `${baseUrl}/nl${cleanPath}`,
        'zh': `${baseUrl}/zh${cleanPath}`,
        'x-default': `${baseUrl}/en${cleanPath}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}${cleanPath}`,
      siteName: 'Jaap Goedemoed',
      locale: locale === 'zh' ? 'zh_CN' : locale === 'nl' ? 'nl_NL' : 'en_US',
      type: 'website',
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}
