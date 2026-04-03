import { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { FiAward, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const certifications = [
    {
        title: 'AWS Academy Graduate – Data Engineering',
        image: '/assets/certi/AWS_Academy_Graduate___Data_Engineering___Training_Badge_Badge20251105-31-bxq0qw.png',
        category: 'AWS',
    },
    {
        title: 'AWS Academy Graduate – Cloud Foundations',
        image: '/assets/certi/AWS_Academy_Graduate___Cloud_Foundations___Training_Badge_Badge20251008-32-bqq8cg.png',
        category: 'AWS',
    },
    {
        title: 'AWS Academy Graduate – Cloud Web App Builder',
        image: '/assets/certi/AWS_Academy_Graduate___Cloud_Web_Application_Builder___Training_Badge_Badge20251009-31-2kz8o3.png',
        category: 'AWS',
    },
    {
        title: 'Google AI Essentials',
        image: '/assets/certi/Coursera 094KUDHE0SP7.png',
        category: 'Google',
    },
    {
        title: 'Google Crash Course on Python',
        image: '/assets/certi/Coursera MUBWNUSDXG3A.png',
        category: 'Google',
    },
    {
        title: 'Mastering IT 2024 – Team Member',
        image: '/assets/certi/Mastering IT.png',
        category: 'Award',
    },
    {
        title: 'Hackathon FIT-HCMUTE 2025 – Consolation Prize',
        image: '/assets/certi/9cnd9hez_1765507690591.png',
        category: 'Award',
    },
];

const CertificationsSection = () => {
    const [selectedIdx, setSelectedIdx] = useState(null);

    const openLightbox = (idx) => setSelectedIdx(idx);
    const closeLightbox = () => setSelectedIdx(null);
    const goPrev = () => setSelectedIdx((prev) => (prev > 0 ? prev - 1 : certifications.length - 1));
    const goNext = () => setSelectedIdx((prev) => (prev < certifications.length - 1 ? prev + 1 : 0));

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20" id="certifications">
            <Motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex items-center gap-2 text-primary mb-8">
                    <FiAward className="w-5 h-5" />
                    <span className="font-mono text-sm tracking-wider uppercase">
                        Certifications & Awards
                    </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {certifications.map((cert, idx) => (
                        <Motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.08 }}
                            onClick={() => openLightbox(idx)}
                            className="group cursor-pointer bg-card backdrop-blur-md border border-white/5 rounded-2xl overflow-hidden hover:border-primary/20 transition-all duration-500"
                        >
                            <div className="aspect-[4/3] overflow-hidden relative">
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                            <div className="p-4">
                                <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full border border-primary/20 font-mono uppercase tracking-wide">
                                    {cert.category}
                                </span>
                                <h3 className="text-sm font-semibold text-text-light mt-2 line-clamp-2 leading-snug">
                                    {cert.title}
                                </h3>
                            </div>
                        </Motion.div>
                    ))}
                </div>
            </Motion.div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedIdx !== null && (
                    <Motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
                        onClick={closeLightbox}
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
                                src={certifications[selectedIdx].image}
                                alt={certifications[selectedIdx].title}
                                className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
                            />
                            <p className="text-center text-text-light text-sm mt-3 font-medium">
                                {certifications[selectedIdx].title}
                            </p>

                            {/* Controls */}
                            <button
                                onClick={closeLightbox}
                                className="absolute -top-12 right-0 text-text-muted hover:text-white transition-colors p-2"
                                aria-label="Close"
                            >
                                <FiX className="w-6 h-6" />
                            </button>
                            <button
                                onClick={(e) => { e.stopPropagation(); goPrev(); }}
                                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-text-muted hover:text-white transition-colors p-2"
                                aria-label="Previous"
                            >
                                <FiChevronLeft className="w-7 h-7" />
                            </button>
                            <button
                                onClick={(e) => { e.stopPropagation(); goNext(); }}
                                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-text-muted hover:text-white transition-colors p-2"
                                aria-label="Next"
                            >
                                <FiChevronRight className="w-7 h-7" />
                            </button>
                        </Motion.div>
                    </Motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default CertificationsSection;
