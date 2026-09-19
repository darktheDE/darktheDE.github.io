import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import CareerSection from './components/CareerSection';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';
import { useKeyboardNavigation } from './hooks/useKeyboardNavigation';

const RTICSection = lazy(() => import('./components/RTICSection'));
const CertificationsSection = lazy(() => import('./components/CertificationsSection'));

function App() {
  useKeyboardNavigation();

  return (
    <div className="min-h-screen bg-background text-text-light selection:bg-primary/30 relative">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <div className="grain-overlay"></div>
      
      {/* Deloitte Green Radial Ambient Lighting */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(134,188,37,0.10),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(4,106,56,0.08),transparent_25%),linear-gradient(180deg,rgba(9,13,22,0)_0%,#090D16_80%)]"></div>
        <div className="absolute inset-x-0 top-0 h-64 bg-[linear-gradient(90deg,transparent,rgba(134,188,37,0.08),transparent)]"></div>
      </div>

      <div className="fixed inset-0 z-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-25"></div>

      <Navbar />

      <main id="main-content" className="relative z-10 space-y-12 pb-20">
        <Hero />
        <AboutSection />
        <CareerSection />
        <ProjectsSection />

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
