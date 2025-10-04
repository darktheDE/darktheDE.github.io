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
    { name: 'LinkedIn', icon: FiLinkedin, href: 'https://www.linkedin.com/in/do-kien-hung/', color: 'hover:text-blue-400' },
    { name: 'Facebook', icon: FiFacebook, href: 'https://www.facebook.com/darktheDE/', color: 'hover:text-blue-500' },
    { name: 'Email', icon: FiMail, href: 'mailto:hungdk@rtic.hcmute.fit', color: 'hover:text-accent-purple-light' },
  ];

  return (
    <footer className="bg-dark-secondary border-t border-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-accent-purple-light to-accent-blue-light 
                        bg-clip-text text-transparent mb-4">
              DO KIEN HUNG
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Data Engineer & Full-stack Developer passionate about building scalable solutions 
              and analyzing big data with modern technologies.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              📍 Ho Chi Minh City, Vietnam
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-accent-purple-light mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-accent-blue-light transition-colors duration-300 text-sm"
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
            <h4 className="text-lg font-semibold text-accent-purple-light mb-4">Connect With Me</h4>
            <div className="flex justify-center md:justify-end gap-4 mb-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-110`}
                  aria-label={social.name}
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
            <p className="text-gray-400 flex items-center justify-center gap-2 mb-2">
              © {currentYear} Do Kien Hung. Made with 
              <FiHeart className="w-4 h-4 text-accent-purple-light animate-pulse" />
              using React & Tailwind CSS
            </p>
            <p className="text-sm text-gray-500">
              Built with modern web technologies • Deployed on GitHub Pages
            </p>
            <p className="text-xs text-gray-600 mt-2">
              All rights reserved • Designed & Developed with passion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;