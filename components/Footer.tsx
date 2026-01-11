import React from 'react';
import { Linkedin, Instagram, MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#002244] text-gray-300 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl font-heading font-bold mb-6">Marencore Pte. Ltd.</h3>
            <p className="mb-6 text-sm leading-relaxed">
                Premium seafood trading partner connecting Russian seas to South East Asian tables via Korea's advanced logistics hubs.
            </p>
            <div className="flex flex-col gap-2 mb-6">
                <a href="https://www.marencore.com" className="text-accent hover:text-white transition-colors">www.marencore.com</a>
                <a href="mailto:info@marencore.com" className="flex items-center gap-2 hover:text-white transition-colors text-sm">
                    <Mail size={16} /> info@marencore.com
                </a>
            </div>
             <div className="flex items-start gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-6">
                 <MapPin size={16} className="mt-0.5 flex-shrink-0" /> 
                 <span className="leading-relaxed">
                    60 Paya Lebar Road, #06-28<br/>
                    Paya Lebar Square, Singapore 409051
                 </span>
            </div>
            <div className="flex gap-4">
                <a href="#" className="hover:text-white transition-colors"><Linkedin size={20}/></a>
                <a href="#" className="hover:text-white transition-colors"><Instagram size={20}/></a>
                <a href="#" className="hover:text-white transition-colors"><MessageCircle size={20}/></a>
            </div>
          </div>

          {/* Contact 1 */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Singapore HQ</h4>
            <p className="font-medium text-white mb-1">Director Mr. Winston Jeong</p>
            <div className="flex items-center gap-2 text-sm mb-4 hover:text-white transition-colors">
                <Phone size={14} /> +65 8787 6668
            </div>
          </div>

          {/* Contact 2 */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Malaysia Office</h4>
            <p className="font-medium text-white mb-1">Director Mr. Sean Sim</p>
             <div className="flex items-center gap-2 text-sm mb-2 hover:text-white">
                <Phone size={14} /> +60 17 201 8149
            </div>
          </div>

           {/* Contact 3 */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">South Korea Office</h4>
            <p className="font-medium text-white mb-1">Director Mr. HB Kwon</p>
             <div className="flex items-center gap-2 text-sm mb-2 hover:text-white">
                <Phone size={14} /> +82 10 4183 1753
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm">
            &copy; {new Date().getFullYear()} Marencore Pte. Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};