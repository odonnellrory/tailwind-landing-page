import React, { useState, useEffect } from 'react';
import { Star, Cloud, Sun, Moon } from 'lucide-react';
import './output.css';

import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import ScrollIndicator from './components/ScrollIndicator';
import ProgressBar from './components/ProgressBar';
import FloatingObject from './components/FloatingObject';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-700 to-indigo-900 text-white overflow-hidden">
      <HeroSection scrollY={scrollY} />
      <FeaturesSection />
      <CTASection />
      <Footer />
      <ScrollIndicator />
      <ProgressBar />

      {/* Floating objects */}
      <FloatingObject Icon={Star} delay={0} />
      <FloatingObject Icon={Cloud} delay={0.5} />
      <FloatingObject Icon={Sun} delay={1} />
      <FloatingObject Icon={Moon} delay={1.5} />
    </div>
  );
}

export default App;