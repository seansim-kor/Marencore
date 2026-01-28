import React from 'react';
import { ShieldCheck, Anchor } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden text-white">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0 animate-zoom-in">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-105"
        >
          {/* Updated to raw link for direct streaming */}
          <source src="https://raw.githubusercontent.com/seansim-kor/public/main/marencore/hero-video.mp4" type="video/mp4" />
          {/* Fallback image if video fails */}
          <img 
            src="https://raw.githubusercontent.com/seansim-kor/public/main/marencore/hero-poster.jpg" 
            alt="Rough sea fishing vessel" 
            className="w-full h-full object-cover"
          />
        </video>
        
        {/* Updated gradient for a fresher deep sea look */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#003366]/60 via-[#004C99]/40 to-[#002244]/90 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center pt-10">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-xs font-bold tracking-widest uppercase mb-8 opacity-0 animate-fade-in-down">
             <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
             Alaskan King Crab via Korea
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-8 leading-tight tracking-tight drop-shadow-2xl opacity-0 animate-fade-in-up delay-100">
            The Premium Gateway <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-100 via-white to-cyan-100 italic">
              To South East Asia's Best Tables
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-cyan-50 mb-12 font-light leading-relaxed max-w-2xl drop-shadow-md opacity-0 animate-fade-in-up delay-200">
            Don't gamble with direct import risks. Experience our <strong>"Quality Firewall"</strong> strategy via Korea. 
            We stabilize, re-grade, and air-freight only the finest A-Grade King Crabs with guaranteed meat yield.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12 text-sm text-cyan-50 font-medium tracking-wide border-t border-white/10 pt-8 w-full max-w-4xl opacity-0 animate-fade-in-up delay-300">
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