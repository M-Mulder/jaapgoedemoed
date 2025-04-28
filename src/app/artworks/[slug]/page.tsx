import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { artworks } from '@/lib/placeholder-data';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const artwork = artworks.find(artwork => artwork.slug === params.slug);
  
  if (!artwork) {
    return {
      title: 'Artwork Not Found',
    };
  }
  
  return {
    title: `${artwork.title} (${artwork.year}) | Jaap Goedemoed`,
    description: artwork.description,
  };
}

export default function ArtworkPage({ params }: { params: { slug: string } }) {
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
    <main className="bg-black">
      {/* Artwork Viewer */}
      <div className="h-screen w-full relative flex items-center justify-center">
        {/* Back button with subtle background */}
        <div className="absolute top-6 left-6 z-20 bg-black/30 backdrop-blur-sm rounded-full">
          <Link 
            href="/artworks" 
            className="flex items-center text-white hover:text-[#d4af37] px-4 py-2 transition-colors"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 mr-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Gallery</span>
          </Link>
        </div>
        
        {/* Artwork navigation */}
        <div className="absolute top-1/2 left-4 right-4 transform -translate-y-1/2 z-10 flex justify-between">
          {prevArtwork && (
            <Link 
              href={`/artworks/${prevArtwork.slug}`}
              className="bg-black/30 backdrop-blur-sm text-white hover:text-[#d4af37] hover:bg-black/50 p-3 rounded-full transition-colors"
              aria-label="Previous artwork"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
          )}
          
          {nextArtwork && (
            <Link 
              href={`/artworks/${nextArtwork.slug}`}
              className="bg-black/30 backdrop-blur-sm text-white hover:text-[#d4af37] hover:bg-black/50 p-3 rounded-full transition-colors"
              aria-label="Next artwork"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          )}
        </div>
        
        {/* Main artwork image */}
        <div className="w-full h-full flex items-center justify-center p-4 md:p-12">
          <div className="relative w-full h-full max-w-5xl mx-auto">
            <Image
              src={artwork.imagePath}
              alt={artwork.title}
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </div>
        </div>
        
        {/* Bottom information panel with gradient background */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent pt-20 pb-6 px-6">
          <div className="container-wide">
            <div className="md:flex md:items-end md:justify-between">
              <div className="md:max-w-2xl">
                <div className="mb-1 text-sm text-[#d4af37]">{artwork.year}</div>
                <h1 className="text-2xl md:text-4xl font-serif text-white mb-2">{artwork.title}</h1>
                <div className="text-white/70 mb-4">
                  {artwork.medium} • {artwork.dimensions}
                </div>
                <p className="text-white/80 md:text-lg">{artwork.description}</p>
              </div>
              
              <div className="hidden md:block">
                {prevArtwork && nextArtwork && (
                  <div className="text-white/60 text-sm mt-4">
                    <span>{currentIndex + 1}</span>
                    <span className="mx-2">/</span>
                    <span>{artworks.length}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related Works Section */}
      {relatedArtworks.length > 0 && (
        <section className="py-16 bg-[#0c0c0c] border-t border-white/10">
          <div className="container-wide">
            <h2 className="font-serif text-2xl text-white mb-8">Related Works</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedArtworks.map(relatedArtwork => (
                <Link 
                  key={relatedArtwork.id}
                  href={`/artworks/${relatedArtwork.slug}`}
                  className="group"
                >
                  <div className="aspect-square relative overflow-hidden rounded-md mb-3">
                    <Image
                      src={relatedArtwork.imagePath}
                      alt={relatedArtwork.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300"></div>
                  </div>
                  <h3 className="text-white group-hover:text-[#d4af37] transition-colors duration-300">
                    {relatedArtwork.title} <span className="text-white/60">{relatedArtwork.year}</span>
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
