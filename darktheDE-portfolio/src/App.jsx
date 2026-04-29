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
      <div className="grain-overlay"></div>
      {/* Global Background Atmosphere */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/25 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute top-[20%] right-[-5%] w-[40%] h-[40%] bg-blue-500/15 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[60%] bg-primary/20 rounded-full blur-[150px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/[0.07] blur-[120px]"></div>
      </div>

      {/* High-Performance CSS Grid (Replaces missing grid.svg) */}
      <div className="fixed inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-30"></div>



      <Navbar />

      <main className="relative z-10 space-y-12 pb-20">
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

