"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import LocalizedLink from '@/components/LocalizedLink';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocale } from '@/context/LocaleContext';

export default function WelcomePage() {
  const [fullscreenImage, setFullscreenImage] = useState<{ src: string; alt: string } | null>(null);

  const openFullscreen = (src: string, alt: string) => {
    setFullscreenImage({ src, alt });
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };
  const { data } = useLocale();
  const content = data.welcome;

  return (
    <div className="container-narrow mx-auto py-16 px-4">
      <h1 className="text-3xl md:text-4xl font-serif mb-8 text-accent">{content.heroTitle}</h1>
      
      <div className="prose prose-lg max-w-none mb-16">
        <h2 className="text-2xl md:text-3xl font-serif mb-6 text-accent">{content.subtitle}</h2>
        
        <p className="font-medium text-xl mb-8">
          {content.paragraphs[0]}
        </p>
        
        <figure className="w-1/2 md:w-1/3 float-right ml-6 mb-4 clear-none">
          <Image
            src="/Website Assets/Hero Images/The studio - 28 October 2022 at early evening.jpg"
            alt="The studio - 28 October 2022"
            width={400} 
            height={267} // Maintaining 3:2 aspect ratio
            className="object-cover rounded-lg shadow-md"
          />
          <figcaption className="text-sm italic text-right mt-1 text-text-muted">
            The studio – 28 Oct 2022
          </figcaption>
        </figure>

        <p>
          {content.paragraphs[1]}
        </p>
        <p>
          {content.paragraphs[2]}
        </p>
        
        <p>
          {content.paragraphs[3]}
        </p>
        
        <p>
          {content.paragraphs[4]}
        </p>
        {/* The paragraph below will ensure the float is cleared before the div ends if content is short */}
        <div style={{ clear: 'both' }}></div>
      </div>
      
      <div className="border-t border-border my-12 pt-12">
        <h2 className="text-2xl md:text-3xl font-serif mb-8 text-accent">
          {content.introductionTitle}
        </h2>
        
        <div className="prose prose-lg max-w-none mb-12">
          <h3 className="text-xl md:text-2xl font-serif mb-4">{content.introductionSections[0].title}</h3>
          
          <p>
            {content.introductionSections[0].text}
          </p>
          
          <h3 className="text-xl md:text-2xl font-serif mb-4 mt-8">{content.introductionSections[1].title}</h3>
          
          <p>
            {content.introductionSections[1].text}
          </p>
          
          <div className="flex flex-wrap my-8 gap-6 justify-center">
            <div className="float-left mr-6 mb-4 w-48 md:w-64">
              <div className="flex flex-col">
                <div 
                  className="relative mb-2 cursor-pointer group overflow-hidden rounded border border-border"
                  onClick={() => openFullscreen("/Figurative Artworks 1980 -1989/Egyptian scene, flat 1984, 120 x 85 cm.jpg", "1984 - Flat scenery")}
                >
                  <Image 
                    src="/Figurative Artworks 1980 -1989/Egyptian scene, flat 1984, 120 x 85 cm.jpg" 
                    alt="1984 - Flat scenery" 
                    width={250}
                    height={176}
                    className="object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <p className="text-sm text-center text-text-muted">1</p>
              </div>
            </div>
            <div className="float-right ml-6 mb-4 w-48 md:w-64">
              <div className="flex flex-col">
                <div 
                  className="relative mb-2 cursor-pointer group overflow-hidden rounded border border-border"
                  onClick={() => openFullscreen("/Figurative Artworks 1980 -1989/Egyptian scene, with depth 1985, 125 x 90 cm.jpg", "1985 - Deep perspective")}
                >
                  <Image 
                    src="/Figurative Artworks 1980 -1989/Egyptian scene, with depth 1985, 125 x 90 cm.jpg" 
                    alt="1985 - Deep perspective" 
                    width={250}
                    height={180}
                    className="object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <p className="text-sm text-center text-text-muted">2</p>
              </div>
            </div>
          </div>
          
          <p>
            {content.section2Para1}
          </p>
          
          <h3 className="text-xl md:text-2xl font-serif mb-4 mt-8">{content.section3Title}</h3>
          <p>
            {content.section3Para1}
          </p>
          
          <div className="float-left mr-6 mb-6 w-full md:w-80 lg:w-96">
            <div className="flex flex-col">
              <div 
                className="relative mb-2 cursor-pointer group overflow-hidden rounded border border-border"
                onClick={() => openFullscreen("/Large abstract Artworks 1990 - 20/Changing tiling on a wooden plank 1990, 60 x 200 cm.png", "Wooden plank (60x200cm) from 1990")}
              >
                <Image 
                  src="/Large abstract Artworks 1990 - 20/Changing tiling on a wooden plank 1990, 60 x 200 cm.png" 
                  alt="Wooden plank (60x200cm) from 1990" 
                  width={380}
                  height={126}
                  className="transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <p className="text-sm text-center text-text-muted">3</p>
            </div>
          </div>
          
          <p>
            {content.section3Para1}
          </p>
          
          <p>
            {content.section3Para2}
          </p>
          
          <div className="float-right ml-6 mb-6 w-48 md:w-56">
            <div className="flex flex-col">
              <div 
                className="relative mb-2 cursor-pointer group overflow-hidden rounded border border-border"
                onClick={() => openFullscreen("/Large abstract Artworks 1990 - 20/Changing pattern with opening I 1990, 90 x 95 cm.jpg", "Changing pattern with opening I (1990)")}
              >
                <Image 
                  src="/Large abstract Artworks 1990 - 20/Changing pattern with opening I 1990, 90 x 95 cm.jpg" 
                  alt="Changing pattern with opening I (1990)" 
                  width={220}
                  height={232}
                  className="transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <p className="text-sm text-center text-text-muted">4</p>
            </div>
          </div>
          
          <p>
            {content.section3Para3}
          </p>
          
          <div className="float-left mr-6 mb-6" style={{ maxWidth: 'calc(2 * 12rem + 1.5rem)' }}> {/* Max width for 2 w-48 items + gap-6 */}
            <div className="flex flex-wrap gap-6">
              {/* Image 5 */}
              <div className="w-48">
                <div className="flex flex-col">
                  <div 
                    className="relative mb-2 cursor-pointer group overflow-hidden rounded border border-border"
                    onClick={() => openFullscreen("/Large abstract Artworks 1990 - 20/Tuscan tiling I 1994, 165 x 165 cm.jpg", "Tuscan tiling I (Montescudaio) (1994)")}
                  >
                    <Image 
                      src="/Large abstract Artworks 1990 - 20/Tuscan tiling I 1994, 165 x 165 cm.jpg" 
                      alt="Tuscan tiling I (Montescudaio) (1994)" 
                      width={192} 
                      height={192}
                      className="object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-sm text-center text-text-muted">5</p>
                </div>
              </div>
              {/* Image 6 */}
              <div className="w-48">
                <div className="flex flex-col">
                  <div 
                    className="relative mb-2 cursor-pointer group overflow-hidden rounded border border-border"
                    onClick={() => openFullscreen("/Large abstract Artworks 1990 - 20/Composition with open structure 1999, 150 x 150 cm.jpg", "Open structure")}
                  >
                    <Image 
                      src="/Large abstract Artworks 1990 - 20/Composition with open structure 1999, 150 x 150 cm.jpg" 
                      alt="Open structure (6)" 
                      width={192}
                      height={192}
                      className="object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-sm text-center text-text-muted">6</p>
                </div>
              </div>
              {/* Image 7 */}
              <div className="w-48">
                <div className="flex flex-col">
                  <div 
                    className="relative mb-2 cursor-pointer group overflow-hidden rounded border border-border"
                    onClick={() => openFullscreen("/Large abstract Artworks 1990 - 20/Composition with fixed center 1998, 100 x 100 cm.jpg", "Closed structure")}
                  >
                    <Image 
                      src="/Large abstract Artworks 1990 - 20/Composition with fixed center 1998, 100 x 100 cm.jpg" 
                      alt="Closed structure (7)" 
                      width={192}
                      height={192}
                      className="object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-sm text-center text-text-muted">7</p>
                </div>
              </div>
              {/* Image 8 */}
              <div className="w-48">
                <div className="flex flex-col">
                  <div 
                    className="relative mb-2 cursor-pointer group overflow-hidden rounded border border-border"
                    onClick={() => openFullscreen("/Large abstract Artworks 1990 - 20/Disconnected Coptic tiling 1996, 150 x 150 cm.jpg", "Coptic healing scrolls")}
                  >
                    <Image 
                      src="/Large abstract Artworks 1990 - 20/Disconnected Coptic tiling 1996, 150 x 150 cm.jpg" 
                      alt="Coptic healing scrolls (8)" 
                      width={192}
                      height={192}
                      className="object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-sm text-center text-text-muted">8</p>
                </div>
              </div>
              {/* Image 9 */}
              <div className="w-48">
                <div className="flex flex-col">
                  <div 
                    className="relative mb-2 cursor-pointer group overflow-hidden rounded border border-border"
                    onClick={() => openFullscreen("/Large abstract Artworks 1990 - 20/Detail of Tiling with handwritings 1997.jpg", "Japanese prints")}
                  >
                    <Image 
                      src="/Large abstract Artworks 1990 - 20/Detail of Tiling with handwritings 1997.jpg" 
                      alt="Japanese prints (9)" 
                      width={192}
                      height={192}
                      className="object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-sm text-center text-text-muted">9</p>
                </div>
              </div>
              {/* Image 10 (was 11) */}
              <div className="w-48">
                <div className="flex flex-col">
                  <div 
                    className="relative mb-2 aspect-square overflow-hidden rounded border border-border cursor-pointer group"
                    onClick={() => openFullscreen("/Large abstract Artworks 1990 - 20/Division of the plane with various elements 1997, 160 x 160 cm.jpg", "Cigar boxes and prints by other artists - Zoomed Detail")}
                  >
                    <Image 
                      src="/Large abstract Artworks 1990 - 20/Division of the plane with various elements 1997, 160 x 160 cm.jpg" 
                      alt="Cigar boxes and prints by other artists (10) - Zoomed Detail" 
                      fill
                      className="object-cover transform scale-[2] group-hover:scale-[2.25] transition-transform duration-300"
                      sizes="(max-width: 640px) 50vw, 192px"
                    />
                  </div>
                  <p className="text-sm text-center text-text-muted">10</p>
                </div>
              </div>
            </div>
          </div>
          <p>
            {content.section4Para1}
          </p>
          <div className="clear-both"></div>

          <h3 className="text-xl md:text-2xl font-serif mb-4 mt-8">{content.section4Title}</h3>
          
          <div className="float-left mr-6 mb-6 w-64">
            <div className="flex flex-col">
              <div 
                className="relative mb-2 cursor-pointer group overflow-hidden rounded border border-border"
                onClick={() => openFullscreen("/Large abstract Artworks 1990 - 20/Composition with open structure 1999, 150 x 150 cm.jpg", "Composition with open structure")}
              >
                <Image 
                  src="/Large abstract Artworks 1990 - 20/Composition with open structure 1999, 150 x 150 cm.jpg" 
                  alt="Composition with open structure (11)" 
                  width={250}
                  height={250}
                  className="object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <p className="text-sm text-center text-text-muted">11</p>
            </div>
          </div>
          <div className="float-left mr-6 mb-6 w-64">
            <div className="flex flex-col">
              <div 
                className="relative mb-2 cursor-pointer group overflow-hidden rounded border border-border"
                onClick={() => openFullscreen("/Large abstract Artworks 1990 - 20/Detail of Tiling with handwritings 1997, 2.jpg", "Byzantine saint and newspaper photograph of a leader from the Balkan Wars")}
              >
                <Image 
                  src="/Large abstract Artworks 1990 - 20/Detail of Tiling with handwritings 1997, 2.jpg" 
                  alt="Byzantine saint and newspaper photograph of a leader from the Balkan Wars (12)" 
                  width={250}
                  height={250}
                  className="object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <p className="text-sm text-center text-text-muted">12</p>
            </div>
          </div>
          <p>
            {content.section4Para2}
          </p>
          <div className="clear-both"></div>
          
          <p className="text-right mt-6">
            <em>{content.creditAuthorLabel}: {content.creditAuthor}</em><br />
            <em>{content.creditTranslatorLabel}: {content.creditTranslator}</em>
          </p>
          
          <div className="mt-12 border-t border-border pt-8">
            <h3 className="text-xl font-serif mb-4">{content.additionalCommentTitle}</h3>
            {content.additionalCommentParagraphs.map((paragraph, index) => (
              <p key={index} className="text-text text-base leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
      
      
      <div className="mt-12 text-center">
        <LocalizedLink 
          href="/artworks" 
          className="inline-flex items-center text-accent hover:text-accent-hover transition-colors"
        >
          <span>{content.cta}</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 ml-2" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </LocalizedLink>
      </div>

      {/* Selfie Image Section */}
      <div className="mt-16 pt-12 border-t border-border">
        <h2 className="text-2xl md:text-3xl font-serif mb-8 text-accent text-center">{content.snapshotTitle}</h2>
        <div className="relative w-full max-w-3xl mx-auto aspect-[4/3] overflow-hidden rounded-lg shadow-xl group">
          <Image
            src="/Website Assets/Hero Images/Selfie voor nieuw werk 25 april 2025 IMG_6710.jpg"
            alt="Selfie voor nieuw werk 25 april 2025"
            fill
            className="object-cover transform scale-[1.0] group-hover:scale-[1.1] transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 75vw, 66vw"
          />
        </div>
        <p className="text-center italic text-text-muted mt-4">
          {content.snapshotCaption}
        </p>
      </div>

      {/* Fullscreen Image Viewer */}
      <AnimatePresence>
        {fullscreenImage && (
          <motion.div 
            className="fixed inset-0 z-50 bg-black flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeFullscreen}
          >
            {/* Close button */}
            <button 
              className="absolute top-6 right-6 z-50 text-white hover:text-[#d4af37] p-3 bg-black/30 backdrop-blur-sm rounded-full transition-colors"
              onClick={closeFullscreen}
              aria-label="Close fullscreen view"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Fullscreen Image */}
            <motion.div 
              className="w-full h-full flex items-center justify-center p-8 md:p-16"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full">
                <Image
                  src={fullscreenImage.src}
                  alt={fullscreenImage.alt}
                  fill
                  className="object-contain"
                  quality={90}
                  sizes="100vw"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
