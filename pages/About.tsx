import React, { useEffect } from 'react';
import { Ship, Anchor, Thermometer, Clock, ShieldCheck, MapPin, Truck, Utensils, ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

export const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#0b0f19] text-gray-300 font-sans selection:bg-accent selection:text-white">
      
      {/* SECTION 1: HERO - Our Deep Sea Legacy */}
      <section className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://raw.githubusercontent.com/seansim-kor/public/main/marencore/about-hero.png"
            alt="Calm deep sea horizon"
            className="w-full h-full object-cover animate-zoom-in"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#003366]/60 via-[#003366]/40 to-[#0b0f19]"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl pt-20">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 tracking-tight drop-shadow-lg opacity-0 animate-fade-in-up delay-100">
            Our Deep Sea Legacy
          </h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-8 opacity-0 animate-fade-in-up delay-200"></div>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 font-light drop-shadow-md opacity-0 animate-fade-in-up delay-300">
            Marencore is more than a name; it's a promise forged in the deep, untamed waters of the Okhotsk and Bering Seas. Our journey began with a profound respect for the ocean's bounty and an unwavering commitment to its preservation.
          </p>
          <p className="text-md md:text-lg text-white/80 leading-relaxed mb-12 font-light max-w-3xl mx-auto opacity-0 animate-fade-in-up delay-400">
            "Marencore," a blend of "Mare" (Latin for "sea") and "Core" (signifying essence), embodies our dedication to the very heart of the ocean. We are rooted in the core principles of authenticity, sustainability, and the relentless pursuit of unparalleled quality, bringing the ocean's purest essence directly to you.
          </p>
          
          <button 
            onClick={() => document.getElementById('provenance')?.scrollIntoView({ behavior: 'smooth' })}
            className="opacity-0 animate-fade-in-up delay-500 group bg-white/10 hover:bg-white text-white hover:text-primary border border-white px-8 py-3 rounded-full transition-all duration-300 backdrop-blur-sm flex items-center gap-2 mx-auto hover:scale-105"
          >
            Explore Our Journey <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
          </button>
        </div>
      </section>

      {/* SECTION 2: PROVENANCE - Alaskan vs Russian */}
      <section id="provenance" className="py-24 relative bg-[#0b0f19]">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 animate-pulse-slow"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center">
            <div className="mb-12 relative w-full max-w-4xl reveal-scale">
               {/* Crab Image Layer */}
               <img 
                 src="https://raw.githubusercontent.com/seansim-kor/public/main/marencore/crab-isolated.png" 
                 alt="Red King Crab" 
                 className="w-full h-auto object-contain max-h-[400px] drop-shadow-2xl hover:scale-105 transition-transform duration-700 animate-float"
               />
               <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-10">
                  <div className="bg-white/5 p-4 rounded-full border border-white/10 backdrop-blur-md">
                    <Anchor className="text-white" size={24} />
                  </div>
               </div>
            </div>

            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 reveal delay-100">
                The Alaskan vs. Russian King Crab:<br/>
                <span className="text-gray-400 italic">A Question of Provenance, Not Quality</span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12 text-left mb-12">
                <div className="space-y-4 reveal-left delay-200">
                  <p className="text-gray-400 leading-relaxed">
                    For generations, the majestic Red King Crab has thrived in the cold, nutrient-rich waters shared by Alaska and Russia. The distinction is not in their inherent quality or species, but in their precise point of origin.
                  </p>
                </div>
                <div className="space-y-4 reveal-right delay-200">
                   <p className="text-gray-400 leading-relaxed">
                    Marencore sources from sustainable Russian fisheries, offering the exact same revered species (<i>Paralithodes camtschaticus</i>) with its firm, succulent meat and impressive size, but through an optimized, direct supply chain. This means you receive the highest quality, authentic product that meets the expectations of discerning palates, while benefiting from a sourcing strategy that respects both the ocean and your bottom line.
                  </p>
                </div>
              </div>

              <button 
                onClick={scrollToForm}
                className="reveal-scale delay-300 bg-accent hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium transition-all shadow-[0_0_20px_rgba(255,69,0,0.3)] flex items-center gap-2 mx-auto hover:scale-105"
              >
                Understand the Difference <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: HORECA EXPERIENCE */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://raw.githubusercontent.com/seansim-kor/public/main/marencore/horeca-dining.png"
            alt="Luxury Restaurant Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0b0f19]/90"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="reveal-scale w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center border border-white/20 mb-8 backdrop-blur-md">
              <Utensils className="text-accent" size={32} />
            </div>

            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 reveal delay-100">
              Elevating Your HORECA Experience<br/>& Profitability
            </h2>

            <p className="text-lg text-gray-300 mb-16 leading-relaxed reveal delay-200">
              In the demanding world of hospitality, Marencore is your strategic partner. We understand that premium quality must be paired with consistent value. Our direct sourcing model is designed to enhance your culinary offerings and optimize your operational efficiency.
            </p>

            <div className="grid md:grid-cols-1 gap-8 text-left bg-white/5 p-8 md:p-12 rounded-2xl border border-white/10 backdrop-blur-sm reveal-scale delay-300">
              <div className="flex gap-4 group">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ShieldCheck size={14} className="text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Uncompromised Value</h3>
                  <p className="text-gray-400 text-sm md:text-base">Our efficient trade routes, primarily through Korea, allow us to deliver exceptional seafood at a price point that significantly boosts your margins without sacrificing luxury.</p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ShieldCheck size={14} className="text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Reliable Supply Chain</h3>
                  <p className="text-gray-400 text-sm md:text-base">Enjoy peace of mind with our stable inventory management, designed to mitigate seasonal price fluctuations and ensure your kitchen always has access to the finest ingredients.</p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="flex-shrink-0 mt-1">
                   <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ShieldCheck size={14} className="text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Crafting Culinary Success</h3>
                  <p className="text-gray-400 text-sm md:text-base">From exquisite banquets to intimate fine dining, our premium seafood ensures healthier profit margins on every dish, delighting both your patrons and your balance sheet.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: UNBROKEN COLD CHAIN */}
      <section className="py-24 bg-[#0f1420] relative">
         <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:16px_16px] opacity-20 animate-pulse-slow"></div>
         
         <div className="container mx-auto px-6 relative z-10">
           <div className="text-center mb-16 reveal">
             <div className="w-16 h-16 mx-auto bg-[#1a202c] rounded-full flex items-center justify-center border border-gray-700 mb-6 shadow-lg shadow-black/50">
                <Thermometer className="text-blue-400" size={32} />
             </div>
             <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
               Unbroken Cold Chain: Freshness Guaranteed
             </h2>
             <p className="text-gray-400 max-w-2xl mx-auto">
               From the deep seas of Russia to your place in under 48 hours. We monitor temperature every second of the journey.
             </p>
           </div>

           {/* Process Steps */}
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 relative">
             {/* Line connector for desktop */}
             <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gray-700 -z-10 border-t border-dashed border-gray-600"></div>

             {[
                { icon: Ship, title: "1. The Catch", desc: "Live catch from the Okhotsk & Bering Seas. Immediate tanking.", sub: "RUSSIA" },
                { icon: MapPin, title: "2. Quality Hub", desc: "Fishing vessels enter Donghae Port. Strict quality check & tanking.", sub: "DONGHAE, SOUTH KOREA" },
                { icon: Truck, title: "3. Fresh Arrival", desc: "Direct logistics to South East Asia. Expedited clearance for premium freshness.", sub: "SOUTH EAST ASIA" },
                { icon: Utensils, title: "4. Your Place", desc: "Delivered live to your location. 0% mortality guarantee.", sub: "DOORSTEP DELIVERY" }
             ].map((step, idx) => (
               <div key={idx} className={`reveal delay-${idx * 100} flex flex-col items-center text-center group`}>
                 <div className="w-24 h-24 bg-[#1e2532] rounded-full border-4 border-[#0b0f19] flex items-center justify-center mb-6 group-hover:border-accent transition-colors duration-300 shadow-xl group-hover:scale-110 transform">
                    <step.icon size={36} className="text-gray-300 group-hover:text-accent transition-colors" />
                 </div>
                 <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                 <p className="text-gray-500 text-xs md:text-sm mb-2 h-10">{step.desc}</p>
                 <span className="text-[10px] font-bold text-accent tracking-widest uppercase">{step.sub}</span>
               </div>
             ))}
           </div>

           {/* Feature Icons */}
           <div className="reveal-scale delay-400 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-gray-800 pt-12 max-w-5xl mx-auto">
              <div className="flex flex-col items-center gap-3 hover:scale-105 transition-transform">
                 <ShieldCheck className="text-blue-500" size={24} />
                 <span className="text-sm font-bold text-white">Certified Origin</span>
              </div>
              <div className="flex flex-col items-center gap-3 hover:scale-105 transition-transform">
                 <Thermometer className="text-blue-500" size={24} />
                 <span className="text-sm font-bold text-white">Temp Monitored</span>
              </div>
              <div className="flex flex-col items-center gap-3 hover:scale-105 transition-transform">
                 <Clock className="text-blue-500" size={24} />
                 <span className="text-sm font-bold text-white">&lt; 48hr Transit</span>
              </div>
              <div className="flex flex-col items-center gap-3 hover:scale-105 transition-transform">
                 <ShieldCheck className="text-blue-500" size={24} />
                 <span className="text-sm font-bold text-white">Vet Inspected</span>
              </div>
           </div>
         </div>
      </section>

      {/* CTA Band */}
      <section className="py-16 bg-accent text-white text-center">
        <div className="container mx-auto px-6 reveal">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">Partner with Marencore Today</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Experience the synergy of Russian sourcing and Korean logistics.
          </p>
          <Link 
            to="/#lead-form" 
            className="inline-block bg-[#002244] hover:bg-[#003366] text-white px-10 py-4 rounded-sm font-bold text-lg transition-colors uppercase tracking-wider hover:shadow-lg transform hover:-translate-y-1"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};