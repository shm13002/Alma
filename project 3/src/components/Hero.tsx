import React from 'react';
import { Star, ArrowRight, Shield, Award, Users, Heart, Leaf, Droplets, Scaling as Seedling } from 'lucide-react';
import AlmaLogo from './AlmaLogo';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream pt-20">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Trust Badges */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
              <div className="inline-flex items-center space-x-2 bg-ocean/10 px-4 py-2 rounded-full">
                <Leaf className="w-4 h-4 text-ocean" />
                <span className="text-navy font-medium text-sm">Vegan & Gluten-Free</span>
              </div>
              <div className="inline-flex items-center space-x-2 bg-berry/10 px-4 py-2 rounded-full">
                <Shield className="w-4 h-4 text-berry" />
                <span className="text-navy font-medium text-sm">Third-Party Tested</span>
              </div>
              <div className="inline-flex items-center space-x-2 bg-gold/10 px-4 py-2 rounded-full">
                <Seedling className="w-4 h-4 text-gold" />
                <span className="text-navy font-medium text-sm">Non-GMO Verified</span>
              </div>
              <div className="inline-flex items-center space-x-2 bg-blueberry/10 px-4 py-2 rounded-full">
                <Award className="w-4 h-4 text-blueberry" />
                <span className="text-navy font-medium text-sm">No Artificial Colors</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-navy mb-6 leading-tight hero-spray">
              Daily Gut Health Gummies for
              <span className="block text-gold relative">
                Digestive Support*
                <div className="absolute -bottom-2 left-0 lg:left-0 w-32 h-1 bg-gradient-to-r from-gold to-gold/80 rounded-full opacity-70 mx-auto lg:mx-0"></div>
              </span>
            </h1>

            {/* Value Proposition */}
            <p className="text-xl md:text-2xl text-navy mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Tasty gummies with probiotics & enzymes to support your <span className="text-gold font-semibold">daily wellness.*</span>
            </p>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-8 mb-8">
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold fill-current" />
                  ))}
                </div>
                <span className="text-navy font-semibold">4.9/5</span>
                <span className="text-navy/70">(2,847+ verified reviews)</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-ocean" />
                <span className="text-navy font-medium">50,000+ Happy Customers</span>
              </div>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col items-center lg:items-start space-y-6">
              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="group bg-ocean text-white px-10 py-4 rounded-full hover:bg-ocean/90 transition-all duration-300 font-bold text-lg flex items-center space-x-3 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 cta-spray">
                  <span>Shop Digestive Support Gummies - 30% Off</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              
              {/* Price Comparison */}
              <div className="text-center lg:text-left">
                <p className="text-navy/70 text-sm mb-2">
                  <span className="line-through text-navy/50">Regular Price: $49</span>
                  <span className="text-gold font-bold ml-2">Limited Time: $34.30</span>
                </p>
                <div className="space-y-2">
                  <p className="text-navy/70 text-sm">
                    ✓ Free shipping • ✓ Individual packs for freshness
                  </p>
                  <div className="inline-block bg-gradient-to-r from-gold/20 to-berry/20 px-4 py-2 rounded-full border border-gold/30">
                    <span className="text-navy font-bold text-sm">30‑Day Risk‑Free • Love it or it's on us</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Image */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-ocean/10 to-gold/10 rounded-3xl p-8 backdrop-blur-sm">
              {/* Product Mockup */}
              <div className="bg-cream rounded-2xl p-8 text-center shadow-2xl border border-white/30">
                <div className="w-56 h-56 bg-gradient-to-br from-ocean to-ocean/80 rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-xl relative">
                  <div className="w-40 h-40 bg-cream rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <AlmaLogo className="text-navy mb-2" size="medium" />
                      <div className="text-sm text-navy/70 mb-1">GUT HEALTH</div>
                      <div className="text-xs text-navy/50">60 GUMMIES</div>
                    </div>
                  </div>
                  {/* Sale Badge */}
                  <div className="absolute -top-2 -right-2 bg-berry text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                    30% OFF
                  </div>
                </div>
                <h3 className="text-2xl font-serif text-navy mb-2">Gut Health Gummies with Probiotics</h3>
                <p className="text-navy/70 mb-4">Delicious • Effective • Natural</p>
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-2xl font-bold text-navy/50 line-through">$49</span>
                  <span className="text-3xl font-bold text-gold">$34.30</span>
                </div>
                <p className="text-navy/60 text-sm">28 packs • 224 gummies total</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}