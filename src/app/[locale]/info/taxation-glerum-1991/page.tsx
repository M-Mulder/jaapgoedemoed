import React from 'react';
import Image from 'next/image';
import { getLocaleData, type Locale } from "@/lib/localeData";
import { generateLocalizedMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const content = getLocaleData(locale).infoPages.taxationGlerum;

  return generateLocalizedMetadata({
    locale,
    path: '/info/taxation-glerum-1991',
    title: `${content.title} | Jaap Goedemoed`,
    description: content.description,
  });
}

export default async function TaxationPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const content = getLocaleData(locale).infoPages.taxationGlerum;

  return (
    <div className="min-h-screen bg-[#0c0c0c] text-white">
      {/* Hero section */}
      <div className="relative h-[50vh] overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/2019/01/Taxatie-Pieter-Glerum-1991.jpg"
            alt="Taxation document by Jan Pieter Glerum from 1991"
            fill
            className="object-cover object-center brightness-[0.7]"
            priority
          />
        </div>
        
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90"></div>
        
        {/* Hero content */}
        <div className="container mx-auto relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6">{content.title}</h1>
          <p className="text-white/80 md:text-lg max-w-2xl">
            {content.subtitle}
          </p>
          
          {/* Decorative line */}
          <div className="w-20 h-1 bg-[#d4af37] mt-8"></div>
        </div>
      </div>
      
      {/* Main content */}
      <section className="py-16 md:py-24 bg-[#0c0c0c]">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="prose prose-lg prose-invert mx-auto">
            <p className="lead text-xl text-white/90 mb-8">
              {content.intro}
            </p>
            
            <div className="flex flex-col md:flex-row gap-8 my-12 items-center">
              <div className="md:w-1/2">
                <Image 
                  src="/2019/01/Jan-Pieter-Glerum-768x527.jpg"
                  alt="Jan Pieter Glerum"
                  width={768}
                  height={527}
                  className="rounded-lg shadow-xl"
                />
                <p className="text-sm text-white/60 mt-2 text-center">
                  Jan Pieter Glerum (1943-2013)
                </p>
              </div>
              
              <div className="md:w-1/2">
                <h2 className="text-2xl font-serif text-[#d4af37] mb-4">{content.appraiserTitle}</h2>
                <p className="text-white/80">
                  {content.appraiserText}
                </p>
              </div>
            </div>
            
            <h2 className="text-2xl font-serif text-[#d4af37] mt-12 mb-6">{content.documentTitle}</h2>
            
            <p className="text-white/80 mb-6">
              {content.documentText}
            </p>
            
            <div className="my-12 bg-white/5 p-6 rounded-lg">
              <Image 
                src="/2019/01/Taxatie-Pieter-Glerum-1991.jpg"
                alt="Taxation document by Jan Pieter Glerum from 1991"
                width={1000}
                height={1414}
                className="rounded-lg shadow-xl mx-auto"
              />
              <p className="text-sm text-white/60 mt-4 text-center">
                {content.documentCaption}
              </p>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-sm text-white/60 italic">
                {content.disclaimer}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
