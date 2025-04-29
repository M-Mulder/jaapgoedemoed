import Image from 'next/image';
import { exhibitions, atelierInfo } from "@/lib/placeholder-data";
import Link from 'next/link';

export const metadata = {
  title: 'Exhibitions & Atelier | Jaap Goedemoed',
  description: 'View past exhibitions by artist Jaap Goedemoed and information about his atelier.',
};

// Helper function to format date
const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

export default function ExhibitionsPage() {
  // Sort exhibitions by start date, most recent first
  const sortedExhibitions = [...exhibitions].sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  );

  return (
    <div className="container-narrow py-12 md:py-20 bg-[#0f0f0f]">
      {/* Hero Section */}
      <section className="relative h-[40vh] mb-16 overflow-hidden rounded-md">
        <Image 
          src="/2019/01/Oct-Apr-2017-Exhibition-at-Slotervaart-Medical-Center-Louwesweg-6-Amsterdam.jpg"
          alt="Exhibition at Slotervaart Medical Center"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-8 w-full">
          <h1 className="page-title mb-2">Exhibitions</h1>
          <p className="text-white/80 max-w-xl">
            A chronological overview of exhibitions of Jaap Goedemoed's work from 1997 to the present
          </p>
        </div>
      </section>

      {/* Past Exhibitions Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-medium text-[#f0f0f0] mb-8" style={{fontFamily: "var(--font-playfair), Georgia, serif"}}>
          Past Exhibitions
        </h2>
        
        <div className="space-y-16">
          {sortedExhibitions.map((exhibition) => (
            <article 
              key={exhibition.id} 
              className="pb-16 border-b border-[#333333] last:border-0"
            >
              {/* Exhibition image */}
              <div className="mb-8 aspect-[16/9] relative overflow-hidden rounded-md">
                <Image
                  src={exhibition.id === '1' ? '/2019/03/ExhibitionJaapG-1320x880.jpg' : 
                       exhibition.id === '2' ? '/2019/01/Oct-Apr-2017-Exhibition-at-Slotervaart-Medical-Center-Louwesweg-6-Amsterdam.jpg' :
                       exhibition.id === '3' ? '/2019/01/BaudZuid-expo-6.jpg' :
                       exhibition.id === '4' ? '/2019/01/Apr-May-2008-Exhibition-in-Galerie-Ruimte-Amsterdam..jpg' :
                       exhibition.id === '5' ? '/2019/01/2001-Exhibition-at-RIVM-1024x636.jpg' :
                       exhibition.id === '6' ? '/2019/01/Oct-Nov-1997-Exibition-in-Montague-gallery-New-York-1.jpg' :
                       '/2019/03/ExhibitionJaapG1-1320x880.jpg'}
                  alt={`${exhibition.title} at ${exhibition.venue}`}
                  fill
                  className="object-cover transition-all duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>
              
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
                <div className="md:w-1/3">
                  <p className="text-[#d4af37] font-medium text-lg">
                    {formatDate(exhibition.startDate)} — {formatDate(exhibition.endDate)}
                  </p>
                  <span className="inline-block mt-2 px-3 py-1 text-sm bg-[#252525] text-[#a3a3a3] rounded">
                    {exhibition.type === 'solo' ? 'Solo Exhibition' : 'Group Exhibition'}
                  </span>
                </div>
                
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-medium text-[#f0f0f0] mb-2" style={{fontFamily: "var(--font-playfair), Georgia, serif"}}>
                    {exhibition.title}
                  </h2>
                  <h3 className="text-lg text-[#e6e6e6] mb-4">
                    {exhibition.venue}, {exhibition.location}
                  </h3>
                  <p className="text-[#a3a3a3]">
                    {exhibition.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Atelier Section */}
      <section className="pt-8 px-8 md:px-12 bg-[#121212] rounded-xl">
        <div className="mb-12">
          <h2 className="text-3xl font-medium text-[#f0f0f0] mb-6" style={{fontFamily: "var(--font-playfair), Georgia, serif"}}>
            {atelierInfo.title}
          </h2>
          
          <div className="prose prose-lg text-[#e6e6e6] mb-8">
            <p>{atelierInfo.description}</p>
          </div>
          
          <div className="prose prose-lg text-[#e6e6e6] mb-6">
            <p>{atelierInfo.visitInfo}</p>
          </div>

          <div className="flex justify-end">
            <Link 
              href="/contact" 
              className="inline-flex items-center px-5 py-2.5 bg-[#d4af37] hover:bg-[#c19b28] text-black font-medium rounded-md transition-colors"
            >
              Request a Visit
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="ml-2"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
        
        {/* Atelier Images Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">
          {atelierInfo.images.map((image, index) => (
            <div key={image.id} className={`group ${index === 0 || index === 3 || index === 6 ? 'lg:col-span-2' : ''}`}>
              <div className={`${index === 0 || index === 3 || index === 6 ? 'aspect-[16/9]' : 'aspect-square'} relative overflow-hidden rounded-md shadow-lg`}>
                <Image
                  src={image.src}
                  alt={image.caption}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes={index === 0 || index === 3 || index === 6 ? 
                    "(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 66vw" : 
                    "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  }
                />
                
                {/* Hover overlay with caption */}
                <div className="absolute inset-0 bg-black/60 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="p-4 text-white">{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
