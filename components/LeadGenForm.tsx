import React from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { Director } from '../types';

const directors: Director[] = [
  {
    region: 'Singapore HQ',
    name: 'Mr. Winston Jeong',
    phone: '+65 8787 6668'
  },
  {
    region: 'Malaysia Office',
    name: 'Mr. Sean Sim',
    phone: '+60 17 201 8149',
    email: 'seansim.kor@gmail.com'
  },
  {
    region: 'South Korea Office',
    name: 'HB Kwon',
    phone: '+82 10 4183 1753'
  }
];

export const ContactSection: React.FC = () => {
  const handleWhatsApp = (phone: string) => {
    const cleanNumber = phone.replace(/\D/g, '');
    window.open(`https://wa.me/${cleanNumber}`, '_blank');
  };

  return (
    <section id="lead-form" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block">Direct Contact</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">
            Global Directors
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Connect directly with our regional leadership for immediate assistance, pricing, and partnership inquiries.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {directors.map((director, idx) => (
            <div 
              key={idx} 
              className={`reveal-scale delay-${idx * 100} bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center text-center group`}
            >
              <div className="w-16 h-16 bg-blue-50 text-primary rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <MapPin size={28} />
              </div>
              
              <h3 className="text-xs font-bold text-accent uppercase tracking-wider mb-2">{director.region}</h3>
              <h4 className="text-2xl font-serif font-bold text-gray-900 mb-6">{director.name}</h4>
              
              <div className="space-y-4 w-full">
                <a 
                  href={`tel:${director.phone.replace(/\s/g, '')}`} 
                  className="flex items-center justify-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-700 transition-colors"
                >
                  <Phone size={18} className="text-primary" />
                  <span className="font-medium">{director.phone}</span>
                </a>

                {director.email && (
                  <a 
                    href={`mailto:${director.email}`} 
                    className="flex items-center justify-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-700 transition-colors"
                  >
                    <Mail size={18} className="text-primary" />
                    <span className="font-medium">{director.email}</span>
                  </a>
                )}

                <button
                  onClick={() => handleWhatsApp(director.phone)}
                  className="w-full flex items-center justify-center gap-2 p-3 rounded-lg bg-[#25D366] hover:bg-[#128C7E] text-white font-bold transition-colors shadow-md mt-4 hover:shadow-lg transform active:scale-95"
                >
                  <MessageCircle size={20} />
                  Chat on WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};