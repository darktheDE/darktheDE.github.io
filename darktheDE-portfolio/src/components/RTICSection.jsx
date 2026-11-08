import { useState, useEffect } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiUsers, FiX } from 'react-icons/fi';
import { RTIC_INFO } from '../data/config';
import { trackOutboundLink } from '../utils/analytics';

const impactItems = [
    'Academic seminars and workshops',
    'AI and software training',
    'Real-world student projects',
    'Contest preparation & mentorship',
];

const webProjects = [
    { name: 'hcmutertic.com', role: 'Lead BA', url: 'https://hcmutertic.com/' },
    { name: '25nam.fit.hcmute.edu.vn', role: 'BA / Frontend', url: 'https://25nam.fit.hcmute.edu.vn/' },
    { name: 'wellness.hcmutertic.com', role: 'BA / Frontend', url: 'https://wellness.hcmutertic.com/' },
];

const RTICSection = () => {
    const [showLightbox, setShowLightbox] = useState(false);

    useEffect(() => {
        if (!showLightbox) return;
        document.body.style.overflow = 'hidden';

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setShowLightbox(false);
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [showLightbox]);

    return (
        <section className="mx-auto max-w-7xl scroll-mt-28 px-4 pb-12 sm:px-6 lg:px-8" id="rtic">
            <Motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative overflow-hidden border border-white/10 bg-slate-950/70 px-6 py-8 backdrop-blur-md md:px-10"
            >
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:30px_30px] opacity-20 pointer-events-none" />

                <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
                    <div>
                        <h2 className="max-w-3xl text-3xl font-black leading-tight text-white sm:text-4xl">
                            HCMUTE RTIC Community Leadership<span className="text-primary">.</span>
                        </h2>
                        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-text-muted sm:text-base">
                            As {RTIC_INFO.role}, I lead technical initiatives, organize student workshops, and manage software projects bridging software development and business analysis.
                        </p>

                        <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
                            {impactItems.map((item) => (
                                <div key={item} className="rounded-lg border border-white/10 bg-white/[0.03] p-3 text-xs sm:text-sm font-medium text-text-light">
                                    {item}
                                </div>
                            ))}
                        </div>

                        {/* Web Projects Delivered */}
                        <div className="mt-5 pt-4 border-t border-white/10">
                            <span className="font-mono text-xs uppercase tracking-wider text-text-muted font-bold block mb-2.5">
                                Club Web Initiatives:
                            </span>
                            <div className="flex flex-wrap gap-2">
                                {webProjects.map((p) => (
                                    <a
                                        key={p.name}
                                        href={p.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        onClick={() => trackOutboundLink(p.url, `RTIC Project - ${p.name}`)}
                                        className="inline-flex items-center gap-1.5 rounded border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-mono text-text-muted hover:border-primary/40 hover:text-white transition-colors"
                                    >
                                        <span>{p.name}</span>
                                        <FiExternalLink className="h-3 w-3 shrink-0" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="mt-6 flex flex-wrap gap-4">
                            <div className="border-r border-white/10 pr-6">
                                <div className="text-3xl font-black text-white">{RTIC_INFO.memberCount}</div>
                                <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-text-muted">Members</div>
                            </div>
                            <div className="pr-4">
                                <div className="text-3xl font-black text-white">{RTIC_INFO.projectCount}</div>
                                <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-text-muted">Projects</div>
                            </div>
                        </div>

                        <div className="mt-6 flex flex-wrap gap-3">
                            <a
                              href={RTIC_INFO.fanpage}
                              target="_blank"
                              rel="noreferrer"
                              onClick={() => trackOutboundLink(RTIC_INFO.fanpage, 'RTIC Fanpage')}
                              className="inline-flex items-center gap-2 rounded bg-primary px-5 py-2.5 text-xs font-mono font-semibold text-slate-950 transition-colors hover:bg-emerald-400 shadow-sm"
                            >
                                <FiExternalLink /> RTIC Fanpage
                            </a>
                            <a
                              href={RTIC_INFO.github}
                              target="_blank"
                              rel="noreferrer"
                              onClick={() => trackOutboundLink(RTIC_INFO.github, 'RTIC GitHub')}
                              className="inline-flex items-center gap-2 rounded border border-white/10 bg-white/[0.04] px-5 py-2.5 text-xs font-mono font-semibold text-text-light transition-colors hover:border-primary/40 hover:text-primary"
                            >
                                <FiGithub /> GitHub
                            </a>
                        </div>
                    </div>

                    <button
                        type="button"
                        className="group relative mx-auto w-full max-w-md overflow-hidden border border-white/10 text-left shadow-2xl shadow-black/40"
                        onClick={() => setShowLightbox(true)}
                        aria-label="Open RTIC photo"
                    >
                        <img
                            src="/assets/rtic/rtic-pers-pic.webp"
                            alt="Me at FIT Club's Day"
                            loading="lazy"
                            decoding="async"
                            className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                            <p className="font-semibold text-white">Me at FIT Club's Day</p>
                            <p className="mt-1 text-xs text-text-muted">Leadership, community, and student technology culture.</p>
                        </div>
                    </button>
                </div>
            </Motion.div>

            <AnimatePresence>
                {showLightbox && (
                    <Motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
                        onClick={() => setShowLightbox(false)}
                    >
                        <Motion.div
                            role="dialog"
                            aria-modal="true"
                            aria-label="RTIC Community Photo"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: 'spring', damping: 25 }}
                            className="relative max-h-[85vh] w-full max-w-4xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src="/assets/rtic/rtic-pers-pic.webp"
                                alt="Me at FIT Club's Day"
                                decoding="async"
                                className="max-h-[80vh] w-full object-contain"
                            />
                            <button
                                onClick={() => setShowLightbox(false)}
                                className="absolute -top-12 right-0 p-2 text-text-muted transition-colors hover:text-white"
                                aria-label="Close"
                            >
                                <FiX className="h-6 w-6" />
                            </button>
                        </Motion.div>
                    </Motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default RTICSection;
