import { FiDownload, FiArrowDown } from 'react-icons/fi';

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-dark-gradient relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent-purple-light rounded-full animate-ping opacity-20"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent-blue-light rounded-full animate-pulse opacity-30"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-accent-purple-light rounded-full animate-bounce opacity-25"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-accent-blue-light rounded-full animate-ping opacity-20"></div>
        <div className="absolute bottom-1/3 right-1/2 w-2 h-2 bg-accent-purple-light rounded-full animate-pulse opacity-15"></div>
        <div className="absolute top-3/4 left-1/2 w-1 h-1 bg-accent-blue-light rounded-full animate-bounce opacity-30"></div>
      </div>
      
      {/* Background overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-primary/50 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-50 mb-6">
            Hi, I'm <span className="bg-gradient-to-r from-accent-purple-light to-accent-blue-light bg-clip-text text-transparent animate-pulse">Đỗ Kiến Hưng</span>
          </h1>
          
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 font-light">
            Data Engineering Student & Backend Developer
          </h2>
          
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Third-year Data Engineering student at HCMUTE, passionate about Big Data Processing, 
            Backend Development, and Business Analysis. Currently serving as Vice Leader of HCMUTE RTIC 
            programming club while building real-world applications with Java Spring Boot and Python.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('#projects')}
              className="bg-accent-gradient hover:shadow-glow-purple text-white px-8 py-3 rounded-lg font-semibold 
                       transition-all duration-300 transform hover:scale-105 flex items-center gap-2 
                       border border-accent-purple-light/30"
            >
              <FiArrowDown className="w-5 h-5" />
              View My Work
            </button>
            
            <a
              href="/CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-accent-blue-light text-accent-blue-light hover:bg-accent-blue-light hover:text-dark-primary 
                       px-8 py-3 rounded-lg font-semibold transition-all duration-300 
                       transform hover:scale-105 flex items-center gap-2 hover:shadow-glow-blue"
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
            className="text-accent-purple-light hover:text-accent-blue-light transition-all duration-300 hover:scale-110"
          >
            <FiArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;