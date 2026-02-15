import { notFound } from 'next/navigation';
import { artworks } from '@/lib/simplified-artwork-data';
import ArtworkDisplay from './ArtworkDisplay';
import { Locale } from '@/lib/localeData';
import { getArtworkTranslation } from '@/lib/localizedArtworks';
import { cookies } from 'next/headers';

export async function generateMetadata(props: any) {
  const { params } = props;
  const artwork = artworks.find(artwork => artwork.slug === params.slug);
  
  if (!artwork) {
    return {
      title: 'Artwork Not Found',
    };
  }
  
  const cookieStore = await cookies();
  const locale = (cookieStore.get("NEXT_LOCALE")?.value as Locale) ?? "en";
  const translation = getArtworkTranslation(artwork.slug, locale);
  const title = translation?.title ?? artwork.title;
  const description = translation?.description ?? artwork.description;

  return {
    title: `${title} (${artwork.year}) | Jaap Goedemoed`,
    description,
  };
}

export default function ArtworkPage(props: any) {
  const { params } = props;
  const artwork = artworks.find(artwork => artwork.slug === params.slug);
  
  if (!artwork) {
    notFound();
  }
  
  // Find related artworks (from same decade or medium)
  const decade = Math.floor(artwork.year / 10) * 10;
  const relatedArtworks = artworks
    .filter(a => 
      a.id !== artwork.id && 
      (Math.floor(a.year / 10) * 10 === decade || a.medium === artwork.medium)
    )
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);
  
  // Get previous and next artwork indices
  const currentIndex = artworks.findIndex(a => a.id === artwork.id);
  const prevArtwork = currentIndex > 0 ? artworks[currentIndex - 1] : null;
  const nextArtwork = currentIndex < artworks.length - 1 ? artworks[currentIndex + 1] : null;
  
  return (
    <ArtworkDisplay
      artwork={artwork}
      relatedArtworks={relatedArtworks}
      prevArtwork={prevArtwork}
      nextArtwork={nextArtwork}
      currentIndex={currentIndex}
      totalCount={artworks.length}
    />
  );
}
