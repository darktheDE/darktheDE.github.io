import React, { useState, useEffect } from 'react';
import { FiChevronUp, FiChevronDown, FiArrowUp, FiArrowDown } from 'react-icons/fi';

const ScrollNavigation = () => {
  const [showScrollButtons, setShowScrollButtons] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (currentScrollY / scrollHeight) * 100;
      
      setScrollProgress(progress);
      setShowScrollButtons(currentScrollY > 200);
      setIsAtTop(currentScrollY < 100);
      setIsAtBottom(progress > 95);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  const scrollToNext = () => {
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
    } else {
      scrollToBottom();
    }
  };

  const scrollToPrevious = () => {
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
    } else {
      scrollToTop();
    }
  };

  if (!showScrollButtons) return null;

  return (
    <>
      {/* Scroll Progress Ring */}
      <div className="fixed bottom-8 right-8 z-40">
        <div className="relative">
          {/* Progress Ring */}
          <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 60 60">
            <circle
              cx="30"
              cy="30"
              r="26"
              fill="none"
              stroke="rgba(75, 85, 99, 0.3)"
              strokeWidth="3"
            />
            <circle
              cx="30"
              cy="30"
              r="26"
              fill="none"
              stroke="url(#progressGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 26}`}
              strokeDashoffset={`${2 * Math.PI * 26 * (1 - scrollProgress / 100)}`}
              className="transition-all duration-300 ease-out"
            />
            {/* Gradient Definition */}
            <defs>
              <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="50%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Center Button - Scroll to Top/Bottom */}
          <button
            onClick={isAtBottom ? scrollToTop : scrollToBottom}
            className="absolute inset-2 bg-dark-secondary/90 backdrop-blur-sm rounded-full shadow-glow-purple hover:shadow-glow-blue transition-all duration-300 flex items-center justify-center group hover:scale-110"
            title={isAtBottom ? "Scroll to Top" : "Scroll to Bottom"}
          >
            {isAtBottom ? (
              <FiArrowUp className="w-6 h-6 text-accent-purple-light group-hover:text-accent-blue-light transition-colors duration-300" />
            ) : (
              <FiArrowDown className="w-6 h-6 text-accent-purple-light group-hover:text-accent-blue-light transition-colors duration-300" />
            )}
          </button>
          
          {/* Progress Percentage */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-dark-secondary/80 backdrop-blur-sm px-2 py-1 rounded-md text-xs text-accent-purple-light font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {Math.round(scrollProgress)}%
          </div>
        </div>
      </div>

      {/* Side Navigation Arrows */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40 space-y-4">
        {/* Scroll Up / Previous Section */}
        <button
          onClick={scrollToPrevious}
          disabled={isAtTop}
          className={`p-3 rounded-full backdrop-blur-sm shadow-lg transition-all duration-300 group ${
            isAtTop 
              ? 'bg-gray-700/30 text-gray-500 cursor-not-allowed opacity-50' 
              : 'bg-dark-secondary/80 text-accent-purple-light hover:text-accent-blue-light hover:shadow-glow-purple hover:scale-110'
          }`}
          title="Previous Section"
        >
          <FiChevronUp className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
        </button>

        {/* Scroll Down / Next Section */}
        <button
          onClick={scrollToNext}
          disabled={isAtBottom}
          className={`p-3 rounded-full backdrop-blur-sm shadow-lg transition-all duration-300 group ${
            isAtBottom 
              ? 'bg-gray-700/30 text-gray-500 cursor-not-allowed opacity-50' 
              : 'bg-dark-secondary/80 text-accent-purple-light hover:text-accent-blue-light hover:shadow-glow-purple hover:scale-110'
          }`}
          title="Next Section"
        >
          <FiChevronDown className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
        </button>
      </div>

      {/* Quick Section Navigator (Hidden by default, shows on hover) */}
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40 opacity-0 hover:opacity-100 transition-opacity duration-300 group">
        <div className="bg-dark-secondary/90 backdrop-blur-sm border border-gray-700/50 rounded-lg p-1.5 shadow-dark-lg max-w-[90px]">
          <div className="text-[10px] text-gray-400 mb-1 px-1.5">Quick Nav</div>
          {['Hero', 'About', 'Skills', 'Projects', 'Homework', 'RTIC', 'Contact'].map((section, index) => (
            <button
              key={section}
              onClick={() => {
                const element = document.getElementById(section.toLowerCase());
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="w-full text-left px-2 py-1 text-xs text-gray-300 hover:text-accent-purple-light hover:bg-white/10 rounded-md transition-all duration-200 mb-0.5 whitespace-nowrap"
            >
              {section}
            </button>
          ))}
        </div>
      </div>

      {/* Keyboard Shortcuts Hint */}
      <div className="fixed bottom-4 left-4 z-40 opacity-0 hover:opacity-100 transition-opacity duration-300">
        <div className="bg-dark-secondary/90 backdrop-blur-sm border border-gray-700/50 rounded-lg p-3 shadow-dark-lg">
          <div className="text-xs text-gray-400 mb-1">Keyboard Shortcuts:</div>
          <div className="space-y-1 text-xs text-gray-300">
            <div><kbd className="px-1 py-0.5 bg-gray-700 rounded text-xs">Home</kbd> - Top</div>
            <div><kbd className="px-1 py-0.5 bg-gray-700 rounded text-xs">End</kbd> - Bottom</div>
            <div><kbd className="px-1 py-0.5 bg-gray-700 rounded text-xs">↑↓</kbd> - Scroll</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScrollNavigation;