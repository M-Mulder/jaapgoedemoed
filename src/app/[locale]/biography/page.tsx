import Image from 'next/image';
import { getLocaleData, type Locale } from "@/lib/localeData";
import { generateLocalizedMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const biography = getLocaleData(locale).biography;

  return generateLocalizedMetadata({
    locale,
    path: '/biography',
    title: `${biography.title} | Jaap Goedemoed`,
    description: biography.intro,
  });
}

export default async function BiographyPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const biography = getLocaleData(locale).biography;
  return (
    <div className="container-narrow py-12 md:py-20 bg-[#0f0f0f]">
      <h1 className="page-title">{biography.title}</h1>
      
      {/* Intro Section */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
          <p className="text-xl text-[#e6e6e6] mb-6">
            {biography.intro}
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
        <h2 className="section-title">{biography.sectionTitles.earlyLife}</h2>
        <div className="prose prose-lg text-[#e6e6e6]">
          <p>{biography.sections.earlyLife}</p>
        </div>
      </section>
      
      {/* Artistic Development Section */}
      <section className="mb-16">
        <h2 className="section-title">{biography.sectionTitles.artisticDevelopment}</h2>
        <div className="prose prose-lg text-[#e6e6e6]">
          <p>{biography.sections.artisticDevelopment}</p>
        </div>
      </section>
      
      {/* Career Highlights Section */}
      <section className="mb-16">
        <h2 className="section-title">{biography.sectionTitles.careerHighlights}</h2>
        <div className="prose prose-lg text-[#e6e6e6]">
          <p>{biography.sections.careerHighlights}</p>
        </div>
      </section>
      
      {/* Current Practice Section */}
      <section className="mb-16">
        <h2 className="section-title">{biography.sectionTitles.currentPractice}</h2>
        <div className="prose prose-lg text-[#e6e6e6]">
          <p>{biography.sections.currentPractice}</p>
        </div>
      </section>
      
      {/* Timeline Visual Element */}
      <section className="my-20">
        <div className="bg-[#1a1a1a] p-8 md:p-12 rounded-lg">
          <h2 className="text-2xl text-[#f0f0f0] mb-6" style={{fontFamily: "var(--font-playfair), Georgia, serif"}}>{biography.timelineTitle}</h2>
          <div className="space-y-6">
            {biography.timeline.map((item) => (
              <div key={item.year} className="flex">
                <div className="w-24 flex-shrink-0 text-[#d4af37] font-medium">{item.year}</div>
                <div className="flex-grow text-[#a3a3a3]">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Publications Section */}
      <section className="mb-16">
        <h2 className="section-title">{biography.publicationsTitle}</h2>
        <div className="prose prose-lg text-[#e6e6e6]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {biography.publications.map((publication) => (
              <div key={publication.year}>
                <p className="font-semibold">{publication.year}</p>
                <p>{publication.title}</p>
                <p className="text-sm italic">{publication.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
