import { useState, useEffect } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiGithub, FiLinkedin, FiMail, FiFacebook } from 'react-icons/fi';
import { SOCIAL_LINKS } from '../data/config';
import { cn } from '../utils/cn';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Stack', href: '#stack' },
    { name: 'Projects', href: '#projects' },
    { name: 'RTIC', href: '#rtic' },
  ];

  return (
    <nav className={cn("fixed top-0 w-full z-50 transition-all duration-300", scrolled ? 'py-4' : 'py-6')}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn(
          "rounded-full px-6 py-3 transition-all duration-300",
          scrolled ? 'bg-dark/80 backdrop-blur-md border border-white/5 shadow-lg' : 'bg-transparent'
        )}>
          <div className="flex items-center justify-between">

            {/* Logo */}
            <a href="#" className="text-xl font-bold font-mono tracking-tighter text-white hover:text-primary transition-colors">
              darkthe<span className="text-primary">DE</span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-text-muted hover:text-primary transition-colors hover:text-glow-light"
                >
                  {link.name}
                </a>
              ))}

              <div className="w-px h-4 bg-white/10"></div>

              <div className="flex items-center gap-4">
                <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="text-text-muted hover:text-primary transition-colors"><FiGithub size={18} /></a>
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="text-text-muted hover:text-primary transition-colors"><FiLinkedin size={18} /></a>
                <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noreferrer" className="text-text-muted hover:text-primary transition-colors"><FiFacebook size={18} /></a>
                <a href={SOCIAL_LINKS.email} className="text-text-muted hover:text-primary transition-colors"><FiMail size={18} /></a>
              </div>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <Motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-4 right-4 bg-dark/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:hidden shadow-2xl"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-text-muted hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="h-px bg-white/10 my-2"></div>
              <div className="flex justify-center gap-6 pt-2">
                <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="text-text-muted hover:text-primary"><FiGithub size={24} /></a>
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="text-text-muted hover:text-primary"><FiLinkedin size={24} /></a>
                <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noreferrer" className="text-text-muted hover:text-primary"><FiFacebook size={24} /></a>
                <a href={SOCIAL_LINKS.email} className="text-text-muted hover:text-primary"><FiMail size={24} /></a>
              </div>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;