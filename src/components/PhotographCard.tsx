import Image from 'next/image';
import Link from 'next/link';
import { Photograph } from '@/lib/placeholder-data';

interface PhotographCardProps {
  photograph: Photograph;
}

const PhotographCard = ({ photograph }: PhotographCardProps) => {
  return (
    <Link 
      href={`/photographs/${photograph.slug}`}
      className="block group relative aspect-square overflow-hidden bg-background-light"
    >
      {/* Full photograph image that fills the square */}
      <Image 
        src={photograph.imagePath}
        alt={photograph.title}
        fill
        className="object-cover transition-all duration-500 group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      
      {/* Gradient overlay that appears on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Photograph information that slides up on hover */}
      <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-xl font-serif text-text-accent">{photograph.title}</h3>
        <p className="text-text-muted mt-1">{photograph.year}, {photograph.location}</p>
      </div>
    </Link>
  );
};

export default PhotographCard;
