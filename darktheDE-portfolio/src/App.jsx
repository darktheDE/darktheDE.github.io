import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import Footer from './components/Footer';

const RTICSection = lazy(() => import('./components/RTICSection'));
const CertificationsSection = lazy(() => import('./components/CertificationsSection'));

function App() {
  return (
    <div className="min-h-screen bg-background text-text-light selection:bg-primary/30 relative">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <div className="grain-overlay"></div>
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(16,185,129,0.12),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.10),transparent_24%),linear-gradient(180deg,rgba(2,6,23,0)_0%,#020617_78%)]"></div>
        <div className="absolute inset-x-0 top-0 h-64 bg-[linear-gradient(90deg,transparent,rgba(16,185,129,0.10),transparent)]"></div>
      </div>

      <div className="fixed inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-30"></div>



      <Navbar />

      <main id="main-content" className="relative z-10 space-y-10 pb-20">
        <Hero />
        <BentoGrid />
        
        <Suspense fallback={<div className="h-40 flex items-center justify-center text-text-muted font-mono text-xs italic">Loading section...</div>}>
          <RTICSection />
          <CertificationsSection />
        </Suspense>
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}

export default App;

