import React from 'react';
import { Calendar, Package, ShieldCheck, Scale } from 'lucide-react';

const TrustItem = ({ icon: Icon, title, desc, delay }: { icon: any, title: string, desc: string, delay: string }) => (
  <div className={`reveal group flex flex-col items-center text-center p-8 transition-all hover:-translate-y-1 ${delay}`}>
    <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-6 group-hover:bg-blue-50 transition-colors duration-300">
      <Icon size={32} className="text-primary opacity-80 group-hover:scale-110 transition-transform duration-300" />
    </div>
    <h3 className="font-serif font-bold text-lg text-primary mb-2">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed max-w-[200px]">{desc}</p>
  </div>
);

export const TrustBar: React.FC = () => {
  return (
    <section className="bg-white relative z-20 -mt-10 mb-10">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-xl shadow-xl border border-gray-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          <TrustItem
            icon={Calendar}
            title="365-Day Stable Supply"
            desc="Year-round availability via Red & Blue King Crab seasons."
            delay="delay-0"
          />
          <TrustItem
            icon={Scale}
            title="80%+ Meat Yield"
            desc="Strict re-grading in Korea. No empty shells."
            delay="delay-100"
          />
          <TrustItem
            icon={ShieldCheck}
            title="Premium Guarantee"
            desc="100% Credit compensation if DOA exceeds 7%."
            delay="delay-200"
          />
          <TrustItem
            icon={Package}
            title="Flexible MOQ"
            desc="Start with a low-risk Trial Order."
            delay="delay-300"
          />
        </div>
      </div>
    </section>
  );
};