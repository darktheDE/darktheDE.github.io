import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
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

  return (
    <nav className="fixed top-0 w-full bg-dark-primary/95 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('#hero')}
              className="flex items-center space-x-3 group"
            >
              <div className="w-10 h-10 rounded-full bg-accent-gradient p-0.5 shadow-glow-purple group-hover:shadow-glow-blue transition-all duration-300">
                <img 
                  src="/assets/profile01.png" 
                  alt="DarktheDE Logo"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <span className="hidden sm:block text-lg font-bold bg-gradient-to-r from-accent-purple-light to-accent-blue-light bg-clip-text text-transparent hover:from-accent-purple to-accent-blue transition-all duration-300">
                DO KIEN HUNG - darktheDE
              </span>
              <span className="sm:hidden text-sm font-bold bg-gradient-to-r from-accent-purple-light to-accent-blue-light bg-clip-text text-transparent hover:from-accent-purple to-accent-blue transition-all duration-300">
                DKH
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-300 hover:text-accent-purple-light px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-purple-light to-accent-blue-light transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-accent-purple-light p-2 transition-all duration-300 hover:scale-110"
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-dark-secondary border-t border-gray-800 shadow-dark-lg">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-300 hover:text-accent-purple-light hover:bg-dark-tertiary block px-3 py-2 text-base font-medium w-full text-left transition-all duration-300 rounded-md"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;