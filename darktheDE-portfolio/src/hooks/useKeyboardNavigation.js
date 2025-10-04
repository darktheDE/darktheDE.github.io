import { useEffect } from 'react';

export const useKeyboardNavigation = () => {
  useEffect(() => {
    const handleKeyPress = (event) => {
      // Ignore if user is typing in an input field
      if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
        return;
      }

      switch (event.key) {
        case 'Home':
          event.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
          break;
          
        case 'End':
          event.preventDefault();
          window.scrollTo({ 
            top: document.documentElement.scrollHeight, 
            behavior: 'smooth' 
          });
          break;
          
        case 'ArrowUp':
          if (event.ctrlKey || event.metaKey) {
            event.preventDefault();
            scrollToPreviousSection();
          }
          break;
          
        case 'ArrowDown':
          if (event.ctrlKey || event.metaKey) {
            event.preventDefault();
            scrollToNextSection();
          }
          break;
          
        case ' ': // Spacebar
          if (event.shiftKey) {
            event.preventDefault();
            // Scroll up one screen
            window.scrollBy({ top: -window.innerHeight * 0.9, behavior: 'smooth' });
          } else {
            event.preventDefault();
            // Scroll down one screen
            window.scrollBy({ top: window.innerHeight * 0.9, behavior: 'smooth' });
          }
          break;
          
        // Number keys 1-7 for quick section navigation
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
          if (event.altKey) {
            event.preventDefault();
            const sections = ['hero', 'about', 'skills', 'projects', 'homework', 'rtic', 'contact'];
            const sectionIndex = parseInt(event.key) - 1;
            if (sections[sectionIndex]) {
              const element = document.getElementById(sections[sectionIndex]);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }
          }
          break;
      }
    };

    const scrollToNextSection = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'homework', 'rtic', 'contact'];
      const currentSection = sections.find(id => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      const currentIndex = sections.indexOf(currentSection);
      if (currentIndex < sections.length - 1) {
        const nextSection = sections[currentIndex + 1];
        const element = document.getElementById(nextSection);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    const scrollToPreviousSection = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'homework', 'rtic', 'contact'];
      const currentSection = sections.find(id => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      const currentIndex = sections.indexOf(currentSection);
      if (currentIndex > 0) {
        const prevSection = sections[currentIndex - 1];
        const element = document.getElementById(prevSection);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Add event listener
    window.addEventListener('keydown', handleKeyPress);
    
    // Cleanup
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);
};