import React, { useState } from 'react';
import { Thermometer, Anchor, Snowflake, ArrowRight, CheckCircle2 } from 'lucide-react';

export const Products: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'live' | 'frozen'>('live');

  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="products" className="py-24 bg-surface scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Premium Specs for the ASEAN Market
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto font-light">
            We focus on the large sizes (2.0kg ~ 5.0kg) that the South East Asian HORECA market prefers, with an uncompromising 80% meat yield guarantee.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-16 reveal delay-100">
          <div className="flex space-x-2 bg-white p-1 rounded-full shadow-md border border-gray-100">
            <button
              onClick={() => setActiveTab('live')}
              className={`px-8 py-3 rounded-full text-sm font-bold tracking-wide transition-all duration-300 ${
                activeTab === 'live' 
                  ? 'bg-primary text-white shadow-md transform scale-105' 
                  : 'text-gray-500 hover:text-primary'
              }`}
            >
              Live King Crab
            </button>
            <button
              onClick={() => setActiveTab('frozen')}
              className={`px-8 py-3 rounded-full text-sm font-bold tracking-wide transition-all duration-300 ${
                activeTab === 'frozen' 
                  ? 'bg-primary text-white shadow-md transform scale-105' 
                  : 'text-gray-500 hover:text-primary'
              }`}
            >
              Frozen King Crab
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden reveal-scale delay-200">
          <div className="grid md:grid-cols-2">
            
            {/* Image Side */}
            <div className="relative h-[500px] md:h-auto overflow-hidden group">
                <img
                  key={activeTab} // Key forces re-render for animation on tab switch
                  src={activeTab === 'live' ? "https://raw.githubusercontent.com/seansim-kor/public/main/marencore/product-live.png" : "https://raw.githubusercontent.com/seansim-kor/public/main/marencore/product-frozen.jpg"}
                  alt={activeTab}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 animate-fade-in-up"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-80"></div>
                <div className="absolute bottom-10 left-10 text-white z-10 animate-fade-in-up delay-200">
                    <span className="bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider mb-3 inline-block rounded-sm">
                        {activeTab === 'live' ? 'Prime Live Condition' : 'High Durability'}
                    </span>
                    <h3 className="text-4xl font-serif mb-2">{activeTab === 'live' ? 'Live Red & Blue King Crab' : 'Boiled/Sectioned Frozen'}</h3>
                    <p className="text-white/80 font-light">
                        {activeTab === 'live' ? 'Paralithodes camtschaticus / platypus' : 'Direct from Russian Fisheries'}
                    </p>
                </div>
            </div>

            {/* Details Side */}
            <div className="flex flex-col justify-center p-10 md:p-14 space-y-8 animate-fade-in-up delay-100">
                <div>
                    <h3 className="text-2xl font-serif font-bold text-primary mb-3">
                        {activeTab === 'live' ? 'The Centerpiece of Luxury Dining' : 'For High-Volume Retail & Buffet'}
                    </h3>
                    <p className="text-gray-600 font-light leading-relaxed">
                        {activeTab === 'live' 
                            ? 'Sourced from Okhotsk/Bering Seas. We combine Red King Crab (Sept-Feb) and Blue King Crab (Feb-Sept) seasons to ensure 365-day uninterrupted supply for your menu.' 
                            : 'Process-perfected frozen sections. Cost-effective with extended shelf life, perfect for high-volume buffets and retail packs.'}
                    </p>
                </div>

                <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-secondary rounded-xl hover:bg-blue-50 transition-colors transform hover:translate-x-2 duration-300">
                        <Thermometer className="text-ocean" size={24} />
                        <div>
                            <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Market-Preferred Size</span>
                            <span className="text-gray-900 font-medium">
                                {activeTab === 'live' ? '2.0kg – 5.0kg (Large Sizes)' : 'Boiled / Sectioned / IWP'}
                            </span>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 bg-secondary rounded-xl hover:bg-blue-50 transition-colors transform hover:translate-x-2 duration-300">
                        <CheckCircle2 className="text-ocean" size={24} />
                        <div>
                            <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Meat Yield Guarantee</span>
                            <span className="text-gray-900 font-medium">
                                {activeTab === 'live' ? 'Guaranteed 80%+' : 'Standard A-Grade'}
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-secondary rounded-xl hover:bg-blue-50 transition-colors transform hover:translate-x-2 duration-300">
                        <Snowflake className="text-ocean" size={24} />
                        <div>
                            <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Logistics Mode</span>
                            <span className="text-gray-900 font-medium">
                                {activeTab === 'live' ? 'Air Freight (Incheon → KL/SG/HK)' : 'Sea Freight (Reefer Container)'}
                            </span>
                        </div>
                    </div>
                </div>

                <button
                  onClick={scrollToForm}
                  className="group w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-primaryLight transition-all flex items-center justify-center gap-3 shadow-lg shadow-blue-900/10 hover:-translate-y-1"
                >
                  Request {activeTab === 'live' ? 'Live' : 'Frozen'} Quote <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
                </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};