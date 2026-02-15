import React from "react";
import Image from "next/image";
import { artworks, Artwork } from "@/lib/simplified-artwork-data";
import { getLocaleData, Locale } from "@/lib/localeData";
import { generateLocalizedMetadata } from "@/lib/metadata";
import LocalizedLink from "@/components/LocalizedLink";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const content = getLocaleData(locale).artworkPages.porcupineArtworks;
  
  return generateLocalizedMetadata({
    locale,
    path: '/artworks/porcupine-artworks',
    title: `${content.title} | Jaap Goedemoed`,
    description: content.description,
  });
}

export default async function PorcupineArtworksPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const content = getLocaleData(locale).artworkPages.porcupineArtworks;
  return (
    <div className="min-h-screen">
      {/* Header section */}
      <div className="bg-background py-20 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/2022/03/Porcupine-I-5-March-2021-finale-werk-2048x2039.jpg')] bg-no-repeat bg-cover blur-xl"></div>
          </div>
        
        <div className="container-wide relative z-10">
          <h1 className="page-title text-center">{content.title}</h1>
          <p className="text-text-muted text-center max-w-2xl mx-auto">
            {content.subtitle}
          </p>
        </div>
      </div>
      
      {/* Introduction */}
      <div className="container-narrow py-12">
        <div className="prose prose-invert mx-auto">
          <p>
            {content.introPara1}
          </p>
          
          <p>
            {content.introPara2}
          </p>

          <div className="relative aspect-square my-8 shadow-lg max-w-md mx-auto">
            <Image 
              src="/2022/03/Porcupine-I-17-Nov-2020.jpg"
              alt={content.imageCaption1}
              fill
              className="object-cover rounded-md"
              sizes="(max-width: 768px) 100vw, 500px"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-center max-w-md p-4 bg-black/60 rounded">
                {content.imageCaption1}
              </p>
            </div>
          </div>
          
          <p>
            {content.introPara3}
          </p>

          <p>
            {content.introPara4}
          </p>
        </div>
      </div>
      
      {/* Creation Process - First Artwork */}
      <div className="bg-background-light py-16">
        <div className="container-narrow">
          <h2 className="text-3xl font-serif text-center mb-12 text-text-accent">{content.firstWorkTitle}</h2>
          
          <div className="prose prose-invert mx-auto">
            <p>
              {content.firstWorkPara1}
            </p>
            
            <p>
              {content.firstWorkPara2}
            </p>
            
            <p>
              {content.firstWorkPara3}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
              <div className="relative aspect-square shadow-lg">
                <Image 
                  src="/2022/03/Porcupine-I-15-January-2021bewerkt-2048x2048.jpg"
                  alt={content.imageCaption2}
                  fill
                  className="object-cover rounded-md"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-center max-w-md p-4 bg-black/60 rounded">
                    {content.imageCaption2}
                  </p>
                </div>
              </div>
              <div className="relative aspect-square shadow-lg">
                <Image 
                  src="/2022/03/Porcupine-I-5-March-2021-finale-werk-2048x2039.jpg"
                  alt={content.imageCaption3}
                  fill
                  className="object-cover rounded-md"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-center max-w-md p-4 bg-black/60 rounded">
                    {content.imageCaption3}
                  </p>
                </div>
              </div>
            </div>
            
            <p>
              {content.firstWorkPara4}
            </p>
            
            <p>
              {content.firstWorkPara5}
            </p>
            
            <p>
              {content.firstWorkPara6}
            </p>
            
            <p>
              {content.firstWorkPara7}
            </p>
            
            <p>
              {content.firstWorkPara8}
            </p>
            
            <p>
              {content.firstWorkPara9}
            </p>
            
            <p>
              {content.firstWorkPara10}
            </p>
          </div>
        </div>
      </div>
      
      {/* Creation Process - Second Artwork */}
      <div className="py-16">
        <div className="container-narrow">
          <h2 className="text-3xl font-serif text-center mb-12 text-text-accent">{content.secondWorkTitle}</h2>
          
          <div className="prose prose-invert mx-auto">
            <p>
              {content.secondWorkPara1}
            </p>
            
            <div className="relative aspect-video my-8 shadow-lg">
              <Image 
                src="/2022/03/Porcupine-II-May-2021-500-pennen-1-2048x1371.jpg"
                alt={content.imageCaption4}
                fill
                className="object-cover rounded-md"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-center max-w-md p-4 bg-black/60 rounded">
                  {content.imageCaption4}
                </p>
              </div>
            </div>
            
            <p>
              {content.secondWorkPara2}
            </p>
            
            <p>
              {content.secondWorkPara3}
            </p>
            
            <p>
              {content.secondWorkPara4}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
              <div className="relative aspect-square shadow-lg">
                <Image 
                  src="/2022/03/Afbeeldingen-voor-The-Making-of-two-porcupine-artworks-3-2046x2048.jpg"
                  alt={content.imageCaption5}
                  fill
                  className="object-cover rounded-md"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-center max-w-md p-4 bg-black/60 rounded">
                    {content.imageCaption5}
                  </p>
                </div>
              </div>
              <div className="relative aspect-square shadow-lg">
                <Image 
                  src="/2022/03/Afbeeldingen-voor-The-Making-of-two-porcupine-artworks-4.jpg"
                  alt={content.imageCaption6}
                  fill
                  className="object-cover rounded-md"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-center max-w-md p-4 bg-black/60 rounded">
                    {content.imageCaption6}
                  </p>
                </div>
              </div>
            </div>
            
            <p>
              {content.secondWorkPara5}
            </p>
            
            <p>
              {content.secondWorkPara6}
            </p>
            
            <p>
              {content.secondWorkPara7}
            </p>
            
            <p>
              {content.secondWorkPara8}
            </p>
          </div>
        </div>
      </div>
      
      {/* Final Stages and Reflections */}
      <div className="bg-background-light py-16">
        <div className="container-narrow">
          <h2 className="text-3xl font-serif text-center mb-12 text-text-accent">{content.finalStagesTitle}</h2>
          
          <div className="prose prose-invert mx-auto">
            <p>
              {content.finalPara1}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
              <div className="relative aspect-square shadow-lg">
                <Image 
                  src="/2022/03/Porcupine-II-6-December-2021-2048x2048.jpg"
                  alt={content.imageCaption7}
                  fill
                  className="object-cover rounded-md"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-center max-w-md p-4 bg-black/60 rounded">
                    {content.imageCaption7}
                  </p>
                </div>
              </div>
              <div className="relative aspect-square shadow-lg">
                <Image 
                  src="/2022/03/Porcupine-II-23-December-2021-2048x2048.jpg"
                  alt={content.imageCaption8}
                  fill
                  className="object-cover rounded-md"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-center max-w-md p-4 bg-black/60 rounded">
                    {content.imageCaption8}
                  </p>
                </div>
              </div>
            </div>
            
            <p>
              {content.finalPara2}
            </p>
            
            <p>
              {content.finalPara3}
            </p>
            
            <div className="relative aspect-square my-8 shadow-lg">
              <Image 
                src="/2022/03/Composition-2022-Procupine-Boogie-Woogie-II-scaled.jpg"
                alt={content.imageCaption9}
                fill
                className="object-cover rounded-md"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-center max-w-md p-4 bg-black/60 rounded">
                  {content.imageCaption9}
                </p>
              </div>
            </div>
            
            <p>
              {content.finalPara4}
            </p>
            
            <p>
              {content.finalPara5}
            </p>
            
            <p>
              {content.finalPara6}
            </p>
            
            <p className="text-right italic">
              {content.translationCredit}
            </p>
          </div>
        </div>
      </div>

      {/* Section for Composition 2025 */}
      {(() => {
        const composition2025 = artworks.find(art => art.slug === 'composition-2025');
        if (!composition2025) return null;

        return (
          <div className="bg-background py-16">
            <div className="container-narrow">
              <h2 className="text-3xl font-serif text-center mb-12 text-text-accent">{content.composition2025Title}</h2>
              <div className="prose prose-invert mx-auto">
                <p>
                  {content.composition2025Intro}
                </p>
                <div className="relative aspect-square my-8 shadow-lg">
                  <Image 
                    src={composition2025.imagePath}
                    alt={composition2025.title}
                    fill
                    className="object-cover rounded-md"
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                </div>
                <h3 className="text-2xl font-serif mt-8 mb-4">{composition2025.title} ({composition2025.year})</h3>
                <p><strong>{content.imageCaption10}</strong> {composition2025.medium}</p>
                <p><strong>Dimensions:</strong> {composition2025.dimensions}</p>
                <p>{composition2025.description}</p>
                <div className="mt-8 text-center">
                  <LocalizedLink href={`/artworks/${composition2025.slug}`} className="btn-outline">
                    {content.composition2025ViewDetails}
                  </LocalizedLink>
                </div>
              </div>
            </div>
          </div>
        );
      })()}
      
      <div className="bg-background-light py-12">
        <div className="container-narrow">
          <div className="mt-12 text-center">
            <LocalizedLink href="/artworks" className="btn">
              {content.returnButton}
            </LocalizedLink>
          </div>
        </div>
      </div>
    </div>
  );
}
