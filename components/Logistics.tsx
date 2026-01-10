70
  import React from 'react';
import { Ship, MapPin, ArrowRight, Box } from 'lucide-react';

export const Logistics: React.FC = () => {
  return (
    <section id="logistics" className="py-24 bg-deep-gradient text-white scroll-mt-20 relative overflow-hidden">
      {/* Subtle map pattern or texture */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cartographer.png')] animate-pulse-slow"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <span className="text-cyan-400 font-bold tracking-widest uppercase text-xs mb-3 block reveal">Seamless Cold Chain</span>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 reveal delay-100">
          Overnight Freshness: ICN to South East Asia
        </h2>
        <p className="text-cyan-100 max-w-2xl mx-auto mb-16 reveal delay-200">
            It’s not just a box; it’s a <strong>"Mobile Life Support System"</strong>. Our advanced packaging maintains optimal temperature (3~5°C) and moisture levels throughout the flight.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 relative max-w-5xl mx-auto mb-16">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-white/10 -z-0 transform -translate-y-1/2 border-t border-dashed border-white/20"></div>

          {/* Step 1 */}
          <div className="reveal-left delay-100 relative z-10 flex flex-col items-center bg-[#003366] border border-white/10 p-8 rounded-2xl shadow-xl md:w-1/3 min-h-[220px] transition-transform hover:-translate-y-2 duration-300">
            <div className="w-20 h-20 bg-white/10 text-cyan-300 rounded-full flex items-center justify-center mb-6 shadow-inner backdrop-blur-sm group hover:bg-cyan-900/50 transition-colors">
              <Ship size={32} className="group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="font-serif font-bold text-xl text-white mb-2">Russia</h3>
            <p className="text-cyan-100/70 text-sm font-light">Catch & Handling<br/>(On Vessel)</p>
          </div>

          <div className="md:hidden text-white/30 animate-pulse">
            <ArrowRight size={24} className="rotate-90 md:rotate-0" />
          </div>

          {/* Step 2 */}
          <div className="reveal-scale delay-300 relative z-10 flex flex-col items-center bg-white p-8 rounded-2xl shadow-2xl shadow-cyan-900/50 md:w-1/3 min-h-[240px] transform md:scale-105 hover:scale-110 transition-transform duration-300">
            <div className="absolute -top-4 bg-accent text-white text-[10px] px-4 py-1 rounded-full font-bold uppercase tracking-widest shadow-md animate-bounce">
              Stabilization Hub
            </div>
            <div className="w-20 h-20 bg-blue-50 text-primary rounded-full flex items-center justify-center mb-6 shadow-md">
              <MapPin size={32} />
            </div>
            <h3 className="font-serif font-bold text-xl text-primary mb-2">Korea (ICN)</h3>
            <p className="text-gray-500 text-sm font-light">
                <strong>Advanced Live Packing</strong><br/>
                Wet-Lock + Gel Ice + O2
            </p>
          </div>

          <div className="md:hidden text-white/30 animate-pulse">
            <ArrowRight size={24} className="rotate-90 md:rotate-0" />
          </div>

          {/* Step 3 */}
          <div className="reveal-right delay-100 relative z-10 flex flex-col items-center bg-[#003366] border border-white/10 p-8 rounded-2xl shadow-xl md:w-1/3 min-h-[220px] transition-transform hover:-translate-y-2 duration-300">
            <div className="w-20 h-20 bg-white/10 text-cyan-300 rounded-full flex items-center justify-center mb-6 shadow-inner backdrop-blur-sm group hover:bg-cyan-900/50 transition-colors">
              <MapPin size={32} className="group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="font-serif font-bold text-xl text-white mb-2">South East Asia</h3>
            <p className="text-cyan-100/70 text-sm font-light">Fresh Arrival<br/>(Expedited Clearance)</p>
          </div>
        </div>

        <div className="reveal-scale delay-500 max-w-4xl mx-auto bg-white/5 rounded-xl border border-white/10 p-8 flex flex-col md:flex-row items-center gap-8 backdrop-blur-md hover:bg-white/10 transition-colors">
            <div className="flex-shrink-0 animate-float">
                <Box size={48} className="text-accent" />
            </div>
            <div className="text-left">
    <h4 className="text-xl font-bold text-white mb-2">Live Export Packaging System (Bulk {">"}{">"} 100kg)</h4>                <p className="text-cyan-100 text-sm leading-relaxed">
                   We utilize Styrofoam lids, Double Polyethylene Liners (Sealed with Oxygen), Wet Sponges, and Absorbent Pads with wrapped Gel Ice Packs.
                   Crabs are packed "dormant & leak-proof" to minimize stress during the flight.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};
