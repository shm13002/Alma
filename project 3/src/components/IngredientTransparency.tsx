import React, { useState } from 'react';
import { Shield, Waves, Battery as Bacteria, Sparkles, Zap, Leaf, ChevronDown, ChevronUp, Info, Eye, Calculator } from 'lucide-react';

const heroIngredients = [
  {
    id: 1,
    name: 'L-Glutamine',
    tagline: 'Gut Barrier Support',
    amount: '3,000 mg',
    benefit: 'Supports intestinal barrier*',
    differentiator: 'Rarely found in gummies',
    icon: Shield,
    accentColor: 'from-ocean/20 to-ocean/10',
    borderColor: 'border-ocean/30',
    whyItMatters: 'L-Glutamine is the most abundant amino acid in your body and serves as fuel for intestinal cells, helping maintain the gut barrier that protects against harmful substances.*'
  },
  {
    id: 2,
    name: 'Fiber Complex',
    tagline: 'Digestive Regularity',
    amount: '5,000 mg',
    subAmount: '(Psyllium 3g + Inulin 2g)',
    benefit: 'Promotes healthy bowel movements*',
    differentiator: '5× more fiber than leading brands',
    icon: Waves,
    accentColor: 'from-gold/20 to-gold/10',
    borderColor: 'border-gold/30',
    whyItMatters: 'This dual-fiber blend provides both soluble and prebiotic fiber to support regularity while feeding beneficial gut bacteria.*'
  },
  {
    id: 3,
    name: 'Pro- & Postbiotic Blend',
    tagline: 'Microbiome Balance',
    amount: '200 mg',
    subAmount: '(2–5B CFUs)',
    benefit: '3-in-1 microbiome support*',
    differentiator: 'Includes innovative postbiotic',
    icon: Bacteria,
    accentColor: 'from-berry/20 to-berry/10',
    borderColor: 'border-berry/30',
    whyItMatters: 'Combines live probiotics, prebiotic food, and postbiotic metabolites for comprehensive microbiome support that works at multiple levels.*'
  },
  {
    id: 4,
    name: 'Vegan Collagen Booster',
    tagline: 'Beauty From Within',
    amount: '500 mg',
    subAmount: 'blend',
    benefit: 'Supports skin via gut-beauty*',
    differentiator: 'Unique gut-beauty blend',
    icon: Sparkles,
    accentColor: 'from-blueberry/20 to-blueberry/10',
    borderColor: 'border-blueberry/30',
    whyItMatters: 'Plant-based nutrients that support your body\'s natural collagen production through the gut-skin axis connection.*'
  },
  {
    id: 5,
    name: 'Digestive Enzyme Complex',
    tagline: 'Nutrient Breakdown',
    amount: '200 mg',
    benefit: 'Helps break down macros*',
    differentiator: 'Multi-enzyme blend',
    icon: Zap,
    accentColor: 'from-gold/20 to-gold/10',
    borderColor: 'border-gold/30',
    whyItMatters: 'A comprehensive blend of amylase, protease, and lipase enzymes to help your body break down carbs, proteins, and fats more efficiently.*'
  },
  {
    id: 6,
    name: 'Soothing Botanical Trio',
    tagline: 'Digestive Comfort',
    amount: '1,000 mg',
    subAmount: '(Marshmallow, Slippery Elm, Aloe)',
    benefit: 'Traditional digestive comfort*',
    differentiator: '3 complementary herbs',
    icon: Leaf,
    accentColor: 'from-ocean/20 to-ocean/10',
    borderColor: 'border-ocean/30',
    whyItMatters: 'Time-tested botanical ingredients that have been traditionally used to soothe and comfort the digestive system.*'
  }
];

const ingredientCategories = [
  {
    name: 'Gut Support Complex',
    color: 'ocean',
    ingredients: [
      { name: 'L-Glutamine', amount: '3,000 mg', icon: '🛡️', benefit: 'Supports gut barrier*' },
      { name: 'Psyllium', amount: '3,000 mg', icon: '🌾', benefit: 'Regularity*' },
      { name: 'Inulin', amount: '2,000 mg', icon: '🌱', benefit: 'Prebiotic*' },
      { name: 'Marshmallow', amount: '500 mg', icon: '🌿', benefit: 'Soothes*' },
      { name: 'Slippery Elm', amount: '400 mg', icon: '🌳', benefit: 'Comfort*' },
      { name: 'Aloe', amount: '100 mg', icon: '🌵', benefit: 'Gentle support*' }
    ]
  },
  {
    name: 'Active Support Blend',
    color: 'gold',
    ingredients: [
      { name: 'Digestive Enzymes', amount: '200 mg', icon: '⚡', benefit: 'Nutrient breakdown*' },
      { name: 'Ginger', amount: '300 mg', icon: '🫚', benefit: 'Comfort*' },
      { name: 'Quercetin', amount: '100 mg', icon: '🍎', benefit: 'Antioxidant*' },
      { name: 'Magnesium', amount: '250 mg', icon: '💎', benefit: 'Muscle relaxation*' },
      { name: 'Vitamin C', amount: '150 mg', icon: '🍊', benefit: 'Immune/collagen*' }
    ]
  },
  {
    name: 'Microbiome & Beauty',
    color: 'berry',
    ingredients: [
      { name: 'Probiotic', amount: '100 mg', icon: '🦠', benefit: '2–5B CFUs*' },
      { name: 'Postbiotic HT-BPL1®', amount: '100 mg', icon: '🔬', benefit: 'Stable support*' },
      { name: 'L-Lysine', amount: '200 mg', icon: '💪', benefit: 'Collagen building*' },
      { name: 'Amla', amount: '200 mg', icon: '🫐', benefit: 'Vitamin C*' },
      { name: 'Hyaluronic Acid', amount: '100 mg', icon: '💧', benefit: 'Skin hydration*' }
    ]
  }
];

export default function IngredientTransparency() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState(0);
  const [showAllIngredients, setShowAllIngredients] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-br from-cream/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-navy/10 px-4 py-2 rounded-full mb-6">
            <Eye className="w-4 h-4 text-navy" />
            <span className="text-navy font-medium text-sm">Complete Formula Breakdown</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6">
            What's Inside: Full Transparency
          </h2>
          <p className="text-xl text-navy max-w-3xl mx-auto leading-relaxed mb-8">
            Every ingredient, every amount, every benefit. No hiding behind proprietary blends—
            just transparency you can trust.
          </p>

          {/* Key Messaging Callouts */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center space-x-2 text-navy/80">
              <div className="w-2 h-2 bg-gold rounded-full"></div>
              <span className="font-medium">No Hiding Behind Proprietary Blends</span>
            </div>
            <div className="flex items-center space-x-2 text-navy/80">
              <div className="w-2 h-2 bg-ocean rounded-full"></div>
              <span className="font-medium">Doses That Make a Difference</span>
            </div>
            <div className="flex items-center space-x-2 text-navy/80">
              <div className="w-2 h-2 bg-berry rounded-full"></div>
              <span className="font-medium">Transparency You Can Trust</span>
            </div>
          </div>
        </div>

        {/* Serving Size Information */}
        <div className="bg-gradient-to-r from-gold/10 to-ocean/10 rounded-2xl p-6 mb-12 border-2 border-gold/20 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                <Calculator className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h3 className="text-2xl font-serif text-navy">Serving Size</h3>
                <p className="text-navy/70">One individual pack</p>
              </div>
            </div>
            
            <div className="bg-white/80 rounded-xl p-4 mb-4">
              <div className="text-4xl font-bold text-gold mb-2">8 Gummies</div>
              <div className="text-navy font-medium">= 1 Serving = 1 Pack</div>
            </div>
            
            <p className="text-navy/80 text-sm">
              All ingredient amounts shown below are per serving (8 gummies)
            </p>
          </div>
        </div>

        {/* Hero Ingredients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {heroIngredients.map((ingredient) => {
            const IconComponent = ingredient.icon;

            return (
              <div
                key={ingredient.id}
                className={`group relative bg-gradient-to-br ${ingredient.accentColor} rounded-3xl p-6 border-2 ${ingredient.borderColor} hover:shadow-xl transition-all duration-300 cursor-pointer ${
                  hoveredCard === ingredient.id ? 'scale-105 shadow-2xl' : ''
                }`}
                onMouseEnter={() => setHoveredCard(ingredient.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-white/80 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-8 h-8 text-navy" />
                </div>

                {/* Content */}
                <div className="mb-4">
                  <h3 className="text-xl font-serif text-navy mb-1">{ingredient.name}</h3>
                  <p className="text-navy/70 text-sm mb-3">{ingredient.tagline}</p>
                  
                  {/* Amount Badge */}
                  <div className="inline-block bg-navy text-white px-3 py-1 rounded-full text-sm font-bold mb-2">
                    {ingredient.amount}
                  </div>
                  {ingredient.subAmount && (
                    <div className="text-navy/60 text-xs">{ingredient.subAmount}</div>
                  )}
                </div>

                {/* Benefit */}
                <p className="text-navy font-medium mb-2">{ingredient.benefit}</p>
                
                {/* Differentiator */}
                <div className="inline-block bg-gold/20 text-gold px-2 py-1 rounded-full text-xs font-medium">
                  {ingredient.differentiator}
                </div>

                {/* Hover State - Why It Matters */}
                {hoveredCard === ingredient.id && (
                  <div className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-3xl p-6 flex flex-col justify-center border-2 border-gold/50">
                    <div className="flex items-center space-x-2 mb-3">
                      <Info className="w-5 h-5 text-gold" />
                      <span className="font-serif text-lg text-navy">Why It Matters</span>
                    </div>
                    <p className="text-navy/80 text-sm leading-relaxed">
                      {ingredient.whyItMatters}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Complete Ingredient List */}
        <div className="bg-white/70 rounded-3xl p-8 border border-navy/10">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-serif text-navy mb-4">Complete Ingredient Breakdown</h3>
            <p className="text-navy/70">Every single ingredient organized by function</p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {ingredientCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === index
                    ? `bg-${category.color} text-white shadow-lg`
                    : `bg-${category.color}/10 text-navy hover:bg-${category.color}/20`
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Active Category Ingredients */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ingredientCategories[activeCategory].ingredients.map((ingredient, index) => {

              return (
                <div
                  key={index}
                  className="bg-white/80 rounded-2xl p-4 border border-navy/10 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-2xl">{ingredient.icon}</span>
                    <div>
                      <h4 className="font-medium text-navy">{ingredient.name}</h4>
                      <p className="text-navy/60 text-sm">{ingredient.benefit}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="bg-navy text-white px-2 py-1 rounded-full text-xs font-bold">
                      {ingredient.amount}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile View All Button */}
        <div className="text-center mt-8 md:hidden">
          <button
            onClick={() => setShowAllIngredients(!showAllIngredients)}
            className="bg-ocean text-white px-6 py-3 rounded-full hover:bg-ocean/90 transition-colors font-medium flex items-center space-x-2 mx-auto"
          >
            <span>View All Ingredients</span>
            {showAllIngredients ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
}