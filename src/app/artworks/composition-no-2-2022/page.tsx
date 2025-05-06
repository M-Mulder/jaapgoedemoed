import React from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: 'The Creation of Composition No. 2 (2022) | Jaap Goedemoed',
  description: 'Detailed process of creating the Composition No. 2 artwork by Jaap Goedemoed in 2022.',
};

export default function CompositionNo2Page() {
  return (
    <div className="min-h-screen">
      {/* Header section */}
      <div className="bg-background py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/2022/10/Composition-no.2-29-sept-2022-om-14-1-scaled.jpg')] bg-no-repeat bg-cover blur-xl"></div>
        </div>
        
        <div className="container-wide relative z-10">
          <h1 className="page-title text-center">The Creation of Composition No. 2</h1>
          <p className="text-text-muted text-center max-w-2xl mx-auto">
            The making of a pentagonal artwork with matches in 2022
          </p>
        </div>
      </div>
      
      {/* Introduction */}
      <div className="container-narrow py-12">
        <div className="prose prose-invert mx-auto">
          <p>
            As noted, on this website, 1994 was a crucial year regarding my contact with the artist Frank Lodeizen (FL): frequent meetings in person, the purchase of many FL artworks and in the summer Jaap Goedemoed (JG) and FL embarked on a holiday together in Montescudaio Tuscany. A comprehensive account will be written about this event in due course. JG would often take art lovers to FL&apos;s studio on Herengracht Amsterdam, which often resulted in purchases of FL&apos;s artworks. On one of these occasions in 1994, Irene Eichholz, married to Tom Swaab, one of JG&apos;s pub mates (between 1982 and 1996 JG and Tom Swaab would regularly visit café Welling), bought a piece of art (25 x 35 cm) by FL from 1993, composed of burnt matches, and fitted on cardboard in such a way that it produced a rhythmic pattern. From 1994 to 1996, Irene, Tom and JG would frequently visit artists&apos; open houses, galleries and Ger Lambregts&apos; &quot;ethnographic basement&quot; on Prinsengracht Amsterdam, which was close to Runstraat where many African &apos;runners&apos; brought their cases full of ethnographic artefacts. It would be the final stop of their city-run from Paris to Brussels and Amsterdam, and if posh ethnographic retail outlets, which they had previously visited, had spurned the content of their cases.
          </p>
          
          <div className="relative aspect-square my-8 shadow-lg">
            <Image 
              src="/2022/10/FL-werk-1992-zonder-glas-21-okt-2022-2048x849.jpg"
              alt="1993 Frank Lodeizen – 25 x 35 cm"
              fill
              className="object-cover rounded-md"
              sizes="(max-width: 768px) 100vw, 800px"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-center max-w-md p-4 bg-black/60 rounded">
                1993 Frank Lodeizen – Artwork featuring burnt matches, 25 x 35 cm
              </p>
            </div>
          </div>
          
          <p>
            Irene was a very special person, she was a Germanist with a wonderful flair for art and languages. She worked in Gallery d&apos;Eendt in Amsterdam for many years and she translated poems by the Austrian experimental Ernst Jandl. Irene wrote an essay about it (in Wenen, De Sfinx – 1996, Oog in &apos;t Zeil, Stedenreeks 4, publisher Bas Lubberhuizen).
            Irene died on 21 August 2020 and in a very special way, I received FL&apos;s artwork from her estate through Tom Swaab, who very generously offered it to me in March 2022, almost 28 years after I had witnessed the purchase.
          </p>
          
          <p>
            I&apos;m afraid this was a rather lengthy pre-amble before arriving at &apos;matches&apos;, the building materials at the core of this essay. Jaap must have had this particular FL piece of art on his mind when in March 2022 a new pentagonal piece of art announced itself. After two artworks based on porcupine quills, there was a stronger urge to produce more &apos;structured&apos;, less playful artwork and Jaap was less inclined to fill pentagonal boxes compared to his previous two pieces of art. Although decisions and choices are never entirely rational or clear cut, we may assume that &apos;FL&apos;s matches&apos; contributed to the consistent use of matches to fill pentagonal boxes. In this case, they were &apos;fireplace matches&apos;, a slightly larger version of ordinary matches which suited the intended larger 100 x 100 cm format of the artwork. It would help the intended artwork fit into the series of three-dimensional line artworks, which were previously described as pieces of art in complete contrast to Jasper Johns&apos; linear works.
          </p>
        </div>
      </div>
      
      {/* Process - Initial Construction */}
      <div className="bg-background-light py-16">
        <div className="container-narrow">
          <h2 className="text-3xl font-serif text-center mb-12 text-text-accent">The Construction Process</h2>
          
          <div className="prose prose-invert mx-auto">
            <p>
              On 18 March 2022, the first little dividing walls (1 cm thick) of balsa wood were fitted on the pentagonal pattern. These little partitions were at their highest, i.e. 5 cm, in the centre of the work, gradually decreasing towards the periphery. The next three images show the creation of the pentagonal box design, which took more than 40 days of work.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
              <div className="relative aspect-square shadow-lg">
                <Image 
                  src="/2022/10/Nieuw-werk-in-wording-in-atelier-5-april-2022-1-2048x1476.jpg"
                  alt="Early construction with pentagonal pattern"
                  fill
                  className="object-cover rounded-md"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-center max-w-md p-4 bg-black/60 rounded">
                    Early construction stage showing the pentagonal pattern with balsa wood dividers.
                  </p>
                </div>
              </div>
              <div className="relative aspect-square shadow-lg">
                <Image 
                  src="/2022/10/The-studio-28-October-2022-at-early-evening-1-2048x1463.jpg"
                  alt="Pentagonal boxes painted white"
                  fill
                  className="object-cover rounded-md"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-center max-w-md p-4 bg-black/60 rounded">
                    The work in progress on 5th of May 2022, with all units and pentagonal walls painted in titanium white.
                  </p>
                </div>
              </div>
            </div>
            
            <p>
              The following stage was probably even more labour-intensive. The fireplace matches were used to make little &apos;duckboards&apos;. The principle was simple: small supports of balsa wood in each corner and then slats made from the smaller matches placed along the partitioning walls to support broader fireplace matches.
            </p>
            
            <div className="relative aspect-video my-8 shadow-lg">
              <Image 
                src="/2022/10/Nieuw-werk-in-wording-in-atelier-23-juli-2022-2048x2048.jpg"
                alt="All boxes filled with match duckboards"
                fill
                className="object-cover rounded-md"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-center max-w-md p-4 bg-black/60 rounded">
                  On 23rd of July all the boxes were filled with tiny duckboards made of matches.
                </p>
              </div>
            </div>
            
            <p>
              There are several variables: the height of the corners (which determine the height and the gradient of the little duckboards) and the direction of the fireplace matches. The aim was to alternate the direction of the fireplace matches in a particular box compared to the surrounding boxes. The duckboards in the boxes were made to size, then removed and painted white and subsequently replaced. Progress is shown in the images above.
            </p>
            
            <p>
              As said before, making the little wooden duckboards was the most labour-intensive part of the creation of this piece of art. It was not until 23 July that there were duckboards in all the boxes. There is no reason why this stage could not be considered a completed piece of art such as an intriguing follow-up of Jan van Schoonhoven&apos;s (senior) white artworks. He was a well-known Dutch artist and a member of the Zero Group who most likely had not heard of pentagonal tessellations. However, in keeping with the two porcupine quill artworks, artist JG wanted to add something extra, some colour and some additional design.
            </p>
          </div>
        </div>
      </div>
      
      {/* Process - Color Design */}
      <div className="py-16">
        <div className="container-narrow">
          <h2 className="text-3xl font-serif text-center mb-12 text-text-accent">Adding Color and Final Design</h2>
          
          <div className="prose prose-invert mx-auto">
            <p>
              Images of the work so far were printed in grey tones followed by colour and pattern experiments on paper to determine what would be the best continuation. My idea was to 1) emphasise the regularity of the pattern with some solidly coloured lines, and 2) to add some complexity to the whole by drawing thin lines within the boxes in very light colours. An example of this kind of colour and line experiment on paper is shown below.
            </p>
            
            <div className="relative aspect-square my-8 shadow-lg">
              <Image 
                src="/2022/10/Nieuw-werk-ontwerp-op-papier-28-juli-2022-1320x1321.jpg"
                alt="Study on paper using a print in grey tones"
                fill
                className="object-cover rounded-md"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-center max-w-md p-4 bg-black/60 rounded">
                  A study on paper using a print in grey tones. The study uses 4 bright colours on the pentagonal grid, and lines and 8 light colours within the boxes. 28th of July 2022.
                </p>
              </div>
            </div>
            
            <p>
              The four bright colours on 4-cm slats placed on top of the pentagonal grid eventually became blue – yellow – orange – grey blue. The bright colour was achieved by covering the slats in gum arabic and then pouring some pure pigment over. The bright colour remains dull which is appropriate to the work. An image of this intermediate stage with the 4-cm slats placed loosely on the artwork is shown above.
            </p>
            
            <p>
              After having finished the coloured short slats they were laid aside and a start was made with the colouring in of the boxes. Small lines were drawn from the corners in such a way that the lines were as perpendicular as possible to the direction of the matchsticks. Eight light foundation colours were selected. This also adds to the complexity because it creates competition between the actual shadows (caused by the little duckboards deep down in the relevant boxes) and the light colours which also appear like a kind of shadow. After colouring in the pentagonal boxes, the brightly coloured 4-cm slats were fixed to the pentagonal grid which completed the artwork. All that was left was to create an unobtrusive box frame.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
              <div className="relative aspect-square shadow-lg">
                <Image 
                  src="/2022/10/The-work-was-finalised-on-18th-of-August-2022.-2048x2048.jpg"
                  alt="The finalized artwork"
                  fill
                  className="object-cover rounded-md"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-center max-w-md p-4 bg-black/60 rounded">
                    The work was finalised on 18th of August 2022. It required five months to create this complex artwork.
                  </p>
                </div>
              </div>
              <div className="relative aspect-square shadow-lg">
                <Image 
                  src="/2022/10/Nieuw-werk-in-atelier-2-13-augustus-2022-van-opzij-1536x2048.jpg"
                  alt="Sideview of the artwork"
                  fill
                  className="object-cover rounded-md"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-center max-w-md p-4 bg-black/60 rounded">
                    Sideview of the final work showing the depth and dimension of the pentagonal structure.
                  </p>
                </div>
              </div>
            </div>
            
            <p>
              Another image gives a side view of the artwork bringing out relief and random deeper boxes. At first sight the composition looks very regular, however, a closer look reveals some irregularities.
            </p>
          </div>
        </div>
      </div>
      
      {/* Spin-off Artwork */}
      <div className="bg-background-light py-16">
        <div className="container-narrow">
          <h2 className="text-3xl font-serif text-center mb-12 text-text-accent">A Spin-off Artwork</h2>
          
          <div className="prose prose-invert mx-auto">
            <p>
              Remnants of the larger matches used for the construction of the little duckboards in the boxes were also used for an artwork that differed slightly to Frank Lodeizen&apos;s &apos;burnt matches&apos; piece mentioned at the beginning. Frank Lodeizen used many matches for his hand-rolled cigarettes to which he might also add some cannabis. JG owns an FL piece of art in which these &apos;rollies&apos; are the main topic: in the vernacular their shaggy curls were often referred to as &apos;the widow&apos;s pubes&apos; because in advertisements strong tobacco was referred to as the &apos;widow&apos;s shag&apos; (and medium tobacco was advertised as the &apos;widow&apos;s daughter&apos;s shag&apos;). (See illustration of a Dutch packet of raw tobacco where &apos;shag&apos; means &apos;raw tobacco&apos;, and the &apos;widow&apos; was Van Nelle&apos;s wife who continued the business after his death.)
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
              <div className="relative aspect-square shadow-lg">
                <Image 
                  src="/2022/10/A-50-gram-packet-of-the-Van-Nelle.jpg"
                  alt="A 50 gram packet of the Van Nelle"
                  fill
                  className="object-cover rounded-md"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-center max-w-md p-4 bg-black/60 rounded">
                    Artwork from 1992 by Frank Lodeizen depicting the tobacco curls in Van Nelle&apos;s (hand-rolled) tobacco.
                  </p>
                </div>
              </div>
              <div className="relative aspect-square shadow-lg">
                <Image 
                  src="/2022/10/Nieuw-werk-lucifers-resten-JG-2022-30x40cm-1320x1720.jpg"
                  alt="JG spin-off artwork with matches"
                  fill
                  className="object-cover rounded-md"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-center max-w-md p-4 bg-black/60 rounded">
                    Final JG spin-off artwork 30 x 40 cm using the leftovers of both types of matches in the 100 x 100 cm artwork, including the red headed left-overs.
                  </p>
                </div>
              </div>
            </div>
            
            <p>
              JG's piece of art consisting of matches was given an atypical tessellation. The match structure with the red heads was so dense that there was some space left within the given framework. Consequently, some more matches were struck to provide black-headed matches. This red and black balance gave JG's artwork a very distinctive character and made it very different to FL's work with its burnt matches. Obviously, this smaller artwork was an unintentional spin-off of JG's larger pentagonal work.
            </p>
            
            <p>
              The larger pentagonal work with very light colours was quite a new step for JG and when it was finished an innovative idea emerged for a new transparent large 3D pentagonal artwork. It is now in preparation. One thing is certain: JG currently is the sole artist to make such kind of artwork! It is great to be able to work in your own niche without being afraid that other artists will appropriate your ideas. Besides, the works are too labour-intensive to be copied just like that.
            </p>
            
            <p className="text-right italic">
              Translated from dutch by Rosemary Mitchell-Schuitevoerder.
            </p>
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/artworks" className="btn">
              Return to Gallery
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

