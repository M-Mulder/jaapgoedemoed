import React from "react";
import Image from "next/image";
import { getLocaleData, Locale } from "@/lib/localeData";
import { generateLocalizedMetadata } from "@/lib/metadata";
import LocalizedLink from "@/components/LocalizedLink";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const content = getLocaleData(locale).artworkPages.composition2025;
  
  return generateLocalizedMetadata({
    locale,
    path: '/artworks/composition-2025',
    title: `${content.title} | Jaap Goedemoed`,
    description: content.description,
  });
}

const basePath = "/artworks/abstract/composition-2025";

export default async function Composition2025Page({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const content = getLocaleData(locale).artworkPages.composition2025;
  
  return (
    <div className="min-h-screen">
      {/* Header section */}
      <div className="bg-background py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/artworks/abstract/composition-2025/fig-12-final-artwork.png')] bg-no-repeat bg-cover blur-xl"></div>
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

          {/* Fig. 1 */}
          <div className="relative aspect-[4/3] my-8 shadow-lg">
            <Image 
              src={`${basePath}/fig-01-porcupine-quills-hires.jpg`}
              alt={content.imageCaption1}
              fill
              className="object-contain rounded-md bg-background-light"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
          <p className="text-center text-text-muted italic text-sm -mt-4 mb-8">
            {content.imageCaption1}
          </p>

          {/* Fig. 2 */}
          <div className="relative aspect-[4/3] my-8 shadow-lg">
            <Image 
              src={`${basePath}/fig-02-porcupine-rectangles-hires.jpg`}
              alt={content.imageCaption2}
              fill
              className="object-contain rounded-md bg-background-light"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
          <p className="text-center text-text-muted italic text-sm -mt-4 mb-8">
            {content.imageCaption2}
          </p>
        </div>
      </div>

      {/* The role of chance */}
      <div className="bg-background-light py-16">
        <div className="container-narrow">
          <h2 className="text-3xl font-serif text-center mb-12 text-text-accent">{content.chanceTitle}</h2>
          
          <div className="prose prose-invert mx-auto">
            <p>
              {content.chancePara1}
            </p>

            <p>
              {content.chancePara2}
            </p>

            {/* Fig. 3 */}
            <div className="relative aspect-[4/3] my-8 shadow-lg">
              <Image 
                src={`${basePath}/fig-03-bjorn-hansen-hires.jpg`}
                alt={content.imageCaption3}
                fill
                className="object-contain rounded-md bg-background"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
            <p className="text-center text-text-muted italic text-sm -mt-4 mb-8">
              {content.imageCaption3}
            </p>

            <p>
              {content.chancePara3}
            </p>

            {/* Fig. 4 */}
            <div className="relative aspect-[3/4] max-w-md mx-auto my-8 shadow-lg">
              <Image 
                src={`${basePath}/fig-04-persian-artwork.png`}
                alt={content.imageCaption4}
                fill
                className="object-contain rounded-md bg-background"
                sizes="(max-width: 768px) 100vw, 448px"
              />
            </div>
            <p className="text-center text-text-muted italic text-sm -mt-4 mb-8">
              {content.imageCaption4}
            </p>

            <p>
              {content.chancePara4}
            </p>

            <p>
              {content.chancePara5}
            </p>

            {/* Fig. 6 */}
            <div className="relative aspect-square my-8 shadow-lg">
              <Image 
                src={`${basePath}/fig-06-work-in-progress-jan-2025.png`}
                alt={content.imageCaption6}
                fill
                className="object-contain rounded-md bg-background"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
            <p className="text-center text-text-muted italic text-sm -mt-4 mb-8">
              {content.imageCaption6}
            </p>
          </div>
        </div>
      </div>

      {/* Filling in the compartments */}
      <div className="py-16">
        <div className="container-narrow">
          <h2 className="text-3xl font-serif text-center mb-12 text-text-accent">{content.fillingTitle}</h2>
          
          <div className="prose prose-invert mx-auto">
            <p>
              {content.fillingPara1}
            </p>

            <p>
              {content.fillingPara2}
            </p>

            <p>
              {content.fillingPara3}
            </p>

            <p>
              {content.fillingPara4}
            </p>

            {/* Fig. 7a and 7b side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div>
                <div className="relative aspect-[3/4] shadow-lg">
                  <Image 
                    src={`${basePath}/fig-07a-isidora-duncan-ballet.png`}
                    alt={content.imageCaption7a}
                    fill
                    className="object-contain rounded-md bg-background-light"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
                <p className="text-center text-text-muted text-sm mt-2">
                  {content.imageCaption7a}
                </p>
              </div>
              
              <div>
                <div className="relative aspect-[3/4] shadow-lg">
                  <Image 
                    src={`${basePath}/fig-07b-morning-waves-kabamatsu.jpg`}
                    alt={content.imageCaption7b}
                    fill
                    className="object-contain rounded-md bg-background-light"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
                <p className="text-center text-text-muted text-sm mt-2">
                  {content.imageCaption7b}
                </p>
              </div>
            </div>

            <p>
              {content.fillingPara5}
            </p>

            {/* Fig. 8 */}
            <div className="relative aspect-square my-8 shadow-lg">
              <Image 
                src={`${basePath}/fig-08-work-in-progress-hires.jpg`}
                alt={content.imageCaption8}
                fill
                className="object-contain rounded-md bg-background"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
            <p className="text-center text-text-muted italic text-sm -mt-4 mb-8">
              {content.imageCaption8}
            </p>
          </div>
        </div>
      </div>

      {/* Steinberg landscapes */}
      <div className="bg-background-light py-16">
        <div className="container-narrow">
          <h2 className="text-3xl font-serif text-center mb-12 text-text-accent">{content.steinbergTitle}</h2>
          
          <div className="prose prose-invert mx-auto">
            <p>
              {content.steinbergPara1}
            </p>

            {/* Fig. 9 */}
            <div className="relative aspect-square my-8 shadow-lg">
              <Image 
                src={`${basePath}/fig-09-steinberg-landscapes.png`}
                alt={content.imageCaption9}
                fill
                className="object-contain rounded-md bg-background"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
            <p className="text-center text-text-muted italic text-sm -mt-4 mb-8">
              {content.imageCaption9}
            </p>

            <p>
              {content.steinbergPara2}
            </p>

            {/* Fig. 10 personal photos grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
              <div>
                <div className="relative aspect-square shadow-lg">
                  <Image 
                    src={`${basePath}/fig-10a-rear-view-amsterdam.jpg`}
                    alt={content.imageCaption10a}
                    fill
                    className="object-cover rounded-md"
                    sizes="(max-width: 768px) 50vw, 200px"
                  />
                </div>
                <p className="text-center text-text-muted text-xs mt-1">
                  {content.imageCaption10a}
                </p>
              </div>

              <div>
                <div className="relative aspect-square shadow-lg">
                  <Image 
                    src={`${basePath}/fig-10b-trouville-sur-mer.png`}
                    alt={content.imageCaption10b}
                    fill
                    className="object-cover rounded-md"
                    sizes="(max-width: 768px) 50vw, 200px"
                  />
                </div>
                <p className="text-center text-text-muted text-xs mt-1">
                  {content.imageCaption10b}
                </p>
              </div>

              <div>
                <div className="relative aspect-square shadow-lg">
                  <Image 
                    src={`${basePath}/fig-10c-venice-castello.jpg`}
                    alt={content.imageCaption10c}
                    fill
                    className="object-cover rounded-md"
                    sizes="(max-width: 768px) 50vw, 200px"
                  />
                </div>
                <p className="text-center text-text-muted text-xs mt-1">
                  {content.imageCaption10c}
                </p>
              </div>

              <div>
                <div className="relative aspect-square shadow-lg">
                  <Image 
                    src={`${basePath}/fig-10d-san-michele-venice.jpg`}
                    alt={content.imageCaption10d}
                    fill
                    className="object-cover rounded-md"
                    sizes="(max-width: 768px) 50vw, 200px"
                  />
                </div>
                <p className="text-center text-text-muted text-xs mt-1">
                  {content.imageCaption10d}
                </p>
              </div>

              <div>
                <div className="relative aspect-square shadow-lg">
                  <Image 
                    src={`${basePath}/fig-10e-murano-church-floor.jpg`}
                    alt={content.imageCaption10e}
                    fill
                    className="object-cover rounded-md"
                    sizes="(max-width: 768px) 50vw, 200px"
                  />
                </div>
                <p className="text-center text-text-muted text-xs mt-1">
                  {content.imageCaption10e}
                </p>
              </div>

              <div>
                <div className="relative aspect-square shadow-lg">
                  <Image 
                    src={`${basePath}/fig-10f-san-giorgio-cloister.jpg`}
                    alt={content.imageCaption10f}
                    fill
                    className="object-cover rounded-md"
                    sizes="(max-width: 768px) 50vw, 200px"
                  />
                </div>
                <p className="text-center text-text-muted text-xs mt-1">
                  {content.imageCaption10f}
                </p>
              </div>

              <div>
                <div className="relative aspect-square shadow-lg">
                  <Image 
                    src={`${basePath}/fig-10g-neva-bridge-st-petersburg.png`}
                    alt={content.imageCaption10g}
                    fill
                    className="object-cover rounded-md"
                    sizes="(max-width: 768px) 50vw, 200px"
                  />
                </div>
                <p className="text-center text-text-muted text-xs mt-1">
                  {content.imageCaption10g}
                </p>
              </div>

              <div>
                <div className="relative aspect-square shadow-lg">
                  <Image 
                    src={`${basePath}/fig-10h-fontanka-st-petersburg.jpg`}
                    alt={content.imageCaption10h}
                    fill
                    className="object-cover rounded-md"
                    sizes="(max-width: 768px) 50vw, 200px"
                  />
                </div>
                <p className="text-center text-text-muted text-xs mt-1">
                  {content.imageCaption10h}
                </p>
              </div>
            </div>

            <p>
              {content.photoPara1}
            </p>
            <p>
              {content.photoPara2}
            </p>
            <p>
              {content.photoPara3}
            </p>
            <p>
              {content.photoPara4}
            </p>
            <p>
              {content.photoPara5}
            </p>
            <p>
              {content.photoPara6}
            </p>
            <p>
              {content.photoPara7}
            </p>
            <p>
              {content.photoPara8}
            </p>
          </div>
        </div>
      </div>

      {/* Final elements */}
      <div className="py-16">
        <div className="container-narrow">
          <h2 className="text-3xl font-serif text-center mb-12 text-text-accent">{content.finalTitle}</h2>
          
          <div className="prose prose-invert mx-auto">
            {/* Fig. 11 grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-8">
              <div>
                <div className="relative aspect-square shadow-lg">
                  <Image 
                    src={`${basePath}/fig-11a-venetian-carnival-mask.png`}
                    alt={content.imageCaption11a}
                    fill
                    className="object-contain rounded-md bg-background-light"
                    sizes="(max-width: 768px) 50vw, 260px"
                  />
                </div>
                <p className="text-center text-text-muted text-xs mt-1">
                  {content.imageCaption11a}
                </p>
              </div>

              <div>
                <div className="relative aspect-square shadow-lg">
                  <Image 
                    src={`${basePath}/fig-11b-george-braque.jpg`}
                    alt={content.imageCaption11b}
                    fill
                    className="object-contain rounded-md bg-background-light"
                    sizes="(max-width: 768px) 50vw, 260px"
                  />
                </div>
                <p className="text-center text-text-muted text-xs mt-1">
                  {content.imageCaption11b}
                </p>
              </div>

              <div>
                <div className="relative aspect-square shadow-lg">
                  <Image 
                    src={`${basePath}/fig-11c-oceanic-tribal-object.png`}
                    alt={content.imageCaption11c}
                    fill
                    className="object-contain rounded-md bg-background-light"
                    sizes="(max-width: 768px) 50vw, 260px"
                  />
                </div>
                <p className="text-center text-text-muted text-xs mt-1">
                  {content.imageCaption11c}
                </p>
              </div>

              <div>
                <div className="relative aspect-square shadow-lg">
                  <Image 
                    src={`${basePath}/fig-11d-ukrainian-banknotes.png`}
                    alt={content.imageCaption11d}
                    fill
                    className="object-contain rounded-md bg-background-light"
                    sizes="(max-width: 768px) 50vw, 260px"
                  />
                </div>
                <p className="text-center text-text-muted text-xs mt-1">
                  {content.imageCaption11d}
                </p>
              </div>

              <div>
                <div className="relative aspect-square shadow-lg">
                  <Image 
                    src={`${basePath}/fig-11e-roman-head-mosaic.jpg`}
                    alt={content.imageCaption11e}
                    fill
                    className="object-contain rounded-md bg-background-light"
                    sizes="(max-width: 768px) 50vw, 260px"
                  />
                </div>
                <p className="text-center text-text-muted text-xs mt-1">
                  {content.imageCaption11e}
                </p>
              </div>

              <div>
                <div className="relative aspect-square shadow-lg">
                  <Image 
                    src={`${basePath}/fig-11f-arabic-handwriting.jpg`}
                    alt={content.imageCaption11f}
                    fill
                    className="object-contain rounded-md bg-background-light"
                    sizes="(max-width: 768px) 50vw, 260px"
                  />
                </div>
                <p className="text-center text-text-muted text-xs mt-1">
                  {content.imageCaption11f}
                </p>
              </div>
            </div>

            <p>
              {content.finalPara1}
            </p>
            <p>
              {content.finalPara2}
            </p>
            <p>
              {content.finalPara3}
            </p>
            <p>
              {content.finalPara4}
            </p>
            <p>
              {content.finalPara5}
            </p>
            <p>
              {content.finalPara6}
            </p>
          </div>
        </div>
      </div>

      {/* The completed work and reflection */}
      <div className="bg-background-light py-16">
        <div className="container-narrow">
          <h2 className="text-3xl font-serif text-center mb-12 text-text-accent">{content.completedTitle}</h2>
          
          <div className="prose prose-invert mx-auto">
            {/* Fig. 12 - Final artwork */}
            <div className="relative aspect-square my-8 shadow-lg">
              <Image 
                src={`${basePath}/fig-12-final-artwork.png`}
                alt={content.imageCaption12}
                fill
                className="object-contain rounded-md bg-background"
                sizes="(max-width: 768px) 100vw, 800px"
                priority
              />
            </div>
            <p className="text-center text-text-muted italic text-sm -mt-4 mb-8">
              {content.imageCaption12}
            </p>

            <p>
              {content.completedPara1}
            </p>

            <p>
              {content.completedPara2}
            </p>
          </div>
          
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
