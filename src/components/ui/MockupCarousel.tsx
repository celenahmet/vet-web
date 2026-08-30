import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const mockups = [
  { id: 1, src: '/evcil-hayvan.png', alt: 'Evcil Hayvan' },
  { id: 2, src: '/topluluk.png', alt: 'Topluluk' },
  { id: 3, src: '/klinik.png', alt: 'Klinik' },
  { id: 4, src: '/rehber.png', alt: 'Rehber' },
];

export function MockupCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % mockups.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + mockups.length) % mockups.length);
  };

  const getPosition = (index: number) => {
    const diff = (index - activeIndex + mockups.length) % mockups.length;
    
    if (diff === 0) return { x: 0, scale: 1, zIndex: 40, opacity: 1 }; // Center
    if (diff === 1) return { x: '80%', scale: 0.85, zIndex: 30, opacity: 0.7 }; // Right
    if (diff === mockups.length - 1) return { x: '-80%', scale: 0.85, zIndex: 30, opacity: 0.7 }; // Left
    
    // Everything else is behind
    return { x: 0, scale: 0.6, zIndex: 10, opacity: 0 }; 
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto h-[500px] md:h-[600px] flex items-center justify-center overflow-visible">
      
      {mockups.map((mockup, index) => {
        const pos = getPosition(index);
        
        return (
          <motion.div
            key={mockup.id}
            initial={false}
            animate={{
              x: pos.x,
              scale: pos.scale,
              zIndex: pos.zIndex,
              opacity: pos.opacity,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="absolute w-[240px] md:w-[280px] aspect-[488/1024] cursor-pointer"
            onClick={() => setActiveIndex(index)}
          >
            {/* Direct image without CSS phone frame */}
            <img 
              src={mockup.src} 
              alt={mockup.alt} 
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </motion.div>
        );
      })}

      {/* Controls */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-between px-4 sm:px-12 z-50 pointer-events-none">
        <button 
          onClick={prevSlide}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[var(--bg-main)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-main)] hover:bg-[var(--bg-secondary)] transition pointer-events-auto shadow-xl"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={nextSlide}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[var(--bg-main)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-main)] hover:bg-[var(--bg-secondary)] transition pointer-events-auto shadow-xl"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
      
      {/* Dots */}
      <div className="absolute -bottom-12 md:-bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-2 z-50">
         {mockups.map((_, i) => (
           <button 
             key={i}
             onClick={() => setActiveIndex(i)}
             className={`w-2.5 h-2.5 rounded-full transition-colors ${i === activeIndex ? 'bg-[var(--primary-color)]' : 'bg-[var(--border-color)]'}`}
           />
         ))}
      </div>
      
    </div>
  );
}
