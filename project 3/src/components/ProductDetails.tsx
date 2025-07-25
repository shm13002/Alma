import React, { useState } from 'react';
import { Check, Star, ArrowRight, Shield, Truck, RotateCcw, Award, Users, Heart, Leaf, Scaling as Seedling, ChevronDown, ChevronUp } from 'lucide-react';
import AlmaLogo from './AlmaLogo';

export default function ProductDetails() {
  const [quantity, setQuantity] = useState(1);
  const [isFormulaExpanded, setIsFormulaExpanded] = useState(false);

  const benefits = [
    'Supports digestive comfort after meals*',
    'Contains probiotics for digestive health*',
    'Digestive enzymes to support nutrient breakdown*',
    'May support overall digestive wellness*',
    'Convenient daily digestive support*',
    'Delicious taste - not like medicine'
  ];

  return (
    <section id="product" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Product Image - Sticky */}
          <div className="sticky top-24">
            <div className="bg-gradient-to-br from-ocean/10 to-gold/10 rounded-3xl p-8">
              <div className="bg-white/50 rounded-2xl p-12 text-center shadow-xl border border-white/30">
                <div className="w-72 h-72 bg-gradient-to-br from-ocean to-ocean/80 rounded-3xl mx-auto mb-8 flex items-center justify-center shadow-2xl relative">
                  <div className="w-52 h-52 bg-cream rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <AlmaLogo className="text-navy mb-2" size="large" />
                      <div className="text-sm text-navy/70 mb-1">GUT HEALTH</div>
                      <div className="text-xs text-navy/50 mt-2">28 PACKS</div>
                    </div>
                  </div>
                  {/* Sale Badge */}
                  <div className="absolute -top-2 -right-2 bg-berry text-white px-3 py-1 rounded-full text-sm font-bold">
                    30% OFF
                  </div>
                </div>
                
                {/* Trust Indicators */}
                <div className="grid grid-cols-3 gap-2 mt-6">
                  <div className="text-center">
                    <Award className="w-6 h-6 text-gold mx-auto mb-1" />
                    <p className="text-xs text-navy/70">Quality Tested</p>
                  </div>
                  <div className="text-center">
                    <Shield className="w-6 h-6 text-ocean mx-auto mb-1" />
                    <p className="text-xs text-navy/70">3rd Party Tested</p>
                  </div>
                  <div className="text-center">
                    <Users className="w-6 h-6 text-berry mx-auto mb-1" />
                    <p className="text-xs text-navy/70">50K+ Customers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div>
            {/* Reviews */}
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold fill-current" />
                ))}
              </div>
              <span className="text-navy font-semibold text-lg">4.9/5</span>
              <span className="text-navy/70">(2,847 verified reviews)</span>
            </div>

            {/* Product Title */}
            <h1 className="text-4xl md:text-5xl text-navy mb-6 leading-tight">
              <span className="font-recoleta font-black" style={{ letterSpacing: '-0.05em' }}>alma</span> Gut Health Gummies with Probiotics & Digestive Enzymes*
            </h1>

            {/* Description */}
            <p className="text-xl text-navy mb-8 leading-relaxed">
              Premium probiotics for digestive support in a delicious gummy format! Our doctor-developed digestive enzyme gummies 
              combine L-Glutamine, Psyllium Husk, and probiotics to support digestive comfort.* 
              <span className="font-semibold text-gold">Convenient individual packs that taste like premium fruit candy.</span>
            </p>

            {/* Comprehensive Description */}
            <div className="bg-gradient-to-r from-cream/50 to-white/50 rounded-2xl border border-gold/20 mb-8">
              <button
                onClick={() => setIsFormulaExpanded(!isFormulaExpanded)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/20 transition-colors rounded-2xl"
              >
                <h3 className="text-2xl font-serif text-navy">Complete Digestive Support Formula*</h3>
                {isFormulaExpanded ? (
                  <ChevronUp className="w-6 h-6 text-navy flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-navy flex-shrink-0" />
                )}
              </button>
              
              {isFormulaExpanded && (
                <div className="px-6 pb-6 border-t border-gold/10">
                  <p className="text-navy mb-4 leading-relaxed">
                    Alma Gut Health Gummies deliver comprehensive digestive support with 15+ active ingredients in every serving. Each resealable pouch contains 28 individual packs with 8 gummies each, designed for convenient daily use and freshness. Our advanced formula features 3g of gut-supporting L-Glutamine, 5g of fiber (psyllium husk and inulin), and a multi-strain probiotic blend with added postbiotic for enhanced stability.*
                  </p>
                  
                  <p className="text-navy mb-4 leading-relaxed">
                    Unlike typical probiotic gummies, we've included clinically meaningful doses of ingredients that work synergistically. The combination of soluble fiber supports regularity*, while L-Glutamine nourishes the gut barrier*. Digestive enzymes aid in nutrient breakdown*, and our botanical blend including marshmallow root, slippery elm, and aloe vera provides traditional digestive comfort support.*
                  </p>
                  
                  <p className="text-navy mb-4 leading-relaxed">
                    Our vegan collagen booster complex with L-Lysine, Amla fruit, and hyaluronic acid supports the gut-skin connection*, while added quercetin provides antioxidant benefits*. With premium branded probiotics (LactoSpore® and DE111®) and the innovative HT-BPL1® postbiotic, this formula supports your microbiome from multiple angles.*
                  </p>
                  
                  <p className="text-navy leading-relaxed">
                    Made with organic tapioca syrup and cane sugar, natural flavors, and fruit & vegetable juices for color. No artificial ingredients, gluten-free, and vegan. Each pack contains 8 gummies for optimal freshness and portion control. Manufactured in a GMP-certified facility.
                  </p>
                </div>
              )}
            </div>
            {/* Pricing */}
            <div className="bg-gradient-to-r from-gold/10 to-leaf/10 rounded-2xl p-6 mb-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-navy/70 mb-1">Limited Time Offer</p>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl font-bold text-navy/50 line-through">$49.00</span>
                    <span className="text-4xl font-bold text-gold">$34.30</span>
                    <span className="bg-berry text-white px-2 py-1 rounded-full text-sm font-bold">30% OFF</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-navy/70">Per bottle</p>
                  <p className="text-sm text-navy/70">28 packs • 224 gummies total</p>
                  <p className="text-sm font-medium text-gold">Just $1.22 per pack</p>
                </div>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="mb-8">
              <h3 className="text-2xl font-serif text-navy mb-6 flex items-center spray-oval spray-light">
                <Heart className="w-6 h-6 text-berry mr-2" />
                Intended Benefits:*
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-ocean rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-navy">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Purchase Section */}
            <div className="bg-white/50 border-2 border-gold/20 rounded-2xl p-6">
              {/* Quantity Selector */}
              <div className="flex items-center justify-between mb-6">
                <label className="text-navy font-semibold text-lg">Quantity:</label>
                <div className="flex items-center border-2 border-gold/30 rounded-lg">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 text-navy hover:bg-gold/10 transition-colors font-bold text-lg"
                  >
                    -
                  </button>
                  <span className="px-6 py-2 text-navy font-bold text-lg border-x border-gold/30">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 text-navy hover:bg-gold/10 transition-colors font-bold text-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-4">
                <button className="group w-full bg-ocean text-white px-8 py-4 rounded-full hover:bg-ocean/90 transition-all duration-300 font-bold text-lg flex items-center justify-center space-x-3 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 cta-spray">
                  <span>Add to Cart - ${(34.30 * quantity).toFixed(2)}</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>

                <button className="w-full bg-gold text-white px-8 py-4 rounded-full hover:bg-gold/90 transition-colors font-bold text-lg">
                  Buy Now - Express Checkout
                </button>
              </div>

              {/* Guarantees */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-navy/10">
                <div className="flex items-center space-x-3">
                  <Truck className="w-6 h-6 text-ocean" />
                  <div>
                    <div className="text-navy font-semibold text-sm">Free Shipping</div>
                    <div className="text-navy/70 text-xs">On all orders</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <RotateCcw className="w-6 h-6 text-gold" />
                  <div>
                    <div className="text-navy font-semibold text-sm">30‑Day Risk‑Free</div>
                    <div className="text-navy/70 text-xs">Love it or it's on us</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-6 h-6 text-berry" />
                  <div>
                    <div className="text-navy font-semibold text-sm">Secure Payment</div>
                    <div className="text-navy/70 text-xs">SSL encrypted</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}