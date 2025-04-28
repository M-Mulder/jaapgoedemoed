import Image from 'next/image';
import Link from 'next/link';
import { Artwork } from '@/lib/placeholder-data';

interface ArtworkCardProps {
  artwork: Artwork;
  featured?: boolean;
}

const ArtworkCard = ({ artwork, featured = false }: ArtworkCardProps) => {
  return (
    <Link 
      href={`/artworks/${artwork.slug}`}
      className={`block group relative ${featured ? 'aspect-[4/3]' : 'aspect-square'} overflow-hidden rounded-md shadow-md transition-all duration-300 hover:shadow-xl hover:shadow-black/10`}
    >
      {/* Featured badge */}
      {artwork.featured && !featured && (
        <div className="absolute top-3 right-3 z-20 bg-[#d4af37]/80 backdrop-blur-sm text-xs font-medium px-2 py-1 rounded-full text-black">
          Featured
        </div>
      )}
      
      {/* Artwork image with hover zoom effect */}
      <div className="absolute inset-0 bg-[#0a0a0a] overflow-hidden">
        <Image 
          src={artwork.imagePath}
          alt={artwork.title}
          fill
          className="object-cover transition-all duration-700 transform group-hover:scale-110 opacity-95 group-hover:opacity-100"
          sizes={featured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"}
        />
      </div>

      {/* Decorative border that appears on hover */}
      <div className="absolute inset-0 z-10 border border-transparent group-hover:border-white/10 rounded-md transition-all duration-300"></div>
      
      {/* Dark gradient overlay at bottom that's always present but strengthens on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-300"></div>
      
      {/* Year badge */}
      <div className="absolute top-3 left-3 z-20 bg-black/60 backdrop-blur-sm text-xs font-medium px-2 py-1 rounded-full text-white/80">
        {artwork.year}
      </div>
      
      {/* Artwork information */}
      <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
        <h3 className={`${featured ? 'text-2xl' : 'text-xl'} font-serif text-white group-hover:text-[#d4af37] transition-colors duration-300`}>
          {artwork.title}
        </h3>
        
        <p className="text-white/70 text-sm mt-1 line-clamp-1">
          {artwork.medium} · {artwork.dimensions}
        </p>
        
        {featured && (
          <p className="text-white/80 mt-3 line-clamp-2 text-sm">
            {artwork.description}
          </p>
        )}
        
        {/* Animated arrow that appears on hover */}
        <div className="flex justify-between items-center mt-2">
          <div className="w-6 h-0.5 bg-[#d4af37] transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
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
            className="text-[#d4af37] transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default ArtworkCard;
