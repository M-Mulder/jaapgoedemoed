import React from "react";
import Image from "next/image";

export const metadata = {
  title: 'Reflections | Jaap Goedemoed',
  description: 'Personal reflections on ethnographic collections and artworks collected by Jaap Goedemoed.',
};

export default function ReflectionsPage() {
  return (
    <div className="min-h-screen">
      {/* Header section */}
      <div className="bg-background py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/2018/12/Tuscan-tiling-I-1994-165-x-165-cm.jpg')] bg-no-repeat bg-cover blur-xl"></div>
        </div>
        
        <div className="container-wide relative z-10">
          <h1 className="page-title text-center">Reflections</h1>
          <p className="text-text-muted text-center max-w-2xl mx-auto">
            Personal thoughts on ethnographic collections and collected artworks
          </p>
        </div>
      </div>
      
      {/* Content section */}
      <div className="container-narrow py-16">
        <div className="prose prose-invert mx-auto">
          <section className="mb-16">
            <h2>Reflections on My Ethnographic Collection</h2>
            
            <div className="relative aspect-video mb-8 mt-4">
              <Image 
                src="/2018/12/The-artist-in-front-of-some-of-his-artworks-and-ethnographic-items-from-New-Guinea-in-his-home-in-Amsterdam-2015.jpg"
                alt="Jaap Goedemoed with ethnographic collection"
                fill
                className="object-cover rounded-md"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
            
            <p>
              Throughout my career as an artist, I have been deeply influenced by global visual traditions, 
              particularly those that represent alternative approaches to depicting space, form, and cultural meaning. 
              My ethnographic collection, assembled over decades of travel and research, serves not only as a source of 
              personal enrichment but as a continuous wellspring of artistic inspiration.
            </p>
            
            <p>
              The collection focuses primarily on artifacts from New Guinea and other Oceanic cultures, 
              with additional significant pieces from West Africa and pre-Columbian America. I am particularly 
              drawn to objects that reveal sophisticated geometric patterning and spatial organization—elements 
              that have profoundly influenced my own artistic vocabulary.
            </p>
            
            <p>
              What fascinates me about these cultural artifacts is not merely their formal qualities, 
              but the way they embody worldviews and cosmologies fundamentally different from Western 
              artistic traditions. The integration of abstract pattern and representational elements, 
              the complex layering of meaning, and the inseparable relationship between form and function 
              have all informed my understanding of what art can be and do.
            </p>
            
            <p>
              I approach this collection with deep respect for its cultural origins and significance. 
              Rather than appropriating motifs or forms directly, I seek to engage in a cross-cultural 
              dialogue that acknowledges both difference and connection. My own work has been enriched 
              by this ongoing conversation with diverse artistic traditions, encouraging me to question 
              assumptions about representation, abstraction, and the cultural embeddedness of visual language.
            </p>
          </section>
          
          <section>
            <h2>Thoughts on Artworks Collected by JG</h2>
            
            <p>
              As an artist, my relationship with collecting the work of others has been a complementary 
              aspect of my creative life. My collection has evolved organically, guided not by investment 
              considerations or systematic approaches, but by personal resonance and artistic dialogue.
            </p>
            
            <p>
              I have been particularly drawn to works that explore similar conceptual territory to my own—pieces 
              that investigate geometric abstraction, architectural space, and the tension between order and intuition. 
              The collection includes works by several Dutch contemporaries, as well as prints and works on paper by 
              international artists whose approaches to form and composition have influenced my thinking.
            </p>
            
            <p>
              Of special significance is my collection of works by Frank Lodeizen, whose expressionistic approach 
              represents an intriguing counterpoint to my more structured compositions. The dynamic gesturality and 
              emotional immediacy of his work provides a valuable balance to my practice, reminding me of the importance 
              of spontaneity and direct emotional expression.
            </p>
            
            <p>
              Living with these works has created an ongoing conversation that continues to inform my creative process. 
              I find that even after years of familiarity, these pieces continue to reveal new aspects and relationships, 
              particularly as they interact with changing light conditions and my own evolving perception. This lived 
              experience of art as a daily presence has deeply influenced my understanding of how art functions in relation 
              to time, space, and the viewer's embodied experience.
            </p>
            
            <p>
              For me, collecting is not separate from artistic practice—it is another facet of the same impulse to 
              explore visual relationships and create meaningful constellations of form. The dialogue between my own 
              work and the works I live with continues to be a generative source of inspiration and critical reflection.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
