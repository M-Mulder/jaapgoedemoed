"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

interface FullscreenImageViewerProps {
  src: string;
  alt: string;
}

const FullscreenImageViewer: React.FC<FullscreenImageViewerProps> = ({ src, alt }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  // Close on escape key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsFullscreen(false);
      }
    };
    
    if (isFullscreen) {
      window.addEventListener('keydown', handleEsc);
    }
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isFullscreen]);
  
  // Prevent scroll when fullscreen is active
  useEffect(() => {
    if (isFullscreen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isFullscreen]);
  
  return (
    <>
      {/* Clickable Image with hover effect */}
      <div className="relative w-full h-full cursor-zoom-in group">
        {/* Transparent overlay to capture clicks */}
        <div 
          className="absolute inset-0 z-10" 
          onClick={() => setIsFullscreen(true)}
          aria-label={`Click to view ${alt} fullscreen`}
        />
        
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain"
          priority
          sizes="(max-width: 768px) 100vw, 80vw"
        />
        
        {/* Zoom indicator that appears on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-black/50 backdrop-blur-sm rounded-full p-3 transform transition-transform group-hover:scale-110 duration-300">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 text-white" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m4-3H6" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Fullscreen Overlay */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div 
            className="fixed inset-0 z-50 bg-black flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close button */}
            <button 
              className="absolute top-6 right-6 z-50 text-white hover:text-[#d4af37] p-3 bg-black/30 backdrop-blur-sm rounded-full transition-colors"
              onClick={() => setIsFullscreen(false)}
              aria-label="Close fullscreen view"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Zoom control */}
            <motion.div
              className="absolute bottom-6 right-6 flex space-x-3 items-center bg-black/50 backdrop-blur-sm rounded-full p-2 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <button
                className="p-2 hover:text-[#d4af37] transition-colors"
                onClick={() => {
                  // The user clicked the image to view it full-size
                  // This is a placeholder for zoom functionality if needed later
                }}
                aria-label="Zoom info"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
              <div className="text-xs text-white/80">
                Click anywhere to close
              </div>
            </motion.div>
            
            {/* Fullscreen Image */}
            <motion.div 
              className="w-full h-full flex items-center justify-center p-8 md:p-16"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => {
                // Close when clicking background, not the image
                if (e.target === e.currentTarget) {
                  setIsFullscreen(false);
                }
              }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-contain cursor-zoom-out"
                  quality={90}
                  onClick={() => setIsFullscreen(false)}
                  sizes="100vw"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FullscreenImageViewer;
