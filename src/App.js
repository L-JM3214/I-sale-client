import React from 'react';
import PropertyCarousel from './components/PropertyCarousel';
import AgentsSection from './components/AgentsSection';
import LatestNewsSection from './components/LatestNewsSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <PropertyCarousel />
      <AgentsSection />
      <LatestNewsSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}

export default App;
