import { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiUsers, FiX } from 'react-icons/fi';
import { RTIC_INFO } from '../data/config';
import { trackOutboundLink } from '../utils/analytics';

const impactItems = [
    'Academic seminars and workshops',
    'AI and software training',
    'Real-world student projects',
    'Academic contest preparation',
];

const RTICSection = () => {
    const [showLightbox, setShowLightbox] = useState(false);

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
                        <div className="mb-5 inline-flex items-center gap-2 border border-blue-400/20 bg-blue-400/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-blue-300">
                            <FiUsers /> Community Leadership
                        </div>
                        <h2 className="max-w-3xl text-3xl font-black leading-tight text-white sm:text-4xl">
                            Building a technical community through {RTIC_INFO.name}.
                        </h2>
                        <p className="mt-5 max-w-3xl text-sm leading-7 text-text-muted sm:text-base">
                            As {RTIC_INFO.role}, I help lead technical initiatives, mentor members in backend and business analysis, and turn student ideas into software projects with clearer execution paths.
                        </p>

                        <div className="mt-7 grid gap-3 sm:grid-cols-2">
                            {impactItems.map((item) => (
                                <div key={item} className="border border-white/10 bg-white/[0.035] p-4 text-sm font-medium text-text-light">
                                    {item}
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <div className="border-r border-white/10 pr-6">
                                <div className="text-3xl font-black text-white">{RTIC_INFO.memberCount}</div>
                                <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-text-muted">Members</div>
                            </div>
                            <div className="pr-4">
                                <div className="text-3xl font-black text-white">{RTIC_INFO.projectCount}</div>
                                <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-text-muted">Projects</div>
                            </div>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <a
                              href={RTIC_INFO.fanpage}
                              target="_blank"
                              rel="noreferrer"
                              onClick={() => trackOutboundLink(RTIC_INFO.fanpage, 'RTIC Fanpage')}
                              className="inline-flex items-center gap-2 bg-blue-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-400"
                            >
                                <FiExternalLink /> Fanpage
                            </a>
                            <a
                              href={RTIC_INFO.github}
                              target="_blank"
                              rel="noreferrer"
                              onClick={() => trackOutboundLink(RTIC_INFO.github, 'RTIC GitHub')}
                              className="inline-flex items-center gap-2 border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-text-light transition-colors hover:border-primary/40 hover:text-primary"
                            >
                                <FiGithub /> GitHub
                            </a>
                        </div>
                    </div>

                    <button
                        type="button"
                        className="group relative mx-auto w-full max-w-md overflow-hidden border border-white/10 text-left shadow-2xl shadow-black/30"
                        onClick={() => setShowLightbox(true)}
                        aria-label="Open RTIC photo"
                    >
                        <img
                            src="/assets/rtic/rtic-pers-pic.jpg"
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
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: 'spring', damping: 25 }}
                            className="relative max-h-[85vh] w-full max-w-4xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src="/assets/rtic/rtic-pers-pic.jpg"
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
