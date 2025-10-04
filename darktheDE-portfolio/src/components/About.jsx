const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="order-2 lg:order-1">
            <div className="relative max-w-md mx-auto">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-200 to-indigo-300 p-1">
                <div className="w-full h-full rounded-2xl bg-gray-200 flex items-center justify-center">
                  {/* Placeholder for professional photo */}
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full bg-gray-300 mx-auto mb-4"></div>
                    <p className="text-gray-500 text-sm">Professional Photo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm a passionate Computer Science student with a deep love for technology and 
                problem-solving. My journey in programming began with curiosity about how 
                websites work, and it has evolved into a comprehensive understanding of 
                full-stack development.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Currently pursuing my degree while working on real-world projects, I specialize 
                in modern web technologies including React, Node.js, and various databases. 
                I believe in writing clean, efficient code and creating user experiences that 
                make a difference.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing 
                to open-source projects, or learning about the latest developments in software 
                engineering. My goal is to become a versatile developer who can tackle any 
                challenge with creativity and technical expertise.
              </p>

              <div className="pt-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What drives me:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Building solutions that solve real-world problems
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Continuous learning and staying updated with tech trends
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Collaborating with teams to create impactful software
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
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