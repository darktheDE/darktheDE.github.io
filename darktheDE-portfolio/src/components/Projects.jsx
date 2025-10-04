import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { projects } from '../data/projectsData';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Project Image */}
      <div className="aspect-video bg-gradient-to-br from-blue-200 to-indigo-300 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/30 rounded-lg mb-4 mx-auto flex items-center justify-center">
              <span className="text-2xl">🚀</span>
            </div>
            <p className="text-white/80 text-sm">Project Screenshot</p>
          </div>
        </div>
        {/* Overlay for hover effect */}
        <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors"></div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          {project.title}
        </h3>
        
        <p className="text-gray-600 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg 
                     font-medium transition-colors flex items-center justify-center gap-2"
          >
            <FiExternalLink className="w-4 h-4" />
            Live Demo
          </a>
          
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 border-2 border-gray-300 hover:border-gray-400 text-gray-700 
                     hover:text-gray-900 px-4 py-2 rounded-lg font-medium transition-colors 
                     flex items-center justify-center gap-2"
          >
            <FiGithub className="w-4 h-4" />
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/darktheDE"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 
                     text-gray-800 px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <FiGithub className="w-5 h-5" />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;