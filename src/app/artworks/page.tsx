import Image from 'next/image';
import { artworks } from "@/lib/simplified-artwork-data";
import ArtworkCard from "@/components/ArtworkCard";

export const metadata = {
  title: 'Artworks | Jaap Goedemoed',
  description: 'Browse the collection of artworks by contemporary artist Jaap Goedemoed, including geometric compositions, mixed media pieces, and conceptual works.',
};

export default function ArtworksPage() {
  // Get featured artworks for the hero section
  const featuredArtworks = artworks.filter(artwork => artwork.featured);
  
  // Get remaining artworks for the gallery grid
  const remainingArtworks = artworks.filter(artwork => !artwork.featured);
  
  // Categories of artworks using the category field we added
  const categories = {
    abstractArtworks: artworks.filter(artwork => artwork.category === 'abstract'),
    oldStockPaperArtworks: artworks.filter(artwork => artwork.category === 'paper'),
    jamesJoyceArtworks: artworks.filter(artwork => artwork.category === 'joyce'),
    figurativeArtworks: artworks.filter(artwork => artwork.category === 'figurative'),
    porcupineArtworks: artworks.filter(artwork => artwork.category === 'porcupine'),
    youthArtworks: artworks.filter(artwork => artwork.category === 'youth'),
    otherArtworks: artworks.filter(artwork => artwork.category === 'other')
  };

  return (
    <div className="min-h-screen bg-[#0c0c0c]">
      {/* Hero section with featured artwork */}
      <div className="relative h-[70vh] overflow-hidden">
        {/* Background artwork image */}
        <div className="absolute inset-0">
          <Image
            src={featuredArtworks[0]?.imagePath || '/2020/05/6-Composition-2017-Final-state-003-1320x1320.jpg'}
            alt="Featured artwork"
            fill
            className="object-cover object-center brightness-[0.7]"
            priority
          />
        </div>
        
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90"></div>
        
        {/* Hero content */}
        <div className="container-wide relative z-10 h-full flex flex-col justify-center items-center text-center">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-6">Artworks</h1>
          <p className="text-white/80 md:text-lg max-w-2xl">
            A collection spanning four decades, exploring geometric patterns, 
            architectural space, and visual perception through various media and techniques.
          </p>
          
          {/* Decorative line */}
          <div className="w-20 h-1 bg-[#d4af37] mt-8"></div>
        </div>
      </div>
      
      {/* Featured works section */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container-wide">
          <h2 className="font-serif text-2xl md:text-3xl text-white mb-2">Featured Works</h2>
          <p className="text-white/60 mb-12">Selected pieces representing key developments in the artist's practice</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {featuredArtworks.slice(0, 4).map((artwork) => (
              <ArtworkCard key={artwork.id} artwork={artwork} featured={true} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Artwork Categories Section */}
      <section className="py-16 md:py-24 bg-[#0c0c0c]">
        <div className="container-wide">
          <h2 className="font-serif text-2xl md:text-3xl text-white mb-2">Artwork Categories</h2>
          <p className="text-white/60 mb-16">Explore artworks by category from different periods and styles</p>
          
          {/* Abstract Artworks 1990 - Present */}
          <div className="mb-24">
            <div className="flex items-center mb-8">
              <h3 className="font-serif text-xl md:text-2xl text-[#d4af37]">Abstract Artworks 1990 - Present</h3>
              <div className="ml-6 h-[1px] flex-grow bg-gradient-to-r from-[#d4af37]/50 to-transparent"></div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categories.abstractArtworks
                .sort((a, b) => b.year - a.year)
                .map((artwork) => (
                  <ArtworkCard key={artwork.id} artwork={artwork} />
                ))}
            </div>
          </div>
          
          {/* Old stock paper Artworks 2005 - Present */}
          <div className="mb-24">
            <div className="flex items-center mb-8">
              <h3 className="font-serif text-xl md:text-2xl text-[#d4af37]">Old Stock Paper Artworks 2005 - Present</h3>
              <div className="ml-6 h-[1px] flex-grow bg-gradient-to-r from-[#d4af37]/50 to-transparent"></div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categories.oldStockPaperArtworks
                .sort((a, b) => b.year - a.year)
                .map((artwork) => (
                  <ArtworkCard key={artwork.id} artwork={artwork} />
                ))}
            </div>
          </div>
          
          {/* James Joyce Artworks */}
          {categories.jamesJoyceArtworks.length > 0 && (
            <div className="mb-24">
              <div className="flex items-center mb-8">
                <h3 className="font-serif text-xl md:text-2xl text-[#d4af37]">James Joyce Artworks</h3>
                <div className="ml-6 h-[1px] flex-grow bg-gradient-to-r from-[#d4af37]/50 to-transparent"></div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {categories.jamesJoyceArtworks
                  .sort((a, b) => b.year - a.year)
                  .map((artwork) => (
                    <ArtworkCard key={artwork.id} artwork={artwork} />
                  ))}
              </div>
            </div>
          )}
          
          {/* Figurative Artworks 1980-1989 */}
          <div className="mb-24">
            <div className="flex items-center mb-8">
              <h3 className="font-serif text-xl md:text-2xl text-[#d4af37]">Figurative Artworks 1980-1989</h3>
              <div className="ml-6 h-[1px] flex-grow bg-gradient-to-r from-[#d4af37]/50 to-transparent"></div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categories.figurativeArtworks
                .sort((a, b) => b.year - a.year)
                .map((artwork) => (
                  <ArtworkCard key={artwork.id} artwork={artwork} />
                ))}
            </div>
          </div>
          
          {/* Porcupine Artworks */}
          <div className="mb-24">
            <div className="flex items-center mb-8">
              <h3 className="font-serif text-xl md:text-2xl text-[#d4af37]">Porcupine Artworks</h3>
              <div className="ml-6 h-[1px] flex-grow bg-gradient-to-r from-[#d4af37]/50 to-transparent"></div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categories.porcupineArtworks
                .sort((a, b) => b.year - a.year)
                .map((artwork) => (
                  <ArtworkCard key={artwork.id} artwork={artwork} />
                ))}
            </div>
          </div>
          
          {/* Youth Artworks */}
          {categories.youthArtworks.length > 0 && (
            <div className="mb-24">
              <div className="flex items-center mb-8">
                <h3 className="font-serif text-xl md:text-2xl text-[#d4af37]">Youth Artworks</h3>
                <div className="ml-6 h-[1px] flex-grow bg-gradient-to-r from-[#d4af37]/50 to-transparent"></div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {categories.youthArtworks
                  .sort((a, b) => b.year - a.year)
                  .map((artwork) => (
                    <ArtworkCard key={artwork.id} artwork={artwork} />
                  ))}
              </div>
            </div>
          )}
          
          {/* Other Artworks */}
          <div className="mb-24">
            <div className="flex items-center mb-8">
              <h3 className="font-serif text-xl md:text-2xl text-[#d4af37]">Other Artworks</h3>
              <div className="ml-6 h-[1px] flex-grow bg-gradient-to-r from-[#d4af37]/50 to-transparent"></div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categories.otherArtworks
                .sort((a, b) => b.year - a.year)
                .map((artwork) => (
                  <ArtworkCard key={artwork.id} artwork={artwork} />
                ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Studio process section - visual separator */}
      <section className="py-16 md:py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/2021/04/The-new-atelier-9-21-February-2021-2048x1365.jpg"
            alt="Studio view"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="container-narrow relative z-10 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">Studio Process</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            The works represent an ongoing exploration of spatial relationships, 
            pattern recognition, and visual perception across various media and techniques.
          </p>
          <a href="/exhibitions" className="inline-flex items-center text-[#d4af37] hover:text-white transition-colors duration-300">
            Visit the artist's atelier
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="ml-2"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </section>
      
      {/* Info footer */}
      <div className="py-12 bg-[#0c0c0c] border-t border-white/10">
        <div className="container-wide text-center text-white/60">
          <p>Showing {artworks.length} artworks from {Math.min(...artworks.map(a => a.year))} to {Math.max(...artworks.map(a => a.year))}</p>
        </div>
      </div>
    </div>
  );
}
