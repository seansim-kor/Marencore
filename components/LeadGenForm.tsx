import React from 'react';
import { Send } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="lead-form" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block">Business Inquiry</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">
            Partner with Marencore Ocean
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Fill out the form below to request a catalog, pricing, or discuss logistics solutions. We will respond within 24 hours.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12 reveal-scale">
          <form action="https://formspree.io/f/xwvnkyqz" method="POST" className="space-y-6">
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-bold text-gray-700">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-bold text-gray-700">Company Name</label>
                <input 
                  type="text" 
                  id="company" 
                  name="company" 
                  required 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="Company Ltd."
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold text-gray-700">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-bold text-gray-700">Phone / WhatsApp</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  required 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="+60 12 345 6789"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="interest" className="text-sm font-bold text-gray-700">Interest Product (관심 품목)</label>
              <select 
                id="interest" 
                name="interest" 
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
              >
                <option value="Live King Crab">Live King Crab</option>
                <option value="Frozen King Crab">Frozen King Crab</option>
                <option value="Logistics Services">Logistics Services</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-bold text-gray-700">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows={4} 
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                placeholder="Tell us about your requirements (Volume, Port of Destination, etc.)"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-accent hover:bg-orange-600 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <Send size={20} />
              Send Inquiry
            </button>
            
            <p className="text-xs text-gray-500 text-center mt-4">
              By submitting this form, you agree to our privacy policy. We respect your inbox.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};