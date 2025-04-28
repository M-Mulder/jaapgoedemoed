import Image from 'next/image';
import { artistStatement, processDescription, ethnographicInfluence } from "@/lib/placeholder-data";

export const metadata = {
  title: 'Info | Jaap Goedemoed',
  description: 'Information about artist Jaap Goedemoed, including artist statement, process, and influences.',
};

export default function InfoPage() {
  return (
    <div className="container-narrow py-12 md:py-20 bg-[#0f0f0f]">
      <h1 className="page-title">Additional Info</h1>
      
      {/* Artist Statement Section */}
      <section className="mb-16">
        <h2 className="section-title">Artist Statement</h2>
        <div className="prose prose-lg text-[#e6e6e6]">
          <p>{artistStatement}</p>
        </div>
      </section>
      
      {/* Artistic Process Section */}
      <section className="mb-16">
        <h2 className="section-title">Artistic Process</h2>
        <div className="prose prose-lg text-[#e6e6e6]">
          <p>{processDescription}</p>
        </div>
      </section>
      
      {/* Ethnographic Influence Section */}
      <section className="mb-16">
        <h2 className="section-title">Ethnographic Influence</h2>
        <div className="prose prose-lg text-[#e6e6e6]">
          <p>{ethnographicInfluence}</p>
        </div>
      </section>
      
      {/* Studio Environment - Visual Element */}
      <section className="my-20">
        <div className="bg-[#1a1a1a] p-8 md:p-12 rounded-lg">
          <h2 className="text-2xl text-[#f0f0f0] mb-6" style={{fontFamily: "var(--font-playfair), Georgia, serif"}}>Studio Environment</h2>
          <div className="aspect-video relative mb-6 overflow-hidden rounded-lg">
            <Image 
              src="/2019/01/The-artist-painting-the-artwork-Egyptian-scene-with-depth-19852.jpg"
              alt="Jaap Goedemoed in his studio"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <p className="text-[#a3a3a3]">
            Goedemoed maintains a studio in a converted industrial space in the northern district of Amsterdam. 
            The space is characterized by abundant natural light and an open floor plan that allows for 
            simultaneous work on multiple pieces and scales.
          </p>
        </div>
      </section>
    </div>
  );
}
