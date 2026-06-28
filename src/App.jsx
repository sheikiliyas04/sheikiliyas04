import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';

// Components
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';

// Sections
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Initialize Lenis Smooth Scrolling
  useEffect(() => {
    // Only run scroll smoothing after loader disappears
    if (isLoading) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // premium easeOutQuart
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [isLoading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <div className="relative bg-bg-dark text-white-custom selection:bg-primary selection:text-white-custom min-h-screen w-full overflow-hidden flex flex-col">
          {/* Floating Navigation Bar */}
          <Navbar />

          {/* Portfolio Sections */}
          <main className="w-full flex-grow flex flex-col">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>

          {/* Footer Branding Area */}
          <Footer />
        </div>
      )}
    </>
  );
}
