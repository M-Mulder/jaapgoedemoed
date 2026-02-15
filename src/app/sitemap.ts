import { MetadataRoute } from 'next';
import { i18n } from '@/i18n/config';
import { artworks } from '@/lib/simplified-artwork-data';
import { photographs } from '@/lib/placeholder-data';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://jaapgoedemoed.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = i18n.locales;

  // All static pages (path relative to locale prefix)
  const staticPages = [
    '',
    'artworks',
    'biography',
    'exhibitions',
    'photographs',
    'reflections',
    'welcome',
    'introduction',
    'contact',
    'info',
    'info/serious-art-piece',
    'info/gypsies-amsterdam',
    'info/taxation-glerum-1991',
    'info/interview-2015',
    'info/russian-interview',
    'artworks/composition-2017',
    'artworks/porcupine-artworks',
    'artworks/composition-2025',
    'artworks/composition-no-2-2022',
    'artworks/order',
  ];

  // Pages with dedicated routes that should not also appear as [slug] entries
  const dedicatedArtworkPages = new Set([
    'composition-2017',
    'porcupine-artworks',
    'composition-2025',
    'composition-no-2-2022',
    'order',
  ]);

  const entries: MetadataRoute.Sitemap = [];

  // Static pages × locales
  for (const page of staticPages) {
    const path = page ? `/${page}` : '';
    entries.push({
      url: `${baseUrl}/en${path}`,
      lastModified: new Date(),
      changeFrequency: page === '' ? 'weekly' : 'monthly',
      priority: page === '' ? 1.0 : page === 'artworks' ? 0.9 : 0.7,
      alternates: {
        languages: Object.fromEntries(
          locales.map((locale) => [locale, `${baseUrl}/${locale}${path}`])
        ),
      },
    });
  }

  // Dynamic artwork pages × locales
  const artworkSlugs = [...new Set(artworks.map((a) => a.slug))];
  for (const slug of artworkSlugs) {
    if (dedicatedArtworkPages.has(slug)) continue;

    entries.push({
      url: `${baseUrl}/en/artworks/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
      alternates: {
        languages: Object.fromEntries(
          locales.map((locale) => [locale, `${baseUrl}/${locale}/artworks/${slug}`])
        ),
      },
    });
  }

  // Dynamic photograph pages × locales
  for (const photo of photographs) {
    entries.push({
      url: `${baseUrl}/en/photographs/${photo.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
      alternates: {
        languages: Object.fromEntries(
          locales.map((locale) => [locale, `${baseUrl}/${locale}/photographs/${photo.slug}`])
        ),
      },
    });
  }

  return entries;
}
