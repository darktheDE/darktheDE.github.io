import { FiArrowRight, FiFacebook, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { SOCIAL_LINKS, PERSONAL_INFO } from '../data/config';
import { trackCTA, trackOutboundLink } from '../utils/analytics';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-950/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[1.3fr_0.7fr] md:items-end">
          <div>
            <h2 className="text-2xl font-black leading-tight text-white sm:text-3xl">
              Let's Connect.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-muted">
              Feel free to reach out via email or connect on LinkedIn.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={SOCIAL_LINKS.email}
                onClick={() => trackCTA('Contact Email', 'footer')}
                className="inline-flex items-center justify-center gap-2 rounded bg-primary px-5 py-2.5 font-semibold text-slate-950 transition-colors hover:bg-emerald-400 font-mono text-xs shadow-md shadow-primary/20"
              >
                Send Email <FiArrowRight />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackOutboundLink(SOCIAL_LINKS.linkedin, 'LinkedIn (Footer)')}
                className="inline-flex items-center justify-center gap-2 rounded border border-white/10 bg-white/[0.03] px-5 py-2.5 font-semibold text-text-light transition-colors hover:border-primary/40 hover:text-primary font-mono text-xs"
              >
                LinkedIn Profile <FiLinkedin />
              </a>
            </div>
          </div>

          <div className="md:text-right">
            <p className="font-mono text-base font-bold text-white tracking-tight">
              darkthe<span className="text-white">DE</span><span className="text-primary text-xl">.</span>
            </p>
            <p className="mt-1 font-mono text-xs text-text-muted">
              DO KIEN HUNG (Đỗ Kiến Hưng)
            </p>
            <p className="mt-1 text-xs text-text-muted">
              © 2026 {PERSONAL_INFO.name}. All rights reserved.
            </p>
            <div className="mt-5 flex gap-4 md:justify-end">
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="text-text-muted transition-colors hover:text-primary" aria-label="GitHub Profile"><FiGithub size={18} /></a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="text-text-muted transition-colors hover:text-primary" aria-label="LinkedIn Profile"><FiLinkedin size={18} /></a>
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noreferrer" className="text-text-muted transition-colors hover:text-primary" aria-label="Facebook Profile"><FiFacebook size={18} /></a>
              <a href={SOCIAL_LINKS.email} className="text-text-muted transition-colors hover:text-primary" aria-label="Send Email"><FiMail size={18} /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
