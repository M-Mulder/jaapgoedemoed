import { notFound } from 'next/navigation';
import { artworks } from '@/lib/simplified-artwork-data';
import ArtworkDisplay from './ArtworkDisplay';
import { Locale } from '@/lib/localeData';
import { getArtworkTranslation } from '@/lib/localizedArtworks';
import { generateLocalizedMetadata } from '@/lib/metadata';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://jaapgoedemoed.com';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const artwork = artworks.find((a) => a.slug === slug);

  if (!artwork) {
    return { title: 'Artwork Not Found' };
  }

  const translation = getArtworkTranslation(artwork.slug, locale as Locale);
  const title = translation?.title ?? artwork.title;
  const description = translation?.description ?? artwork.description;

  return generateLocalizedMetadata({
    locale: locale as Locale,
    path: `artworks/${slug}`,
    title: `${title} (${artwork.year})`,
    description: description || `${title} — artwork by Jaap Goedemoed, ${artwork.year}`,
    image: artwork.imagePath ? `${baseUrl}${artwork.imagePath}` : undefined,
  });
}

/**
 * Generate VisualArtwork JSON-LD structured data for individual artworks.
 * Helps Google understand each artwork for rich results in image search.
 */
function generateArtworkJsonLd(artwork: typeof artworks[0], locale: string) {
  const translation = getArtworkTranslation(artwork.slug, locale as Locale);
  const title = translation?.title ?? artwork.title;
  const description = translation?.description ?? artwork.description;

  return {
    '@context': 'https://schema.org',
    '@type': 'VisualArtwork',
    name: title,
    description: description,
    dateCreated: String(artwork.year),
    artMedium: artwork.medium,
    width: artwork.dimensions,
    image: `${baseUrl}${artwork.imagePath}`,
    url: `${baseUrl}/${locale}/artworks/${artwork.slug}`,
    creator: {
      '@type': 'Person',
      name: 'Jaap Goedemoed',
      url: baseUrl,
    },
    artform: 'Painting',
    inLanguage: locale,
  };
}

export default async function ArtworkPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const artwork = artworks.find((a) => a.slug === slug);

  if (!artwork) {
    notFound();
  }

  // Find related artworks (from same decade or medium)
  const decade = Math.floor(artwork.year / 10) * 10;
  const relatedArtworks = artworks
    .filter(
      (a) =>
        a.id !== artwork.id &&
        (Math.floor(a.year / 10) * 10 === decade || a.medium === artwork.medium)
    )
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  // Get previous and next artwork indices
  const currentIndex = artworks.findIndex((a) => a.id === artwork.id);
  const prevArtwork = currentIndex > 0 ? artworks[currentIndex - 1] : null;
  const nextArtwork =
    currentIndex < artworks.length - 1 ? artworks[currentIndex + 1] : null;

  const jsonLd = generateArtworkJsonLd(artwork, locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ArtworkDisplay
        artwork={artwork}
        relatedArtworks={relatedArtworks}
        prevArtwork={prevArtwork}
        nextArtwork={nextArtwork}
        currentIndex={currentIndex}
        totalCount={artworks.length}
      />
    </>
  );
}
