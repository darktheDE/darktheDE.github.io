import { motion as Motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiUser, FiCode, FiLayers } from 'react-icons/fi';
import { skillCategories } from '../data/skills';
import { projects } from '../data/projectsData';
import { PERSONAL_INFO, SOCIAL_LINKS, ASSETS } from '../data/config';
import { cn } from '../utils/cn';

const BentoItem = ({ className, children, delay = 0, id }) => (
    <Motion.div
        id={id}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className={cn(
            "bg-card backdrop-blur-md border border-white/5 rounded-3xl p-6 overflow-hidden relative group hover:border-primary/20 transition-all duration-500",
            className
        )}
    >
        {children}
    </Motion.div>
);

const BentoGrid = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20" id="bento">
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[minmax(180px,auto)]">

                {/* About Me - Large Tile */}
                <BentoItem id="about" className="md:col-span-4 lg:col-span-4 row-span-2 flex flex-col md:flex-row gap-8 items-center bg-gradient-to-br from-card to-primary/5">
                    <div className="w-full md:w-1/3 shrink-0">
                        <div className="aspect-square rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl relative group-hover:scale-105 transition-transform duration-500">
                            <img src={ASSETS.profileImage} alt="Profile" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
                        </div>
                    </div>
                    <div className="flex-1 space-y-4">
                        <div className="flex items-center gap-2 text-primary mb-2">
                            <FiUser className="w-5 h-5" />
                            <span className="font-mono text-sm tracking-wider uppercase">About Me</span>
                        </div>
                        <h2 className="text-3xl font-bold text-text-light">
                            Hello, I'm <span className="text-primary text-glow">{PERSONAL_INFO.name}</span>
                        </h2>
                        <p className="text-text-muted leading-relaxed">
                            I'm an <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary font-bold">AI Enthusiast</span> who stays up-to-date with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary font-bold">AI Agents</span> to optimize my workflow, development, and learning.
                            <br />
                            I'm a Third-year <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary font-bold">Data Engineering</span> student at HCMUTE, passionate about <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary font-bold">Big Data Processing</span>, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary font-bold">Backend Development</span>, and <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary font-bold">Business Analysis</span>.
                            <br />Currently serving as the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary font-bold">Vice Leader of HCMUTE RTIC</span>.
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                            {['PM', 'BA', 'DE', 'Software (Web - BE)'].map(tag => (
                                <span key={tag} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono border border-primary/20 hover:bg-primary/20 transition-colors">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </BentoItem>

                {/* Quick Stats / Socials - Vertical */}
                <BentoItem className="md:col-span-2 lg:col-span-2 row-span-2 flex flex-col justify-center gap-4 bg-dark">
                    <div className="text-center space-y-2">
                        <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">3+</div>
                        <div className="text-sm text-text-muted uppercase tracking-widest">Years of Coding and Passion</div>
                    </div>
                    <div className="h-px bg-white/10 w-1/2 mx-auto my-2"></div>
                    <div className="grid grid-cols-2 gap-3">
                        <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="flex flex-col items-center p-3 rounded-xl bg-white/5 hover:bg-primary/20 transition-colors cursor-pointer group">
                            <FiGithub className="w-6 h-6 text-text-light group-hover:text-primary mb-1" />
                            <span className="text-xs text-text-muted">GitHub</span>
                        </a>
                        <a href="#projects" className="flex flex-col items-center p-3 rounded-xl bg-white/5 hover:bg-primary/20 transition-colors cursor-pointer group">
                            <FiLayers className="w-6 h-6 text-text-light group-hover:text-primary mb-1" />
                            <span className="text-xs text-text-muted">Projects</span>
                        </a>
                    </div>
                </BentoItem>

                {/* Skills Marquee / Grid */}
                <BentoItem id="stack" className="md:col-span-6 lg:col-span-6 row-span-auto bg-dark/50 p-8">
                    <div className="flex items-center gap-2 text-primary mb-6">
                        <FiCode className="w-5 h-5" />
                        <span className="font-mono text-sm tracking-wider uppercase">Tech Stack</span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-6">
                        {skillCategories.flatMap(cat => cat.skills).slice(0, 16).map((skill, idx) => (
                            <div key={idx} className="flex flex-col items-center gap-2 group/icon">
                                <skill.icon className={cn("w-8 h-8 transition-all duration-300 group-hover/icon:scale-110 group-hover/icon:drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]", skill.color)} />
                                <span className="text-[10px] text-text-muted uppercase tracking-wide opacity-0 group-hover/icon:opacity-100 transition-opacity absolute -bottom-4">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </BentoItem>

                {/* Projects Area */}
                {projects.slice(0, 3).map((project, idx) => (
                    <BentoItem id={idx === 0 ? "projects" : undefined} key={project.id} className={cn("md:col-span-2 lg:col-span-2 row-span-2 flex flex-col p-0 group/project", idx === 0 ? "lg:col-span-4 md:col-span-4" : "")} delay={0.2 + idx * 0.1}>
                        <div className="h-48 overflow-hidden relative">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover/project:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                                <div className="flex gap-2">
                                    {project.tags.slice(0, 2).map((tag, i) => (
                                        <span key={i} className="text-[10px] bg-primary/20 text-primary px-2 py-1 rounded border border-primary/20 backdrop-blur-sm">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                            <h3 className="text-xl font-bold text-text-light mb-2">{project.title}</h3>
                            <p className="text-text-muted text-sm line-clamp-2 md:line-clamp-3 mb-4">{project.description}</p>
                            <div className="mt-auto flex gap-3">
                                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-xs font-mono text-primary hover:underline">
                                    {project.liveUrl !== '#' && <><FiExternalLink /> Live Demo</>}
                                    {project.liveUrl === '#' && <span className="text-text-muted cursor-not-allowed flex items-center gap-1"><FiExternalLink /> In Progress</span>}
                                </a>
                                <a href={project.repoUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-xs font-mono text-text-muted hover:text-white">
                                    <FiGithub /> Source
                                </a>
                            </div>
                        </div>
                    </BentoItem>
                ))}

                {/* See More Projects Link */}
                <BentoItem className="md:col-span-2 lg:col-span-2 flex flex-col justify-center items-center bg-primary/5 hover:bg-primary/10 cursor-pointer group">
                    <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="text-center">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                            <FiGithub className="w-6 h-6 text-primary" />
                        </div>
                        <span className="font-bold text-text-light">View All Projects</span>
                        <p className="text-xs text-text-muted mt-1">Visit my GitHub</p>
                    </a>
                </BentoItem>

            </div>
        </section>
    );
};

export default BentoGrid;
