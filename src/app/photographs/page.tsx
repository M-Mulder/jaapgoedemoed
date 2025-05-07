import React from "react";

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
      
      {/* Work in Progress Content */}
      <div className="container-narrow py-24 flex flex-col items-center justify-center">
        <div className="bg-yellow-600 text-white p-8 rounded-lg max-w-2xl mx-auto shadow-lg">
          <div className="flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <h2 className="text-2xl font-bold">Work in Progress</h2>
          </div>
          
          <p className="text-lg mb-4 text-center">
            This section of the website is currently under development.
          </p>
          
          <p className="text-center">
            We're working on organizing and presenting Jaap Goedemoed's photography collection. 
            Please check back soon to explore this upcoming section.
          </p>
        </div>
      </div>
    </div>
  );
}
