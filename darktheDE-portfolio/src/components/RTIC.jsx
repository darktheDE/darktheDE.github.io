import { FaUsers, FaTrophy, FaCalendarAlt, FaCode, FaJava } from 'react-icons/fa';
import { SiPython, SiReact, SiSpring } from 'react-icons/si';

const RTIC = () => {
  return (
    <section id="rtic" className="py-20 bg-dark-secondary relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-30">
        <img 
          src="/assets/rtic-background.png" 
          alt="RTIC Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-dark-secondary/40"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            HCMUTE <span className="bg-gradient-to-r from-accent-purple-light to-accent-blue-light bg-clip-text text-transparent">RTIC</span> Programming Club
          </h2>
          <div className="w-20 h-1 bg-accent-gradient mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* RTIC Logo and Certificate */}
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-1 gap-6">
              {/* Club Avatar - Smaller, top position */}
              <div className="relative max-w-xs mx-auto">
                <div className="aspect-square rounded-2xl bg-accent-gradient p-1 shadow-glow-purple hover:shadow-glow-blue transition-all duration-500 animate-float">
                  <img 
                    src="/assets/rtic-avatar.jpg" 
                    alt="RTIC Avatar" 
                    className="w-full h-full rounded-2xl object-cover shadow-dark-lg"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-accent-gradient p-2 rounded-full shadow-glow-purple">
                  <span className="text-white text-xs font-bold">RTIC</span>
                </div>
              </div>

              {/* Vice Leader Photo - Larger, bottom position */}
              <div className="relative max-w-md mx-auto">
                <div className="aspect-[1/1] rounded-2xl bg-accent-gradient p-1 shadow-glow-blue hover:shadow-glow-purple transition-all duration-500">
                  <img 
                    src="/assets/rtic-pers-pic.jpg" 
                    alt="Đỗ Kiến Hưng - RTIC Vice Leader" 
                    className="w-full h-full rounded-2xl object-cover shadow-dark-lg"
                  />
                </div>
                <div className="absolute -bottom-3 -left-3 bg-accent-gradient p-3 rounded-full shadow-glow-blue">
                  <span className="text-white text-sm font-bold">Vice Leader</span>
                </div>
              </div>
            </div>
          </div>

          {/* RTIC Information */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6 bg-dark-primary/70 backdrop-blur-md rounded-2xl p-8 border border-gray-600/70 shadow-xl">
              <p className="text-lg text-gray-100 leading-relaxed drop-shadow-xl" style={{textShadow: '3px 3px 6px rgba(0,0,0,0.9), 1px 1px 3px rgba(0,0,0,0.8)'}}>
                I'm proud to serve as <strong className="text-accent-purple-light drop-shadow-xl" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.9)'}}>Vice Leader</strong> of the 
                <strong className="text-accent-blue-light drop-shadow-xl" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.9)'}}> HCMUTE RTIC</strong> (Research & Technology Innovation Center) 
                programming club at Ho Chi Minh City University of Technology and Education. In this role, 
                I lead the <strong className="text-accent-purple-light drop-shadow-xl" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.9)'}}>Business Analysis team</strong> and contribute to 
                strategic club development.
              </p>
              
              <p className="text-lg text-gray-100 leading-relaxed drop-shadow-xl" style={{textShadow: '3px 3px 6px rgba(0,0,0,0.9), 1px 1px 3px rgba(0,0,0,0.8)'}}>
                RTIC is the premier programming and technology community at our university, fostering 
                innovation and technical excellence among students. I oversee <strong className="text-accent-blue-light drop-shadow-xl" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.9)'}}>strategic initiatives</strong>, 
                coordinate technical workshops, and mentor junior members in programming and project management.
              </p>
              
              <p className="text-lg text-gray-100 leading-relaxed drop-shadow-xl" style={{textShadow: '3px 3px 6px rgba(0,0,0,0.9), 1px 1px 3px rgba(0,0,0,0.8)'}}>
                Our club specializes in modern technologies including <strong className="text-accent-purple-light drop-shadow-xl" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.9)'}}>Java Spring Boot</strong>, 
                <strong className="text-accent-blue-light drop-shadow-xl" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.9)'}}> Python</strong>, <strong className="text-accent-purple-light drop-shadow-xl" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.9)'}}>React</strong>, and 
                <strong className="text-accent-blue-light drop-shadow-xl" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.9)'}}> data analysis</strong>. We organize coding competitions, hackathons, 
                and business analysis training sessions to prepare students for real-world IT challenges.
              </p>

              <div className="pt-6">
                <h3 className="text-xl font-semibold text-white mb-4 drop-shadow-xl" style={{textShadow: '3px 3px 6px rgba(0,0,0,0.9), 1px 1px 3px rgba(0,0,0,0.8)'}}>My Leadership Responsibilities:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-100 group hover:text-accent-purple-light transition-colors duration-300 drop-shadow-xl" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8), 1px 1px 2px rgba(0,0,0,0.9)'}}>
                    <span className="w-3 h-3 bg-accent-gradient rounded-full mr-3 group-hover:scale-110 transition-transform duration-300 shadow-xl"></span>
                    Strategic planning and club development initiatives
                  </li>
                  <li className="flex items-center text-gray-100 group hover:text-accent-blue-light transition-colors duration-300 drop-shadow-xl" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8), 1px 1px 2px rgba(0,0,0,0.9)'}}>
                    <span className="w-3 h-3 bg-accent-gradient rounded-full mr-3 group-hover:scale-110 transition-transform duration-300 shadow-xl"></span>
                    Leading Business Analysis team of 10+ members
                  </li>
                  <li className="flex items-center text-gray-100 group hover:text-accent-purple-light transition-colors duration-300 drop-shadow-xl" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8), 1px 1px 2px rgba(0,0,0,0.9)'}}>
                    <span className="w-3 h-3 bg-accent-gradient rounded-full mr-3 group-hover:scale-110 transition-transform duration-300 shadow-xl"></span>
                    Coordinating technical workshops and competitions
                  </li>
                  <li className="flex items-center text-gray-100 group hover:text-accent-blue-light transition-colors duration-300 drop-shadow-xl" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8), 1px 1px 2px rgba(0,0,0,0.9)'}}>
                    <span className="w-3 h-3 bg-accent-gradient rounded-full mr-3 group-hover:scale-110 transition-transform duration-300 shadow-xl"></span>
                    Mentoring junior members in programming and project management
                  </li>
                </ul>
              </div>

              {/* Achievement Stats */}
              <div className="pt-6">
                <h3 className="text-xl font-semibold text-white mb-4 drop-shadow-xl" style={{textShadow: '3px 3px 6px rgba(0,0,0,0.9), 1px 1px 3px rgba(0,0,0,0.8)'}}>Club Achievements:</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-dark-card p-4 rounded-xl border border-gray-700 hover:border-accent-purple-light/50 
                              hover:shadow-glow-purple transition-all duration-300 hover:scale-105">
                    <div className="flex items-center space-x-3">
                      <FaUsers className="text-2xl text-accent-purple-light" />
                      <div>
                        <p className="text-xl font-bold text-white">50+</p>
                        <p className="text-sm text-gray-400">Active Members</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-dark-card p-4 rounded-xl border border-gray-700 hover:border-accent-blue-light/50 
                              hover:shadow-glow-blue transition-all duration-300 hover:scale-105">
                    <div className="flex items-center space-x-3">
                      <FaTrophy className="text-2xl text-yellow-400" />
                      <div>
                        <p className="text-xl font-bold text-white">8</p>
                        <p className="text-sm text-gray-400">Competitions Won</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-dark-card p-4 rounded-xl border border-gray-700 hover:border-accent-blue-light/50 
                              hover:shadow-glow-blue transition-all duration-300 hover:scale-105">
                    <div className="flex items-center space-x-3">
                      <FaCalendarAlt className="text-2xl text-accent-blue-light" />
                      <div>
                        <p className="text-xl font-bold text-white">25+</p>
                        <p className="text-sm text-gray-400">Events Organized</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-dark-card p-4 rounded-xl border border-gray-700 hover:border-accent-purple-light/50 
                              hover:shadow-glow-purple transition-all duration-300 hover:scale-105">
                    <div className="flex items-center space-x-3">
                      <FaCode className="text-2xl text-green-400" />
                      <div>
                        <p className="text-xl font-bold text-white">15+</p>
                        <p className="text-sm text-gray-400">Projects Completed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="pt-6">
                <h3 className="text-xl font-semibold text-white mb-4 drop-shadow-xl" style={{textShadow: '3px 3px 6px rgba(0,0,0,0.9), 1px 1px 3px rgba(0,0,0,0.8)'}}>Technologies We Work With:</h3>
                <div className="flex space-x-6">
                  <FaJava className="text-3xl text-orange-500 hover:scale-125 hover:drop-shadow-2xl transition-all duration-300 cursor-pointer drop-shadow-lg" title="Java" />
                  <SiPython className="text-3xl text-yellow-500 hover:scale-125 hover:drop-shadow-2xl transition-all duration-300 cursor-pointer drop-shadow-lg" title="Python" />
                  <SiReact className="text-3xl text-blue-400 hover:scale-125 hover:drop-shadow-2xl transition-all duration-300 cursor-pointer drop-shadow-lg" title="React" />
                  <SiSpring className="text-3xl text-green-500 hover:scale-125 hover:drop-shadow-2xl transition-all duration-300 cursor-pointer drop-shadow-lg" title="Spring Boot" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RTIC;