import { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiUsers, FiGithub, FiGlobe, FiX } from 'react-icons/fi';
import { RTIC_INFO } from '../data/config';

const RTICSection = () => {
    const [showLightbox, setShowLightbox] = useState(false);

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12" id="rtic">
            <Motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-900/30 to-primary/5 border border-white/5 px-8 py-6 md:px-12 md:py-8"
            >
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:30px_30px] opacity-20 pointer-events-none"></div>
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-[100px]"></div>

                <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 font-mono text-[10px] border border-blue-500/20">
                            <FiUsers /> Community & Leadership
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary">{RTIC_INFO.name}</span>
                        </h2>
                    <div className="text-text-muted text-sm sm:text-base leading-relaxed">
                        As the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary font-bold">{RTIC_INFO.role}</span>, I lead technical initiatives and mentor members in backend development and business analysis.
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary font-bold"> {RTIC_INFO.name} ({RTIC_INFO.fullName})</span> is where we transform ideas into impactful software solutions.
                        
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mt-4 text-xs sm:text-sm opacity-90">
                            <li>• Academic seminars/workshops</li>
                            <li>• AI & Software Training</li>
                            <li>• Real-world AI projects</li>
                            <li>• Academic contests</li>
                        </ul>
                    </div>

                        <div className="flex gap-8 pt-2">
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-white leading-none">{RTIC_INFO.memberCount}</span>
                                <span className="text-xs text-text-muted uppercase tracking-wider mt-1">Members</span>
                            </div>
                            <div className="w-px bg-white/10 h-8"></div>
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-white leading-none">{RTIC_INFO.projectCount}</span>
                                <span className="text-xs text-text-muted uppercase tracking-wider mt-1">Projects</span>
                            </div>
                        </div>

                        <div className="pt-2 flex flex-wrap gap-4">
                            <a href={RTIC_INFO.fanpage} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-medium transition-all shadow-lg">
                                <FiExternalLink /> Fanpage
                            </a>
                            <a href={RTIC_INFO.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2 bg-gray-800 hover:bg-gray-900 text-white border border-white/10 rounded-xl text-sm font-medium transition-all shadow-lg">
                                <FiGithub /> GitHub
                            </a>
                        </div>
                    </div>

                    <div className="relative max-w-md mx-auto">



                        <div
                            className="aspect-square rounded-xl overflow-hidden shadow-2xl border border-white/10 group cursor-pointer"
                            onClick={() => setShowLightbox(true)}
                        >
                            <img
                                src="/assets/rtic/rtic-pers-pic.jpg"
                                alt="Me at FIT Club's Day"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 right-4">
                                <p className="text-white font-medium text-sm drop-shadow-md font-bold">Me at FIT Club's Day</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Motion.div>

            {/* Lightbox */}
            <AnimatePresence>
                {showLightbox && (
                    <Motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
                        onClick={() => setShowLightbox(false)}
                    >
                        <Motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: 'spring', damping: 25 }}
                            className="relative max-w-4xl max-h-[85vh] w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src="/assets/rtic/rtic-pers-pic.jpg"
                                alt="Me at FIT Club's Day"
                                className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
                            />
                            <p className="text-center text-text-light text-sm mt-3 font-medium">
                                Me at FIT Club's Day
                            </p>
                            <button
                                onClick={() => setShowLightbox(false)}
                                className="absolute -top-12 right-0 text-text-muted hover:text-white transition-colors p-2"
                                aria-label="Close"
                            >
                                <FiX className="w-6 h-6" />
                            </button>
                        </Motion.div>
                    </Motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default RTICSection;

