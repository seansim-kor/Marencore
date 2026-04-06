import React from 'react';
import { CheckCircle2, ShieldCheck, Handshake, TrendingUp } from 'lucide-react';

export const Sourcing: React.FC = () => {
  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Abstract wave background */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 reveal">
             <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                You Focus on Sales, We Handle the Risk
             </h2>
             <p className="text-blue-100 text-lg">More than a supplier, we are your partner for business growth across South East Asia.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="reveal-left bg-white/5 rounded-2xl p-8 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors group">
               <div className="flex items-start gap-4">
                <ShieldCheck className="text-accent flex-shrink-0 group-hover:scale-110 transition-transform" size={32} />
                <div>
                  <h4 className="font-bold text-xl mb-2">Expert D.O.A. Risk Management</h4>
                  <p className="text-blue-100 font-light leading-relaxed">
                     We maintain a 10% D.O.A. benchmark to manage logistics risks for our partners. Standards vary by species (Red vs. Blue/Brown) and seasonal factors. Final terms are pre-aligned per shipment to reflect current biological conditions and ensure operational stability.
                  </p>
                </div>
               </div>
            </div>

            <div className="reveal-right bg-white/5 rounded-2xl p-8 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors group">
               <div className="flex items-start gap-4">
                <TrendingUp className="text-accent flex-shrink-0 group-hover:scale-110 transition-transform" size={32} />
                <div>
                  <h4 className="font-bold text-xl mb-2">Flexible MOQ (Trial Order)</h4>
                  <p className="text-blue-100 font-light leading-relaxed">
                     Lower your initial burden. Verify our quality directly with a Trial Order before committing to bulk. We support your gradual market entry.
                  </p>
                </div>
               </div>
            </div>

            <div className="reveal-left bg-white/5 rounded-2xl p-8 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors group">
               <div className="flex items-start gap-4">
                <Handshake className="text-accent flex-shrink-0 group-hover:scale-110 transition-transform" size={32} />
                <div>
                  <h4 className="font-bold text-xl mb-2">Transparent Pricing</h4>
                  <p className="text-blue-100 font-light leading-relaxed">
                     We offer reasonable and transparent pricing linked to international market rates (e.g., CIF Major SEA Ports). No hidden fees.
                  </p>
                </div>
               </div>
            </div>

            <div className="reveal-right bg-white/5 rounded-2xl p-8 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors group">
               <div className="flex items-start gap-4">
                <CheckCircle2 className="text-accent flex-shrink-0 group-hover:scale-110 transition-transform" size={32} />
                <div>
                  <h4 className="font-bold text-xl mb-2">Halal Market Expertise</h4>
                  <p className="text-blue-100 font-light leading-relaxed">
                     We understand the importance of the Halal market in the ASEAN region. Our processes can be designed to comply with Halal standards (e.g., JAKIM, MUIS).
                  </p>
                </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};