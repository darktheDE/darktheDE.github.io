import { useState, useEffect } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiUser, FiCode, FiLayers } from 'react-icons/fi';
import { skillCategories } from '../data/skills';
import { projects } from '../data/projectsData';
import { PERSONAL_INFO, SOCIAL_LINKS, ASSETS } from '../data/config';
import { cn } from '../utils/cn';

const profileImages = [
    '/assets/profile/profile01.png',
    '/assets/profile/profile02.jpg',
    '/assets/profile/profile03.jpg',
    '/assets/profile/profile04.jpg',
    '/assets/profile/profile05.jpg',
    '/assets/profile/profile06.jpg',
    '/assets/profile/profile07.jpg',
];

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
    const [currentImageIdx, setCurrentImageIdx] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIdx((prev) => (prev + 1) % profileImages.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20" id="bento">
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[minmax(180px,auto)]">

                {/* About Me - Large Tile */}
                <BentoItem id="about" className="md:col-span-4 lg:col-span-4 row-span-2 flex flex-col md:flex-row gap-8 items-center bg-gradient-to-br from-card to-primary/5">
                    <div className="w-full md:w-1/3 shrink-0">
                        <div className="aspect-square rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl relative group-hover:scale-105 transition-transform duration-500">
                            <AnimatePresence mode="wait">
                                <Motion.img
                                    key={currentImageIdx}
                                    src={profileImages[currentImageIdx]}
                                    alt="Profile"
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    transition={{ duration: 0.5 }}
                                    className="w-full h-full object-cover"
                                />
                            </AnimatePresence>
                            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
                        </div>
                    </div>
                    <div className="flex-1 space-y-4">
                        <div className="flex items-center gap-2 text-primary mb-2">
                            <FiUser className="w-5 h-5" />
                            <span className="font-mono text-sm tracking-wider uppercase">About Me</span>
                        </div>
                        <h2 className="text-2xl md:text-4xl font-bold text-text-light font-mono tracking-tighter">
                            Hi, I'm <span className="text-primary text-glow">{PERSONAL_INFO.name}</span>
                        </h2>
                        <div className="text-text-muted text-sm leading-relaxed space-y-2">
                            <p>
                                I am a <b>Data Engineering student</b> at <b>HCM-UTE</b>. I have a deep passion for how data moves and transforms to create value.
                            </p>
                            <p>
                                As the <b>Vice Leader & Co-Founder of HCMUTE RTIC</b>, I lead academic initiatives and technical workshops to foster innovation.
                            </p>
                            <p>
                                I specialize in building <b>Medallion Architectures</b>, distributed systems, and leveraging <b>Agentic AI</b> to optimize development workflows.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-2 pt-2">
                            {['Data Engineering', 'Backend', 'AI Agents', 'RTIC Vice Leader'].map(tag => (
                                <span key={tag} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-mono border border-primary/20 hover:bg-primary/20 transition-colors">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </BentoItem>

                {/* Quick Stats / Socials - Vertical */}
                <BentoItem className="md:col-span-2 lg:col-span-2 row-span-2 flex flex-col justify-center gap-6 bg-slate-900/50">
                    <div className="text-center space-y-3 relative group/gpa">
                        <div className="text-6xl font-bold font-mono tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-primary to-blue-500 drop-shadow-sm">
                            8.41
                        </div>
                        <div className="text-[10px] text-text-muted uppercase tracking-[0.4em] font-mono font-bold">Current GPA</div>
                        
                        {/* GPA Sparkline Decoration */}
                        <div className="flex justify-center items-end gap-[2px] h-8 mt-2 opacity-50 group-hover/gpa:opacity-100 transition-opacity">
                            {[0.4, 0.6, 0.5, 0.8, 0.7, 0.9, 0.85, 1.0].map((h, i) => (
                                <Motion.div
                                    key={i}
                                    initial={{ height: 0 }}
                                    animate={{ height: `${h * 100}%` }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="w-2 bg-primary/40 rounded-t-sm"
                                />
                            ))}
                        </div>
                    </div>
                    
                    <div className="h-px bg-white/5 w-2/3 mx-auto"></div>
                    
                    <div className="grid grid-cols-2 gap-4 px-2">
                        <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="flex flex-col items-center p-4 rounded-2xl bg-slate-800/50 hover:bg-primary/10 border border-white/5 hover:border-primary/30 transition-all cursor-pointer group">
                            <FiGithub className="w-6 h-6 text-text-muted group-hover:text-primary mb-2 transition-colors" />
                            <span className="text-[10px] font-mono uppercase tracking-wider text-text-muted group-hover:text-text-light">GitHub</span>
                        </a>
                        <a href="#projects" className="flex flex-col items-center p-4 rounded-2xl bg-slate-800/50 hover:bg-primary/10 border border-white/5 hover:border-primary/30 transition-all cursor-pointer group">
                            <FiLayers className="w-6 h-6 text-text-muted group-hover:text-primary mb-2 transition-colors" />
                            <span className="text-[10px] font-mono uppercase tracking-wider text-text-muted group-hover:text-text-light">Projects</span>
                        </a>
                    </div>
                </BentoItem>


                {/* Skills Marquee / Grid */}
                <BentoItem id="stack" className="md:col-span-6 lg:col-span-6 row-span-auto bg-slate-900/40 p-8 border-white/5">
                    <div className="flex items-center gap-2 text-primary mb-8">
                        <FiCode className="w-5 h-5" />
                        <span className="font-mono text-sm tracking-wider uppercase">Core Technical Stack</span>
                    </div>
                    <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-y-10 gap-x-6">
                        {skillCategories.flatMap(cat => cat.skills).slice(0, 24).map((skill, idx) => (
                            <div key={idx} className="flex flex-col items-center gap-3 group/icon">
                                <div className="p-3 rounded-2xl bg-slate-800/50 group-hover/icon:bg-primary/10 transition-all duration-300 border border-white/5 group-hover/icon:border-primary/20">
                                    <skill.icon className={cn("w-8 h-8 transition-all duration-300 group-hover/icon:scale-110", skill.color)} />
                                </div>
                                <span className="text-[10px] font-mono text-text-muted uppercase tracking-tight opacity-60 group-hover/icon:opacity-100 transition-opacity text-center line-clamp-1">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </BentoItem>


                {/* Projects Area */}
                {projects.slice(0, 7).map((project, idx) => (
                    <BentoItem 
                        id={idx === 0 ? "projects" : undefined} 
                        key={project.id} 
                        className={cn(
                            "md:col-span-2 lg:col-span-2 row-span-2 flex flex-col p-0 group/project",
                            idx === 0 ? "lg:col-span-4 md:col-span-4" : ""
                        )} 
                        delay={0.2 + idx * 0.1}
                    >
                        <a href={project.liveUrl !== '#' ? project.liveUrl : project.repoUrl} target="_blank" rel="noreferrer" className="h-48 overflow-hidden relative block cursor-pointer">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover/project:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
                            <div className="absolute top-4 right-4 z-20">
                                <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-primary text-[10px] font-mono font-bold border border-primary/30 shadow-xl">
                                    {project.categoryTag}
                                </span>
                            </div>
                            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                                <div className="flex gap-2">
                                    {project.tags.slice(0, 3).map((tag, i) => (
                                        <span key={i} className="text-[10px] bg-primary/20 text-primary px-2 py-1 rounded border border-primary/20 backdrop-blur-sm">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </a>
                        <div className="p-6 flex-1 flex flex-col">
                            <h3 className="text-xl font-bold text-text-light mb-2 line-clamp-1">{project.title}</h3>
                            <p className="text-text-muted text-sm line-clamp-2 md:line-clamp-3 mb-4">{project.description}</p>
                            <div className="mt-auto flex gap-4">
                                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-xs font-mono text-primary hover:underline">
                                    <FiExternalLink /> Live
                                </a>
                                <a href={project.repoUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-xs font-mono text-text-muted hover:text-white transition-colors">
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
                        <span className="font-bold text-text-light">Full Portfolio</span>
                        <p className="text-xs text-text-muted mt-1">Visit my GitHub</p>
                    </a>
                </BentoItem>

            </div>
        </section>
    );
};

export default BentoGrid;

