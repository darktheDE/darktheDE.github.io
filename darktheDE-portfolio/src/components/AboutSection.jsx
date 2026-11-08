import { motion as Motion } from 'framer-motion';
import { FiArrowRight, FiBookOpen } from 'react-icons/fi';
import { PERSONAL_INFO, EDUCATION, SOCIAL_LINKS, ASSETS } from '../data/config';
import { cn } from '../utils/cn';
import { trackOutboundLink } from '../utils/analytics';

const operatingProfile = [
    { title: 'IT Data Analytics' },
    { title: 'Controls & Compliance' },
    { title: 'Database Systems' },
];

const BentoItem = ({ className, children, delay = 0, id }) => (
    <Motion.div
        id={id}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.4, delay }}
        className={cn(
            'relative scroll-mt-28 overflow-hidden rounded-xl border border-white/10 bg-card p-6 backdrop-blur-md transition-all duration-300 hover:border-primary/40',
            className
        )}
    >
        {children}
    </Motion.div>
);

const AboutSection = () => {
    return (
        <section className="mx-auto max-w-7xl scroll-mt-28 px-4 py-16 sm:px-6 lg:px-8" id="about">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-4 lg:grid-cols-6">
                {/* Profile Card */}
                <BentoItem id="profile-summary" className="md:col-span-4 lg:col-span-4">
                    <div className="grid gap-7 sm:grid-cols-[180px_1fr] sm:items-center">
                        <div className="mx-auto w-full max-w-[180px] flex flex-col items-center">
                            <div className="relative aspect-square w-full overflow-hidden rounded-lg border border-white/15 bg-slate-950 shadow-xl shadow-black/40">
                                <img
                                    src={ASSETS.profileImage}
                                    alt="DO KIEN HUNG Profile"
                                    width={180}
                                    height={180}
                                    loading="lazy"
                                    decoding="async"
                                    className="h-full w-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
                            </div>
                        </div>

                        <div>
                            <h2 className="max-w-2xl text-2xl font-black leading-tight text-white sm:text-3xl">
                                IT Data Analyst with a Data Engineering Background<span className="text-primary">.</span>
                            </h2>
                            <p className="mt-3 text-sm leading-relaxed text-text-muted">
                                {PERSONAL_INFO.description}
                            </p>
                            <div className="mt-5 grid gap-2.5 sm:grid-cols-3">
                                {operatingProfile.map((item) => (
                                    <div key={item.title} className="rounded-lg border border-white/10 bg-white/[0.03] p-3 flex items-center justify-center min-h-[46px]">
                                        <span className="text-xs font-semibold text-text-light text-center font-mono">{item.title}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </BentoItem>

                {/* Education & Academic Background */}
                <BentoItem className="md:col-span-2 lg:col-span-2 flex flex-col justify-between">
                    <div>
                        <div className="flex items-center gap-2 text-primary mb-3">
                            <FiBookOpen className="h-4 w-4" />
                            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-white">
                                Education
                            </h3>
                        </div>

                        <div className="space-y-3">
                            {EDUCATION.map((edu) => (
                                <div key={edu.institution} className="rounded-lg border border-white/10 bg-slate-950/60 p-3">
                                    <div className="font-bold text-xs text-white leading-snug">
                                        {edu.institution}
                                    </div>
                                    <div className="mt-1 text-[11px] text-primary font-mono">
                                        {edu.degree}
                                    </div>
                                    <div className="mt-1 flex items-center justify-between text-[10px] text-text-muted font-mono">
                                        <span>{edu.period}</span>
                                        {edu.detail && <span className="text-text-light font-semibold">{edu.detail}</span>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <a
                      href={SOCIAL_LINKS.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => trackOutboundLink(SOCIAL_LINKS.linkedin, 'LinkedIn Profile (Bento)')}
                      className="group mt-4 flex items-center justify-between rounded-lg border border-primary/25 bg-primary/10 p-3 text-primary transition-colors hover:bg-primary/20"
                    >
                        <span className="font-semibold text-xs font-mono uppercase tracking-wider">Connect on LinkedIn</span>
                        <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                    </a>
                </BentoItem>
            </div>
        </section>
    );
};

export default AboutSection;
