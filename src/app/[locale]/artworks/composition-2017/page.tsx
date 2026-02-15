import React from "react";
import Image from "next/image";
import { getLocaleData, Locale } from "@/lib/localeData";
import { generateLocalizedMetadata } from "@/lib/metadata";
import LocalizedLink from "@/components/LocalizedLink";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const content = getLocaleData(locale).artworkPages.composition2017;
  
  return generateLocalizedMetadata({
    locale,
    path: '/artworks/composition-2017',
    title: `Composition 2017 | Jaap Goedemoed`,
    description: content.intro,
  });
}

export default async function Composition2017Page({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const content = getLocaleData(locale).artworkPages.composition2017;
  return (
    <div className="min-h-screen">
      {/* Header section */}
      <div className="bg-background py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/2020/05/6-Composition-2017-Final-state-003-1320x1320.jpg')] bg-no-repeat bg-cover blur-xl"></div>
        </div>
        
        <div className="container-wide relative z-10">
          <h1 className="page-title text-center">Composition 2017</h1>
          <p className="text-text-muted text-center max-w-2xl mx-auto">
            {content.intro}
          </p>
        </div>
      </div>
      
      {/* Artwork Showcase */}
      <div className="bg-background-light py-16">
        <div className="container-narrow">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="relative aspect-square shadow-xl">
                <Image 
                  src="/2020/05/6-Composition-2017-Final-state-003-1320x1320.jpg"
                  alt="Composition 2017 by Jaap Goedemoed"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-2xl font-serif mb-4 text-text-accent">Composition 2017</h2>
              
              <div className="space-y-4 text-text">
                <p className="text-lg">
                  <span className="font-medium">{content.medium}:</span> {content.mediumValue}
                </p>
                <p className="text-lg">
                  <span className="font-medium">{content.dimensions}:</span> {content.dimensionsValue}
                </p>
                <p className="text-lg">
                  <span className="font-medium">{content.year}:</span> {content.yearValue}
                </p>
                
                <div className="pt-4">
                  <p>
                    {content.intro}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Comments on the artwork */}
      <div className="container-narrow py-16">
        <div className="prose prose-invert mx-auto">
          <h2>{content.commentsTitle}</h2>
          
          <p>
            {content.para1}
          </p>
          
          <p>
            {content.para2}
          </p>
          
          <p>
            {content.para3}
          </p>
          
          <p>
            {content.para4}
          </p>
          
          <div className="my-8">
            <div className="aspect-[3/2] relative shadow-lg">
              <Image 
                src="/2020/05/6-Composition-2017-Final-state-side-view-002-1320x1987.jpg"
                alt="Composition 2017 side view showing depth and texture"
                fill
                className="object-cover rounded"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
            <p className="mt-2 text-sm text-center text-white/70">{content.sideViewCaption}</p>
          </div>
          
          <p>
            {content.para5}
          </p>
          
          <div className="mt-12 flex justify-center">
            <LocalizedLink href="/artworks" className="btn">
              {content.returnButton}
            </LocalizedLink>
          </div>
        </div>
      </div>
    </div>
  );
}

