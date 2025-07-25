import React, { useState } from 'react';
import { Mail, ArrowRight, Leaf } from 'lucide-react';

export default function EmailSignup() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email signup
    console.log('Email signup:', email);
    setEmail('');
  };

  return (
    <section className="py-20 bg-ocean relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-2xl"></div>
      </div>

      {/* Decorative Leaves */}
      <div className="absolute top-20 left-20 opacity-10">
        <Leaf className="w-16 h-16 text-white transform rotate-12" />
      </div>
      <div className="absolute bottom-32 right-32 opacity-10">
        <Leaf className="w-12 h-12 text-white transform -rotate-45" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 spray-oval spray-dark">
          <Mail className="w-4 h-4 text-white" />
          <span className="text-white font-medium text-sm">Get Exclusive Digestive Wellness Tips</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-serif text-white mb-6 leading-tight spray-horizontal spray-dark">
          Get Your Free Guide:
          <span className="block text-white/90">Digestive Wellness Tips</span>
        </h2>

        <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
          Join 50,000+ people getting weekly digestive wellness tips, exclusive discounts on gut health supplements, 
          and science-backed digestive support strategies delivered to your inbox.
        </p>

        {/* Email Form */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Get digestive wellness tips & discounts"
              className="flex-1 px-6 py-4 rounded-full bg-cream/90 backdrop-blur-sm text-navy placeholder-navy/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-transparent"
              required
            />
            <button
              type="submit"
              className="group bg-gold text-white px-8 py-4 rounded-full hover:bg-gold/90 transition-all duration-300 font-bold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span>Get Wellness Guide</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </form>

        {/* Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center space-x-8 text-white/60 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-white/60 rounded-full"></div>
            <span>No spam, ever</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-gold rounded-full"></div>
            <span>Convenient wellness tips</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-white/60 rounded-full"></div>
            <span>Product updates</span>
          </div>
        </div>
      </div>
    </section>
  );
}