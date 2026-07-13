import { useMemo, useState, useEffect } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiBriefcase, FiCode, FiDatabase, FiExternalLink, FiGithub, FiLayers, FiTarget, FiUser } from 'react-icons/fi';
import { skillCategories } from '../data/skills';
import { projects } from '../data/projectsData';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/config';
import { cn } from '../utils/cn';

const profileImages = [
    '/assets/profile/profile01.png',
    '/assets/profile/profile02.jpg',
    '/assets/profile/profile03.jpg',
    '/assets/profile/profile04.jpg',
    '/assets/profile/profile05.jpg',
    '/assets/profile/profile06.jpg',
    '/assets/profile/profile07.jpg',
    '/assets/profile/profile08.jpg',
];

const operatingProfile = [
    {
        title: 'Data Systems',
        body: 'Designing lakehouse pipelines, DWH models, and analytics layers that make raw data usable.',
    },
    {
        title: 'Backend Thinking',
        body: 'Building services with clear contracts, auth flows, database design, and deployment constraints in mind.',
    },
    {
        title: 'AI Workflow',
        body: 'Using agents and AI-assisted planning to speed up research, documentation, and implementation loops.',
    },
];

const projectFilters = ['All', 'Data Engineering', 'Software Engineering', 'Machine Learning'];

const projectProof = {
    'Data Engineering': 'Pipeline / Architecture',
    'Software Engineering': 'Product / Backend',
    'Machine Learning': 'Experiment / Model',
};

const BentoItem = ({ className, children, delay = 0, id }) => (
    <Motion.div
        id={id}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, delay }}
        className={cn(
            'relative scroll-mt-28 overflow-hidden border border-white/10 bg-card p-6 backdrop-blur-md transition-all duration-500 hover:border-primary/30',
            className
        )}
    >
        {children}
    </Motion.div>
);

const SectionLabel = ({ icon, children }) => (
    <div className="mb-5 flex items-center gap-2 text-primary">
        {icon}
        <span className="font-mono text-xs uppercase tracking-[0.22em]">{children}</span>
    </div>
);

const BentoGrid = () => {
    const [currentImageIdx, setCurrentImageIdx] = useState(0);
    const [activeFilter, setActiveFilter] = useState('All');

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIdx((prev) => (prev + 1) % profileImages.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const filteredProjects = useMemo(() => {
        if (activeFilter === 'All') return projects;
        return projects.filter((project) => project.categoryTag === activeFilter);
    }, [activeFilter]);

    const featuredProject = filteredProjects[0] ?? projects[0];
    const supportingProjects = filteredProjects.slice(1);

    return (
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8" id="bento">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-6">
                <BentoItem id="about" className="md:col-span-4 lg:col-span-4">
                    <div className="grid gap-7 sm:grid-cols-[180px_1fr] sm:items-center">
                        <div className="mx-auto w-full max-w-[180px]">
                            <div className="relative aspect-square overflow-hidden border border-primary/30 bg-slate-950 shadow-2xl shadow-black/30">
                                <AnimatePresence mode="wait">
                                    <Motion.img
                                        key={currentImageIdx}
                                        src={profileImages[currentImageIdx]}
                                        alt="Profile"
                                        loading="lazy"
                                        decoding="async"
                                        initial={{ opacity: 0, scale: 1.04 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.98 }}
                                        transition={{ duration: 0.45 }}
                                        className="h-full w-full object-cover"
                                    />
                                </AnimatePresence>
                                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
                            </div>
                        </div>

                        <div>
                            <SectionLabel icon={<FiUser className="h-5 w-5" />}>Operating Profile</SectionLabel>
                            <h2 className="max-w-2xl text-2xl font-black leading-tight text-white sm:text-3xl">
                                A data engineering learner turning academic projects into production-shaped systems.
                            </h2>
                            <div className="mt-5 grid gap-3 sm:grid-cols-3">
                                {operatingProfile.map((item) => (
                                    <div key={item.title} className="border border-white/10 bg-white/[0.035] p-4">
                                        <h3 className="text-sm font-bold text-white">{item.title}</h3>
                                        <p className="mt-2 text-xs leading-6 text-text-muted">{item.body}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </BentoItem>

                <BentoItem className="md:col-span-2 lg:col-span-2">
                    <SectionLabel icon={<FiTarget className="h-5 w-5" />}>Signal</SectionLabel>
                    <div className="grid grid-cols-2 gap-3">
                        {PERSONAL_INFO.metrics.map((metric) => (
                            <div key={metric.label} className="border border-white/10 bg-slate-950/60 p-4">
                                <div className="font-mono text-3xl font-bold text-white">{metric.value}</div>
                                <div className="mt-2 text-[10px] uppercase tracking-[0.18em] text-text-muted">{metric.label}</div>
                            </div>
                        ))}
                        <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="group col-span-2 flex items-center justify-between border border-primary/20 bg-primary/10 p-4 text-primary transition-colors hover:bg-primary/15">
                            <span className="font-semibold">Open GitHub Portfolio</span>
                            <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                        </a>
                    </div>
                </BentoItem>

                <BentoItem id="stack" className="md:col-span-4 lg:col-span-6">
                    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                        <div>
                            <SectionLabel icon={<FiCode className="h-5 w-5" />}>Technical Stack</SectionLabel>
                            <h2 className="max-w-2xl text-2xl font-black text-white sm:text-3xl">Tools grouped by the work they support.</h2>
                        </div>
                        <p className="max-w-md text-sm leading-6 text-text-muted">
                            The emphasis is on data platforms first, with enough backend and UI range to ship complete products.
                        </p>
                    </div>

                    <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                        {skillCategories.map((category) => (
                            <div key={category.title} className="border border-white/10 bg-slate-950/50 p-5">
                                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{category.title}</h3>
                                <div className="mt-5 grid grid-cols-2 gap-3">
                                    {category.skills.slice(0, 6).map((skill) => (
                                        <div key={skill.name} className="flex items-center gap-2 text-sm text-text-muted">
                                            <skill.icon className={cn('h-5 w-5 shrink-0', skill.color)} />
                                            <span className="min-w-0 text-xs leading-tight sm:text-sm">{skill.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </BentoItem>

                <div id="projects" className="scroll-mt-28 md:col-span-4 lg:col-span-6">
                    <Motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        className="mb-5 flex flex-col justify-between gap-5 border-y border-white/10 py-6 sm:flex-row sm:items-end"
                    >
                        <div>
                            <SectionLabel icon={<FiLayers className="h-5 w-5" />}>Selected Projects</SectionLabel>
                            <h2 className="text-3xl font-black text-white">Case studies over screenshots.</h2>
                            <p className="mt-3 max-w-2xl text-sm leading-6 text-text-muted">
                                Filtered around the kind of work recruiters need to evaluate: architecture, implementation, and project evidence.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {projectFilters.map((filter) => (
                                <button
                                    key={filter}
                                    onClick={() => setActiveFilter(filter)}
                                    className={cn(
                                        'border px-3 py-2 text-xs font-semibold transition-colors',
                                        activeFilter === filter
                                            ? 'border-primary bg-primary text-slate-950'
                                            : 'border-white/10 bg-white/[0.03] text-text-muted hover:border-primary/40 hover:text-white'
                                    )}
                                >
                                    {filter.replace(' Engineering', '')}
                                </button>
                            ))}
                        </div>
                    </Motion.div>
                </div>

                {featuredProject && (
                    <BentoItem className="md:col-span-4 lg:col-span-4 p-0" delay={0.1}>
                        <div className="grid h-full md:grid-cols-[1.1fr_0.9fr]">
                            <a href={featuredProject.liveUrl !== '#' ? featuredProject.liveUrl : featuredProject.repoUrl} target="_blank" rel="noreferrer" className="relative min-h-[280px] overflow-hidden">
                                <img src={featuredProject.image} alt={featuredProject.title} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/35 to-transparent" />
                                <div className="absolute left-5 top-5 border border-primary/30 bg-slate-950/80 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                                    Featured {projectProof[featuredProject.categoryTag] ?? 'Project'}
                                </div>
                            </a>

                            <div className="flex flex-col p-6">
                                <div className="mb-4 flex items-center gap-2 text-primary">
                                    <FiDatabase />
                                    <span className="font-mono text-[10px] uppercase tracking-[0.2em]">{featuredProject.categoryTag}</span>
                                </div>
                                <h3 className="text-2xl font-black leading-tight text-white">{featuredProject.title}</h3>
                                <p className="mt-4 text-sm leading-7 text-text-muted">{featuredProject.description}</p>

                                <div className="mt-5 flex flex-wrap gap-2">
                                    {featuredProject.tags.slice(0, 5).map((tag) => (
                                        <span key={tag} className="border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] text-text-muted">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-auto flex gap-4 pt-6">
                                    <a href={featuredProject.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                                        <FiExternalLink /> Case Study
                                    </a>
                                    <a href={featuredProject.repoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-text-muted transition-colors hover:text-white">
                                        <FiGithub /> Source
                                    </a>
                                </div>
                            </div>
                        </div>
                    </BentoItem>
                )}

                <BentoItem className="md:col-span-2 lg:col-span-2">
                    <SectionLabel icon={<FiBriefcase className="h-5 w-5" />}>Project Lens</SectionLabel>
                    <div className="space-y-4 text-sm leading-7 text-text-muted">
                        <p>
                            Data projects are framed as systems: ingestion, storage, transformation, serving, and the decision layer.
                        </p>
                        <p>
                            Software projects show product delivery range: auth, API design, deployment constraints, and team leadership.
                        </p>
                    </div>
                </BentoItem>

                {supportingProjects.map((project, idx) => (
                    <BentoItem
                        key={project.id}
                        className="md:col-span-2 lg:col-span-2 flex flex-col p-0"
                        delay={0.15 + idx * 0.07}
                    >
                        <a href={project.liveUrl !== '#' ? project.liveUrl : project.repoUrl} target="_blank" rel="noreferrer" className="relative block h-44 overflow-hidden">
                            <img src={project.image} alt={project.title} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/45 to-transparent" />
                            <span className="absolute right-4 top-4 border border-primary/25 bg-slate-950/80 px-3 py-1 font-mono text-[10px] text-primary">
                                {project.categoryTag}
                            </span>
                        </a>
                        <div className="flex flex-1 flex-col p-5">
                            <h3 className="text-lg font-bold leading-tight text-white">{project.title}</h3>
                            <p className="mt-3 line-clamp-3 text-sm leading-6 text-text-muted">{project.description}</p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {project.tags.slice(0, 3).map((tag) => (
                                    <span key={tag} className="border border-white/10 bg-white/[0.04] px-2 py-1 text-[10px] text-text-muted">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="mt-auto flex gap-4 pt-5">
                                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs font-mono text-primary hover:underline">
                                    <FiExternalLink /> Case
                                </a>
                                <a href={project.repoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs font-mono text-text-muted transition-colors hover:text-white">
                                    <FiGithub /> Source
                                </a>
                            </div>
                        </div>
                    </BentoItem>
                ))}
            </div>
        </section>
    );
};

export default BentoGrid;
