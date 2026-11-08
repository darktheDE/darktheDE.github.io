import { useState, useEffect, useCallback } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { FiCheck, FiChevronLeft, FiChevronRight, FiExternalLink, FiGithub, FiX } from 'react-icons/fi';
import { projects } from '../data/projectsData';
import { cn } from '../utils/cn';
import { trackProjectInteraction } from '../utils/analytics';

const ProjectCard = ({ className, children, delay = 0, id }) => (
    <Motion.div
        id={id}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.4, delay }}
        className={cn(
            'relative scroll-mt-28 overflow-hidden rounded-xl border border-white/10 bg-card backdrop-blur-md transition-all duration-300 hover:border-primary/40 flex flex-col',
            className
        )}
    >
        {children}
    </Motion.div>
);

const ProjectsSection = () => {
    const [selectedProjectIdx, setSelectedProjectIdx] = useState(null);

    const featuredProjects = projects.filter((p) => p.isFeatured);
    const supportingProjects = projects.filter((p) => !p.isFeatured);

    const selectedProject = selectedProjectIdx !== null ? projects[selectedProjectIdx] : null;
    const closeProjectLightbox = useCallback(() => setSelectedProjectIdx(null), []);
    const goPrevProject = useCallback(() => setSelectedProjectIdx((prev) => (prev > 0 ? prev - 1 : projects.length - 1)), []);
    const goNextProject = useCallback(() => setSelectedProjectIdx((prev) => (prev < projects.length - 1 ? prev + 1 : 0)), []);

    // Lock body scroll and listen to keyboard controls
    useEffect(() => {
        if (selectedProjectIdx === null) return;
        document.body.style.overflow = 'hidden';

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') closeProjectLightbox();
            if (e.key === 'ArrowLeft') goPrevProject();
            if (e.key === 'ArrowRight') goNextProject();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [selectedProjectIdx, closeProjectLightbox, goPrevProject, goNextProject]);

    return (
        <section className="mx-auto max-w-7xl scroll-mt-28 px-4 py-16 sm:px-6 lg:px-8" id="projects">
            {/* Header */}
            <Motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                className="mb-8 border-b border-white/10 pb-6"
            >
                <h2 className="text-3xl font-black text-white tracking-tight sm:text-4xl">
                    Featured Systems & Projects<span className="text-primary">.</span>
                </h2>
            </Motion.div>

            {/* Featured Projects Tier (2 Columns) */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mb-6">
                {featuredProjects.map((project, idx) => {
                    const originalIdx = projects.findIndex((p) => p.id === project.id);
                    return (
                        <ProjectCard key={project.id} delay={0.1 + idx * 0.1}>
                            <button
                                type="button"
                                onClick={() => {
                                    setSelectedProjectIdx(originalIdx);
                                    trackProjectInteraction(project.title, 'view');
                                }}
                                className="relative aspect-[16/10] w-full overflow-hidden text-left cursor-zoom-in group bg-slate-900"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    loading="lazy"
                                    decoding="async"
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                            </button>

                            <div className="flex flex-1 flex-col p-6 sm:p-7">
                                <h3 className="text-xl sm:text-2xl font-bold leading-tight text-white">{project.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-text-muted flex-1">{project.description}</p>

                                <div className="mt-5 flex flex-wrap gap-1.5">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="rounded border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-mono text-text-muted">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-6 flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
                                    <button
                                        type="button"
                                        onClick={() => setSelectedProjectIdx(originalIdx)}
                                        className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-primary hover:underline"
                                    >
                                        <FiExternalLink /> View Project Details
                                    </button>
                                    <a
                                        href={project.repoUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        onClick={() => trackProjectInteraction(project.title, 'click_source')}
                                        className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-text-muted transition-colors hover:text-white"
                                    >
                                        <FiGithub /> Source Code
                                    </a>
                                </div>
                            </div>
                        </ProjectCard>
                    );
                })}
            </div>

            {/* Supporting Projects Tier (3 Columns) */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                {supportingProjects.map((project, idx) => {
                    const originalIdx = projects.findIndex((p) => p.id === project.id);
                    return (
                        <ProjectCard key={project.id} delay={0.2 + idx * 0.08}>
                            <button
                                type="button"
                                onClick={() => {
                                    setSelectedProjectIdx(originalIdx);
                                    trackProjectInteraction(project.title, 'view');
                                }}
                                className="relative aspect-[16/10] w-full overflow-hidden text-left cursor-zoom-in group bg-slate-900"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    loading="lazy"
                                    decoding="async"
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                            </button>

                            <div className="flex flex-1 flex-col p-5">
                                <h3 className="text-base font-bold text-white line-clamp-1">{project.title}</h3>
                                <p className="mt-2 text-xs leading-relaxed text-text-muted line-clamp-3 flex-1">{project.description}</p>

                                <div className="mt-4 flex flex-wrap gap-1">
                                    {project.tags.slice(0, 4).map((tag) => (
                                        <span key={tag} className="rounded border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10px] font-mono text-text-muted">
                                            {tag}
                                        </span>
                                    ))}
                                    {project.tags.length > 4 && (
                                        <span className="rounded border border-white/5 bg-white/[0.02] px-1.5 py-0.5 text-[10px] font-mono text-text-muted">
                                            +{project.tags.length - 4}
                                        </span>
                                    )}
                                </div>

                                <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-3">
                                    <button
                                        type="button"
                                        onClick={() => setSelectedProjectIdx(originalIdx)}
                                        className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-primary hover:underline"
                                    >
                                        <FiExternalLink /> Details
                                    </button>
                                    <a
                                        href={project.repoUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        onClick={() => trackProjectInteraction(project.title, 'click_source')}
                                        className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-text-muted transition-colors hover:text-white"
                                    >
                                        <FiGithub /> Source
                                    </a>
                                </div>
                            </div>
                        </ProjectCard>
                    );
                })}
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <Motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md overflow-y-auto"
                        onClick={closeProjectLightbox}
                    >
                        <Motion.div
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="project-modal-title"
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ type: 'spring', damping: 25 }}
                            className="relative w-full max-w-3xl rounded-xl bg-slate-950 border border-white/15 p-6 sm:p-8 flex flex-col gap-5 shadow-2xl overflow-y-auto max-h-[92vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg border border-white/10 bg-slate-900">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    decoding="async"
                                    className="h-full w-full object-contain bg-slate-950"
                                />
                            </div>

                            <div className="space-y-2">
                                <h3 id="project-modal-title" className="text-xl sm:text-2xl font-black text-white leading-tight">
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
                                        Key Highlights:
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
                                {selectedProject.liveUrl && selectedProject.liveUrl !== selectedProject.repoUrl && (
                                    <a
                                        href={selectedProject.liveUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        onClick={() => trackProjectInteraction(selectedProject.title, 'click_case_study', { location: 'lightbox' })}
                                        className="inline-flex items-center gap-2 rounded bg-primary px-5 py-2.5 text-xs font-mono font-semibold text-slate-950 shadow-md shadow-primary/20 transition-all hover:bg-emerald-400"
                                    >
                                        <FiExternalLink /> Live Platform / Link
                                    </a>
                                )}
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
                                className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/80 border border-white/10 p-2.5 text-text-muted backdrop-blur-sm transition-colors hover:text-white hover:border-primary flex items-center justify-center z-10"
                                aria-label="Previous"
                            >
                                <FiChevronLeft className="h-5 w-5" />
                            </button>
                            <button
                                onClick={(e) => { e.stopPropagation(); goNextProject(); }}
                                className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/80 border border-white/10 p-2.5 text-text-muted backdrop-blur-sm transition-colors hover:text-white hover:border-primary flex items-center justify-center z-10"
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
