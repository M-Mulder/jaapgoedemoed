import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { photographs } from '@/lib/placeholder-data';

export async function generateMetadata(props: any) {
  const { params } = props;
  const photograph = photographs.find(photo => photo.slug === params.slug);
  
  if (!photograph) {
    return {
      title: 'Photograph Not Found',
    };
  }
  
  return {
    title: `${photograph.title} | Jaap Goedemoed`,
    description: photograph.description,
  };
}

export default function PhotographPage(props: any) {
  const { params } = props;
  const photograph = photographs.find(photo => photo.slug === params.slug);
  
  if (!photograph) {
    notFound();
  }
  
  return (
    <main className="flex-grow pt-20 pb-20"> {/* Add space for navbar and footer */}
      <div className="min-h-[calc(100vh-240px)] w-full relative bg-black flex items-center justify-center">
        {/* Photograph view taking main content area but not overlapping */}
        <div className="absolute inset-0 z-0">
          <Image
            src={photograph.imagePath}
            alt={photograph.title}
            fill
            className="object-contain"
            priority
            sizes="100vw"
          />
        </div>
        
        {/* Navigation overlay at top - positioned relative to container */}
        <div className="absolute top-0 left-0 right-0 z-10 py-4 px-6 flex justify-between items-center bg-gradient-to-b from-background to-transparent">
          <Link 
            href="/photographs" 
            className="text-text hover:text-accent transition-colors flex items-center"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 mr-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Photographs
          </Link>
          
          {/* Photograph navigation if you want to implement previous/next */}
          <div className="hidden md:flex space-x-4">
            {photographs.indexOf(photograph) > 0 && (
              <Link 
                href={`/photographs/${photographs[photographs.indexOf(photograph) - 1].slug}`}
                className="text-text hover:text-accent transition-colors"
              >
                Previous
              </Link>
            )}
            {photographs.indexOf(photograph) < photographs.length - 1 && (
              <Link 
                href={`/photographs/${photographs[photographs.indexOf(photograph) + 1].slug}`}
                className="text-text hover:text-accent transition-colors"
              >
                Next
              </Link>
            )}
          </div>
        </div>
        
        {/* Photograph information overlay at bottom - positioned relative to container */}
        <div className="absolute bottom-0 left-0 right-0 z-10 p-6 bg-gradient-to-t from-background to-transparent">
          <div className="container-wide">
            <h1 className="text-2xl md:text-3xl font-serif text-text-accent">{photograph.title}</h1>
            <p className="text-text-muted mt-1">{photograph.year} | {photograph.location}</p>
            <p className="text-text mt-3 max-w-2xl">{photograph.description}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
