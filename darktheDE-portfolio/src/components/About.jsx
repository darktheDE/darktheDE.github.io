import { useState, useEffect } from 'react';

const About = () => {
  const profileImages = [
    "/assets/profile01.png",
    "/assets/profile02.jpg", 
    "/assets/profile03.jpg"
  ];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % profileImages.length
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [profileImages.length]);
  return (
    <section id="about" className="py-20 bg-dark-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-50 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-accent-gradient mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="order-2 lg:order-1">
            <div className="relative max-w-md mx-auto">
              <div className="aspect-square rounded-2xl bg-accent-gradient p-1 shadow-glow-purple hover:shadow-glow-blue transition-all duration-500 animate-float">
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  {profileImages.map((image, index) => (
                    <img 
                      key={index}
                      src={image} 
                      alt={`Đỗ Kiến Hưng - Profile ${index + 1}`}
                      className={`absolute inset-0 w-full h-full object-cover shadow-dark-lg transition-all duration-1000 ${
                        index === currentImageIndex 
                          ? 'opacity-100 scale-100' 
                          : 'opacity-0 scale-105'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Image indicators */}
              <div className="flex justify-center mt-4 space-x-2">
                {profileImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'bg-accent-purple-light scale-125' 
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm <strong className="text-accent-purple-light">Đỗ Kiến Hưng</strong>, a third-year Data Engineering student at 
                Ho Chi Minh City University of Technology and Education (HCMUTE). My passion lies in 
                <strong className="text-accent-blue-light">Big Data Processing</strong>, <strong className="text-accent-purple-light">Backend Development</strong>, and 
                <strong className="text-accent-blue-light">Business Analysis</strong> for real-world IT projects.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                As <strong className="text-accent-purple-light">Vice Leader of HCMUTE RTIC</strong> programming club, I lead the Business 
                Analysis team and contribute to backend development using Java Spring Boot, Maven, and 
                PostgreSQL. I specialize in Apache Spark, Hadoop, Python data analysis, and building 
                scalable web applications with modern frameworks.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                My recent projects include a <strong className="text-accent-blue-light">Big Data Pipeline for NYC Taxi Analysis</strong> 
                using PySpark with Medallion Architecture, and <strong className="text-accent-purple-light">UTE Phone Hub</strong> - a 
                complete e-commerce platform built with Java Servlet/JSP. I'm always eager to tackle 
                new challenges in data engineering and backend architecture.
              </p>

              <div className="pt-6">
                <h3 className="text-xl font-semibold text-gray-50 mb-4">What drives me:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300 group hover:text-accent-purple-light transition-colors duration-300">
                    <span className="w-3 h-3 bg-accent-gradient rounded-full mr-3 group-hover:scale-110 transition-transform duration-300"></span>
                    Building solutions that solve real-world problems
                  </li>
                  <li className="flex items-center text-gray-300 group hover:text-accent-blue-light transition-colors duration-300">
                    <span className="w-3 h-3 bg-accent-gradient rounded-full mr-3 group-hover:scale-110 transition-transform duration-300"></span>
                    Continuous learning and staying updated with tech trends
                  </li>
                  <li className="flex items-center text-gray-300 group hover:text-accent-purple-light transition-colors duration-300">
                    <span className="w-3 h-3 bg-accent-gradient rounded-full mr-3 group-hover:scale-110 transition-transform duration-300"></span>
                    Collaborating with teams to create impactful software
                  </li>
                  <li className="flex items-center text-gray-300 group hover:text-accent-blue-light transition-colors duration-300">
                    <span className="w-3 h-3 bg-accent-gradient rounded-full mr-3 group-hover:scale-110 transition-transform duration-300"></span>
                    Writing clean, maintainable, and scalable code
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;