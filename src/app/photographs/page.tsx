import { photographs } from "@/lib/placeholder-data";
import PhotographCard from "@/components/PhotographCard";

export const metadata = {
  title: 'Photographs | Jaap Goedemoed',
  description: 'Browse the collection of photographs by artist Jaap Goedemoed.',
};

export default function PhotographsPage() {
  return (
    <div className="min-h-screen">
      {/* Full-width header area */}
      <div className="bg-background py-20 relative overflow-hidden">
        {/* Optional: Abstract decorative element */}
        <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/2019/01/Rusiesch-txt1-1.jpg')] bg-no-repeat bg-cover blur-xl"></div>
        </div>
        
        <div className="container-wide relative z-10">
          <h1 className="page-title text-center">Photographs</h1>
          <p className="text-text-muted text-center max-w-2xl mx-auto">
            Documentary and artistic photographs exploring urban environments and visual language.
          </p>
        </div>
      </div>
      
      {/* Photographs Gallery Grid - slightly wider than standard container */}
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {photographs.map((photograph) => (
            <PhotographCard key={photograph.id} photograph={photograph} />
          ))}
        </div>
        
        {/* Note: In a real implementation, pagination would be added here */}
        <div className="mt-16 text-center text-text-muted">
          <p>Showing {photographs.length} photographs</p>
        </div>
      </div>
    </div>
  );
}
