import { FiExternalLink, FiFileText } from 'react-icons/fi';
import { homeworks } from '../data/homeworkData';

const HomeworkCard = ({ homework }) => {
  return (
    <div className="bg-dark-card rounded-lg shadow-dark-lg hover:shadow-glow-blue transition-all duration-300 p-6 
                    border border-gray-700 hover:border-accent-blue-light/50 hover:scale-105">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-accent-gradient text-white text-sm font-semibold px-3 py-1 rounded-full shadow-glow-purple">
              Week {homework.week}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-gray-50 mb-2 hover:text-accent-blue-light transition-colors">
            {homework.title}
          </h3>
        </div>
      </div>

      <div className="flex gap-3">
        <a
          href={homework.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-accent-gradient hover:shadow-glow-purple text-white px-4 py-2 rounded-md 
                   font-medium transition-all duration-300 flex items-center justify-center gap-2 text-sm hover:scale-105"
        >
          <FiExternalLink className="w-4 h-4" />
          View Website
        </a>
        
        <a
          href={homework.reportUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 border-2 border-accent-blue-light hover:border-accent-purple-light text-accent-blue-light 
                   hover:text-accent-purple-light hover:bg-accent-purple-light/10 px-4 py-2 rounded-md font-medium 
                   transition-all duration-300 flex items-center justify-center gap-2 text-sm hover:scale-105"
        >
          <FiFileText className="w-4 h-4" />
          Read Report
        </a>
      </div>
    </div>
  );
};

const Homework = () => {
  return (
    <section id="homework" className="py-20 bg-dark-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-50 mb-4">
            Academic Coursework
          </h2>
          <div className="w-20 h-1 bg-accent-gradient mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Weekly assignments from my Web Programming course, showcasing Java Servlet development, 
            database integration, and web application architecture
          </p>
        </div>

        {/* Course Info */}
        <div className="bg-dark-card rounded-xl shadow-dark-lg p-8 mb-12 border border-gray-700">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-50 mb-3">
              Web Programming with Java Servlets
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Comprehensive course covering server-side web development using Java Servlets, JSP, 
              JDBC database connectivity, session management, security implementation, and 
              modern web service architecture.
            </p>
          </div>
        </div>

        {/* Homework Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {homeworks.map((homework) => (
            <HomeworkCard key={homework.id} homework={homework} />
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-dark-secondary rounded-xl p-8 border border-gray-700">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-50 mb-4">
              Technologies Used in Coursework
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Java Servlets', 'JSP', 'JDBC', 'MySQL', 'Tomcat', 
                'Session Management', 'MVC Architecture', 'RESTful APIs', 
                'AJAX', 'JSON', 'Security & Authentication'
              ].map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-2 bg-dark-tertiary text-accent-blue-light rounded-full text-sm font-medium 
                           border border-accent-blue-light/30 hover:bg-accent-blue-light/10 transition-colors cursor-pointer"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homework;