import { useState, useEffect } from 'react';

export const useScrollNavbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('up');
  const [isVisible, setIsVisible] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollInfo = () => {
      const currentScrollY = window.scrollY;
      
      // Update scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setScrollDirection('down');
        setIsVisible(false);
      } else {
        setScrollDirection('up');
        setIsVisible(true);
      }
      
      setScrollY(currentScrollY);
      lastScrollY = currentScrollY;
      ticking = false;

      // Detect active section
      const sections = ['hero', 'about', 'skills', 'projects', 'homework', 'rtic', 'contact'];
      const sectionElements = sections.map(id => document.getElementById(id));
      
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i];
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollInfo);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return { scrollY, scrollDirection, isVisible, activeSection };
};