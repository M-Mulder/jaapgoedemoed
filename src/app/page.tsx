"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { artworks } from "@/lib/placeholder-data";

export default function Home() {
  // Add the hero images to the featured images rotation
  const heroImages = [
    {
      id: 'hero1',
      title: 'Featured Work',
      slug: 'hero-image-1',
      year: 2024,
      description: 'Special featured artwork',
      medium: '',
      dimensions: '',
      imagePath: '/2024/hero_image_1.jpg',
      featured: true
    },
    {
      id: 'hero2',
      title: 'Featured Work',
      slug: 'hero-image-2',
      year: 2024,
      description: 'Special featured artwork',
      medium: '',
      dimensions: '',
      imagePath: '/2024/hero_image_2.jpg',
      featured: true
    },
    {
      id: 'hero3',
      title: 'Exhibition View',
      slug: 'exhibition-view',
      year: 2019,
      description: 'View from Jaap Goedemoed exhibition',
      medium: '',
      dimensions: '',
      imagePath: '/2019/03/ExhibitionJaapG1-1320x880.jpg',
      featured: true
    }
  ];
  
  // Combine hero images with other featured artworks
  const featuredArtworks = [...heroImages, ...artworks.filter(artwork => artwork.featured)];
  const [currentArtworkIndex, setCurrentArtworkIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [textColor, setTextColor] = useState('text-white');
  const [contrastMode, setContrastMode] = useState('light');
  
  // Function to change the displayed artwork - memoized with useCallback
  const changeArtwork = useCallback((newIndex: number) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentArtworkIndex(newIndex);
    
    // Reset transition state after animation completes (ultra-fast transition)
    setTimeout(() => setIsTransitioning(false), 200);
  }, [isTransitioning]);
  
  // Go to next artwork - useCallback to prevent recreation in useEffect
  const nextArtwork = useCallback(() => {
    const newIndex = (currentArtworkIndex + 1) % featuredArtworks.length;
    changeArtwork(newIndex);
  }, [currentArtworkIndex, featuredArtworks.length, changeArtwork]);
  
  // Go to previous artwork
  const prevArtwork = useCallback(() => {
    const newIndex = (currentArtworkIndex - 1 + featuredArtworks.length) % featuredArtworks.length;
    changeArtwork(newIndex);
  }, [currentArtworkIndex, featuredArtworks.length, changeArtwork]);
  
  // Determine text color based on current artwork
  useEffect(() => {
    // Map of artworks to their dominant color type (light/dark)
    // In a real app, you would analyze this dynamically
    const artworkColorMap: Record<string, 'light' | 'dark'> = {
      'composition-2014': 'dark',           // Lighter background - needs dark text
      'changing-pattern-with-relief': 'light', // Darker background - needs light text
      'changing-tiling-wooden-plank': 'light', // Darker background - needs light text
      'egyptian-scene-flat': 'light',        // Darker background - needs light text
      'composition-with-fixed-center': 'light' // Darker background - needs light text
    };
    
    const currentSlug = featuredArtworks[currentArtworkIndex].slug;
    const dominantColorType = artworkColorMap[currentSlug] || 'light';
    
    if (dominantColorType === 'dark') {
      setTextColor('text-background');
      setContrastMode('dark');
    } else {
      setTextColor('text-white');
      setContrastMode('light');
    }
  }, [currentArtworkIndex, featuredArtworks]);
  
  // Auto-rotate artworks every 4 seconds (without dependency on currentArtworkIndex to prevent stopping)
  useEffect(() => {
    const timer = setInterval(() => {
      nextArtwork();
    }, 4000);
    
    return () => clearInterval(timer);
  }, [nextArtwork]); // Only depend on the memoized nextArtwork function
  
  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevArtwork();
      } else if (e.key === 'ArrowRight') {
        nextArtwork();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevArtwork, nextArtwork]); // Depend on the memoized functions instead of index
  
  // Current artwork to display
  const currentArtwork = featuredArtworks[currentArtworkIndex];

  return (
    <div className="min-h-screen">
      {/* Full-screen Hero Section */}
      <section className="relative h-screen w-full flex items-center overflow-hidden">
        {/* Background artwork image with enhanced transition */}
        {featuredArtworks.map((artwork, index) => (
          <div 
            key={artwork.id}
            className={`absolute inset-0 z-0 transition-all duration-200 ease-out ${
              index === currentArtworkIndex 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-105'
            }`}
          >
            <Image
              src={artwork.imagePath}
              alt={artwork.title}
              fill
              priority={index === 0}
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
            
            {/* Enhanced artwork title and year overlay */}
            <div className={`absolute bottom-24 right-8 text-right z-10 transform transition-all duration-500 ${
              index === currentArtworkIndex 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-4'
            }`}>
              <div className="relative bg-background/30 backdrop-blur-sm p-4 pr-6 border-l-2 border-accent overflow-hidden">
                {/* Decorative corner accent */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-accent"></div>
                
                <p className="text-text-accent text-2xl font-serif mb-1 relative">
                  {artwork.title}
                  <span className="absolute -bottom-1 right-0 w-1/2 h-px bg-accent/70"></span>
                </p>
                <p className="text-text-muted font-mono tracking-wider">{artwork.year}</p>
              </div>
            </div>
          </div>
        ))}
        
        {/* Enhanced navigation arrows */}
        <button 
          onClick={prevArtwork}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 text-accent hover:text-white transition-all p-3 rounded-full bg-background/30 hover:bg-accent/80 shadow-lg backdrop-blur-sm"
          aria-label="Previous artwork"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-7 w-7" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          onClick={nextArtwork}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 text-accent hover:text-white transition-all p-3 rounded-full bg-background/30 hover:bg-accent/80 shadow-lg backdrop-blur-sm"
          aria-label="Next artwork"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-7 w-7" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {featuredArtworks.map((_, index) => (
            <button
              key={index}
              onClick={() => changeArtwork(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentArtworkIndex 
                  ? 'bg-accent w-8'
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Enhanced artistic flourish: abstract geometric pattern overlay */}
        <div className="absolute inset-0 z-5 pointer-events-none opacity-10 mix-blend-screen">
          <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-accent/10 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-tl from-accent/20 to-transparent"></div>
          
          {/* More dynamic animated geometric elements */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-accent rotate-45 animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-48 h-48 border border-accent rounded-full animate-ping opacity-20"></div>
          <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-accent/5 animate-pulse"></div>
          
          {/* New animated elements */}
          <div className="absolute top-1/3 right-1/5 w-16 h-16 border-2 border-accent/30 animate-spin-slow"></div>
          <div className="absolute bottom-1/4 left-1/3 w-20 h-20 border border-accent/20 rounded-md rotate-12 animate-float"></div>
          
          {/* Dynamic line elements */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-accent/10 animate-pulse"></div>
          <div className="absolute left-1/2 top-0 w-px h-full bg-accent/10 animate-pulse"></div>
        </div>
        
        {/* Content overlay with modern geometric typography */}
        <div className="container-wide relative z-10 text-center mt-16">
          {/* Geometric artist name display */}
          <div className="relative mb-12 py-8 inline-block">
            <div className="flex flex-col items-center">
              {/* Creating a geometric frame with clean lines */}
              <div className="relative">
                {/* Horizontal lines */}
                <div className="absolute -top-6 left-0 w-full h-[2px] bg-accent opacity-80"></div>
                <div className="absolute -bottom-6 left-0 w-full h-[2px] bg-accent opacity-80"></div>
                
                {/* Corner accents */}
                <div className="absolute -top-6 -left-6 w-12 h-12 border-l-2 border-t-2 border-accent opacity-80"></div>
                <div className="absolute -top-6 -right-6 w-12 h-12 border-r-2 border-t-2 border-accent opacity-80"></div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 border-l-2 border-b-2 border-accent opacity-80"></div>
                <div className="absolute -bottom-6 -right-6 w-12 h-12 border-r-2 border-b-2 border-accent opacity-80"></div>
                
                {/* Main title with clean typography */}
                <h1 className="font-mono font-bold tracking-wide text-4xl md:text-6xl lg:text-7xl"
                   style={{ color: contrastMode === 'dark' ? '#0f0f0f' : '#ffffff' }}>
                  <span className="block">JAAP</span>
                  <span className="block font-normal tracking-[0.25em] text-3xl md:text-5xl lg:text-6xl text-accent opacity-90 mt-2">GOEDEMOED</span>
                </h1>
              </div>
            </div>
          </div>
          
          {/* Clean, geometric subtitle with no shadow effects */}
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 md:w-16 h-[1px] bg-accent opacity-70"></div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 md:w-16 h-[1px] bg-accent opacity-70"></div>
            
            <p className="text-lg md:text-xl px-12 font-mono uppercase tracking-wider"
               style={{ color: contrastMode === 'dark' ? '#0f0f0f' : '#e6e6e6' }}>
              Dutch artist creating geometric abstractions through pentagonal patterns and dimensional constructions
            </p>
          </div>
          
          <div className="mt-10 space-x-6 relative">
            <Link href="/artworks" className="btn group relative overflow-hidden">
              <span className="relative z-10">Explore Works</span>
              <span className="absolute inset-0 bg-accent-hover transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            
            <Link href="/biography" className="relative text-text hover:text-accent transition-colors border-b border-transparent hover:border-accent pb-1">
              About the Artist
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Artworks - with artistic layout */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Creative geometric background elements */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-40 h-40 border border-accent rotate-45"></div>
            <div className="absolute bottom-40 right-20 w-60 h-60 border border-accent rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 w-80 h-80 border border-accent opacity-20"></div>
          </div>
        </div>
        
        <div className="container-wide relative z-10">
          {/* Artistic section title with line decoration */}
          <div className="flex items-center justify-center mb-16">
            <div className="h-px w-16 bg-accent-hover opacity-70"></div>
            <h2 className="section-title px-6 mb-0">Selected Works</h2>
            <div className="h-px w-16 bg-accent-hover opacity-70"></div>
          </div>
          
          {/* Staggered grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {featuredArtworks.map((artwork, index) => (
              <div 
                key={artwork.id} 
                className={`group relative aspect-square overflow-hidden bg-background-light transform transition-all duration-500 hover:scale-[1.02] ${
                  index % 3 === 1 ? 'md:translate-y-12' : ''
                }`}
              >
                <Image
                  src={artwork.imagePath}
                  alt={artwork.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 group-hover:rotate-1"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                
                {/* Artwork frame effect on hover */}
                <div className="absolute inset-0 border-0 border-accent opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:border-4"></div>
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300"></div>
                
                {/* Artwork information overlay with reveal animation */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl font-serif text-text-accent">{artwork.title}</h3>
                  <p className="text-text-muted mt-2">{artwork.year}</p>
                  <Link 
                    href={`/artworks/${artwork.slug}`}
                    className="mt-3 inline-flex items-center text-accent hover:text-accent-hover group/link"
                  >
                    <span>Explore</span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 ml-1 transform group-hover/link:translate-x-1 transition-transform" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link 
              href="/artworks" 
              className="group inline-flex items-center border border-accent px-6 py-3 text-accent hover:bg-accent hover:text-background transition-all duration-300"
            >
              <span>View Full Collection</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Brief Intro */}
      <section className="py-24 bg-[#1a1a1a]">
        <div className="container-narrow">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title mb-8">About the Artist</h2>
            <p className="text-lg text-text mb-6">
              Jaap Goedemoed is an Amsterdam-based artist known for his distinctive geometric abstractions and innovative use of materials. 
              His works explore mathematical patterns, particularly pentagonal tessellations, creating intricate structures that balance precision with artistic intuition.
            </p>
            <p className="text-lg text-text mb-8">
              With a background influenced by both ethnographic art and modernist traditions, Goedemoed creates three-dimensional constructions using diverse materials including wood, matches, and porcupine quills, resulting in works of remarkable complexity and visual harmony.
            </p>
            <Link href="/biography" className="text-accent hover:text-accent-hover text-lg">
              Read full biography →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
