import React, { useState } from 'react';
import { BusinessType, ProductInterest } from '../types';
import { Send, CheckCircle } from 'lucide-react';

export const LeadGenForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <section id="lead-form" className="py-20 bg-secondary">
        <div className="container mx-auto px-6 max-w-2xl text-center">
            <div className="bg-white p-12 rounded-2xl shadow-xl">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={40} />
                </div>
                <h2 className="text-3xl font-heading font-bold text-primary mb-4">Inquiry Received</h2>
                <p className="text-gray-600 text-lg">Thank you for your interest in Marencore. Our team will review your request and contact you via WhatsApp or Email within 24 hours.</p>
            </div>
        </div>
      </section>
    );
  }

  return (
    <section id="lead-form" className="py-20 bg-secondary">
      <div className="container mx-auto px-6 max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Request Catalogue & Pricing
          </h2>
          <p className="text-gray-600">
            Tell us your needs. We respond within 24 hours on business days.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-2xl shadow-xl space-y-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Name *</label>
                <input required type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Your Name" />
            </div>
             <div>
                <label htmlFor="company" className="block text-sm font-bold text-gray-700 mb-2">Company Name *</label>
                <input required type="text" id="company" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Business Name" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label htmlFor="businessType" className="block text-sm font-bold text-gray-700 mb-2">Business Type *</label>
                <div className="relative">
                    <select required id="businessType" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none bg-white">
                        <option value="" disabled selected>Select Type</option>
                        {Object.values(BusinessType).map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                </div>
            </div>
             <div>
                <label htmlFor="productInterest" className="block text-sm font-bold text-gray-700 mb-2">Product Interest *</label>
                <select required id="productInterest" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white">
                    <option value="" disabled selected>Select Product</option>
                     {Object.values(ProductInterest).map(t => <option key={t} value={t}>{t}</option>)}
                </select>
            </div>
          </div>

          <div>
             <label htmlFor="volume" className="block text-sm font-bold text-gray-700 mb-2">Estimated Monthly Volume *</label>
             <input required type="text" id="volume" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="e.g. 200kg, 1 ton" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Email *</label>
                <input required type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="name@company.com" />
            </div>
             <div>
                <label htmlFor="whatsapp" className="block text-sm font-bold text-gray-700 mb-2">WhatsApp Number *</label>
                <input required type="tel" id="whatsapp" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="+60 12 345 6789" />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-accent hover:bg-orange-600 text-white py-4 rounded-lg font-bold text-lg transition-colors flex items-center justify-center gap-2 ${loading ? 'opacity-75 cursor-not-allowed' : ''}`}
          >
            {loading ? 'Processing...' : 'Request Catalogue & Pricing'}
            {!loading && <Send size={20} />}
          </button>

          <p className="text-xs text-center text-gray-500 mt-4">
            Your information is used only to respond to your inquiry.
          </p>
        </form>
      </div>
    </section>
  );
};