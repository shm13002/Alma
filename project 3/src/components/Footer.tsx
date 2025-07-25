import React from 'react';
import { Heart, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import AlmaLogo from './AlmaLogo';

export default function Footer() {
  return (
    <footer className="bg-ocean text-white relative overflow-hidden">
      {/* Wavy Top */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-20 text-ocean">
          <path d="M0,60 C300,0 900,120 1200,60 L1200,0 L0,0 Z" fill="currentColor" />
        </svg>
      </div>

      <div className="relative pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-gold to-gold/80 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <AlmaLogo className="text-white" size="large" />
              </div>
              <p className="text-white/80 leading-relaxed mb-6 max-w-md">
                <span className="font-recoleta font-black" style={{ letterSpacing: '-0.05em' }}>alma</span> - wellness for the soul. Natural remedies crafted with love and intention 
                to support your journey to complete well-being and inner peace.
              </p>
              <div className="flex items-center space-x-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-serif text-xl mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#product" className="text-white/80 hover:text-white transition-colors">Product Details</a></li>
                <li><a href="#ingredients" className="text-white/80 hover:text-white transition-colors">Ingredients</a></li>
                <li><a href="#reviews" className="text-white/80 hover:text-white transition-colors">Customer Reviews</a></li>
                <li><a href="#faq" className="text-white/80 hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-serif text-xl mb-6">Get in Touch</h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-gold" />
                  <span className="text-white/80">hello@alma.com</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-gold" />
                  <span className="text-white/80">+1 (555) 123-4567</span>
                </li>
                <li className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-gold mt-1" />
                  <span className="text-white/80">123 Wellness Way<br />Nature Valley, CA 90210</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-white/60 text-sm">
              © 2024 <span className="font-recoleta font-black" style={{ letterSpacing: '-0.05em' }}>alma</span>. All rights reserved. Made with love for your wellness journey.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-berry/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-10 w-24 h-24 bg-gold/10 rounded-full blur-2xl"></div>
    </footer>
  );
}