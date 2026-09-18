import { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiCheck, FiChevronLeft, FiChevronRight, FiExternalLink, FiGithub, FiLayers, FiX } from 'react-icons/fi';
import { projects } from '../data/projectsData';
import { cn } from '../utils/cn';
import { trackProjectInteraction } from '../utils/analytics';

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
    <div className="mb-3 flex items-center gap-2 text-primary">
        {icon}
        <span className="font-mono text-xs uppercase tracking-[0.22em] font-bold">{children}</span>
    </div>
);

const ProjectsSection = () => {
    const [selectedProjectIdx, setSelectedProjectIdx] = useState(null);

    const featuredProject = projects[0];
    const supportingProjects = projects.slice(1);

    const selectedProject = selectedProjectIdx !== null ? projects[selectedProjectIdx] : null;
    const closeProjectLightbox = () => setSelectedProjectIdx(null);
    const goPrevProject = () => setSelectedProjectIdx((prev) => (prev > 0 ? prev - 1 : projects.length - 1));
    const goNextProject = () => setSelectedProjectIdx((prev) => (prev < projects.length - 1 ? prev + 1 : 0));

    return (
        <section className="mx-auto max-w-7xl scroll-mt-28 px-4 py-16 sm:px-6 lg:px-8" id="projects">
            {/* Header */}
            <Motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                className="mb-8 border-b border-white/10 pb-6"
            >
                <SectionLabel icon={<FiLayers className="h-5 w-5" />}>Selected Projects</SectionLabel>
                <h2 className="text-3xl font-black text-white tracking-tight sm:text-4xl">
                    Systems & Technical Case Studies
                </h2>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-text-muted">
                    Core systems showcasing practical engineering in financial data warehousing, e-commerce web architecture, lakehouse pipelines, and LLM optimization.
                </p>
            </Motion.div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-4 lg:grid-cols-6">
                {/* Featured Project */}
                {featuredProject && (
                    <BentoItem className="md:col-span-4 lg:col-span-6 p-0 overflow-hidden" delay={0.1}>
                        <div className="grid h-full md:grid-cols-[1.15fr_0.85fr]">
                            <button
                                type="button"
                                onClick={() => {
                                    setSelectedProjectIdx(0);
                                    trackProjectInteraction(featuredProject.title, 'view');
                                }}
                                className="relative min-h-[300px] overflow-hidden w-full text-left cursor-zoom-in group"
                            >
                                <img
                                    src={featuredProject.image}
                                    alt={featuredProject.title}
                                    loading="lazy"
                                    decoding="async"
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                                <div className="absolute left-5 top-5 rounded border border-primary/40 bg-slate-950/90 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-primary shadow-lg backdrop-blur-md">
                                    ★ Featured Project
                                </div>
                            </button>

                            <div className="flex flex-col p-6 sm:p-8">
                                <h3 className="text-2xl font-black leading-tight text-white">{featuredProject.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-text-muted">{featuredProject.description}</p>

                                <div className="mt-5 flex flex-wrap gap-1.5">
                                    {featuredProject.tags.map((tag) => (
                                        <span key={tag} className="rounded border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-mono text-text-muted">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-auto flex flex-wrap items-center gap-4 pt-6">
                                    <button
                                        type="button"
                                        onClick={() => setSelectedProjectIdx(0)}
                                        className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-primary hover:underline"
                                    >
                                        <FiExternalLink /> View Project Details
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
                            <img
                                src={project.image}
                                alt={project.title}
                                loading="lazy"
                                decoding="async"
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/45 to-transparent" />
                        </button>
                        <div className="flex flex-1 flex-col p-5">
                            <h3 className="text-base font-bold leading-snug text-white">{project.title}</h3>
                            <p className="mt-2 line-clamp-2 text-xs leading-5 text-text-muted">{project.description}</p>

                            <div className="mt-3 flex flex-wrap gap-1.5">
                                {project.tags.slice(0, 4).map((tag) => (
                                    <span key={tag} className="rounded border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10px] font-mono text-text-muted">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="mt-auto flex items-center gap-4 pt-4 border-t border-white/5">
                                <button
                                    type="button"
                                    onClick={() => setSelectedProjectIdx(idx + 1)}
                                    className="inline-flex items-center gap-1.5 text-xs font-mono text-primary hover:underline"
                                >
                                    <FiExternalLink /> Details
                                </button>
                                <a
                                    href={project.repoUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    onClick={() => trackProjectInteraction(project.title, 'click_source')}
                                    className="inline-flex items-center gap-1.5 text-xs font-mono text-text-muted transition-colors hover:text-white"
                                >
                                    <FiGithub /> Source
                                </a>
                            </div>
                        </div>
                    </BentoItem>
                ))}
            </div>

            {/* Project Lightbox Modal */}
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
                                {selectedProject.featuredBadge && (
                                    <span className="absolute left-4 top-4 rounded border border-primary/40 bg-slate-950/90 px-3 py-1 font-mono text-xs text-primary shadow-lg">
                                        ★ {selectedProject.featuredBadge}
                                    </span>
                                )}
                            </div>

                            <div className="space-y-3">
                                <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                                    {selectedProject.title}
                                </h3>
                                <p className="text-sm leading-relaxed text-text-muted">
                                    {selectedProject.description}
                                </p>
                            </div>

                            {/* Key Implementation Details */}
                            {selectedProject.highlights && selectedProject.highlights.length > 0 && (
                                <div className="rounded-lg border border-white/10 bg-white/[0.03] p-5 space-y-3">
                                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-primary block">
                                        Key Implementation Highlights:
                                    </span>
                                    <ul className="space-y-2">
                                        {selectedProject.highlights.map((highlight, hIdx) => (
                                            <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-text-light leading-relaxed">
                                                <FiCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                                                <span>{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

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
                                    <FiExternalLink /> Live Platform / Link
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

export default ProjectsSection;
