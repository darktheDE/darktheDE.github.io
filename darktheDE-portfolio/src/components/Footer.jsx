import { FiGithub, FiLinkedin, FiFacebook, FiMail, FiHeart } from 'react-icons/fi';
import { SOCIAL_LINKS, PERSONAL_INFO } from '../data/config';

const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-dark/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-sm text-text-muted font-mono">
              darkthe<span className="text-primary">DE</span>
            </p>
            <p className="text-xs text-text-muted">© 2025 {PERSONAL_INFO.name}. All rights reserved.</p>
          </div>

          <div className="flex gap-6">
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="text-text-muted hover:text-primary transition-colors"><FiGithub size={20} /></a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="text-text-muted hover:text-primary transition-colors"><FiLinkedin size={20} /></a>
            <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noreferrer" className="text-text-muted hover:text-primary transition-colors"><FiFacebook size={20} /></a>
            <a href={SOCIAL_LINKS.email} className="text-text-muted hover:text-primary transition-colors"><FiMail size={20} /></a>
          </div>

          <div className="text-xs text-text-muted flex items-center gap-1">
            Backend Development • Data Engineering • Business Analysis
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;