import { motion as Motion } from 'framer-motion';
import { FiArrowRight, FiBriefcase } from 'react-icons/fi';
import { PERSONAL_INFO } from '../data/config';
import { trackCTA } from '../utils/analytics';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[82vh] overflow-hidden px-4 pt-28 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      <Motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto max-w-7xl lg:min-h-[calc(82vh-7rem)] flex flex-col justify-center py-12"
      >
        <div className="max-w-3xl">
          <p className="font-mono text-sm text-text-muted sm:text-base mb-2">
            Hi, I'm <span className="font-bold text-white tracking-wide">{PERSONAL_INFO.name}</span>
          </p>

          <h1 className="max-w-4xl text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            {PERSONAL_INFO.nickname}<span className="text-primary">.</span>
            <span className="block bg-gradient-to-r from-primary via-emerald-400 to-[#A8D84E] bg-clip-text text-transparent">
              IT Audit & Tech Risk.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-text-muted sm:text-lg">
            Final-year Data Engineering student at HCM-UTE and IT Audit Intern at Deloitte Vietnam. Combining data engineering background with IT general controls (ITGC), system flows, and audit analytics.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col gap-3.5 sm:flex-row">
            <a
              href="#projects"
              onClick={() => trackCTA('View Projects', 'hero')}
              className="inline-flex items-center justify-center gap-2 rounded bg-primary px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-primary/20 transition-all hover:bg-emerald-400 hover:shadow-primary/30 font-mono text-sm"
            >
              View Projects <FiArrowRight className="shrink-0" />
            </a>

            <a
              href="#career"
              onClick={() => trackCTA('Explore Career', 'hero')}
              className="inline-flex items-center justify-center gap-2 rounded border border-primary/30 bg-surface/70 px-6 py-3 font-semibold text-primary backdrop-blur-md transition-all hover:border-primary hover:bg-primary/10 font-mono text-sm"
            >
              <FiBriefcase className="shrink-0" /> Explore Career Path
            </a>
          </div>
        </div>
      </Motion.div>
    </section>
  );
};

export default Hero;
