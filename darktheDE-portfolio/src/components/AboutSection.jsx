import { useState, useEffect } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiTarget, FiUser } from 'react-icons/fi';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/config';
import { cn } from '../utils/cn';
import { trackOutboundLink } from '../utils/analytics';

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

const AboutSection = () => {
    const [currentImageIdx, setCurrentImageIdx] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIdx((prev) => (prev + 1) % profileImages.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="mx-auto max-w-7xl scroll-mt-28 px-4 py-16 sm:px-6 lg:px-8" id="about">
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
            </div>
        </section>
    );
};

export default AboutSection;
