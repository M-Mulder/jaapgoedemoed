import Image from 'next/image';
import LocalizedLink from '@/components/LocalizedLink';
import { getLocaleData, type Locale } from "@/lib/localeData";
import { generateLocalizedMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const infoContent = getLocaleData(locale).info;

  return generateLocalizedMetadata({
    locale,
    path: '/info',
    title: `${infoContent.title} | Jaap Goedemoed`,
    description: infoContent.artistStatementText.substring(0, 160),
  });
}

export default async function InfoPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const infoContent = getLocaleData(locale).info;
  return (
    <div className="container-narrow py-12 md:py-20 bg-[#0f0f0f]">
      <h1 className="page-title">{infoContent.title}</h1>
      
      {/* Artist Statement Section */}
      <section className="mb-16">
        <h2 className="section-title">{infoContent.artistStatement}</h2>
        <div className="prose prose-lg text-[#e6e6e6]">
          <p>{infoContent.artistStatementText}</p>
        </div>
      </section>
      
      {/* Artistic Process Section */}
      <section className="mb-16">
        <h2 className="section-title">{infoContent.artisticProcess}</h2>
        <div className="prose prose-lg text-[#e6e6e6]">
          <p>{infoContent.artisticProcessText}</p>
        </div>
      </section>
      
      {/* Ethnographic Influence Section */}
      <section className="mb-16">
        <h2 className="section-title">{infoContent.ethnographicInfluence}</h2>
        <div className="prose prose-lg text-[#e6e6e6]">
          <p>{infoContent.ethnographicInfluenceText}</p>
        </div>
      </section>
      
      {/* Additional Articles Section */}
      <section className="mb-16">
        <h2 className="section-title">{infoContent.articlesAndDocuments}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Taxation by Jan Pieter Glerum Card */}
          <LocalizedLink href="/info/taxation-glerum-1991" className="group">
            <div className="bg-[#1a1a1a] rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-black/20">
              <div className="aspect-[4/3] relative">
                <Image 
                  src="/2019/01/Taxatie-Pieter-Glerum-1991.jpg"
                  alt="Taxation document by Jan Pieter Glerum"
                  fill
                  className="object-cover brightness-90 group-hover:brightness-100 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl text-white font-medium">Taxation by Jan Pieter Glerum (1991)</h3>
                  <p className="text-white/70 text-sm mt-1">Historical valuation of artworks at OvaBloc Europe B.V.</p>
                </div>
              </div>
            </div>
          </LocalizedLink>
          
          {/* Serious Art Piece Card */}
          <LocalizedLink href="/info/serious-art-piece" className="group">
            <div className="bg-[#1a1a1a] rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-black/20">
              <div className="aspect-[4/3] relative">
                <Image 
                  src="/2019/01/The-artist-painting-the-artwork-Egyptian-scene-with-depth-19852.jpg"
                  alt="A Serious Piece of Art"
                  fill
                  className="object-cover brightness-90 group-hover:brightness-100 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl text-white font-medium">A Serious Piece of Art</h3>
                  <p className="text-white/70 text-sm mt-1">The story behind a significant artwork purchase</p>
                </div>
              </div>
            </div>
          </LocalizedLink>
          
          {/* Interview 2015 Card */}
          <LocalizedLink href="/info/interview-2015" className="group">
            <div className="bg-[#1a1a1a] rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-black/20">
              <div className="aspect-[4/3] relative">
                <Image 
                  src="/2021/04/The-new-atelier-9-21-February-2021-2048x1365.jpg"
                  alt="Interview with Jaap Goedemoed"
                  fill
                  className="object-cover brightness-90 group-hover:brightness-100 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl text-white font-medium">Interview (2015)</h3>
                  <p className="text-white/70 text-sm mt-1">In-depth conversation about artistic process and influences</p>
                </div>
              </div>
            </div>
          </LocalizedLink>
          
          {/* Gypsies in Amsterdam Card */}
          <LocalizedLink href="/info/gypsies-amsterdam" className="group">
            <div className="bg-[#1a1a1a] rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-black/20">
              <div className="aspect-[4/3] relative">
                <Image 
                  src="/2020/05/6-Composition-2017-Final-state-003-1320x1320.jpg"
                  alt="Gypsies in Amsterdam"
                  fill
                  className="object-cover brightness-90 group-hover:brightness-100 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl text-white font-medium">Gypsies in Amsterdam</h3>
                  <p className="text-white/70 text-sm mt-1">Cultural exploration and artistic interpretation</p>
                </div>
              </div>
            </div>
          </LocalizedLink>
        </div>
      </section>
      
      {/* Studio Environment - Visual Element */}
      <section className="my-20">
        <div className="bg-[#1a1a1a] p-8 md:p-12 rounded-lg">
          <h2 className="text-2xl text-[#f0f0f0] mb-6" style={{fontFamily: "var(--font-playfair), Georgia, serif"}}>{infoContent.studioEnvironment}</h2>
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
            {infoContent.studioEnvironmentText}
          </p>
        </div>
      </section>
    </div>
  );
}
