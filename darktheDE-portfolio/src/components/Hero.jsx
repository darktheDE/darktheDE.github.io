import { FiDownload, FiArrowDown } from 'react-icons/fi';

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-blue-600">DarktheDE</span>
          </h1>
          
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-700 mb-8 font-light">
            Full-Stack Developer & Computer Science Student
          </h2>
          
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating innovative web solutions and exploring the latest technologies. 
            Currently pursuing Computer Science while building real-world applications and honing my 
            development skills through hands-on projects.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('#projects')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold 
                       transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              <FiArrowDown className="w-5 h-5" />
              View My Work
            </button>
            
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white 
                       px-8 py-3 rounded-lg font-semibold transition-all duration-300 
                       transform hover:scale-105 flex items-center gap-2"
            >
              <FiDownload className="w-5 h-5" />
              Download CV
            </a>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('#about')}
            className="text-gray-400 hover:text-blue-600 transition-colors"
          >
            <FiArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;