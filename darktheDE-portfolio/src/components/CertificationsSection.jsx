import { useMemo, useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { FiAward, FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';
import { cn } from '../utils/cn';

const certifications = [
    {
        title: 'AWS Academy Graduate - Data Engineering',
        image: '/assets/certi/AWS_Academy_Graduate___Data_Engineering___Training_Badge_Badge20251105-31-bxq0qw.png',
        category: 'AWS',
    },
    {
        title: 'AWS Academy Graduate - Cloud Foundations',
        image: '/assets/certi/AWS_Academy_Graduate___Cloud_Foundations___Training_Badge_Badge20251008-32-bqq8cg.png',
        category: 'AWS',
    },
    {
        title: 'AWS Academy Graduate - Cloud Web App Builder',
        image: '/assets/certi/AWS_Academy_Graduate___Cloud_Web_Application_Builder___Training_Badge_Badge20251009-31-2kz8o3.png',
        category: 'AWS',
    },
    {
        title: 'Samsung Big Data Course - Completion Certificate',
        image: '/assets/certi/certi-samsung.jpg',
        category: 'Industry',
    },
    {
        title: 'Google AI Essentials',
        image: '/assets/certi/Coursera MUBWNUSDXG3A-AI.png',
        category: 'Google',
    },
    {
        title: 'Google Crash Course on Python',
        image: '/assets/certi/Coursera 094KUDHE0SP7-Python.png',
        category: 'Google',
    },
    {
        title: 'FIT Hackathon HCMUTE 2025 - Consolation Prize',
        image: '/assets/certi/certi-fit-hackathon.jpg',
        category: 'Award',
    },
    {
        title: 'Scholarship for Academic Excellence (Semester 1 - Year 1)',
        image: '/assets/certi/chinh-sach-hoc-bong.png',
        category: 'Academic',
    },
    {
        title: 'Very Good Student Title (2 Years in a Row)',
        image: '/assets/certi/quyet-dinh-sinh-vien.png',
        category: 'Academic',
    },
    {
        title: 'Mastering IT 2024 - Team Member',
        image: '/assets/certi/Mastering IT.png',
        category: 'Award',
    },
];

const filters = ['All', 'AWS', 'Google', 'Industry', 'Award', 'Academic'];

const CertificationsSection = () => {
    const [selectedIdx, setSelectedIdx] = useState(null);
    const [activeFilter, setActiveFilter] = useState('All');

    const visibleCertifications = useMemo(() => {
        if (activeFilter === 'All') return certifications;
        return certifications.filter((cert) => cert.category === activeFilter);
    }, [activeFilter]);

    const selectedCert = selectedIdx !== null ? visibleCertifications[selectedIdx] : null;
    const closeLightbox = () => setSelectedIdx(null);
    const goPrev = () => setSelectedIdx((prev) => (prev > 0 ? prev - 1 : visibleCertifications.length - 1));
    const goNext = () => setSelectedIdx((prev) => (prev < visibleCertifications.length - 1 ? prev + 1 : 0));

    return (
        <section className="mx-auto max-w-7xl scroll-mt-28 px-4 py-16 sm:px-6 lg:px-8" id="certifications">
            <Motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div className="mb-8 flex flex-col justify-between gap-5 border-y border-white/10 py-6 sm:flex-row sm:items-end">
                    <div>
                        <div className="mb-4 flex items-center gap-2 text-primary">
                            <FiAward className="h-5 w-5" />
                            <span className="font-mono text-xs uppercase tracking-[0.22em]">Certifications & Awards</span>
                        </div>
                        <h2 className="text-3xl font-black text-white">Evidence, grouped for scanning.</h2>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => {
                                    setActiveFilter(filter);
                                    setSelectedIdx(null);
                                }}
                                className={cn(
                                    'border px-3 py-2 text-xs font-semibold transition-colors',
                                    activeFilter === filter
                                        ? 'border-primary bg-primary text-slate-950'
                                        : 'border-white/10 bg-white/[0.03] text-text-muted hover:border-primary/40 hover:text-white'
                                )}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {visibleCertifications.map((cert, idx) => (
                        <Motion.button
                            type="button"
                            key={cert.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.05 }}
                            onClick={() => setSelectedIdx(idx)}
                            className="group overflow-hidden border border-white/10 bg-card text-left backdrop-blur-md transition-all duration-500 hover:border-primary/25"
                        >
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    loading="lazy"
                                    decoding="async"
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent opacity-70" />
                            </div>
                            <div className="p-4">
                                <span className="border border-primary/20 bg-primary/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-primary">
                                    {cert.category}
                                </span>
                                <h3 className="mt-3 line-clamp-2 text-sm font-semibold leading-snug text-text-light">
                                    {cert.title}
                                </h3>
                            </div>
                        </Motion.button>
                    ))}
                </div>
            </Motion.div>

            <AnimatePresence>
                {selectedCert && (
                    <Motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
                        onClick={closeLightbox}
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
                                src={selectedCert.image}
                                alt={selectedCert.title}
                                decoding="async"
                                className="max-h-[80vh] w-full object-contain"
                            />
                            <p className="mt-3 text-center text-sm font-medium text-text-light">
                                {selectedCert.title}
                            </p>

                            <button
                                onClick={closeLightbox}
                                className="absolute -top-12 right-0 bg-white/5 p-2 text-text-muted transition-colors hover:text-white sm:-right-4 sm:bg-transparent"
                                aria-label="Close"
                            >
                                <FiX className="h-6 w-6" />
                            </button>
                            <button
                                onClick={(e) => { e.stopPropagation(); goPrev(); }}
                                className="absolute left-0 top-1/2 -translate-x-4 -translate-y-1/2 bg-black/50 p-2 text-text-muted backdrop-blur-sm transition-colors hover:text-white sm:-translate-x-14 sm:bg-transparent"
                                aria-label="Previous"
                            >
                                <FiChevronLeft className="h-8 w-8 sm:h-10 sm:w-10" />
                            </button>
                            <button
                                onClick={(e) => { e.stopPropagation(); goNext(); }}
                                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-black/50 p-2 text-text-muted backdrop-blur-sm transition-colors hover:text-white sm:translate-x-14 sm:bg-transparent"
                                aria-label="Next"
                            >
                                <FiChevronRight className="h-8 w-8 sm:h-10 sm:w-10" />
                            </button>
                        </Motion.div>
                    </Motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default CertificationsSection;
