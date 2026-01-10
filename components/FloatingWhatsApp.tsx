import React from 'react';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const handleChat = () => {
    // In a real app, this would use the Malaysia director's number
    window.open('https://wa.me/60172018149', '_blank');
  };

  return (
    <button
      onClick={handleChat}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white py-3 px-5 rounded-full shadow-lg transition-all transform hover:scale-105 font-heading font-semibold"
      aria-label="Chat via WhatsApp"
    >
      <MessageCircle size={24} />
      <span>Chat via WhatsApp</span>
    </button>
  );
};