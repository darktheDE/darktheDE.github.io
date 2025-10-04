import { FiArrowUp, FiHeart } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-secondary border-t border-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="mb-8 bg-accent-gradient hover:shadow-glow-purple text-white w-12 h-12 rounded-full 
                     flex items-center justify-center transition-all duration-300 transform 
                     hover:scale-110 hover:-translate-y-1"
            aria-label="Back to top"
          >
            <FiArrowUp className="w-6 h-6" />
          </button>

          {/* Name/Logo */}
          <div className="mb-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-accent-purple-light to-accent-blue-light 
                        bg-clip-text text-transparent">darktheDE</h3>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-400 flex items-center gap-2">
              © {currentYear} DarktheDE. Made with 
              <FiHeart className="w-4 h-4 text-accent-purple-light animate-pulse" />
              using React & Tailwind CSS
            </p>
          </div>

          {/* Additional Links or Info */}
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-500">
              Built with modern web technologies • Deployed on GitHub Pages
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;