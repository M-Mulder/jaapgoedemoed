import React from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: 'Composition 2017 | Jaap Goedemoed',
  description: 'Commentary and details about the creation of Composition 2017 by Jaap Goedemoed.',
};

export default function Composition2017Page() {
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
            Commentary on the creative process and significance of this artwork
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
                  <span className="font-medium">Medium:</span> Acrylic on canvas
                </p>
                <p className="text-lg">
                  <span className="font-medium">Dimensions:</span> 100 x 100 cm
                </p>
                <p className="text-lg">
                  <span className="font-medium">Year:</span> 2017
                </p>
                
                <div className="pt-4">
                  <p>
                    Composition 2017 represents a significant development in my exploration of geometric abstraction 
                    and spatial relationships. This work marks a deliberate shift toward a more complex integration 
                    of mathematical structures and intuitive color relationships.
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
          <h2>Comments on Composition 2017</h2>
          
          <p>
            Composition 2017 emerged from a period of intensive exploration into pentagonal tiling patterns. 
            Unlike my earlier works that often employed more regular geometric structures, this composition 
            deliberately introduces elements of disruption and asymmetry within an underlying pentagonal framework.
          </p>
          
          <p>
            The color palette was developed through a systematic process of layering and juxtaposition, 
            with each color decision informing subsequent choices. I was particularly interested in how 
            certain color relationships could create optical vibrations that activate the geometric structure, 
            giving the static composition a sense of internal movement and energy.
          </p>
          
          <p>
            The central geometric pattern references both architectural structures and natural crystalline 
            formations. This duality—between the built environment and natural ordering principles—has been 
            a consistent theme in my practice. In Composition 2017, I sought to heighten this productive tension 
            through the introduction of subtle textural variations and deliberate moments of geometric imprecision.
          </p>
          
          <p>
            The work was executed over a three-month period, with significant intervals of contemplation between 
            active painting sessions. This measured approach allowed me to respond to the emerging composition with 
            greater clarity and intentionality, making decisions that reinforced the work&apos;s internal logic while 
            maintaining a sense of intuitive rightness.
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
            <p className="mt-2 text-sm text-center text-white/70">Side view showing the three-dimensional aspects and textural details of the work</p>
          </div>
          
          <p>
            Composition 2017 has been exhibited internationally, including at the 2018 Geometric Abstraction Biennale 
            in Rotterdam, where it was noted for its distinctive approach to pentagonal structures and sophisticated 
            color relationships.
          </p>
          
          <div className="mt-12 flex justify-center">
            <Link href="/artworks" className="btn">
              Return to Gallery
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
