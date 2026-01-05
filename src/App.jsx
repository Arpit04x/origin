import React, { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Showcase from './components/sections/Showcase';
import Features from './components/sections/Features';
import AISection from './components/sections/AISection';
import FooterCTA from './components/sections/FooterCTA';
import Footer from './components/layout/Footer';

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <Showcase />
        <Features />
        <AISection />
        <FooterCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
