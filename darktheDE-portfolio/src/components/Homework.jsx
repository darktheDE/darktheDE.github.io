import { FiExternalLink, FiFileText } from 'react-icons/fi';
import { homeworks } from '../data/homeworkData';

const HomeworkCard = ({ homework }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-200">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
              Week {homework.week}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {homework.title}
          </h3>
        </div>
      </div>

      <div className="flex gap-3">
        <a
          href={homework.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md 
                   font-medium transition-colors flex items-center justify-center gap-2 text-sm"
        >
          <FiExternalLink className="w-4 h-4" />
          View Website
        </a>
        
        <a
          href={homework.reportUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 border-2 border-gray-300 hover:border-gray-400 text-gray-700 
                   hover:text-gray-900 px-4 py-2 rounded-md font-medium transition-colors 
                   flex items-center justify-center gap-2 text-sm"
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
    <section id="homework" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Academic Coursework
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Weekly assignments from my Web Programming course, showcasing Java Servlet development, 
            database integration, and web application architecture
          </p>
        </div>

        {/* Course Info */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Web Programming with Java Servlets
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
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
        <div className="mt-16 bg-blue-50 rounded-xl p-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
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
                  className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm"
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