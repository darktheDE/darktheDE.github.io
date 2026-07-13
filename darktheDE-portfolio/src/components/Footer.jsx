import { FiArrowRight, FiFacebook, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { SOCIAL_LINKS, PERSONAL_INFO } from '../data/config';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[1.3fr_0.7fr] md:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">Open to Data Engineering Intern/Fresher roles</p>
            <h2 className="mt-3 max-w-3xl text-2xl font-black leading-tight text-white sm:text-3xl">
              Need someone who can think in pipelines, backend contracts, and AI-ready data products?
            </h2>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a
                href={SOCIAL_LINKS.email}
                className="inline-flex items-center justify-center gap-2 bg-primary px-5 py-3 font-semibold text-slate-950 transition-colors hover:bg-accent"
              >
                Contact Me <FiArrowRight />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-white/10 bg-white/[0.03] px-5 py-3 font-semibold text-text-light transition-colors hover:border-primary/40 hover:text-primary"
              >
                LinkedIn <FiLinkedin />
              </a>
            </div>
          </div>

          <div className="md:text-right">
            <p className="font-mono text-sm text-text-muted">
              darkthe<span className="text-primary">DE</span>
            </p>
            <p className="mt-2 text-xs text-text-muted">© 2026 {PERSONAL_INFO.name}. All rights reserved.</p>
            <div className="mt-5 flex gap-5 md:justify-end">
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="text-text-muted transition-colors hover:text-primary" aria-label="GitHub Profile"><FiGithub size={20} /></a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="text-text-muted transition-colors hover:text-primary" aria-label="LinkedIn Profile"><FiLinkedin size={20} /></a>
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noreferrer" className="text-text-muted transition-colors hover:text-primary" aria-label="Facebook Profile"><FiFacebook size={20} /></a>
              <a href={SOCIAL_LINKS.email} className="text-text-muted transition-colors hover:text-primary" aria-label="Send Email"><FiMail size={20} /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
