import React from 'react';
import { AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react';

export const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="relative py-24 scroll-mt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://raw.githubusercontent.com/seansim-kor/public/main/marencore/crab-market.png" 
          alt="Korean Crab Market" 
          className="w-full h-full object-cover animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-blue-50/90 backdrop-blur-sm"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 reveal">
          <span className="text-ocean font-bold tracking-widest uppercase text-xs mb-3 block">Market Analysis</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Why you should import from Korea!
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-light">
            Sourcing directly from Alaska sounds ideal, but the long-haul risks of mortality and quality inconsistency can destroy your margins.
          </p>
        </div>

        {/* COMPARISON SECTION */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          
          {/* RISK SIDE */}
          <div className="reveal-left bg-white p-10 rounded-3xl shadow-sm border border-red-100 relative overflow-hidden group hover:shadow-lg transition-all">
             <div className="absolute top-0 left-0 w-2 h-full bg-red-400"></div>
             <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform">
                  <AlertTriangle size={24} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-gray-900">The "Quality Lottery"</h3>
             </div>
             <ul className="space-y-6">
                <li className="flex gap-4">
                   <div className="min-w-[6px] h-[6px] rounded-full bg-red-400 mt-2"></div>
                   <div>
                      <h4 className="font-bold text-gray-800">Mixed B-Grade Risks</h4>
                      <p className="text-sm text-gray-500 mt-1">Direct shipments often include weak or empty crabs hidden in the bulk.</p>
                   </div>
                </li>
                <li className="flex gap-4">
                   <div className="min-w-[6px] h-[6px] rounded-full bg-red-400 mt-2"></div>
                   <div>
                      <h4 className="font-bold text-gray-800">High D.O.A. (&gt;10%)</h4>
                      <p className="text-sm text-gray-500 mt-1">Long-haul stress without stabilization leads to significant dead-on-arrival losses.</p>
                   </div>
                </li>
                <li className="flex gap-4">
                   <div className="min-w-[6px] h-[6px] rounded-full bg-red-400 mt-2"></div>
                   <div>
                      <h4 className="font-bold text-gray-800">Unstable Supply Chain</h4>
                      <p className="text-sm text-gray-500 mt-1">Unpredictable delays and "Out of Stock" notices that force you to cancel customer reservations.</p>
                   </div>
                </li>
             </ul>
          </div>

          {/* SOLUTION SIDE */}
          <div className="reveal-right bg-[#003366] p-10 rounded-3xl shadow-xl relative overflow-hidden text-white transform md:scale-105 z-10 hover:shadow-2xl transition-all">
             <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
             <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-400 border border-cyan-500/30 animate-pulse">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                    <h3 className="text-2xl font-serif font-bold text-white">The Quality Firewall</h3>
                    <p className="text-cyan-200 text-xs uppercase tracking-widest font-bold">Marencore Ocean Korea Hub Strategy</p>
                </div>
             </div>
             
             <ul className="space-y-6 relative z-10">
                <li className="flex gap-4">
                   <CheckCircle2 size={20} className="text-accent flex-shrink-0 mt-1" />
                   <div>
                      <h4 className="font-bold text-white">Guaranteed 80%+ Meat Yield</h4>
                      <p className="text-sm text-gray-300 mt-1">We don't just ship; we filter. Only A-Grade crabs pass our Korea hub inspection.</p>
                   </div>
                </li>
                <li className="flex gap-4">
                   <CheckCircle2 size={20} className="text-accent flex-shrink-0 mt-1" />
                   <div>
                      <h4 className="font-bold text-white">Minimized Mortality Risk</h4>
                      <p className="text-sm text-gray-300 mt-1">Crabs are stabilized in Donghae tanks to recover vitality before flying.</p>
                   </div>
                </li>
                <li className="flex gap-4">
                   <CheckCircle2 size={20} className="text-accent flex-shrink-0 mt-1" />
                   <div>
                      <h4 className="font-bold text-white">Full Risk Management</h4>
                      <p className="text-sm text-gray-300 mt-1">We absorb the quality variance so you receive a consistent premium product.</p>
                   </div>
                </li>
             </ul>
          </div>
        </div>

        {/* 3-STEP PROCESS VISUAL */}
        <div className="reveal bg-white rounded-3xl p-12 shadow-sm border border-gray-100 delay-200">
           <div className="text-center mb-12">
              <h3 className="text-3xl font-serif font-bold text-primary">The Solution: Expert Korea Hub Processing</h3>
           </div>
           
           <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Connecting Arrows for Desktop */}
              <div className="hidden md:block absolute top-12 left-2/3 -translate-x-1/2 z-0 text-gray-200">
                  <ArrowRight size={40} className="animate-pulse" />
              </div>
              <div className="hidden md:block absolute top-12 left-1/3 -translate-x-1/2 z-0 text-gray-200">
                  <ArrowRight size={40} className="animate-pulse" />
              </div>

              {/* Step 1 */}
              <div className="reveal-scale delay-100 text-center relative z-10 group">
                 <div className="mb-6 relative h-48 rounded-2xl overflow-hidden shadow-md">
                    <img src="https://raw.githubusercontent.com/seansim-kor/public/main/marencore/process-1.jpg" alt="Arrival & Stabilization" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold text-primary text-xl shadow-lg">1</div>
                 </div>
                 <h4 className="text-xl font-bold text-gray-900 mb-2">Arrival & Stabilization</h4>
                 <p className="text-sm text-gray-600">Alaskan vessels dock at Donghae. Stressed crabs recover vitality in specialized tanks.</p>
              </div>

              {/* Step 2 */}
              <div className="reveal-scale delay-300 text-center relative z-10 group">
                 <div className="mb-6 relative h-48 rounded-2xl overflow-hidden shadow-md">
                    <img src="https://raw.githubusercontent.com/seansim-kor/public/main/marencore/process-2.jpg" alt="Expert Re-grading" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold text-primary text-xl shadow-lg">2</div>
                 </div>
                 <h4 className="text-xl font-bold text-gray-900 mb-2">Expert Re-grading</h4>
                 <p className="text-sm text-gray-600">Professionals inspect every crab. Only those with 80%+ meat yield are selected.</p>
              </div>

              {/* Step 3 */}
              <div className="reveal-scale delay-500 text-center relative z-10 group">
                 <div className="mb-6 relative h-48 rounded-2xl overflow-hidden shadow-md">
                    <img src="https://raw.githubusercontent.com/seansim-kor/public/main/marencore/process-3.jpg" alt="Direct Air Freight" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold text-primary text-xl shadow-lg">3</div>
                 </div>
                 <h4 className="text-xl font-bold text-gray-900 mb-2">Direct Air-Freight</h4>
                 <p className="text-sm text-gray-600">Specialized packaging (ICN → KUL). Fastest, safest route to Malaysia.</p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};