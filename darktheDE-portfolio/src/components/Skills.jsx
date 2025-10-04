import { 
  FaReact, FaJs, FaHtml5, FaCss3Alt, FaNode, FaPython, 
  FaGitAlt, FaGithub, FaLinux, FaDocker 
} from 'react-icons/fa';
import { 
  SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql, 
  SiExpress, SiVite, SiFirebase, SiVercel 
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: FaReact, color: "text-blue-500" },
        { name: "JavaScript", icon: FaJs, color: "text-yellow-500" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
        { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
        { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-500" }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: FaNode, color: "text-green-600" },
        { name: "Express", icon: SiExpress, color: "text-gray-700" },
        { name: "Python", icon: FaPython, color: "text-blue-500" },
        { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-600" },
        { name: "Firebase", icon: SiFirebase, color: "text-orange-500" }
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
        { name: "GitHub", icon: FaGithub, color: "text-gray-800" },
        { name: "Vite", icon: SiVite, color: "text-purple-500" },
        { name: "Vercel", icon: SiVercel, color: "text-gray-800" },
        { name: "Docker", icon: FaDocker, color: "text-blue-500" },
        { name: "Linux", icon: FaLinux, color: "text-gray-800" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title} 
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill) => {
                  const IconComponent = skill.icon;
                  return (
                    <div 
                      key={skill.name}
                      className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 
                               transition-colors group cursor-pointer"
                    >
                      <IconComponent 
                        className={`text-3xl mb-2 ${skill.color} group-hover:scale-110 
                                  transition-transform`} 
                      />
                      <span className="text-sm font-medium text-gray-700 text-center">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Currently Learning
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Next.js', 'GraphQL', 'AWS', 'Kubernetes', 'Redis', 'Socket.io'].map((skill) => (
              <span 
                key={skill}
                className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
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