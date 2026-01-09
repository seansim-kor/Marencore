import React from 'react';
import { ArrowRight, MessageCircle, ShieldCheck, Anchor } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/60172018149', '_blank');
  };

  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden text-white">
      {/* Background Image with Ocean Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/id/439/1920/1080"
          alt="Rough sea fishing vessel"
          className="w-full h-full object-cover scale-105"
        />
        {/* Updated gradient for a fresher deep sea look */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#003366]/60 via-[#004C99]/40 to-[#002244]/90 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center pt-10">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-xs font-bold tracking-widest uppercase mb-8 animate-fadeIn shadow-lg">
             <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
             Russian King Crab via Korea
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-8 leading-tight tracking-tight drop-shadow-2xl">
            The Premium Gateway <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-100 via-white to-cyan-100 italic">
              To South East Asia's Best Tables
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-cyan-50 mb-12 font-light leading-relaxed max-w-2xl drop-shadow-md">
            Don't gamble with direct import risks. Experience our <strong>"Quality Firewall"</strong> strategy via Korea. 
            We stabilize, re-grade, and air-freight only the finest A-Grade King Crabs with guaranteed meat yield.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 mb-16">
            <button
              onClick={scrollToForm}
              className="bg-accent hover:bg-orange-600 text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-orange-500/30 flex items-center justify-center gap-3 uppercase tracking-wider transform hover:-translate-y-1"
            >
              Start Trial Order <ArrowRight size={20} />
            </button>
            <button
              onClick={handleWhatsApp}
              className="group bg-white/10 border border-white/30 hover:bg-white hover:text-primary text-white px-10 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-3 uppercase tracking-wider backdrop-blur-sm shadow-lg transform hover:-translate-y-1"
            >
              <MessageCircle size={20} className="group-hover:text-[#25D366] transition-colors" /> Chat Inquiry
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12 text-sm text-cyan-50 font-medium tracking-wide border-t border-white/10 pt-8 w-full max-w-4xl">
            <div className="flex items-center justify-center gap-3">
               <ShieldCheck size={18} className="text-cyan-400" />
               Guaranteed 80%+ Meat Yield
            </div>
             <div className="flex items-center justify-center gap-3">
               <Anchor size={18} className="text-cyan-400" />
               Live Stabilization in Korea
            </div>
             <div className="flex items-center justify-center gap-3">
               <ShieldCheck size={18} className="text-cyan-400" />
               Industry-Best DOA Policy
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};