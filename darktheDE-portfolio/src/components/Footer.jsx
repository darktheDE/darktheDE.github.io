import { FiArrowUp, FiHeart, FiGithub, FiLinkedin, FiMail, FiFacebook } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Homework', href: '#homework' },
    { name: 'RTIC', href: '#rtic' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { name: 'GitHub', icon: FiGithub, href: 'https://github.com/darktheDE', color: 'hover:text-gray-300' },
    { name: 'LinkedIn', icon: FiLinkedin, href: 'https://www.linkedin.com/in/darkthede/', color: 'hover:text-blue-400' },
    { name: 'Facebook', icon: FiFacebook, href: 'https://www.facebook.com/darktheDE/', color: 'hover:text-blue-500' },
    { name: 'Email', icon: FiMail, href: 'mailto:hungdk@rtic.hcmute.fit', color: 'hover:text-accent-purple-light' },
  ];

  return (
    <footer className="relative bg-dark-gradient border-t border-gray-700 text-white py-12">
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-dark-primary/60 backdrop-blur-sm"></div>
      
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent-purple-light rounded-full animate-ping"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-accent-blue-light rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-accent-purple-light rounded-full animate-bounce"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Statistics Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 text-center">
          <div className="bg-dark-card/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 hover:border-accent-purple-light/50 transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold bg-gradient-to-r from-accent-purple-light to-accent-blue-light bg-clip-text text-transparent mb-1">10+</div>
            <div className="text-sm text-gray-400">Projects</div>
          </div>
          <div className="bg-dark-card/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 hover:border-accent-blue-light/50 transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold bg-gradient-to-r from-accent-blue-light to-accent-purple-light bg-clip-text text-transparent mb-1">15+</div>
            <div className="text-sm text-gray-400">Technologies</div>
          </div>
          <div className="bg-dark-card/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 hover:border-accent-purple-light/50 transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold bg-gradient-to-r from-accent-purple-light to-accent-blue-light bg-clip-text text-transparent mb-1">3+</div>
            <div className="text-sm text-gray-400">Years Coding</div>
          </div>
          <div className="bg-dark-card/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 hover:border-accent-blue-light/50 transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold bg-gradient-to-r from-accent-blue-light to-accent-purple-light bg-clip-text text-transparent mb-1">1</div>
            <div className="text-sm text-gray-400">RTIC Vice Leader</div>
          </div>
        </div>
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-accent-purple-light to-accent-blue-light 
                        bg-clip-text text-transparent mb-4 drop-shadow-lg">
              DO KIEN HUNG
            </h3>
            <p className="text-gray-200 text-sm leading-relaxed mb-3">
              Data Engineer & Full-stack Developer passionate about building scalable solutions 
              and analyzing big data with modern technologies.
            </p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-3">
              <span className="px-2 py-1 bg-accent-purple-dark/30 text-accent-purple-light text-xs rounded-full border border-accent-purple-light/20">Java</span>
              <span className="px-2 py-1 bg-accent-blue-dark/30 text-accent-blue-light text-xs rounded-full border border-accent-blue-light/20">Python</span>
              <span className="px-2 py-1 bg-accent-purple-dark/30 text-accent-purple-light text-xs rounded-full border border-accent-purple-light/20">React</span>
              <span className="px-2 py-1 bg-accent-blue-dark/30 text-accent-blue-light text-xs rounded-full border border-accent-blue-light/20">Spring Boot</span>
            </div>
            <p className="text-gray-400 text-xs mt-2 flex items-center justify-center md:justify-start gap-1">
              <span>📍</span>
              <span>Ho Chi Minh City, Vietnam</span>
            </p>
            <p className="text-gray-400 text-xs mt-1 flex items-center justify-center md:justify-start gap-1">
              <span>🎓</span>
              <span>HCMUTE - Data Engineering</span>
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-accent-purple-light mb-4 drop-shadow-lg">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-200 hover:text-accent-blue-light transition-colors duration-300 text-sm font-medium"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold text-accent-purple-light mb-4 drop-shadow-lg">Connect With Me</h4>
            <div className="flex justify-center md:justify-end gap-4 mb-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-200 ${social.color} transition-all duration-300 transform hover:scale-125 hover:-translate-y-1 p-2 rounded-lg hover:bg-white/10 hover:shadow-glow-purple`}
                  aria-label={social.name}
                  title={social.name}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-sm">
              Feel free to reach out for collaborations or just a friendly chat!
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center">
          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="mb-6 bg-accent-gradient hover:shadow-glow-purple text-white w-12 h-12 rounded-full 
                     flex items-center justify-center transition-all duration-300 transform 
                     hover:scale-110 hover:-translate-y-1"
            aria-label="Back to top"
          >
            <FiArrowUp className="w-6 h-6" />
          </button>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-200 flex items-center justify-center gap-2 mb-2 flex-wrap">
              <span>© {currentYear} Do Kien Hung.</span>
              <span className="flex items-center gap-1">
                Made with <FiHeart className="w-4 h-4 text-accent-purple-light animate-pulse" /> using
              </span>
              <span className="text-accent-blue-light font-semibold">React</span>
              <span>&</span>
              <span className="text-accent-purple-light font-semibold">Tailwind CSS</span>
            </p>
            <p className="text-sm text-gray-400 mb-2">
              Built with modern web technologies • Deployed on 
              <a href="https://pages.github.com/" target="_blank" rel="noopener noreferrer" 
                 className="text-accent-blue-light hover:text-accent-purple-light transition-colors duration-300 ml-1 font-semibold">
                GitHub Pages
              </a>
            </p>
            <p className="text-xs text-gray-500 mt-2">
              All rights reserved • Designed & Developed with passion 🚀
            </p>
            <p className="text-xs text-gray-600 mt-1">
              Last updated: October 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;