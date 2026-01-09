import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Logistics } from './pages/Logistics';

function App() {
  return (
    <HashRouter>
      <div className="font-sans text-gray-900 bg-white">
        {/* Navigation Header */}
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logistics" element={<Logistics />} />
        </Routes>

        {/* Footer */}
        <Footer />

        {/* Persistent CTA */}
        <FloatingWhatsApp />
      </div>
    </HashRouter>
  );
}

export default App;