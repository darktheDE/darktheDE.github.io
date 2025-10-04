import { 
  FaReact, FaJs, FaHtml5, FaCss3Alt, FaNode, FaPython, 
  FaGitAlt, FaGithub, FaLinux, FaDocker, FaJava 
} from 'react-icons/fa';
import { 
  SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql, 
  SiExpress, SiVite, SiFirebase, SiVercel, SiApachespark,
  SiSpring, SiApache, SiPandas, SiNumpy, SiJupyter
} from 'react-icons/si';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend & Server",
      skills: [
        { name: "Java", icon: FaJava, color: "text-red-600" },
        { name: "Spring Boot", icon: SiSpring, color: "text-green-600" },
        { name: "Python", icon: FaPython, color: "text-blue-500" },
        { name: "Node.js", icon: FaNode, color: "text-green-600" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-600" },
        { name: "MongoDB", icon: SiMongodb, color: "text-green-500" }
      ]
    },
    {
      title: "Data Engineering",
      skills: [
        { name: "Apache Spark", icon: SiApachespark, color: "text-orange-500" },
        { name: "Hadoop", icon: SiApache, color: "text-yellow-600" },
        { name: "Pandas", icon: SiPandas, color: "text-blue-600" },
        { name: "NumPy", icon: SiNumpy, color: "text-blue-500" },
        { name: "Jupyter", icon: SiJupyter, color: "text-orange-500" },
        { name: "PySpark", icon: FaPython, color: "text-orange-600" }
      ]
    },
    {
      title: "Frontend & Tools",
      skills: [
        { name: "React", icon: FaReact, color: "text-blue-500" },
        { name: "JavaScript", icon: FaJs, color: "text-yellow-500" },
        { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
        { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-500" },
        { name: "Bootstrap", icon: FaCss3Alt, color: "text-purple-600" }
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Docker", icon: FaDocker, color: "text-blue-500" },
        { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
        { name: "GitHub", icon: FaGithub, color: "text-gray-800" },
        { name: "Maven", icon: SiApache, color: "text-red-500" },
        { name: "Linux", icon: FaLinux, color: "text-gray-800" },
        { name: "Vite", icon: SiVite, color: "text-purple-500" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-dark-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-50 mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-accent-gradient mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const [ref, isVisible] = useScrollAnimation(0.1);
            return (
            <div 
              key={category.title} 
              ref={ref}
              className={`bg-dark-card rounded-xl shadow-dark-lg p-8 hover:shadow-glow-purple 
                       transition-all duration-300 border border-gray-700 hover:border-accent-purple-light/50
                       ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className="text-xl font-bold text-gray-50 mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill) => {
                  const IconComponent = skill.icon;
                  return (
                    <div 
                      key={skill.name}
                      className="flex flex-col items-center p-4 rounded-lg hover:bg-dark-tertiary 
                               transition-all duration-300 group cursor-pointer hover:scale-105"
                    >
                      <IconComponent 
                        className={`text-3xl mb-2 ${skill.color} group-hover:scale-110 
                                  transition-transform duration-300 filter group-hover:drop-shadow-lg`} 
                      />
                      <span className="text-sm font-medium text-gray-300 text-center group-hover:text-gray-50">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            );
          })}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-gray-50 mb-6">
            Currently Learning
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Next.js', 'GraphQL', 'AWS', 'Kubernetes', 'Redis', 'Socket.io'].map((skill) => (
              <span 
                key={skill}
                className="px-4 py-2 bg-accent-gradient text-white rounded-full text-sm font-medium 
                         hover:scale-105 transition-transform duration-300 cursor-pointer shadow-glow-purple"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;