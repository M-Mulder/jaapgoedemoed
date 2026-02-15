import React from 'react';
import Image from 'next/image';
import { getLocaleData, type Locale } from "@/lib/localeData";
import { generateLocalizedMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const content = getLocaleData(locale).infoPages.seriousArtPiece;

  return generateLocalizedMetadata({
    locale,
    path: '/info/serious-art-piece',
    title: `${content.title} | Jaap Goedemoed`,
    description: content.description,
  });
}

const relatedArtworks = [
  { title: 'Reaching out to the Lord', year: 1980, medium: 'oil on board', dimensions: '80x80cm', imagePath: '/2021/04/Lnging-to-the-Lord-1980-oil-on-carton.jpg' },
  { title: 'The hungry bridegroom', year: 1980, medium: 'oil on board', dimensions: '80x80cm', imagePath: '/2021/04/The-hungry-bridegroom-1980-oil-painting-on-carton.jpg' },
  { title: 'Lucebert - Mother wins', year: 1984, medium: 'oil painting on canvas', dimensions: '72x82cm', imagePath: '/2021/04/Lucebert-1984-Mother-wins-oil-painting-on-canvas-72x82cm.jpg' },
  { title: 'Portrait of Lucebert Woodcut', year: 1957, medium: 'Woodcut', imagePath: '/2021/03/1957-Portrait-of-Lucebert-Woodcut.jpg' },
  { title: 'Portrait of Lucebert on paper', year: 1992, medium: 'Mixed media on paper', dimensions: '27x35cm', imagePath: '/2021/03/1992-Portrait-of-Lucebert-on-paper-27x35cm-.jpg' },
  { title: "Lucebert's funeral", year: 1994, medium: 'mixed media on paper', dimensions: '100x70cm', imagePath: '/2021/03/1994-Luceberts-funeral-mixed-media-on-paper-100x70cm.jpg' }
];

export default async function SeriousArtPiecePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const content = getLocaleData(locale).infoPages.seriousArtPiece;

  return (
    <div className="bg-[#0f0f0f] text-white">
      <section className="relative h-[40vh] mb-16 overflow-hidden">
        <Image src={relatedArtworks[2].imagePath} alt="Lucebert - Mother wins" fill className="object-cover object-center brightness-[0.7]" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90"></div>
        <div className="container mx-auto relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6">{content.title}</h1>
          <p className="text-white/80 md:text-lg max-w-2xl">{content.subtitle}</p>
          <div className="w-20 h-1 bg-[#d4af37] mt-8"></div>
        </div>
      </section>

      <div className="container-narrow mx-auto px-4 py-8 prose lg:prose-xl prose-invert max-w-4xl">
        <p>{content.intro1}</p>
        <p>{content.intro2}</p>
        <p>{content.intro3}</p>

        <div className="flex flex-wrap justify-center gap-6 my-8">
          <figure className="w-64 md:w-72 mb-4">
            <div className="border border-gray-300 rounded shadow-sm overflow-hidden mb-2">
              <Image src={relatedArtworks[0].imagePath} alt={relatedArtworks[0].title} width={300} height={300} className="mx-auto" />
            </div>
            <figcaption className="text-center text-sm">{content.artworkCaption1}</figcaption>
          </figure>
          <figure className="w-64 md:w-72 mb-4">
            <div className="border border-gray-300 rounded shadow-sm overflow-hidden mb-2">
              <Image src={relatedArtworks[1].imagePath} alt={relatedArtworks[1].title} width={300} height={300} className="mx-auto" />
            </div>
            <figcaption className="text-center text-sm">{content.artworkCaption2}</figcaption>
          </figure>
        </div>

        <p>{content.para1}</p>
        <p>{content.para2}</p>
        <p>{content.para3}</p>
        <p>{content.para4}</p>
        <p>{content.para5}</p>
        <p>{content.para6}</p>
        <p>{content.para7}</p>

        <figure className="float-right ml-6 mb-6 w-64 md:w-72">
          <div className="border border-gray-300 rounded shadow-sm overflow-hidden mb-2">
            <Image src={relatedArtworks[2].imagePath} alt={relatedArtworks[2].title} width={350} height={400} className="mx-auto" />
          </div>
          <figcaption className="text-center text-sm">{content.motherWinsCaption}</figcaption>
        </figure>

        <p>{content.para8}</p>
        <p>{content.para9}</p>
        <p>{content.para10}</p>

        <div className="my-12 flex flex-col md:flex-row gap-8 justify-center items-start">
          <figure className="w-full md:w-1/2">
            <div className="relative w-full h-72 overflow-hidden rounded-lg shadow-md">
              <Image src="/Website Assets/Hero Images/Living room Jaap in 1996.jpg" alt={content.livingRoomCaption1} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <figcaption className="text-center text-sm mt-2 text-text-muted">{content.livingRoomCaption1}</figcaption>
          </figure>
          <figure className="w-full md:w-1/2">
            <div className="relative w-full h-72 overflow-hidden rounded-lg shadow-md">
              <Image src="/Website Assets/Hero Images/woonkamer 10 juli 2020 IMG_6089.jpg" alt={content.livingRoomCaption2} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <figcaption className="text-center text-sm mt-2 text-text-muted">{content.livingRoomCaption2}</figcaption>
          </figure>
        </div>

        <p>{content.para11}</p>
        <p>{content.para12}</p>

        <div className="flex flex-wrap justify-center gap-6 my-8">
          <figure className="w-56 md:w-64 mb-4">
            <div className="border border-gray-300 rounded shadow-sm overflow-hidden mb-2">
              <Image src={relatedArtworks[3].imagePath} alt={relatedArtworks[3].title} width={250} height={320} className="mx-auto" />
            </div>
            <figcaption className="text-center text-sm">{content.lucebertWoodcutCaption}</figcaption>
          </figure>
          <figure className="w-56 md:w-64 mb-4">
            <div className="border border-gray-300 rounded shadow-sm overflow-hidden mb-2">
              <Image src={relatedArtworks[4].imagePath} alt={relatedArtworks[4].title} width={250} height={320} className="mx-auto" />
            </div>
            <figcaption className="text-center text-sm">{content.lucebertPaperCaption}</figcaption>
          </figure>
        </div>

        <p>{content.para13}</p>
        <p>{content.para14}</p>
        <p>{content.para15}</p>

        <figure className="my-8 max-w-lg mx-auto">
          <div className="border border-gray-300 rounded shadow-sm overflow-hidden mb-2">
            <Image src={relatedArtworks[5].imagePath} alt={relatedArtworks[5].title} width={500} height={350} className="mx-auto" />
          </div>
          <figcaption className="text-center text-sm">{content.lucebertFuneralCaption}</figcaption>
        </figure>

        <p>{content.para16}</p>

        <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">
          {content.poem.split('\n').map((line, i) => (
            <React.Fragment key={i}>{line}<br /></React.Fragment>
          ))}
        </blockquote>

        <p>{content.para17}</p>
        <p>{content.para18}</p>
        <p>{content.para19}</p>
      </div>
    </div>
  );
}
