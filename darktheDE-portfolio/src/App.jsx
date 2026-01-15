import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import RTICSection from './components/RTICSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-text-light selection:bg-primary/30">
      <div className="fixed inset-0 z-0 bg-[url('/assets/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20 pointer-events-none"></div>

      <Navbar />

      <main className="relative z-10 space-y-12 pb-20">
        <Hero />
        <BentoGrid />
        <RTICSection />
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}

export default App;
