import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { projects } from '../data/projectsData';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-dark-card rounded-xl shadow-dark-lg overflow-hidden hover:shadow-glow-purple 
                    transition-all duration-300 transform hover:-translate-y-1 border border-gray-700 
                    hover:border-accent-purple-light/50">
      {/* Project Image */}
      <div className="aspect-video bg-dark-tertiary relative overflow-hidden group">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextElementSibling.style.display = 'flex';
          }}
        />
        {/* Fallback content if image fails to load */}
        <div className="absolute inset-0 hidden items-center justify-center bg-accent-gradient">
          <div className="text-center">
            <div className="w-16 h-16 bg-dark-primary/50 rounded-lg mb-4 mx-auto flex items-center justify-center backdrop-blur-sm">
              <span className="text-2xl">🚀</span>
            </div>
            <p className="text-white/90 text-sm font-medium">Project Screenshot</p>
          </div>
        </div>
        {/* Animated overlay for hover effect */}
        <div className="absolute inset-0 bg-dark-primary/0 group-hover:bg-dark-primary/30 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-t from-accent-purple-light/0 group-hover:from-accent-purple-light/30 to-transparent transition-all duration-300"></div>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-50 mb-3 hover:text-accent-purple-light transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-300 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-dark-tertiary text-accent-blue-light text-sm rounded-full font-medium 
                       border border-accent-blue-light/30 hover:bg-accent-blue-light/10 transition-colors"
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
            className="flex-1 bg-accent-gradient hover:shadow-glow-purple text-white px-4 py-2 rounded-lg 
                     font-medium transition-all duration-300 flex items-center justify-center gap-2 
                     hover:scale-105"
          >
            <FiExternalLink className="w-4 h-4" />
            Live Demo
          </a>
          
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 border-2 border-accent-blue-light hover:border-accent-purple-light text-accent-blue-light 
                     hover:text-accent-purple-light hover:bg-accent-purple-light/10 px-4 py-2 rounded-lg font-medium 
                     transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
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
    <section id="projects" className="py-20 bg-dark-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-50 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-accent-gradient mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
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
            className="inline-flex items-center gap-2 bg-dark-tertiary hover:bg-accent-gradient 
                     text-gray-300 hover:text-white px-6 py-3 rounded-lg font-medium 
                     transition-all duration-300 border border-gray-700 hover:border-transparent 
                     hover:shadow-glow-purple hover:scale-105"
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