import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';

interface AutoCarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  autoPlayInterval?: number;
}

const AutoCarousel = <T,>({ 
  items, 
  renderItem, 
  autoPlayInterval = 5000 
}: AutoCarouselProps<T>) => {
  const [visibleItems, setVisibleItems] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0); 
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const timeoutRef = useRef<number | null>(null);

  // Responsive items count based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) setVisibleItems(3);
      else if (window.innerWidth >= 768) setVisibleItems(2);
      else setVisibleItems(1);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Create clones for infinite loop
  const extendedItems = useMemo(() => {
    if (items.length === 0) return [];
    // We add buffer clones to both sides
    const clonesBefore = items.slice(-visibleItems);
    const clonesAfter = items.slice(0, visibleItems);
    return [...clonesBefore, ...items, ...clonesAfter];
  }, [items, visibleItems]);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => prev + 1);
  }, [isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => prev - 1);
  }, [isTransitioning]);

  // Handle the seamless "jump" back to the original index range
  useEffect(() => {
    if (!isTransitioning) return;

    let timer: number;
    if (currentIndex === items.length) {
      // We moved into the end clones, jump back to the start of the real list
      timer = window.setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 700);
    } else if (currentIndex === -1) {
      // We moved into the start clones, jump to the end of the real list
      timer = window.setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(items.length - 1);
      }, 700);
    } else {
      // Normal transition
      timer = window.setTimeout(() => {
        setIsTransitioning(false);
      }, 700);
    }
    return () => clearTimeout(timer);
  }, [currentIndex, items.length, isTransitioning]);

  // Auto-play interval
  useEffect(() => {
    if (!isHovered && items.length > visibleItems) {
      timeoutRef.current = window.setInterval(nextSlide, autoPlayInterval);
    }
    return () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current);
    };
  }, [isHovered, nextSlide, autoPlayInterval, items.length, visibleItems]);

  if (items.length === 0) return null;

  // IMPORTANT MATH FIX:
  // translateX must be the percentage of the TRACK width, not the viewport.
  // total items in track = extendedItems.length
  // we want to skip (currentIndex + visibleItems) items.
  const translateX = ((currentIndex + visibleItems) / extendedItems.length) * 100;

  return (
    <div 
      className="relative w-full overflow-hidden py-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="flex"
        style={{ 
          transform: `translateX(-${translateX}%)`,
          transition: isTransitioning ? 'transform 700ms cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
          width: `${(extendedItems.length / visibleItems) * 100}%`
        }}
      >
        {extendedItems.map((item, idx) => (
          <div 
            key={idx} 
            className="px-4 shrink-0"
            style={{ width: `${100 / extendedItems.length}%` }}
          >
            {renderItem(item, idx)}
          </div>
        ))}
      </div>

      {/* Navigation Controls - Always visible for better UX */}
      <div className="absolute inset-y-0 left-0 flex items-center p-2 z-20 pointer-events-none">
        <button 
          onClick={prevSlide}
          className="w-12 h-12 rounded-full bg-white shadow-xl border border-slate-100 flex items-center justify-center text-brand pointer-events-auto hover:bg-brand hover:text-white transition-all hover:scale-110 active:scale-95 shadow-brand/10"
          aria-label="Previous"
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>
      </div>
      
      <div className="absolute inset-y-0 right-0 flex items-center p-2 z-20 pointer-events-none">
        <button 
          onClick={nextSlide}
          className="w-12 h-12 rounded-full bg-white shadow-xl border border-slate-100 flex items-center justify-center text-brand pointer-events-auto hover:bg-brand hover:text-white transition-all hover:scale-110 active:scale-95 shadow-brand/10"
          aria-label="Next"
        >
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default AutoCarousel;