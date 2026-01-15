import { FiHeart, FiGithub, FiLinkedin, FiFacebook, FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/5 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <div className="text-center md:text-left">
            <span className="font-mono text-lg font-bold text-white tracking-tighter">
              darkthe<span className="text-primary">DE</span>
            </span>
            <p className="text-xs text-text-muted mt-1">
              Data Engineering • Backend • Architecture
            </p>
          </div>

          <div className="flex gap-6">
            <a href="https://github.com/darktheDE" target="_blank" rel="noreferrer" className="text-text-muted hover:text-primary transition-colors"><FiGithub size={20} /></a>
            <a href="https://www.linkedin.com/in/darkthede/" target="_blank" rel="noreferrer" className="text-text-muted hover:text-primary transition-colors"><FiLinkedin size={20} /></a>
            <a href="https://www.facebook.com/dkh1105/" target="_blank" rel="noreferrer" className="text-text-muted hover:text-primary transition-colors"><FiFacebook size={20} /></a>
            <a href="mailto:kienhung.do1105@gmail.com" className="text-text-muted hover:text-primary transition-colors"><FiMail size={20} /></a>
          </div>

          <div className="text-xs text-text-muted flex items-center gap-1">
            Vibe-coding with Love <FiHeart className="text-red-500 fill-red-500 mx-1" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;