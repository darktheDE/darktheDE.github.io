import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { useScrollNavbar } from '../hooks/useScrollNavbar';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY, isVisible, activeSection } = useScrollNavbar();

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Homework', href: '#homework' },
    { name: 'RTIC', href: '#rtic' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Dynamic background based on scroll and active section
  const getNavbarBackground = () => {
    const opacity = Math.min(scrollY / 300, 0.95);
    const sectionColors = {
      hero: 'rgba(30, 27, 75, ',
      about: 'rgba(45, 30, 75, ',
      skills: 'rgba(30, 45, 75, ',
      projects: 'rgba(60, 30, 75, ',
      homework: 'rgba(30, 60, 75, ',
      rtic: 'rgba(75, 30, 60, ',
      contact: 'rgba(30, 75, 45, '
    };
    
    return `${sectionColors[activeSection] || sectionColors.hero}${opacity})`;
  };

  const getActiveSectionId = (href) => href.replace('#', '');

  return (
    <nav 
      className={`fixed top-0 w-full backdrop-blur-lg border-b border-gray-700/70 z-50 transition-all duration-500 ease-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } bg-dark-gradient/95`}
      style={{
        boxShadow: scrollY > 50 ? '0 8px 32px rgba(0, 0, 0, 0.4)' : '0 4px 16px rgba(0, 0, 0, 0.2)'
      }}
    >
      {/* Animated progress bar */}
      <div 
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent-purple via-accent-blue to-accent-purple-light transition-all duration-300"
        style={{ width: `${Math.min((scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100, 100)}%` }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Enhanced Logo/Name */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('#hero')}
              className="flex items-center space-x-3 group"
            >
              <div className="relative w-10 h-10 rounded-full bg-accent-gradient p-0.5 shadow-glow-purple group-hover:shadow-glow-blue transition-all duration-500 group-hover:scale-110">
                <img 
                  src="/assets/profile01.png" 
                  alt="DarktheDE Logo"
                  className="w-full h-full rounded-full object-cover transition-transform duration-500"
                  style={{
                    imageRendering: '-webkit-optimize-contrast',
                    backfaceVisibility: 'hidden',
                    transform: 'translateZ(0)',
                    WebkitFontSmoothing: 'antialiased'
                  }}
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />
              </div>
              <div className="hidden sm:block">
                <span className="text-lg font-bold bg-gradient-to-r from-accent-purple-light to-accent-blue-light bg-clip-text text-transparent hover:from-accent-purple hover:to-accent-blue transition-all duration-500 hover:scale-105">
                  DO KIEN HUNG - darktheDE
                </span>
                <div className="text-xs text-gray-300 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  Data Engineering Student
                </div>
              </div>
              <span className="sm:hidden text-sm font-bold bg-gradient-to-r from-accent-purple-light to-accent-blue-light bg-clip-text text-transparent hover:from-accent-purple hover:to-accent-blue transition-all duration-300">
                DKH
              </span>
            </button>
          </div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item, index) => {
                const isActive = activeSection === getActiveSectionId(item.href);
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 relative group rounded-lg ${
                      isActive 
                        ? 'text-accent-purple-light bg-white/10 shadow-glow-purple' 
                        : 'text-gray-300 hover:text-accent-purple-light hover:bg-white/5'
                    }`}
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    {item.name}
                    
                    {/* Animated underline */}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent-purple-light to-accent-blue-light transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} />
                    
                    {/* Floating tooltip */}
                    <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-dark-secondary/90 backdrop-blur-sm text-xs text-gray-300 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none border border-gray-700/50 whitespace-nowrap">
                      Go to {item.name}
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-dark-secondary/90 rotate-45 border-l border-t border-gray-700/50" />
                    </div>
                    
                    {/* Active section indicator */}
                    {isActive && (
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-accent-purple rounded-full animate-pulse" />
                    )}
                  </button>
                );
              })}
            </div>
            
            {/* CV Download Button */}
            <a
              href="/CV.pdf"
              download
              className="ml-4 px-4 py-2 bg-accent-gradient hover:shadow-glow-purple text-white text-sm font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2 border border-accent-purple-light/30"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              CV
            </a>
          </div>

          {/* Enhanced Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-accent-purple-light p-2 transition-all duration-300 hover:scale-110 relative group rounded-lg hover:bg-white/10"
            >
              <div className={`transition-transform duration-500 ${isMenuOpen ? 'rotate-180' : ''}`}>
                {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </div>
              
              {/* Pulse effect when menu is open */}
              {isMenuOpen && (
                <div className="absolute inset-0 bg-accent-purple/20 rounded-lg animate-ping" />
              )}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div className={`md:hidden transition-all duration-500 ease-out overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-dark-secondary/80 backdrop-blur-sm border-t border-gray-800/50 shadow-2xl rounded-b-lg mt-2">
            {navItems.map((item, index) => {
              const isActive = activeSection === getActiveSectionId(item.href);
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`w-full text-left px-4 py-3 text-base font-medium transition-all duration-300 rounded-lg relative group ${
                    isActive
                      ? 'text-accent-purple-light bg-accent-purple/20 shadow-glow-purple'
                      : 'text-gray-300 hover:text-accent-purple-light hover:bg-white/10'
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    transform: isMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                    transition: `all 0.5s ease-out ${index * 100}ms`
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span>{item.name}</span>
                    {isActive && (
                      <div className="w-2 h-2 bg-accent-purple rounded-full animate-pulse" />
                    )}
                  </div>
                  
                  {/* Mobile active indicator */}
                  <div className={`absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-accent-purple-light to-accent-blue-light rounded-r-full transition-all duration-300 ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`} />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;