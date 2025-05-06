'use client';

import { useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AccordionCategoryProps {
  title: string;
  count: number;
  children: ReactNode;
  defaultOpen?: boolean;
}

const AccordionCategory = ({ 
  title, 
  count, 
  children, 
  defaultOpen = false 
}: AccordionCategoryProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-white/10 rounded-lg overflow-hidden bg-[#0f0f0f]">
      {/* Accordion Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:ring-inset transition-colors duration-300 hover:bg-[#1a1a1a]"
      >
        <div className="flex items-center">
          <h3 className="font-serif text-xl md:text-2xl text-[#d4af37]">{title}</h3>
          <span className="ml-3 text-sm text-white/60 bg-white/10 px-2 py-1 rounded-full">
            {count} {count === 1 ? 'artwork' : 'artworks'}
          </span>
        </div>
        
        <div className="flex items-center">
          <span className="text-sm text-white/60 mr-3">
            {isOpen ? 'Collapse' : 'Expand'}
          </span>
          <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
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
              className="text-[#d4af37]"
            >
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </div>
        </div>
      </button>
      
      {/* Accordion Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="p-6 border-t border-white/10">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AccordionCategory;
