"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Dynamically import the FullscreenImageViewer component
const FullscreenImageViewer = dynamic(() => import('@/components/FullscreenImageViewer'), {
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="animate-pulse bg-gray-800 rounded-md w-full h-full opacity-50" />
    </div>
  ),
});

interface ArtworkDisplayProps {
  artwork: any;
  relatedArtworks: any[];
  prevArtwork: any | null;
  nextArtwork: any | null;
  currentIndex: number;
  totalCount: number;
}

const ArtworkDisplay = ({ 
  artwork, 
  relatedArtworks, 
  prevArtwork, 
  nextArtwork, 
  currentIndex, 
  totalCount 
}: ArtworkDisplayProps) => {
  const [showDescription, setShowDescription] = useState(false);
  return (
    <main className="bg-black">
      {/* Artwork Viewer */}
      <div className="min-h-screen w-full relative">
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
        
        {/* Main artwork image with fullscreen capability */}
        <div className="w-full pt-16 flex items-center justify-center p-4 md:p-12">
          <div className="relative w-full aspect-square md:aspect-auto md:h-[70vh] max-w-5xl mx-auto">
            <FullscreenImageViewer 
              src={artwork.imagePath} 
              alt={artwork.title} 
            />
          </div>
        </div>
        
        {/* Artwork information placed below the image */}
        <div className="container-wide pt-6 pb-8 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between">
              <div className="md:max-w-2xl">
                <div className="mb-1 text-sm text-[#d4af37]">{artwork.year}</div>
                <h1 className="text-2xl md:text-4xl font-serif text-white mb-2">{artwork.title}</h1>
                <div className="text-white/70 mb-4">
                  {artwork.medium} • {artwork.dimensions}
                </div>
                
                <button 
                  onClick={() => setShowDescription(!showDescription)}
                  className="px-4 py-2 bg-[#1a1a1a] border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-colors rounded-md mb-4"
                >
                  {showDescription ? 'Hide Description' : 'Show Description'}
                </button>
                
                {showDescription && (
                  <div className="mt-6 animate-fade-in">
                    <p className="text-white/90 text-base md:text-lg max-w-3xl leading-relaxed py-6 border-t border-b border-white/10">
                      {artwork.description}
                    </p>
                  </div>
                )}
              </div>
              
              <div className="mt-4 md:mt-0">
                {prevArtwork && nextArtwork && (
                  <div className="text-white/60 text-sm">
                    <span>{currentIndex + 1}</span>
                    <span className="mx-2">/</span>
                    <span>{totalCount}</span>
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
};

export default ArtworkDisplay;
