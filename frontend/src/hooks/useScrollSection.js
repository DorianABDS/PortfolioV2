import { useEffect, useRef, useState } from 'react';

export default function useScrollSection(totalSections) {
  const [currentSection, setCurrentSection] = useState(0);
  const isScrolling = useRef(false);

  // Scroll mouse
  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      if (isScrolling.current) return;
      isScrolling.current = true;

      if (e.deltaY > 0 && currentSection < totalSections - 1) {
        setCurrentSection(prev => prev + 1);
      } else if (e.deltaY < 0 && currentSection > 0) {
        setCurrentSection(prev => prev - 1);
      }

      setTimeout(() => {
        isScrolling.current = false;
      }, 800); // 0.8s
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentSection, totalSections]);

  return { currentSection, setCurrentSection };
}
