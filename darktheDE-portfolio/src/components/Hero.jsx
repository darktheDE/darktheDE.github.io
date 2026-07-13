import { motion as Motion } from 'framer-motion';
import { FiArrowRight, FiBookOpen, FiCpu, FiDatabase, FiDownload, FiGithub, FiLinkedin } from 'react-icons/fi';
import { PERSONAL_INFO, SOCIAL_LINKS, ASSETS } from '../data/config';

const pipelineNodes = [
  { label: 'Sources', detail: 'Events + APIs' },
  { label: 'Bronze', detail: 'Raw Lake' },
  { label: 'Silver', detail: 'Quality' },
  { label: 'Gold', detail: 'BI + AI' },
];

const focusAreas = ['Spark', 'Airflow', 'Lakehouse', 'Backend', 'AI Agents'];

const Hero = () => {
  return (
    <section className="relative min-h-[92vh] overflow-hidden px-4 pt-28 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      <Motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:min-h-[calc(92vh-7rem)] lg:grid-cols-[1.05fr_0.95fr]"
      >
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 border border-primary/20 bg-primary/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
            <span className="h-2 w-2 bg-primary shadow-[0_0_18px_rgba(16,185,129,0.8)]" />
            Data Engineering Portfolio
          </div>

          <p className="font-mono text-sm text-text-muted sm:text-base">Hi, I'm {PERSONAL_INFO.name}</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-black leading-[1.03] tracking-normal text-white sm:text-6xl lg:text-7xl">
            {PERSONAL_INFO.nickname}
            <span className="block bg-gradient-to-r from-primary via-sky-300 to-accent bg-clip-text text-transparent">
              builds data systems.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-text-muted sm:text-lg">
            {PERSONAL_INFO.tagline} Currently sharpening lakehouse architecture, big data pipelines, backend services, and agentic AI workflows.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {focusAreas.map((area) => (
              <span key={area} className="border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-text-muted">
                {area}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 bg-primary px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-primary/20 transition-all hover:bg-accent hover:shadow-primary/30"
            >
              View Data Projects <FiArrowRight className="shrink-0" />
            </a>
            <a
              href={ASSETS.cvData}
              download
              className="inline-flex items-center justify-center gap-2 border border-primary/30 bg-surface/70 px-6 py-3 font-semibold text-primary backdrop-blur-md transition-all hover:border-primary hover:bg-primary/10"
            >
              <FiDownload className="shrink-0" /> Download Data CV
            </a>
            <a
              href={SOCIAL_LINKS.blog}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-white/10 bg-white/[0.03] px-6 py-3 font-semibold text-text-muted backdrop-blur-md transition-all hover:border-white/20 hover:text-white"
            >
              <FiBookOpen className="shrink-0" /> Blog
            </a>
          </div>

          <div className="mt-10 grid max-w-2xl grid-cols-3 border-y border-white/10">
            {PERSONAL_INFO.metrics.map((metric) => (
              <div key={metric.label} className="border-r border-white/10 py-4 pr-4 last:border-r-0 sm:pr-6">
                <div className="font-mono text-2xl font-bold text-white sm:text-3xl">{metric.value}</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-text-muted">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        <Motion.div
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative"
        >
          <div className="absolute -inset-4 border border-primary/10 bg-primary/[0.03]" />
          <div className="relative border border-white/10 bg-slate-950/80 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-6">
            <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary">Lakehouse Command</p>
                <h2 className="mt-1 text-xl font-bold text-white">Pipeline Health</h2>
              </div>
              <div className="flex gap-2">
                <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" aria-label="GitHub Profile" className="border border-white/10 p-2 text-text-muted transition-colors hover:border-primary/40 hover:text-primary">
                  <FiGithub />
                </a>
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn Profile" className="border border-white/10 p-2 text-text-muted transition-colors hover:border-primary/40 hover:text-primary">
                  <FiLinkedin />
                </a>
              </div>
            </div>

            <div className="grid gap-3">
              {pipelineNodes.map((node, idx) => (
                <Motion.div
                  key={node.label}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, delay: 0.35 + idx * 0.12 }}
                  className="relative grid grid-cols-[auto_1fr_auto] items-center gap-4 border border-white/10 bg-white/[0.035] p-4"
                >
                  <Motion.div
                    animate={{ scale: [1, 1.16, 1], opacity: [0.75, 1, 0.75] }}
                    transition={{ duration: 2.4, repeat: Infinity, delay: idx * 0.35 }}
                    className="flex h-10 w-10 items-center justify-center bg-primary/10 text-primary"
                  >
                    {idx === 0 ? <FiDatabase /> : idx === 3 ? <FiCpu /> : <span className="font-mono text-xs font-bold">0{idx}</span>}
                  </Motion.div>
                  <div>
                    <div className="font-semibold text-white">{node.label}</div>
                    <div className="text-xs text-text-muted">{node.detail}</div>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary">Live</span>
                  {idx < pipelineNodes.length - 1 && (
                    <div className="absolute -bottom-3 left-9 h-3 w-px bg-primary/40" />
                  )}
                </Motion.div>
              ))}
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="border border-white/10 bg-slate-900/70 p-4">
                <p className="text-[10px] uppercase tracking-[0.2em] text-text-muted">Focus</p>
                <p className="mt-2 text-sm font-semibold text-white">{PERSONAL_INFO.specialties[0]}</p>
              </div>
              <div className="border border-white/10 bg-slate-900/70 p-4">
                <p className="text-[10px] uppercase tracking-[0.2em] text-text-muted">Signal</p>
                <p className="mt-2 text-sm font-semibold text-white">Intern/Fresher Ready</p>
              </div>
            </div>
          </div>
        </Motion.div>
      </Motion.div>
    </section>
  );
};

export default Hero;
