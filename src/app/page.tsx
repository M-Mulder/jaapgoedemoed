"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  // Slider images based on user's specifications
  const sliderImages = [
    // New artworks added to the front (2024-2025)
    {
      id: 'banque-bulgare-de-commerce-1895-other',
      title: 'Souvenir pentagonale de Roustchouk',
      slug: 'souvenir-pentagonale-de-roustchouk',
      year: 2024,
      imagePath: '/2024/banque_Bulgare_De_Commerce_1895_Roustchouk 2024 50x70cm other_version.png',
    },
    {
      id: 'banque-bulgare-de-commerce-a-roustchouk',
      title: 'Souvenir de Roustchouk à la Asmat',
      slug: 'souvenir-de-roustchouk-a-la-asmat',
      year: 2024,
      imagePath: '/2024/Banque_Bulgare_De_Commerce_a_Roustchouk 50x70cm_2024.png',
    },
    {
      id: 'composition-2024',
      title: 'Composition 2024',
      slug: 'composition-2024',
      year: 2024,
      imagePath: '/2024/Composition 2024 150x150cm.jpg',
    },
    {
      id: 'composition-2025',
      title: 'Composition 2025',
      slug: 'composition-2025',
      year: 2025,
      imagePath: '/2025/composition_2025_140x145cm.png',
    },
    {
      id: 'porcupine1',
      title: 'Porcupine I',
      slug: 'porcupine-i',
      year: 2021,
      imagePath: '/2022/03/Porcupine-I-5-March-2021-finale-werk-2-scaled.jpg',
    },
    {
      id: 'division-plane-various',
      title: 'Division of the plane with various elements',
      slug: 'division-of-the-plane-with-various-elements',
      year: 1997,
      imagePath: '/Large abstract Artworks 1990 - 20/Division of the plane with various elements 1997, 160 x 160 cm.jpg',
    },
    {
      id: 'disconnected-tiling',
      title: 'Disconnected tiling old and modern',
      slug: 'disconnected-tiling-old-and-modern',
      year: 1997,
      imagePath: '/Large abstract Artworks 1990 - 20/Disconnected tiling, old and modern 1997, 155 x 170 cm.jpg',
    },
    {
      id: 'tiling-handwritings',
      title: 'Tiling with handwritings',
      slug: 'tiling-with-handwritings',
      year: 1997,
      imagePath: '/Large abstract Artworks 1990 - 20/Tiling with handwritings 1997, 135 x 145 cm.jpg',
    },
    {
      id: 'changing-pattern-opening',
      title: 'Changing pattern with opening',
      slug: 'changing-pattern-with-opening',
      year: 1990,
      imagePath: '/Large abstract Artworks 1990 - 20/Changing pattern with opening I 1990, 90 x 95 cm.jpg',
    },
    {
      id: 'cepit-344',
      title: 'Cepir-344 . Russian stock paper 1906',
      slug: 'cepit-344-russian-stock-paper',
      year: 2012,
      imagePath: '/Old stock paper Artworks 2005 - 20/Cepir-344 . Russian stock paper 1906) 2012, 40 x 50 cm.jpg',
    },
    // Removed Les Tramways de Kiew (low-resolution)
    
    // Three additional works from Old stock paper Artworks
    {
      id: 'bouteilles-odessa',
      title: 'Fabrication des Bouteilles à Odessa I',
      slug: 'fabrication-des-bouteilles-a-odessa-i',
      year: 2005,
      imagePath: '/Old stock paper Artworks 2005 - 20/Fabrication des Bouteilles à Odessa I 2005, 40 x 50 cm.jpg',
    },
    {
      id: 'mines-zinc-silesie',
      title: 'Mines et Usines Zinc de Silésie',
      slug: 'mines-et-usines-zinc-de-silesie',
      year: 2007,
      imagePath: '/Old stock paper Artworks 2005 - 20/Mines et Usines Zinc de Silésie 2007, 40 x 50 cm.jpg',
    },
    {
      id: 'francois-rive',
      title: 'François Rive 60',
      slug: 'francois-rive-60',
      year: 2015,
      imagePath: '/Old stock paper Artworks 2005 - 20/François Rive 60, 2015, 30 x 40 cm.jpg',
    },
    
    // Three additional works from Large abstract Artworks
    {
      id: 'division-plane-stamps',
      title: 'Division of the plane with stamps',
      slug: 'division-of-the-plane-with-stamps',
      year: 1997,
      imagePath: '/Large abstract Artworks 1990 - 20/Division of the plane with stamps 1997, 65 x 65 cm.jpg',
    },
    // Removed Metropolis (low-resolution)
    
    // Two more works from Large abstract Artworks
    {
      id: 'disconnected-coptic',
      title: 'Disconnected Coptic tiling',
      slug: 'disconnected-coptic-tiling',
      year: 1996,
      imagePath: '/Large abstract Artworks 1990 - 20/Disconnected Coptic tiling 1996, 150 x 150 cm.jpg',
    },
    {
      id: 'tuscan-tiling',
      title: 'Tuscan tiling I',
      slug: 'tuscan-tiling-i',
      year: 1994,
      imagePath: '/Large abstract Artworks 1990 - 20/Tuscan tiling I 1994, 165 x 165 cm.jpg',
    },
    {
      id: 'two-worlds',
      title: 'Two worlds',
      slug: 'two-worlds',
      year: 1993,
      imagePath: '/Large abstract Artworks 1990 - 20/Two worlds 1993, 120 x 170 cm.jpg',
    },
    {
      id: 'tramways-odessa',
      title: 'Tramways d\'Odessa II',
      slug: 'tramways-odessa-ii',
      year: 2008,
      imagePath: '/Old stock paper Artworks 2005 - 20/Tramways odessa2 2008, 40 x 50 cm.jpg',
    },
    {
      id: 'composition-no-2-2022',
      title: 'Composition No.2',
      slug: 'composition-no-2-2022',
      year: 2022,
      imagePath: '/2022/10/Composition-no.2-29-sept-2022-om-14-1-scaled.jpg',
    },
    {
      id: 'composition-2017',
      title: 'Composition 2017',
      slug: 'composition-2017',
      year: 2017,
      imagePath: '/Large abstract Artworks 1990 - 20/Composition-2017, 150 x150 slider.jpg',
    },
    {
      id: 'porcupine2',
      title: 'Porcupine Boogie Woogie II',
      slug: 'porcupine-boogie-woogie-ii',
      year: 2022,
      imagePath: '/2022/03/Composition-2022-Procupine-Boogie-Woogie-II-scaled.jpg',
    },
    {
      id: 'composition-2014',
      title: 'Composition 2014',
      slug: 'composition-2014',
      year: 2014,
      imagePath: '/Large abstract Artworks 1990 - 20/Composition 2014, 100 x 100 cm (2).jpg',
    }
  ];
  
  const [currentArtworkIndex, setCurrentArtworkIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Function to change the displayed artwork
  const changeArtwork = useCallback((newIndex: number) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentArtworkIndex(newIndex);
    
    // Reset transition state after animation completes
    setTimeout(() => setIsTransitioning(false), 200);
  }, [isTransitioning]);
  
  // Go to next artwork
  const nextArtwork = useCallback(() => {
    const newIndex = (currentArtworkIndex + 1) % sliderImages.length;
    changeArtwork(newIndex);
  }, [currentArtworkIndex, sliderImages.length, changeArtwork]);
  
  // Go to previous artwork
  const prevArtwork = useCallback(() => {
    const newIndex = (currentArtworkIndex - 1 + sliderImages.length) % sliderImages.length;
    changeArtwork(newIndex);
  }, [currentArtworkIndex, sliderImages.length, changeArtwork]);
  
  // Auto-rotate artworks every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextArtwork();
    }, 4000);
    
    return () => clearInterval(timer);
  }, [nextArtwork]);
  
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
  }, [prevArtwork, nextArtwork]);
  
  // Featured works for the Selected Works section
  const featuredWorks = [
    {
      id: 'composition-2017-feature',
      title: 'Composition 2017',
      slug: 'composition-2017',
      year: 2017,
      description: 'A large-scale abstract composition with harmonious geometry and natural materials',
      medium: 'Mixed media with natural materials on canvas',
      dimensions: '150 x 150 cm',
      imagePath: '/Large abstract Artworks 1990 - 20/Composition-2017, 150 x150 slider.jpg',
    },
    {
      id: 'porcupine-artworks',
      title: 'Porcupine Artworks',
      slug: 'porcupine-artworks',
      year: 2021,
      description: 'A series of works using porcupine quills as the primary medium',
      medium: 'Porcupine quills on panel',
      dimensions: 'Various',
      imagePath: '/2022/03/Porcupine-I-5-March-2021-finale-werk-2-scaled.jpg',
    },
    {
      id: 'composition-no-2-2022-feature',
      title: 'Composition No.2 - 2022',
      slug: 'composition-no-2-2022',
      year: 2022,
      description: 'A sophisticated geometric composition with bold colors',
      medium: 'Mixed media on canvas',
      dimensions: '100 x 100 cm',
      imagePath: '/2022/10/Composition-no.2-29-sept-2022-om-14-1-scaled.jpg',
    }
  ];
  
  return (
    <div className="min-h-screen">
      {/* Full-screen Hero Section */}
      <section className="relative h-screen w-full flex items-center overflow-hidden">
        {/* Background artwork image with enhanced transition */}
        {sliderImages.map((artwork, index) => (
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
            {/* Bottom shadow overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" style={{ height: '40%', bottom: 0, top: 'auto' }}></div>
            
            {/* Top shadow overlay for navbar transition */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/70 to-transparent" style={{ height: '15%', top: 0, bottom: 'auto' }}></div>
            
            {/* Artwork title and year overlay */}
            <div className={`absolute bottom-24 right-8 text-right z-10 transform transition-all duration-500 ${
              index === currentArtworkIndex 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-4'
            }`}>
              <div className="relative bg-background/60 backdrop-blur-sm p-4 pr-6 border-l-2 border-accent overflow-hidden">
                <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-accent"></div>
                
                <p className="text-text-accent text-2xl font-serif mb-1 relative font-bold">
                  {artwork.title}
                  <span className="absolute -bottom-1 right-0 w-1/2 h-px bg-accent/90"></span>
                </p>
                <p className="text-white font-mono tracking-wider font-semibold">{artwork.year}</p>
              </div>
            </div>
          </div>
        ))}
        
        {/* Navigation arrows */}
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
        
        {/* Action buttons */}
        <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-20 flex space-x-8">
          <Link 
            href="/artworks" 
            className="px-8 py-2 text-white hover:text-accent transition-all duration-300 uppercase tracking-widest text-sm font-light border-b border-accent/40 hover:border-accent"
          >
            Explore Works
          </Link>
          <Link 
            href="/welcome" 
            className="px-8 py-2 text-white hover:text-accent transition-all duration-300 uppercase tracking-widest text-sm font-light border-b border-accent/40 hover:border-accent"
          >
            Artist Introduction
          </Link>
        </div>
        
        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {sliderImages.map((_, index) => (
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
      </section>
      
      {/* Featured Artworks Section - Just the three specified works */}
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
          
          {/* Featured works grid - showing just the three specified works */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {featuredWorks.map((artwork) => (
              <div 
                key={artwork.id} 
                className="group relative overflow-hidden bg-background-light rounded-md"
              >
                <div className="relative aspect-square">
                  <Image
                    src={artwork.imagePath}
                    alt={artwork.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 33vw"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-serif text-text-accent mb-2">{artwork.title}</h3>
                  <p className="text-text-muted mb-4">{artwork.year}</p>
                  <p className="text-text-muted line-clamp-3 mb-4">{artwork.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <Link 
                      href={`/artworks/${artwork.slug}`}
                      className="text-accent hover:text-accent-hover transition-colors flex items-center"
                    >
                      <span>View artwork</span>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-4 w-4 ml-1" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                    
                    <Link 
                      href={`/artworks/${artwork.slug}#story`}
                      className="text-text-muted hover:text-accent transition-colors"
                    >
                      Read the story
                    </Link>
                  </div>
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
      
      {/* Brief About Section */}
      <section className="py-24 bg-[#1a1a1a]">
        <div className="container-narrow">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title mb-8">About the Artist</h2>
            <p className="text-lg text-text mb-6">
              Jaap Goedemoed is an Amsterdam-based artist known for his distinctive geometric abstractions and innovative use of materials. 
              His works explore mathematical patterns, particularly pentagonal tessellations, creating intricate structures that balance precision with artistic intuition.
            </p>
            <p className="text-lg text-text mb-8">
              With influences from ethnographic art and modernist traditions, Goedemoed creates compositions that bridge cultural and artistic boundaries, incorporating found materials and historic documents.
            </p>
            <div className="mt-8">
              <Link 
                href="/welcome" 
                className="inline-flex items-center text-accent hover:text-accent-hover transition-colors"
              >
                <span>Learn more about the artist</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 ml-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
