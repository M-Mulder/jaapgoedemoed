import React from "react";
import Image from "next/image";
import LocalizedLink from "@/components/LocalizedLink";
import { getLocaleData, type Locale } from "@/lib/localeData";
import { generateLocalizedMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const content = getLocaleData(locale).infoPages.gypsiesAmsterdam;

  return generateLocalizedMetadata({
    locale,
    path: '/info/gypsies-amsterdam',
    title: `${content.title} | Jaap Goedemoed`,
    description: content.description,
  });
}

export default async function GypsiesAmsterdamPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const content = getLocaleData(locale).infoPages.gypsiesAmsterdam;

  return (
    <div className="min-h-screen">
      {/* Header section */}
      <div className="bg-background py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/2021/04/Zigeuners-in-Amsterdam-FL-JG-1a1.jpg')] bg-no-repeat bg-cover blur-xl"></div>
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
          <p>{content.para1}</p>
          <p>{content.para2}</p>
          <p>{content.para3}</p>
          <p>{content.para4}</p>
          <p>{content.para5}</p>
          <p>{content.para6}</p>
          <p>{content.para7}</p>
        </div>
      </div>
      
      {/* Gallery section */}
      <div className="bg-background-light py-16">
        <div className="container-wide">
          <h2 className="text-3xl font-serif text-center mb-12 text-text-accent">{content.galleryTitle}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6, 7].map((num) => {
              const imageName = num === 1 ? 'Zigeuners-in-Amsterdam-FL-JG-1a1.jpg' :
                                num === 6 ? 'Zigeuners-in-Amsterdam-Fl-JG-6a-2-april-20216.jpg' :
                                `Zigeuners-in-Amsterdam-Fl-JG-${num}-2-april-2021${num}.jpg`;
              
              return (
                <div key={num} className="group relative aspect-[40/56.5] bg-background-light rounded-md shadow-md overflow-hidden">
                  <Image 
                    src={`/2021/04/${imageName}`}
                    alt={`${content.artworkTitle} 1989/2021 - Frank Lodeizen/Jaap Goedemoed (no.${num})`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  
                  {/* Overlay with caption on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end">
                    <div className="p-4">
                      <h3 className="text-lg font-serif text-text-accent">{content.artworkTitle} (no.{num})</h3>
                      <p className="text-text-muted mt-1">1989/2021 - Frank Lodeizen/Jaap Goedemoed</p>
                      <p className="text-text-muted mt-1">{content.artworkMedium}</p>
                      <p className="text-text-muted">40 x 56.5 cm</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-12 text-center">
            <LocalizedLink href="/info" className="btn">
              {content.returnButton}
            </LocalizedLink>
          </div>
        </div>
      </div>
      
      {/* Technique Description */}
      <div className="py-16">
        <div className="container-narrow">
          <h2 className="text-3xl font-serif text-center mb-12 text-text-accent">{content.techniqueTitle}</h2>
          
          <div className="prose prose-invert mx-auto">
            <p>{content.techniquePara1}</p>
            
            <p>{content.techniqueProcess}</p>
            
            <ol>
              <li>{content.techniqueStep1}</li>
              <li>{content.techniqueStep2}</li>
              <li>{content.techniqueStep3}</li>
              <li>{content.techniqueStep4}</li>
            </ol>
            
            <p>{content.techniquePara2}</p>
            <p>{content.techniquePara3}</p>
            <p>{content.techniquePara4}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
