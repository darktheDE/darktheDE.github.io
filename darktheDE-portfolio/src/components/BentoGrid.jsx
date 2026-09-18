import { useMemo, useState, useEffect } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiDatabase, FiExternalLink, FiGithub, FiLayers, FiShield, FiTarget, FiUser, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { projects } from '../data/projectsData';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/config';
import { cn } from '../utils/cn';
import { trackFilter, trackProjectInteraction, trackOutboundLink } from '../utils/analytics';

const profileImages = [
    '/assets/profile/profile01.png',
    '/assets/profile/profile02.jpg',
    '/assets/profile/profile03.jpg',
    '/assets/profile/profile04.jpg',
    '/assets/profile/profile05.jpg',
    '/assets/profile/profile06.jpg',
    '/assets/profile/profile07.jpg',
    '/assets/profile/profile08.jpg',
    '/assets/profile/profile09.jpg',
];

const operatingProfile = [
    { title: 'ITGC & Controls' },
    { title: 'Audit Analytics' },
    { title: 'ERP & Pipeline Audit' },
];

const projectFilters = ['All', 'Data Integrity & Risk', 'Access Control & Security', 'Pipeline Governance', 'AI System Governance'];

const BentoItem = ({ className, children, delay = 0, id }) => (
    <Motion.div
        id={id}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, delay }}
        className={cn(
            'relative scroll-mt-28 overflow-hidden rounded-xl border border-white/10 bg-card p-6 backdrop-blur-md transition-all duration-500 hover:border-primary/40',
            className
        )}
    >
        {children}
    </Motion.div>
);

const SectionLabel = ({ icon, children }) => (
    <div className="mb-5 flex items-center gap-2 text-primary">
        {icon}
        <span className="font-mono text-xs uppercase tracking-[0.22em] font-bold">{children}</span>
    </div>
);

const BentoGrid = () => {
    const [currentImageIdx, setCurrentImageIdx] = useState(0);
    const [activeFilter, setActiveFilter] = useState('All');
    const [selectedProjectIdx, setSelectedProjectIdx] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIdx((prev) => (prev + 1) % profileImages.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setSelectedProjectIdx(null);
    }, [activeFilter]);

    const filteredProjects = useMemo(() => {
        if (activeFilter === 'All') return projects;
        return projects.filter((project) => project.categoryTag === activeFilter);
    }, [activeFilter]);

    const featuredProject = filteredProjects[0] ?? projects[0];
    const supportingProjects = filteredProjects.slice(1);

    const selectedProject = selectedProjectIdx !== null ? filteredProjects[selectedProjectIdx] : null;
    const closeProjectLightbox = () => setSelectedProjectIdx(null);
    const goPrevProject = () => setSelectedProjectIdx((prev) => (prev > 0 ? prev - 1 : filteredProjects.length - 1));
    const goNextProject = () => setSelectedProjectIdx((prev) => (prev < filteredProjects.length - 1 ? prev + 1 : 0));

    return (
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8" id="about">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-6">
                {/* About / Operating Profile */}
                <BentoItem id="profile-summary" className="md:col-span-4 lg:col-span-4">
                    <div className="grid gap-7 sm:grid-cols-[180px_1fr] sm:items-center">
                        <div className="mx-auto w-full max-w-[180px]">
                            <div className="relative aspect-square overflow-hidden rounded-lg border border-primary/30 bg-slate-950 shadow-2xl shadow-black/30">
                                <AnimatePresence mode="wait">
                                    <Motion.img
                                        key={currentImageIdx}
                                        src={profileImages[currentImageIdx]}
                                        alt="DO KIEN HUNG Profile"
                                        loading="lazy"
                                        decoding="async"
                                        initial={{ opacity: 0, scale: 1.04 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.98 }}
                                        transition={{ duration: 0.45 }}
                                        className="h-full w-full object-cover"
                                    />
                                </AnimatePresence>
                                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                            </div>
                        </div>

                        <div>
                            <SectionLabel icon={<FiUser className="h-5 w-5" />}>About Me</SectionLabel>
                            <h2 className="max-w-2xl text-2xl font-black leading-tight text-white sm:text-3xl">
                                Applying data engineering foundations to IT audit & internal controls.
                            </h2>
                            <p className="mt-3 text-sm leading-relaxed text-text-muted">
                                Final-year Data Engineering student at HCM-UTE with experience in database systems, data pipelines, and software planning. Now focusing on IT General Controls (ITGC), system flows, and audit analytics.
                            </p>
                            <div className="mt-5 grid gap-3 sm:grid-cols-3">
                                {operatingProfile.map((item) => (
                                    <div key={item.title} className="rounded-lg border border-white/10 bg-white/[0.035] p-3.5 flex items-center justify-center min-h-[58px]">
                                        <h3 className="text-xs font-bold text-white text-center font-mono">{item.title}</h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </BentoItem>

                {/* Key Signals */}
                <BentoItem className="md:col-span-2 lg:col-span-2">
                    <SectionLabel icon={<FiTarget className="h-5 w-5" />}>Key Signals</SectionLabel>
                    <div className="grid grid-cols-2 gap-3">
                        {PERSONAL_INFO.metrics.map((metric) => (
                            <div key={metric.label} className="rounded-lg border border-white/10 bg-slate-950/60 p-3.5">
                                <div className="font-mono text-2xl font-bold text-white">{metric.value}</div>
                                <div className="mt-1 text-[10px] uppercase tracking-[0.16em] text-text-muted">{metric.label}</div>
                            </div>
                        ))}
                        <a
                          href={SOCIAL_LINKS.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          onClick={() => trackOutboundLink(SOCIAL_LINKS.linkedin, 'LinkedIn Profile (Bento)')}
                          className="group col-span-2 flex items-center justify-between rounded-lg border border-primary/25 bg-primary/10 p-3.5 text-primary transition-colors hover:bg-primary/20"
                        >
                            <span className="font-semibold text-xs font-mono uppercase tracking-wider">Connect on LinkedIn</span>
                            <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                        </a>
                    </div>
                </BentoItem>

                {/* Selected Projects Header */}
                <div id="projects" className="scroll-mt-28 md:col-span-4 lg:col-span-6 mt-4">
                    <Motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        className="mb-5 flex flex-col justify-between gap-5 border-y border-white/10 py-6 sm:flex-row sm:items-end"
                    >
                        <div>
                            <SectionLabel icon={<FiLayers className="h-5 w-5" />}>Selected Projects</SectionLabel>
                            <h2 className="text-3xl font-black text-white tracking-tight">
                                Systems & Project Case Studies
                            </h2>
                            <p className="mt-2 text-sm text-text-muted">
                                4 core systems demonstrating technical implementation with attention to data integrity, access control, and system governance.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {projectFilters.map((filter) => (
                                <button
                                    key={filter}
                                    onClick={() => {
                                      setActiveFilter(filter);
                                      trackFilter(filter);
                                    }}
                                    className={cn(
                                        'rounded border px-3 py-1.5 text-xs font-semibold transition-colors font-mono',
                                        activeFilter === filter
                                            ? 'border-primary bg-primary text-slate-950 shadow-sm shadow-primary/30'
                                            : 'border-white/10 bg-white/[0.03] text-text-muted hover:border-primary/40 hover:text-white'
                                    )}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>
                    </Motion.div>
                </div>

                {/* Featured Project */}
                {featuredProject && (
                    <BentoItem className="md:col-span-4 lg:col-span-6 p-0 overflow-hidden" delay={0.1}>
                        <div className="grid h-full md:grid-cols-[1.1fr_0.9fr]">
                            <button
                                type="button"
                                onClick={() => {
                                  setSelectedProjectIdx(0);
                                  trackProjectInteraction(featuredProject.title, 'view');
                                }}
                                className="relative min-h-[300px] overflow-hidden w-full text-left cursor-zoom-in group"
                            >
                                <img src={featuredProject.image} alt={featuredProject.title} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/35 to-transparent" />
                                <div className="absolute left-5 top-5 rounded border border-primary/40 bg-slate-950/90 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-primary shadow-lg backdrop-blur-md">
                                    ★ Featured · {featuredProject.auditBadge}
                                </div>
                            </button>

                            <div className="flex flex-col p-6 sm:p-8">
                                <div className="mb-3 flex items-center gap-2 text-primary">
                                    <FiShield className="h-4 w-4 shrink-0" />
                                    <span className="font-mono text-[11px] uppercase tracking-wider font-bold">{featuredProject.categoryTag}</span>
                                </div>
                                <h3 className="text-2xl font-black leading-tight text-white">{featuredProject.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-text-muted">{featuredProject.description}</p>

                                {/* Audit Perspective Highlight Box */}
                                <div className="mt-4 rounded-lg border border-primary/20 bg-primary/5 p-3 text-xs leading-relaxed text-text-light">
                                    <span className="font-mono font-bold text-primary block mb-1">Assurance / Control Lens:</span>
                                    {featuredProject.auditPerspective.slice(0, 180)}...
                                </div>

                                <div className="mt-4 flex flex-wrap gap-1.5">
                                    {featuredProject.tags.slice(0, 5).map((tag) => (
                                        <span key={tag} className="rounded border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-mono text-text-muted">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-auto flex gap-4 pt-6">
                                    <button
                                      type="button"
                                      onClick={() => setSelectedProjectIdx(0)}
                                      className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-primary hover:underline"
                                    >
                                        <FiExternalLink /> View Case & Audit Details
                                    </button>
                                    <a
                                      href={featuredProject.repoUrl}
                                      target="_blank"
                                      rel="noreferrer"
                                      onClick={() => trackProjectInteraction(featuredProject.title, 'click_source')}
                                      className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-text-muted transition-colors hover:text-white"
                                    >
                                        <FiGithub /> Source Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    </BentoItem>
                )}

                {/* Supporting Projects */}
                {supportingProjects.map((project, idx) => (
                    <BentoItem
                        key={project.id}
                        className="md:col-span-2 lg:col-span-2 flex flex-col p-0 overflow-hidden"
                        delay={0.15 + idx * 0.08}
                    >
                        <button
                            type="button"
                            onClick={() => {
                              setSelectedProjectIdx(idx + 1);
                              trackProjectInteraction(project.title, 'view');
                            }}
                            className="relative block h-44 w-full overflow-hidden text-left cursor-zoom-in group"
                        >
                            <img src={project.image} alt={project.title} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/45 to-transparent" />
                            <span className="absolute right-3 top-3 rounded border border-primary/30 bg-slate-950/80 px-2.5 py-0.5 font-mono text-[10px] text-primary">
                                {project.auditBadge}
                            </span>
                        </button>
                        <div className="flex flex-1 flex-col p-5">
                            <div className="text-[10px] font-mono uppercase tracking-wider text-primary font-bold mb-1">
                                {project.categoryTag}
                            </div>
                            <h3 className="text-base font-bold leading-snug text-white">{project.title}</h3>
                            <p className="mt-2 line-clamp-2 text-xs leading-5 text-text-muted">{project.description}</p>
                            
                            <div className="mt-3 flex flex-wrap gap-1.5">
                                {project.tags.slice(0, 3).map((tag) => (
                                    <span key={tag} className="rounded border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10px] font-mono text-text-muted">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="mt-auto flex gap-4 pt-4 border-t border-white/5">
                                <button
                                  type="button"
                                  onClick={() => setSelectedProjectIdx(idx + 1)}
                                  className="inline-flex items-center gap-1 text-xs font-mono text-primary hover:underline"
                                >
                                    <FiExternalLink /> Audit Lens
                                </button>
                                <a
                                  href={project.repoUrl}
                                  target="_blank"
                                  rel="noreferrer"
                                  onClick={() => trackProjectInteraction(project.title, 'click_source')}
                                  className="inline-flex items-center gap-1 text-xs font-mono text-text-muted transition-colors hover:text-white"
                                >
                                    <FiGithub /> Source
                                </a>
                            </div>
                        </div>
                    </BentoItem>
                ))}
            </div>

            {/* Project Lightbox with Audit Perspective */}
            <AnimatePresence>
                {selectedProject && (
                    <Motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-md overflow-y-auto"
                        onClick={closeProjectLightbox}
                    >
                        <Motion.div
                            initial={{ scale: 0.92, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.92, opacity: 0 }}
                            transition={{ type: 'spring', damping: 25 }}
                            className="relative w-full max-w-3xl rounded-xl bg-slate-950 border border-white/15 p-6 sm:p-8 flex flex-col gap-5 shadow-2xl overflow-y-auto max-h-[92vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg border border-white/10 bg-slate-900">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    decoding="async"
                                    className="h-full w-full object-cover"
                                />
                                <span className="absolute right-4 top-4 rounded border border-primary/40 bg-slate-950/90 px-3 py-1 font-mono text-xs text-primary shadow-lg">
                                    {selectedProject.auditBadge}
                                </span>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center gap-2 text-primary">
                                    <FiShield className="h-4 w-4" />
                                    <span className="font-mono text-xs font-bold uppercase tracking-wider">{selectedProject.categoryTag}</span>
                                </div>
                                <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                                    {selectedProject.title}
                                </h3>
                                <p className="text-sm leading-relaxed text-text-muted">
                                    {selectedProject.description}
                                </p>
                            </div>

                            {/* Prominent IT Audit Perspective Box */}
                            <div className="rounded-lg border border-primary/30 bg-primary/10 p-5 space-y-2">
                                <div className="flex items-center gap-2 text-primary font-mono text-xs font-bold uppercase tracking-wider">
                                    <FiShield className="h-4 w-4 shrink-0" />
                                    <span>IT Audit & Technology Risk Lens:</span>
                                </div>
                                <p className="text-xs sm:text-sm leading-relaxed text-text-light">
                                    {selectedProject.auditPerspective}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {selectedProject.tags.map((tag) => (
                                    <span key={tag} className="rounded border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-mono text-text-muted">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-2 flex flex-wrap gap-4 border-t border-white/10 pt-4">
                                <a
                                    href={selectedProject.liveUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    onClick={() => trackProjectInteraction(selectedProject.title, 'click_case_study', { location: 'lightbox' })}
                                    className="inline-flex items-center gap-2 rounded bg-primary px-5 py-2.5 text-xs font-mono font-semibold text-slate-950 shadow-lg shadow-primary/20 transition-all hover:bg-emerald-400 hover:shadow-primary/30"
                                >
                                    <FiExternalLink /> Live Platform / Dashboard
                                </a>
                                <a
                                    href={selectedProject.repoUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    onClick={() => trackProjectInteraction(selectedProject.title, 'click_source', { location: 'lightbox' })}
                                    className="inline-flex items-center gap-2 rounded border border-white/10 bg-white/[0.03] px-5 py-2.5 text-xs font-mono font-semibold text-text-muted backdrop-blur-md transition-all hover:border-white/20 hover:text-white"
                                >
                                    <FiGithub /> Source Code
                                </a>
                            </div>

                            <button
                                onClick={closeProjectLightbox}
                                className="absolute top-4 right-4 rounded-full bg-white/10 p-2 text-text-muted transition-colors hover:text-white hover:bg-white/20"
                                aria-label="Close"
                            >
                                <FiX className="h-5 w-5" />
                            </button>

                            {/* Navigation Arrows */}
                            <button
                                onClick={(e) => { e.stopPropagation(); goPrevProject(); }}
                                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/80 border border-white/10 p-2.5 text-text-muted backdrop-blur-sm transition-colors hover:text-white hover:border-primary hidden md:block"
                                aria-label="Previous"
                            >
                                <FiChevronLeft className="h-5 w-5" />
                            </button>
                            <button
                                onClick={(e) => { e.stopPropagation(); goNextProject(); }}
                                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/80 border border-white/10 p-2.5 text-text-muted backdrop-blur-sm transition-colors hover:text-white hover:border-primary hidden md:block"
                                aria-label="Next"
                            >
                                <FiChevronRight className="h-5 w-5" />
                            </button>
                        </Motion.div>
                    </Motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default BentoGrid;
