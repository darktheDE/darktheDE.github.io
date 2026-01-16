import { motion as Motion } from 'framer-motion';
import { FiDownload, FiBookOpen } from 'react-icons/fi';
import { PERSONAL_INFO, SOCIAL_LINKS, ASSETS } from '../data/config';

const Hero = () => {
  return (
    <section className="relative min-h-[60vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden pt-24 md:pt-32">

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-[80px]"></div>
      </div>

      <Motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto"
      >
        {/* Name Display */}
        <div className="mb-4">
          <p className="text-lg md:text-xl text-text-muted font-mono">Hi, I'm</p>
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary mb-2">
            {PERSONAL_INFO.name}
          </h2>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
          {PERSONAL_INFO.tagline.split(' ').map((word, i) =>
            i === 1 ? (
              <span key={i} className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent text-glow-light">
                {i > 0 ? ' ' : ''}{word}
              </span>
            ) : (
              <span key={i}>{i > 0 ? ' ' : ''}{word}</span>
            )
          )}
        </h1>

        <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
          {PERSONAL_INFO.description} <br className="hidden md:block" />
          Specializing in <b>{PERSONAL_INFO.specialties[0]}</b> and <b>{PERSONAL_INFO.specialties[1]}</b>.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#bento"
            className="px-8 py-3 bg-primary hover:bg-secondary text-white rounded-full font-medium transition-all shadow-lg hover:shadow-primary/25 hover:scale-105"
          >
            Explore Work
          </a>

          <a
            href={SOCIAL_LINKS.blog}
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3 bg-dark-card border border-primary/50 text-primary hover:bg-primary/10 hover:shadow-glow-purple rounded-full font-medium transition-all backdrop-blur-md flex items-center gap-2 hover:scale-105"
          >
            <FiBookOpen /> Blog
          </a>

          <a
            href={ASSETS.cv}
            download
            className="px-8 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full font-medium transition-all backdrop-blur-md flex items-center gap-2 hover:scale-105"
          >
            <FiDownload /> Download CV
          </a>
        </div>
      </Motion.div>
    </section>
  );
};

export default Hero;