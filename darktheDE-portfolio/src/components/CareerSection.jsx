import { motion as Motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiCheck, FiMapPin } from 'react-icons/fi';
import { careerExperiences } from '../data/careerData';
import { cn } from '../utils/cn';

const CareerSection = () => {
    return (
        <section className="mx-auto max-w-7xl scroll-mt-28 px-4 py-16 sm:px-6 lg:px-8" id="career">
            <Motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                {/* Section Header */}
                <div className="mb-10 border-b border-white/10 pb-6">
                    <div className="mb-3 flex items-center gap-2 text-primary">
                        <FiBriefcase className="h-5 w-5" />
                        <span className="font-mono text-xs uppercase tracking-[0.22em]">Career & Experience</span>
                    </div>
                    <div>
                        <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                            Work Experience
                        </h2>
                        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-text-muted">
                            Experience spanning IT audit, software planning & analysis, data engineering, and academic instruction.
                        </p>
                    </div>
                </div>

                {/* Timeline Grid */}
                <div className="space-y-6">
                    {careerExperiences.map((item, index) => (
                        <Motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            className={cn(
                                "group relative overflow-hidden rounded-xl border p-6 backdrop-blur-md transition-all duration-300 md:p-8",
                                item.isCurrent
                                    ? "border-primary/40 bg-gradient-to-br from-surface/90 via-surface/60 to-primary/5 shadow-xl shadow-primary/5 hover:border-primary"
                                    : "border-white/10 bg-surface/70 hover:border-white/20 hover:bg-surface/90"
                            )}
                        >
                            {/* Decorative Accent Line */}
                            <div
                                className={cn(
                                    "absolute left-0 top-0 h-full w-1.5 transition-all duration-300",
                                    item.isCurrent
                                        ? "bg-primary shadow-[0_0_12px_#86BC25]"
                                        : "bg-white/20 group-hover:bg-primary/60"
                                )}
                            />

                            <div className="grid gap-6 lg:grid-cols-[1.1fr_1.9fr]">
                                {/* Left Column: Role, Company & Metadata */}
                                <div className="space-y-3">
                                    <div className="flex flex-wrap items-center gap-2.5">
                                        <span
                                            className={cn(
                                                "rounded px-2.5 py-1 font-mono text-[11px] font-bold uppercase tracking-wider",
                                                item.isCurrent
                                                    ? "bg-primary text-slate-950"
                                                    : "border border-white/10 bg-white/[0.05] text-text-muted"
                                            )}
                                        >
                                            {item.badge}
                                        </span>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-black text-white sm:text-2xl tracking-tight">
                                            {item.role}
                                        </h3>
                                        <div className="mt-1 text-base font-semibold text-text-light">
                                            {item.company}
                                        </div>
                                        <div className="text-xs text-text-muted">
                                            {item.division}
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-1.5 font-mono text-xs text-text-muted pt-2 border-t border-white/5">
                                        <div className="flex items-center gap-2">
                                            <FiCalendar className="h-3.5 w-3.5 text-primary shrink-0" />
                                            <span>{item.period}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <FiMapPin className="h-3.5 w-3.5 text-text-muted shrink-0" />
                                            <span>{item.location}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column: Detailed Responsibilities & Competencies */}
                                <div className="space-y-4">
                                    <p className="text-sm leading-relaxed text-text-light">
                                        {item.summary}
                                    </p>

                                    <div className="space-y-2">
                                        <h4 className="font-mono text-xs uppercase tracking-wider text-text-muted font-bold">
                                            Key Responsibilities:
                                        </h4>
                                        <ul className="space-y-1.5">
                                            {item.responsibilities.map((resp, idx) => (
                                                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed text-text-muted">
                                                    <FiCheck className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                                    <span>{resp}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Competencies Tags */}
                                    <div className="pt-2 border-t border-white/5">
                                        <div className="flex flex-wrap gap-1.5">
                                            {item.competencies.map((comp) => (
                                                <span
                                                    key={comp}
                                                    className="rounded border border-white/10 bg-white/[0.03] px-2.5 py-0.5 text-[11px] font-mono text-text-muted"
                                                >
                                                    {comp}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Motion.div>
                    ))}
                </div>
            </Motion.div>
        </section>
    );
};

export default CareerSection;
