import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PropertyCarousel from './components/PropertyCarousel';
import AgentsSection from './components/AgentsSection';
import LatestNewsSection from './components/LatestNewsSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PropertyCarousel />} />
        <Route path="/agents" element={<AgentsSection />} />
        <Route path="/latest-news" element={<LatestNewsSection />} />
        <Route path="/testimonials" element={<TestimonialsSection />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
