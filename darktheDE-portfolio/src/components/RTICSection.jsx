import { motion as Motion } from 'framer-motion';
import { FiExternalLink, FiUsers, FiGithub, FiGlobe } from 'react-icons/fi';
import { RTIC_INFO } from '../data/config';

const RTICSection = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20" id="rtic">
            <Motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-900/40 to-primary/10 border border-white/5 p-8 md:p-12"
            >
                <div className="absolute inset-0 bg-[url('/assets/grid.svg')] opacity-20 bg-center"></div>
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-[100px]"></div>

                <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 font-mono text-xs border border-blue-500/20">
                            <FiUsers /> Community & Leadership
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary">{RTIC_INFO.name}</span>
                        </h2>
                        <p className="text-text-muted text-lg leading-relaxed">
                            As the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary font-bold">{RTIC_INFO.role}</span>, I lead technical initiatives and mentor members in backend development and business analysis.
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary font-bold"> {RTIC_INFO.name} ({RTIC_INFO.fullName})</span> is where we transform ideas into impactful software solutions.
                            <br /><br />
                            Our core activities include:
                            <ul className="list-disc pl-5 mt-2 space-y-1 text-base">
                                <li>Academic seminars and workshops</li>
                                <li>Training in AI and Software Development</li>
                                <li>Participation in real-world AI and Web projects</li>
                                <li>Organizing academic contests</li>
                            </ul>
                        </p>

                        <div className="flex gap-4 pt-4">
                            <div className="flex flex-col gap-1">
                                <span className="text-3xl font-bold text-white">{RTIC_INFO.memberCount}</span>
                                <span className="text-xs text-text-muted uppercase tracking-wider">Members Mentored</span>
                            </div>
                            <div className="w-px bg-white/10 h-10"></div>
                            <div className="flex flex-col gap-1">
                                <span className="text-3xl font-bold text-white">{RTIC_INFO.projectCount}</span>
                                <span className="text-xs text-text-muted uppercase tracking-wider">Major Projects</span>
                            </div>
                        </div>

                        <div className="pt-4 flex flex-wrap gap-4">
                            <a href={RTIC_INFO.fanpage} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all shadow-lg hover:shadow-blue-500/25">
                                <FiExternalLink /> Fanpage
                            </a>
                            <a href={RTIC_INFO.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-3 bg-gray-800 hover:bg-gray-900 text-white border border-white/10 rounded-xl font-medium transition-all shadow-lg hover:shadow-white/5">
                                <FiGithub /> GitHub
                            </a>
                            <a href={RTIC_INFO.website} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-3 bg-primary/20 hover:bg-primary/30 text-white border border-primary/20 rounded-xl font-medium transition-all shadow-lg hover:shadow-primary/20">
                                <FiGlobe /> Website
                            </a>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="aspect-square rounded-xl overflow-hidden shadow-2xl border border-white/10 group">
                            <img
                                src="/assets/rtic-pers-pic.jpg"
                                alt="RTIC Activity"
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
        </section>
    );
};

export default RTICSection;
