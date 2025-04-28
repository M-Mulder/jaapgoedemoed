import Image from 'next/image';
import { exhibitions, atelierInfo } from "@/lib/placeholder-data";

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
      {/* Past Exhibitions Section */}
      <section className="mb-20">
        <h1 className="page-title">Past Exhibitions</h1>
        
        <div className="space-y-12">
          {sortedExhibitions.map((exhibition) => (
            <article 
              key={exhibition.id} 
              className="pb-12 border-b border-[#333333] last:border-0"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
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
      <section>
        <h2 className="text-3xl font-medium text-[#f0f0f0] mb-8" style={{fontFamily: "var(--font-playfair), Georgia, serif"}}>
          {atelierInfo.title}
        </h2>
        
        <div className="prose prose-lg text-[#e6e6e6] mb-8">
          <p>{atelierInfo.description}</p>
        </div>
        
        <div className="prose prose-lg text-[#e6e6e6] mb-12">
          <p>{atelierInfo.visitInfo}</p>
        </div>
        
        {/* Atelier Images Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {atelierInfo.images.map((image) => (
            <div key={image.id} className="group">
              <div className="aspect-square relative overflow-hidden border border-[#333] rounded-md">
                <Image
                  src={image.src}
                  alt={image.caption}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <p className="mt-2 text-sm text-[#a3a3a3]">{image.caption}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
