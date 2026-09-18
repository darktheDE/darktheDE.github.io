import { useMemo, useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { FiAward, FiChevronLeft, FiChevronRight, FiExternalLink, FiFileText, FiShield, FiX } from 'react-icons/fi';
import { cn } from '../utils/cn';
import { ASSETS } from '../data/config';

const certifications = [
    {
        title: 'AWS Academy Graduate - Data Engineering',
        image: '/assets/certi/AWS_Academy_Graduate___Data_Engineering___Training_Badge_Badge20251105-31-bxq0qw.png',
        category: 'AWS',
        issuer: 'Amazon Web Services (AWS)',
        date: '05/11/2025',
        credentialId: 'LWIyvaHq',
        verifyUrl: 'https://www.credly.com/go/LWIyvaHq',
    },
    {
        title: 'AWS Academy Graduate - Cloud Foundations',
        image: '/assets/certi/AWS_Academy_Graduate___Cloud_Foundations___Training_Badge_Badge20251008-32-bqq8cg.png',
        category: 'AWS',
        issuer: 'Amazon Web Services (AWS)',
        date: '08/10/2025',
        credentialId: 'HtPZ7vn',
        verifyUrl: 'https://www.credly.com/go/HtPZ7vn',
    },
    {
        title: 'AWS Academy Graduate - Cloud Web App Builder',
        image: '/assets/certi/AWS_Academy_Graduate___Cloud_Web_Application_Builder___Training_Badge_Badge20251009-31-2kz8o3.png',
        category: 'AWS',
        issuer: 'Amazon Web Services (AWS)',
        date: '09/10/2025',
        credentialId: 'dpGkreby',
        verifyUrl: 'https://www.credly.com/go/dpGkreby',
    },
    {
        title: 'Gemini Certified Student (University)',
        image: '/assets/certi/GEMINI_STU_CER.png',
        category: 'Google',
        issuer: 'Google for Education',
        date: '12/07/2025',
        credentialId: 'Google Student Credential',
        verifyUrl: 'https://edu.google.com/',
    },
    {
        title: 'Google AI Essentials',
        image: '/assets/certi/Coursera MUBWNUSDXG3A-AI.png',
        category: 'Google',
        issuer: 'Google (via Coursera)',
        date: '29/07/2024',
        credentialId: 'MUBWNUSDXG3A',
        verifyUrl: 'https://coursera.org/verify/MUBWNUSDXG3A',
    },
    {
        title: 'Google Crash Course on Python',
        image: '/assets/certi/Coursera 094KUDHE0SP7-Python.png',
        category: 'Google',
        issuer: 'Google (via Coursera)',
        date: '03/10/2024',
        credentialId: '094KUDHE0SP7',
        verifyUrl: 'https://coursera.org/verify/094KUDHE0SP7',
    },
    {
        title: 'Samsung Innovation Campus - Big Data Course',
        image: '/assets/certi/certi-samsung.jpg',
        category: 'Industry',
        issuer: 'Samsung Vietnam & LetuinEdu',
        date: '09/2025',
        credentialId: 'Certificate of Appreciation',
        verifyUrl: 'https://www.samsung.com/vn/',
    },
    {
        title: 'FIT-HCMUTE Hackathon 2025 - Consolation Prize',
        image: '/assets/certi/certi-fit-hackathon.jpg',
        category: 'Award',
        issuer: 'Khoa CNTT - HCM-UTE',
        date: '16/11/2025',
        credentialId: 'Team RTIC.4LINUS',
        verifyUrl: 'https://fit.hcmute.edu.vn',
    },
    {
        title: 'Mastering IT XVII 2024 - Certificate of Participation',
        image: '/assets/certi/Mastering IT.png',
        category: 'Award',
        issuer: 'Khoa CNTT & GDSC HCMUTE',
        date: '12/05/2024',
        credentialId: 'Team DE Plus',
        verifyUrl: 'https://fit.hcmute.edu.vn',
    },
    {
        title: 'Scholarship for Academic Excellence (Semester 1 - Year 1)',
        image: '/assets/certi/chinh-sach-hoc-bong.png',
        category: 'Academic',
        issuer: 'Trường ĐH Sư phạm Kỹ thuật TP.HCM',
        date: 'HK1 2023-2024',
        credentialId: 'SV 23133030 (GPA 8.79 / 10.0)',
        verifyUrl: 'https://hcmute.edu.vn',
    },
    {
        title: 'Title of Very Good Student (2 Consecutive Years)',
        image: '/assets/certi/quyet-dinh-sinh-vien.png',
        category: 'Academic',
        issuer: 'Trường ĐH Sư phạm Kỹ thuật TP.HCM',
        date: '2024 — 2025',
        credentialId: 'QĐ 2932 & QĐ 4461',
        verifyUrl: 'https://hcmute.edu.vn',
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
                {/* Section Header */}
                <div className="mb-8 flex flex-col justify-between gap-5 border-y border-white/10 py-6 sm:flex-row sm:items-end">
                    <div>
                        <div className="mb-3 flex items-center gap-2 text-primary">
                            <FiAward className="h-5 w-5" />
                            <span className="font-mono text-xs uppercase tracking-[0.22em] font-bold">Verified Credentials & Evidence</span>
                        </div>
                        <h2 className="text-3xl font-black text-white tracking-tight sm:text-4xl">
                            11 Verified Credentials for Enterprise Trust.
                        </h2>
                        <p className="mt-2 text-sm text-text-muted">
                            Authentic digital badges and academic honors officially issued and verifiable online via Credly, Coursera, and HCM-UTE.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                        {/* Official Bundle PDF Link */}
                        <a
                            href={ASSETS.certificatesBundle}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg border border-primary/40 bg-primary/10 px-4 py-2 font-mono text-xs font-semibold text-primary transition-all hover:bg-primary hover:text-slate-950 shadow-sm"
                        >
                            <FiFileText className="h-4 w-4" /> View Evidence Bundle PDF (12 Pages)
                        </a>

                        <div className="flex flex-wrap gap-1.5">
                            {filters.map((filter) => (
                                <button
                                    key={filter}
                                    onClick={() => {
                                        setActiveFilter(filter);
                                        setSelectedIdx(null);
                                    }}
                                    className={cn(
                                        'rounded border px-3 py-1.5 text-xs font-semibold transition-colors font-mono',
                                        activeFilter === filter
                                            ? 'border-primary bg-primary text-slate-950 shadow-sm'
                                            : 'border-white/10 bg-white/[0.03] text-text-muted hover:border-primary/40 hover:text-white'
                                    )}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {visibleCertifications.map((cert, idx) => (
                        <Motion.button
                            type="button"
                            key={cert.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.04 }}
                            onClick={() => setSelectedIdx(idx)}
                            className="group overflow-hidden rounded-xl border border-white/10 bg-card text-left backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:bg-surface/90"
                        >
                            <div className="relative aspect-[4/3] overflow-hidden bg-slate-950">
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    loading="lazy"
                                    decoding="async"
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
                                <span className="absolute right-2.5 top-2.5 rounded border border-primary/30 bg-slate-950/90 px-2 py-0.5 font-mono text-[10px] text-primary">
                                    {cert.category}
                                </span>
                            </div>

                            <div className="p-4 space-y-1.5">
                                <h3 className="line-clamp-2 text-sm font-bold text-white group-hover:text-primary transition-colors">
                                    {cert.title}
                                </h3>
                                <p className="font-mono text-xs text-text-muted line-clamp-1">{cert.issuer}</p>
                                <div className="flex items-center justify-between pt-2 text-[11px] font-mono text-text-muted border-t border-white/5">
                                    <span>{cert.date}</span>
                                    <span className="text-primary flex items-center gap-1 group-hover:underline">
                                        <FiShield className="h-3 w-3" /> Verified
                                    </span>
                                </div>
                            </div>
                        </Motion.button>
                    ))}
                </div>
            </Motion.div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedCert && (
                    <Motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-md overflow-y-auto"
                        onClick={closeLightbox}
                    >
                        <Motion.div
                            initial={{ scale: 0.92, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.92, opacity: 0 }}
                            transition={{ type: 'spring', damping: 25 }}
                            className="relative w-full max-w-2xl rounded-xl bg-slate-950 border border-white/15 p-6 flex flex-col gap-4 shadow-2xl overflow-y-auto max-h-[92vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-white/10 bg-slate-900">
                                <img
                                    src={selectedCert.image}
                                    alt={selectedCert.title}
                                    className="h-full w-full object-contain"
                                />
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-primary font-mono text-xs">
                                    <FiAward className="h-4 w-4" />
                                    <span>{selectedCert.category} Credential</span>
                                </div>
                                <h3 className="text-lg sm:text-xl font-black text-white">{selectedCert.title}</h3>
                                <div className="grid grid-cols-2 gap-2 text-xs font-mono text-text-muted pt-2 border-t border-white/10">
                                    <div><strong>Issuer:</strong> {selectedCert.issuer}</div>
                                    <div><strong>Issued Date:</strong> {selectedCert.date}</div>
                                    <div className="col-span-2"><strong>Credential ID:</strong> {selectedCert.credentialId}</div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between pt-3 border-t border-white/10">
                                <a
                                    href={selectedCert.verifyUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 rounded bg-primary px-4 py-2 font-mono text-xs font-semibold text-slate-950 shadow-md hover:bg-emerald-400 transition-colors"
                                >
                                    <FiExternalLink /> Verify Credential
                                </a>

                                <a
                                    href={ASSETS.certificatesBundle}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-1.5 text-xs font-mono text-text-muted hover:text-primary transition-colors"
                                >
                                    <FiFileText /> Official PDF Bundle
                                </a>
                            </div>

                            <button
                                onClick={closeLightbox}
                                className="absolute top-4 right-4 rounded-full bg-white/10 p-2 text-text-muted transition-colors hover:text-white hover:bg-white/20"
                                aria-label="Close"
                            >
                                <FiX className="h-5 w-5" />
                            </button>

                            {/* Prev / Next Controls */}
                            <button
                                onClick={(e) => { e.stopPropagation(); goPrev(); }}
                                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/80 border border-white/10 p-2 text-text-muted backdrop-blur-sm transition-colors hover:text-white hover:border-primary hidden md:block"
                                aria-label="Previous"
                            >
                                <FiChevronLeft className="h-5 w-5" />
                            </button>
                            <button
                                onClick={(e) => { e.stopPropagation(); goNext(); }}
                                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/80 border border-white/10 p-2 text-text-muted backdrop-blur-sm transition-colors hover:text-white hover:border-primary hidden md:block"
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

export default CertificationsSection;
