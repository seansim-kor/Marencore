import React, { useEffect } from 'react';
import { Plane, CheckCircle2, FileText, ArrowRight, Thermometer, Truck, Anchor, ShieldCheck, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ContactSection } from '../components/LeadGenForm';

export const Logistics: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white font-sans text-gray-900 selection:bg-primary selection:text-white pt-20">
      
      {/* SECTION 1: HERO */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Text Content */}
            <div className="lg:w-1/2 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-primary text-xs font-bold tracking-widest uppercase mb-6 opacity-0 animate-fade-in-down">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                Live Air Freight Specialists
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-serif font-bold text-primary leading-[1.1] mb-6 opacity-0 animate-fade-in-up delay-100">
                Swift Global Air Journey for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Live King Crab</span>
              </h1>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-xl opacity-0 animate-fade-in-up delay-200">
                Experience unparalleled speed and freshness with our dedicated air freight network. We ensure live King Crab arrives swiftly from Russia, through premier Korean airport hubs like Incheon, directly to South East Asia.
              </p>
              
              <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in-up delay-300">
                <button 
                  onClick={() => document.getElementById('journey-stages')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-primary text-white font-bold rounded-lg shadow-lg hover:bg-primaryLight transition-all flex items-center gap-2 hover:-translate-y-1"
                >
                  Explore Air Routes <ArrowRight size={18} />
                </button>
                <button 
                   onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
                   className="px-8 py-4 bg-white text-primary border-2 border-primary/10 font-bold rounded-lg hover:border-primary hover:bg-blue-50 transition-all hover:-translate-y-1"
                >
                  Get a Freight Quote
                </button>
              </div>
            </div>

            {/* Image Content */}
            <div className="lg:w-1/2 relative opacity-0 animate-slide-in-right delay-200">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <img 
                  src="https://raw.githubusercontent.com/seansim-kor/public/main/marencore/logistics-hero.jpg" 
                  alt="Cargo Plane Loading" 
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                {/* Overlay Card */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl text-white animate-fade-in-up delay-500">
                  <div className="flex items-center gap-3 mb-2">
                    <Globe size={20} className="text-blue-300" />
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-200">Direct Air Route</span>
                  </div>
                  <p className="font-serif text-xl font-medium">
                    Russia (Catch) <span className="text-blue-300">→</span> Incheon (Hub) <span className="text-blue-300">→</span> South East Asia
                  </p>
                  <p className="text-xs text-white/60 mt-2">Optimized for maximum freshness and survival rates.</p>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute -z-10 top-10 -right-10 w-full h-full border-2 border-primary/5 rounded-2xl animate-pulse-slow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: STATS BAR */}
      <section className="bg-secondary/50 py-12 border-y border-blue-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="reveal delay-0 bg-white p-6 rounded-xl shadow-sm flex items-center gap-6 hover:shadow-md transition-all">
              <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center text-primary">
                <Plane size={28} />
              </div>
              <div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">Airports Served</span>
                <span className="text-2xl font-serif font-bold text-gray-900">3 Key Hubs</span>
              </div>
            </div>

            <div className="reveal delay-100 bg-white p-6 rounded-xl shadow-sm flex items-center gap-6 hover:shadow-md transition-all">
              <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center text-green-600">
                <ShieldCheck size={28} />
              </div>
              <div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">Import Compliance</span>
                <span className="text-2xl font-serif font-bold text-gray-900">100% Rate</span>
              </div>
            </div>

            <div className="reveal delay-200 bg-white p-6 rounded-xl shadow-sm flex items-center gap-6 hover:shadow-md transition-all">
              <div className="w-14 h-14 bg-purple-50 rounded-full flex items-center justify-center text-purple-600">
                <Globe size={28} />
              </div>
              <div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">Flight Freq</span>
                <span className="text-2xl font-serif font-bold text-gray-900">Daily / Weekly</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: COMPLIANCE */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cartographer.png')] opacity-5 animate-pulse-slow"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 reveal">
            <div className="max-w-2xl">
               <h2 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">
                Seamless Regional Import Compliance
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We meticulously handle permits, health certificates, and customs clearance for entry into Malaysia, Singapore, and Hong Kong, ensuring a hassle-free and swift supply chain for your business.
              </p>
            </div>
            <button 
              onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all"
            >
              Contact Director for Details <ArrowRight size={18} />
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: ShieldCheck, 
                title: "Regional Compliance", 
                desc: "Full adherence to regional standards (MAQIS, SFA, FEHD) with pre-approved permits." 
              },
              { 
                icon: FileText, 
                title: "Export Documentation", 
                desc: "Complete handling of health certs, origin papers, and commercial invoices." 
              },
              { 
                icon: Thermometer, 
                title: "Optimized Cold Chain", 
                desc: "Temperature controlled environments for live transport from catch to airport to warehouse." 
              },
              { 
                icon: Plane, 
                title: "Direct Air Logistics", 
                desc: "No middlemen. Direct air freight from Russian origin via Korean air hubs." 
              }
            ].map((item, i) => (
              <div key={i} className={`reveal delay-${i * 100} bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all group hover:-translate-y-2`}>
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <item.icon size={24} className="group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: JOURNEY STAGES */}
      <section id="journey-stages" className="py-24 bg-surface relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block">Our Air Network</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              Live King Crab Air Journey Stages
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our streamlined air logistics ensure the quickest and most efficient transit for live King Crab from Russia to your market.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Stage 1 */}
            <div className="reveal-left delay-0 bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300 group">
              <div className="h-56 relative overflow-hidden">
                 <img src="https://raw.githubusercontent.com/seansim-kor/public/main/marencore/process-1.jpg" alt="Russian Vessel" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                 <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                   <div className="flex items-center gap-2 text-white/90 text-sm font-bold">
                     <Anchor size={16} className="text-blue-400" /> Russian Far East
                   </div>
                 </div>
              </div>
              <div className="p-8">
                <div className="text-xs font-bold text-accent uppercase tracking-wider mb-2">Catch & Initial Prep</div>
                <h3 className="text-2xl font-serif font-bold text-primary mb-4">Vessel Offloading & Sorting</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Crabs are expertly harvested, sorted, and immediately prepared for air transport to ensure vitality.
                </p>
              </div>
            </div>

            {/* Stage 2 */}
            <div className="reveal-scale delay-200 bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300 group">
               <div className="h-56 relative overflow-hidden">
                 <img src="https://raw.githubusercontent.com/seansim-kor/public/main/marencore/process-2.jpg" alt="Incheon Airport" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                 <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                   <div className="flex items-center gap-2 text-white/90 text-sm font-bold">
                     <Plane size={16} className="text-blue-400" /> Incheon International Airport
                   </div>
                 </div>
              </div>
              <div className="p-8">
                <div className="text-xs font-bold text-accent uppercase tracking-wider mb-2">Transit Hub</div>
                <h3 className="text-2xl font-serif font-bold text-primary mb-4">Fast-Track Customs & Transfer</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Efficient processing and rapid transfer at Korea's premier air cargo hub, minimizing layover times.
                </p>
              </div>
            </div>

            {/* Stage 3 */}
            <div className="reveal-right delay-400 bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300 group">
               <div className="h-56 relative overflow-hidden">
                 <img src="https://raw.githubusercontent.com/seansim-kor/public/main/marencore/process-3.jpg" alt="KL Airport" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                 <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                   <div className="flex items-center gap-2 text-white/90 text-sm font-bold">
                     <Truck size={16} className="text-blue-400" /> Major SEA Airports
                   </div>
                 </div>
              </div>
              <div className="p-8">
                 <div className="text-xs font-bold text-accent uppercase tracking-wider mb-2">Final Destination</div>
                <h3 className="text-2xl font-serif font-bold text-primary mb-4">Expedited Local Delivery</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Upon arrival at the destination airport (KUL, SIN, HKG), live crabs are swiftly cleared and dispatched for local delivery, fresh to your door.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-6 max-w-4xl reveal">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Streamline Your Seafood Supply?</h2>
          <p className="text-blue-100 mb-10 text-lg">
            Partner with Marencore for a supply chain that prioritizes freshness, speed, and compliance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button 
              onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-accent hover:bg-orange-600 text-white px-10 py-4 rounded-lg font-bold text-lg transition-colors uppercase tracking-wider hover:shadow-lg transform hover:-translate-y-1"
            >
              Request Freight Quote
            </button>
            <button
               onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-transparent border border-white/30 hover:bg-white/10 text-white px-10 py-4 rounded-lg font-bold text-lg transition-colors uppercase tracking-wider hover:shadow-lg transform hover:-translate-y-1"
            >
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Embedded Contact Section */}
      <ContactSection />
    </div>
  );
};