import React from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: 'New Series Gypsies in Amsterdam – Frank Lodeizen | Jaap Goedemoed',
  description: 'Jaap Goedemoed\'s coloring of Frank Lodeizen\'s Gypsies in Amsterdam screen print series from 1989.',
};

export default function GypsiesAmsterdamPage() {
  return (
    <div className="min-h-screen">
      {/* Header section */}
      <div className="bg-background py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/2021/04/Zigeuners-in-Amsterdam-FL-JG-1a1.jpg')] bg-no-repeat bg-cover blur-xl"></div>
        </div>
        
        <div className="container-wide relative z-10">
          <h1 className="page-title text-center">New Series Gypsies in Amsterdam</h1>
          <p className="text-text-muted text-center max-w-2xl mx-auto">
            Frank Lodeizen's screen prints with coloring by Jaap Goedemoed
          </p>
        </div>
      </div>
      
      {/* Introduction */}
      <div className="container-narrow py-12">
        <div className="prose prose-invert mx-auto">
          <p>
            In 2016 Jaap bought the uncolored series of seven screen prints made by Frank Lodeizen in 1989 with the name Zigeuners in Amsterdam ('Gypsies in Amsterdam') including seven poems from Carla Bogaards, put together in a large size carton portfolio, published by Jaski Art Gallery, Amsterdam. The screen prints are of the size 40 x 56.5 cm, the pictures 29.5 x 41.5 cm. This exemplar was nr 1 /100.
          </p>
          
          <p>
            In 1989 there was a Gypsy Conference in the green area of Spaarnwoude near Amsterdam. Some of the gypsies also made a visit to the artist community Ruigoord in the harbor area near Amsterdam, a place also frequently visited by Frank Lodeizen. Frank Lodeizen and poet Carla Bogaards spent a week together with the gypsies, and expressed their experiences in pictures and poems.
          </p>
          
          <p>
            In addition Frank Lodeizen manually produced 50 exemplars of this series in a colored shape. In March 2020 Jaap also bought one series of these colored screen prints.
            The screen prints in black on paper are very likely made by using his so-called batik technique for making the silk screen template. However, the manual coloring was done by a sparingly use of thin coloring agent and a very limited number of colors.
          </p>
          
          <p>
            Jaap always wondered why Frank Lodeizen did not utilize his later developed technique of mixing acrylic paint and Arabic gum followed by an aqueous extraction procedure, for coloring the screen prints. Possibly this technique was for Frank not yet available or not yet ready at that moment for the 7 x 50 exemplars.
          </p>
          
          <p>
            In March 2021 Jaap had sufficient confidence to color the screen prints and started in the new atelier the painting of the uncolored series of seven screen prints using the technique of mixing acrylic paint and Arabic gum followed by an aqueous extraction procedure as he learned from Frank in 1994.
          </p>
          
          <p>
            The resulting seven screen printed colored by Jaap are shown below. This series is fully colored, and the result is very interesting and very different from the series as done by Frank. Jaap is of the opinion that this result is somewhat more for what Frank had in his mind and was intending to create. Apparently the creation of the silk screen print series and the coloring of 7 x 50 exemplars took so much energy from Frank, that the final coloring somewhat suffered from this.
          </p>
          
          <p>
            This Frank Lodeizen series of Zigeuners in Amsterdam colored by Jaap Goedemoed is a single and unique series. Not yet visible in the pictures, but in the mean time the series has also been signed by Jaap as the colorist.
          </p>
        </div>
      </div>
      
      {/* Gallery section */}
      <div className="bg-background-light py-16">
        <div className="container-wide">
          <h2 className="text-3xl font-serif text-center mb-12 text-text-accent">Zigeuners in Amsterdam Series</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative aspect-[40/56.5] bg-background-light rounded-md shadow-md overflow-hidden">
              <Image 
                src="/2021/04/Zigeuners-in-Amsterdam-FL-JG-1a1.jpg"
                alt="Zigeuners in Amsterdam 1989/2021 - Frank Lodeizen/Jaap Goedemoed (no.1)"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              
              {/* Overlay with caption on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end">
                <div className="p-4">
                  <h3 className="text-lg font-serif text-text-accent">Zigeuners in Amsterdam (no.1)</h3>
                  <p className="text-text-muted mt-1">1989/2021 - Frank Lodeizen/Jaap Goedemoed</p>
                  <p className="text-text-muted mt-1">Screen print with acrylic and Arabic gum coloring</p>
                  <p className="text-text-muted">40 x 56.5 cm</p>
                </div>
              </div>
            </div>
            
            <div className="group relative aspect-[40/56.5] bg-background-light rounded-md shadow-md overflow-hidden">
              <Image 
                src="/2021/04/Zigeuners-in-Amsterdam-Fl-JG-2-2-april-20212.jpg"
                alt="Zigeuners in Amsterdam 1989/2021 - Frank Lodeizen/Jaap Goedemoed (no.2)"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              
              {/* Overlay with caption on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end">
                <div className="p-4">
                  <h3 className="text-lg font-serif text-text-accent">Zigeuners in Amsterdam (no.2)</h3>
                  <p className="text-text-muted mt-1">1989/2021 - Frank Lodeizen/Jaap Goedemoed</p>
                  <p className="text-text-muted mt-1">Screen print with acrylic and Arabic gum coloring</p>
                  <p className="text-text-muted">40 x 56.5 cm</p>
                </div>
              </div>
            </div>
            
            <div className="group relative aspect-[40/56.5] bg-background-light rounded-md shadow-md overflow-hidden">
              <Image 
                src="/2021/04/Zigeuners-in-Amsterdam-Fl-JG-3-2-april-20213.jpg"
                alt="Zigeuners in Amsterdam 1989/2021 - Frank Lodeizen/Jaap Goedemoed (no.3)"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              
              {/* Overlay with caption on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end">
                <div className="p-4">
                  <h3 className="text-lg font-serif text-text-accent">Zigeuners in Amsterdam (no.3)</h3>
                  <p className="text-text-muted mt-1">1989/2021 - Frank Lodeizen/Jaap Goedemoed</p>
                  <p className="text-text-muted mt-1">Screen print with acrylic and Arabic gum coloring</p>
                  <p className="text-text-muted">40 x 56.5 cm</p>
                </div>
              </div>
            </div>
            
            <div className="group relative aspect-[40/56.5] bg-background-light rounded-md shadow-md overflow-hidden">
              <Image 
                src="/2021/04/Zigeuners-in-Amsterdam-Fl-JG-4-2-april-20214.jpg"
                alt="Zigeuners in Amsterdam 1989/2021 - Frank Lodeizen/Jaap Goedemoed (no.4)"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              
              {/* Overlay with caption on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end">
                <div className="p-4">
                  <h3 className="text-lg font-serif text-text-accent">Zigeuners in Amsterdam (no.4)</h3>
                  <p className="text-text-muted mt-1">1989/2021 - Frank Lodeizen/Jaap Goedemoed</p>
                  <p className="text-text-muted mt-1">Screen print with acrylic and Arabic gum coloring</p>
                  <p className="text-text-muted">40 x 56.5 cm</p>
                </div>
              </div>
            </div>
            
            <div className="group relative aspect-[40/56.5] bg-background-light rounded-md shadow-md overflow-hidden">
              <Image 
                src="/2021/04/Zigeuners-in-Amsterdam-Fl-JG-5-2-april-20215.jpg"
                alt="Zigeuners in Amsterdam 1989/2021 - Frank Lodeizen/Jaap Goedemoed (no.5)"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              
              {/* Overlay with caption on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end">
                <div className="p-4">
                  <h3 className="text-lg font-serif text-text-accent">Zigeuners in Amsterdam (no.5)</h3>
                  <p className="text-text-muted mt-1">1989/2021 - Frank Lodeizen/Jaap Goedemoed</p>
                  <p className="text-text-muted mt-1">Screen print with acrylic and Arabic gum coloring</p>
                  <p className="text-text-muted">40 x 56.5 cm</p>
                </div>
              </div>
            </div>
            
            <div className="group relative aspect-[40/56.5] bg-background-light rounded-md shadow-md overflow-hidden">
              <Image 
                src="/2021/04/Zigeuners-in-Amsterdam-Fl-JG-6a-2-april-20216.jpg"
                alt="Zigeuners in Amsterdam 1989/2021 - Frank Lodeizen/Jaap Goedemoed (no.6)"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              
              {/* Overlay with caption on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end">
                <div className="p-4">
                  <h3 className="text-lg font-serif text-text-accent">Zigeuners in Amsterdam (no.6)</h3>
                  <p className="text-text-muted mt-1">1989/2021 - Frank Lodeizen/Jaap Goedemoed</p>
                  <p className="text-text-muted mt-1">Screen print with acrylic and Arabic gum coloring</p>
                  <p className="text-text-muted">40 x 56.5 cm</p>
                </div>
              </div>
            </div>
            
            <div className="group relative aspect-[40/56.5] bg-background-light rounded-md shadow-md overflow-hidden">
              <Image 
                src="/2021/04/Zigeuners-in-Amsterdam-Fl-JG-7-2-april-20217.jpg"
                alt="Zigeuners in Amsterdam 1989/2021 - Frank Lodeizen/Jaap Goedemoed (no.7)"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              
              {/* Overlay with caption on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end">
                <div className="p-4">
                  <h3 className="text-lg font-serif text-text-accent">Zigeuners in Amsterdam (no.7)</h3>
                  <p className="text-text-muted mt-1">1989/2021 - Frank Lodeizen/Jaap Goedemoed</p>
                  <p className="text-text-muted mt-1">Screen print with acrylic and Arabic gum coloring</p>
                  <p className="text-text-muted">40 x 56.5 cm</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/info" className="btn">
              Return to Additional Information
            </Link>
          </div>
        </div>
      </div>
      
      {/* Technique Description */}
      <div className="py-16">
        <div className="container-narrow">
          <h2 className="text-3xl font-serif text-center mb-12 text-text-accent">The Batik Method Technique</h2>
          
          <div className="prose prose-invert mx-auto">
            <p>
              Frank Lodeizen developed a unique painting technique he called the "batik method," which Jaap Goedemoed later adopted and perfected in his own work. This technique involves a mixture of acrylic paint and arabic gum that creates unpredictable and textured results.
            </p>
            
            <p>
              In this process:
            </p>
            
            <ol>
              <li>The artist applies a mixture of acrylic paint and arabic gum to the surface.</li>
              <li>After drying, when the gum has crystallized, the mixture is rinsed with water.</li>
              <li>This washing process removes some of the gum, taking with it both undissolved and dissolved paint.</li>
              <li>The result is a textured, unpredictable pattern that counterbalances the predictability of regular patterns and excessive precision.</li>
            </ol>
            
            <p>
              When Jaap met Frank Lodeizen in 1994 during their joint visit to the Tuscan village of Montescudaio, Frank demonstrated this technique to Jaap. The unpredictable nature of the technique's final results creates a beautiful organic quality that provides a perfect counterpoint to Jaap's more structured geometric compositions.
            </p>
            
            <p>
              In the case of the "Gypsies in Amsterdam" series, Jaap applied this technique to Frank's original black and white screen prints, creating a unique colored interpretation that brought new life to these works. The result is a fascinating collaborative artwork spanning decades, combining Frank's original imagery with Jaap's coloring expertise.
            </p>
            
            <p>
              This series represents not only a tribute to Frank Lodeizen's artistic legacy but also a demonstration of how artistic techniques can evolve and transfer between artists, creating new expressions from established foundations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
