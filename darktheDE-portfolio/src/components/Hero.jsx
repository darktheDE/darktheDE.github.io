import { motion as Motion } from 'framer-motion';
import { FiDownload, FiBookOpen } from 'react-icons/fi';
import { PERSONAL_INFO, SOCIAL_LINKS, ASSETS } from '../data/config';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden pt-20 md:pt-24">





      <Motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto"
      >
        <div className="mb-4">
          <p className="text-sm md:text-lg text-text-muted font-mono tracking-tight">Hi, I'm</p>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-2 font-mono tracking-tighter leading-tight">
            {PERSONAL_INFO.name}
          </h2>
          <p className="text-primary font-mono text-[10px] sm:text-xs tracking-[0.3em] uppercase">{PERSONAL_INFO.title}</p>
        </div>

        <div className="inline-block px-4 sm:px-6 py-2 rounded-2xl bg-primary/10 border border-primary/20 backdrop-blur-sm mb-8">
          <h1 className="text-lg sm:text-2xl md:text-3xl font-bold tracking-tight text-white font-mono break-words sm:whitespace-nowrap">
            {PERSONAL_INFO.tagline}
          </h1>
        </div>

        <p className="text-sm md:text-lg text-text-muted max-w-3xl mx-auto mb-6 leading-relaxed italic px-2">
          "I am a student driven by curiosity, seeking to contribute as a <b>Data Engineering Intern/Fresher</b>. 
          I build robust data pipelines and explore Agentic AI workflows with a passion to learn, fall, and retry."
        </p>

        <p className="text-xs md:text-sm text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed border-t border-white/5 pt-6 px-4">
          Focusing on <b>{PERSONAL_INFO.specialties[0]}</b>, <b>{PERSONAL_INFO.specialties[1]}</b>, and <b>{PERSONAL_INFO.specialties[2]}</b>.
        </p>

        <div className="grid grid-cols-1 xs:grid-cols-2 sm:flex sm:flex-row gap-3 justify-center items-center w-full max-w-sm mx-auto sm:max-w-none">
          <a
            href="#bento"
            className="px-6 py-3 bg-primary hover:bg-secondary text-white rounded-full font-medium transition-all shadow-lg hover:shadow-primary/25 hover:scale-105 text-sm md:text-base flex items-center justify-center"
          >
            Explore Work
          </a>

          <a
            href={SOCIAL_LINKS.blog}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 bg-surface border border-primary/50 text-primary hover:bg-primary/10 hover:shadow-glow-purple rounded-full font-medium transition-all backdrop-blur-md flex items-center justify-center gap-2 hover:scale-105 text-sm md:text-base"
          >
            <FiBookOpen className="shrink-0" /> Blog
          </a>

          <a
            href={ASSETS.cvData}
            download
            className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full font-medium transition-all backdrop-blur-md flex items-center justify-center gap-2 hover:scale-105 text-sm md:text-base"
          >
            <FiDownload className="shrink-0" /> Data CV
          </a>
          <a
            href={ASSETS.cvSoftware}
            download
            className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full font-medium transition-all backdrop-blur-md flex items-center justify-center gap-2 hover:scale-105 text-sm md:text-base"
          >
            <FiDownload className="shrink-0" /> Software CV
          </a>
        </div>
      </Motion.div>
    </section>
  );
};

export default Hero;