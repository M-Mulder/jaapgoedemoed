import Image from 'next/image';
import { biographyContent } from "@/lib/placeholder-data";

export const metadata = {
  title: 'Biography | Jaap Goedemoed',
  description: 'Learn about the life and career of artist Jaap Goedemoed.',
};

export default function BiographyPage() {
  return (
    <div className="container-narrow py-12 md:py-20 bg-[#0f0f0f]">
      <h1 className="page-title">Biography</h1>
      
      {/* Intro Section */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <p className="text-xl text-[#e6e6e6] mb-6">
              {biographyContent.intro}
            </p>
          </div>
          
          <div className="md:col-span-1">
            {/* Artist portrait */}
            <div className="aspect-[3/4] rounded-lg overflow-hidden relative">
              <Image 
                src="/2018/12/The-artist-in-front-of-some-of-his-artworks-and-ethnographic-items-from-New-Guinea-in-his-home-in-Amsterdam-2015.jpg"
                alt="Jaap Goedemoed in his home in Amsterdam, 2015"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Early Life Section */}
      <section className="mb-16">
        <h2 className="section-title">Early Life</h2>
        <div className="prose prose-lg text-[#e6e6e6]">
          <p>{biographyContent.earlyLife}</p>
        </div>
      </section>
      
      {/* Artistic Development Section */}
      <section className="mb-16">
        <h2 className="section-title">Artistic Development</h2>
        <div className="prose prose-lg text-[#e6e6e6]">
          <p>{biographyContent.artisticDevelopment}</p>
        </div>
      </section>
      
      {/* Career Highlights Section */}
      <section className="mb-16">
        <h2 className="section-title">Career Highlights</h2>
        <div className="prose prose-lg text-[#e6e6e6]">
          <p>{biographyContent.careerHighlights}</p>
        </div>
      </section>
      
      {/* Current Practice Section */}
      <section className="mb-16">
        <h2 className="section-title">Current Practice</h2>
        <div className="prose prose-lg text-[#e6e6e6]">
          <p>{biographyContent.currentPractice}</p>
        </div>
      </section>
      
      {/* Timeline Visual Element */}
      <section className="my-20">
        <div className="bg-[#1a1a1a] p-8 md:p-12 rounded-lg">
          <h2 className="text-2xl text-[#f0f0f0] mb-6" style={{fontFamily: "var(--font-playfair), Georgia, serif"}}>Career Timeline</h2>
          <div className="space-y-6">
            {/* Timeline items */}
            <div className="flex">
              <div className="w-24 flex-shrink-0 text-[#d4af37] font-medium">1956</div>
              <div className="flex-grow text-[#a3a3a3]">Born in De Bilt, The Netherlands (January 27)</div>
            </div>
            <div className="flex">
              <div className="w-24 flex-shrink-0 text-[#d4af37] font-medium">1974-1982</div>
              <div className="flex-grow text-[#a3a3a3]">Pharmacy School at Groningen State University</div>
            </div>
            <div className="flex">
              <div className="w-24 flex-shrink-0 text-[#d4af37] font-medium">1984</div>
              <div className="flex-grow text-[#a3a3a3]">Full-time oil painting, detailed figurative works inspired by Egyptian culture</div>
            </div>
            <div className="flex">
              <div className="w-24 flex-shrink-0 text-[#d4af37] font-medium">1990</div>
              <div className="flex-grow text-[#a3a3a3]">Ph.D. graduation and shift to abstract art influenced by ethnographic art</div>
            </div>
            <div className="flex">
              <div className="w-24 flex-shrink-0 text-[#d4af37] font-medium">1997</div>
              <div className="flex-grow text-[#a3a3a3]">Exhibitions at Montague Art Gallery (New York) and Hommage Gallery (Amsterdam)</div>
            </div>
            <div className="flex">
              <div className="w-24 flex-shrink-0 text-[#d4af37] font-medium">2005-2010</div>
              <div className="flex-grow text-[#a3a3a3]">Member of RIVM Art Commission, organizing various exhibitions</div>
            </div>
            <div className="flex">
              <div className="w-24 flex-shrink-0 text-[#d4af37] font-medium">2007</div>
              <div className="flex-grow text-[#a3a3a3]">Solo exhibition at Galerie Ruimte, Amsterdam: Tramways d'Odessa</div>
            </div>
            <div className="flex">
              <div className="w-24 flex-shrink-0 text-[#d4af37] font-medium">2012-2022</div>
              <div className="flex-grow text-[#a3a3a3]">Pharmaceutical assessor at Medicines Evaluation Board of The Netherlands</div>
            </div>
            <div className="flex">
              <div className="w-24 flex-shrink-0 text-[#d4af37] font-medium">2019</div>
              <div className="flex-grow text-[#a3a3a3]">Exhibition at Italiaander Galleries, Amsterdam</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Publications Section */}
      <section className="mb-16">
        <h2 className="section-title">Art Publications</h2>
        <div className="prose prose-lg text-[#e6e6e6]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="font-semibold">2008</p>
              <p>Tramways d' Odessa, author Rineke van Houten, 24 pages</p>
              <p className="text-sm italic">For ordering send message to: jaapgoedemoed@gmail.com</p>
            </div>
            
            <div>
              <p className="font-semibold">2015</p>
              <p>'De etnografische invloed kwam via Paul Klee & Max Ernst',
              Interview, 16 pages</p>
              <p><a href="https://issuu.com/jaapgoedemoed" className="text-[#d4af37] hover:underline">View online</a></p>
            </div>
            
            <div>
              <p className="font-semibold">2018</p>
              <p>Artworks Jaap Goedemoed – Selection of works 1984 – 2018, 125 pages</p>
              <p className="text-sm italic">For ordering send message to: jaapgoedemoed@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
