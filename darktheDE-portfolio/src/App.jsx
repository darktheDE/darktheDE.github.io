import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import RTICSection from './components/RTICSection';
import CertificationsSection from './components/CertificationsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-text-light selection:bg-primary/30 relative">
      {/* Global Background Atmosphere */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] bg-blue-500/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[150px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/[0.03] blur-[120px]"></div>
      </div>

      <div className="fixed inset-0 z-0 bg-[url('/assets/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10 pointer-events-none"></div>


      <Navbar />

      <main className="relative z-10 space-y-12 pb-20">
        <Hero />
        <BentoGrid />
        <RTICSection />
        <CertificationsSection />
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}

export default App;

