import React, { useState, useEffect, useRef } from 'react';
import { Clock, Droplets, Leaf, Shield, Sparkles, ChevronRight, Info, Calendar, Star } from 'lucide-react';

const timelineStages = [
  {
    id: 1,
    phase: "Day 1",
    title: "Immediate Comfort Support",
    color: "from-[#FFE5CC] to-[#FFD4B3]",
    borderColor: "border-[#FFB366]",
    icon: "🌅",
    progress: 20,
    activeIngredients: [
      { name: "Ginger Extract", amount: "300mg", icon: "🫚" },
      { name: "Digestive Enzymes", amount: "200mg", icon: "⚡" },
      { name: "Marshmallow Root", amount: "500mg", icon: "🌿" }
    ],
    whatsHappening: "Quick-acting ingredients begin supporting comfortable digestion*",
    details: [
      "Ginger's traditional soothing properties activate",
      "Enzymes help break down proteins, fats, and carbs",
      "Marshmallow root's mucilage begins coating action"
    ],
    youMayNotice: "Some people experience initial digestive comfort support*",
    testimonial: {
      text: "Day 3: Already feeling less bloated!",
      author: "Sarah M."
    }
  },
  {
    id: 2,
    phase: "Days 2-7",
    title: "Building Digestive Rhythm",
    color: "from-[#D4E6D4] to-[#C1DCC1]",
    borderColor: "border-[#8FBC8F]",
    icon: "📅",
    progress: 40,
    activeIngredients: [
      { name: "Psyllium Husk", amount: "3g", icon: "🌾" },
      { name: "Magnesium Citrate", amount: "250mg", icon: "💎" },
      { name: "Slippery Elm Bark", amount: "400mg", icon: "🌿" },
      { name: "Aloe Vera", amount: "100mg", icon: "🌵" }
    ],
    whatsHappening: "Fiber and minerals begin supporting regular digestive patterns*",
    details: [
      "Soluble fiber adds bulk to support healthy bowel movements",
      "Magnesium supports normal muscle function",
      "Botanical blend continues soothing support"
    ],
    youMayNotice: "Many users report more predictable bathroom visits*",
    testimonial: {
      text: "Week 2: Finally regular!",
      author: "Jessica T."
    }
  },
  {
    id: 3,
    phase: "Weeks 2-4",
    title: "Microbiome Balance Phase",
    color: "from-[#7EC8CA] to-[#6BB6C0]",
    borderColor: "border-[#4A9DA1]",
    icon: "🔄",
    progress: 60,
    activeIngredients: [
      { name: "Bacillus coagulans", amount: "LactoSpore®", icon: "🦠" },
      { name: "Bacillus subtilis", amount: "DE111®", icon: "🦠" },
      { name: "Inulin Prebiotic", amount: "2g", icon: "🌱" },
      { name: "HT-BPL1® Postbiotic", amount: "100mg", icon: "🔬" }
    ],
    whatsHappening: "Probiotics establish and prebiotics nourish beneficial bacteria*",
    details: [
      "Spore-forming probiotics colonize the gut",
      "Prebiotic fiber feeds your good bacteria",
      "Postbiotic compounds provide stable benefits"
    ],
    youMayNotice: "Some people experience improved digestive comfort and less bloating*",
    testimonial: {
      text: "Month 1: Feeling so much better!",
      author: "David L."
    }
  },
  {
    id: 4,
    phase: "Month 2",
    title: "Gut Barrier Support",
    color: "from-[#5B9BD5] to-[#4A8BC2]",
    borderColor: "border-[#2E5984]",
    icon: "🛡️",
    progress: 80,
    activeIngredients: [
      { name: "L-Glutamine", amount: "3g", icon: "💪" },
      { name: "Quercetin", amount: "100mg", icon: "🍎" },
      { name: "Vitamin C", amount: "150mg", icon: "🍊" },
      { name: "Full Probiotic", amount: "Colonization", icon: "🦠" }
    ],
    whatsHappening: "Nutrients support intestinal lining integrity and function*",
    details: [
      "L-Glutamine provides fuel for intestinal cells",
      "Antioxidants offer protective support",
      "Established probiotics support barrier function"
    ],
    youMayNotice: "Many users report feeling more resilient and comfortable*",
    testimonial: {
      text: "Month 2: My skin is glowing!",
      author: "Maria L."
    }
  },
  {
    id: 5,
    phase: "Month 3+",
    title: "Complete Wellness Support",
    color: "from-[#9B72CF] to-[#8A5FBF]",
    borderColor: "border-[#6B46C1]",
    icon: "✨",
    progress: 100,
    activeIngredients: [
      { name: "Vegan Collagen Booster", amount: "L-Lysine, Amla, HA", icon: "💧" },
      { name: "All Ingredients", amount: "Synergistic", icon: "🌟" },
      { name: "Complete Formula", amount: "Working Together", icon: "⚡" }
    ],
    whatsHappening: "Full formula benefits for comprehensive gut and total body wellness*",
    details: [
      "Gut-skin nutrients supporting beauty from within",
      "Continued digestive comfort and regularity support",
      "Maintained microbiome balance"
    ],
    youMayNotice: "Users often report benefits beyond digestion, including skin and energy*",
    testimonial: {
      text: "Month 3: Best I've felt in years!",
      author: "Emma T."
    }
  }
];

export default function GutHealthTimeline() {
  const [activeStage, setActiveStage] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current) {
        const rect = timelineRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementTop = rect.top;
        const elementHeight = rect.height;
        
        if (elementTop < windowHeight && elementTop + elementHeight > 0) {
          const visibleHeight = Math.min(windowHeight - elementTop, elementHeight);
          const progress = Math.max(0, Math.min(100, (visibleHeight / elementHeight) * 100));
          setScrollProgress(progress);
          
          // Update active stage based on scroll progress
          const stageIndex = Math.floor((progress / 100) * timelineStages.length);
          setActiveStage(Math.min(stageIndex, timelineStages.length - 1));
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={timelineRef} className="py-20 bg-gradient-to-br from-cream/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-navy/10 px-4 py-2 rounded-full mb-6">
            <Clock className="w-4 h-4 text-navy" />
            <span className="text-navy font-medium text-sm">Your Wellness Timeline</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6">
            Your Daily Gut Health Journey: What to Expect*
          </h2>
          <p className="text-xl text-navy max-w-3xl mx-auto leading-relaxed mb-8">
            Based on our 15+ active ingredients working together to support your digestive wellness
          </p>

          {/* Progress Indicator */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-navy/70">Formula Activation</span>
              <span className="text-sm font-bold text-gold">{Math.round(scrollProgress)}%</span>
            </div>
            <div className="w-full bg-navy/10 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-gold to-ocean h-3 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${scrollProgress}%` }}
              ></div>
            </div>
          </div>

          {/* Dosage Reminder */}
          <div className="inline-flex items-center space-x-2 bg-gold/10 px-4 py-2 rounded-full">
            <Calendar className="w-4 h-4 text-gold" />
            <span className="text-navy font-medium text-sm">Remember: Take 8 gummies daily for best results</span>
          </div>
        </div>

        {/* Desktop Timeline - Horizontal Scroll */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute top-24 left-0 right-0 h-1 bg-navy/10 rounded-full">
              <div 
                className="h-1 bg-gradient-to-r from-gold to-ocean rounded-full transition-all duration-500"
                style={{ width: `${(activeStage + 1) * 20}%` }}
              ></div>
            </div>

            {/* Timeline Stages */}
            <div className="flex justify-between space-x-8">
              {timelineStages.map((stage, index) => (
                <div 
                  key={stage.id}
                  className={`flex-1 transition-all duration-500 ${
                    index <= activeStage ? 'opacity-100 transform translate-y-0' : 'opacity-50 transform translate-y-4'
                  }`}
                >
                  {/* Stage Icon */}
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br ${stage.color} border-2 ${stage.borderColor} flex items-center justify-center text-2xl shadow-lg`}>
                    {stage.icon}
                  </div>

                  {/* Stage Content */}
                  <div className={`bg-gradient-to-br ${stage.color} rounded-3xl p-6 border-2 ${stage.borderColor} shadow-xl`}>
                    <div className="text-center mb-4">
                      <h3 className="text-xl font-serif text-navy mb-1">{stage.phase}</h3>
                      <h4 className="text-lg font-semibold text-navy/80">{stage.title}</h4>
                    </div>

                    {/* Active Ingredients */}
                    <div className="mb-4">
                      <h5 className="text-sm font-bold text-navy mb-2">Active Ingredients:</h5>
                      <div className="space-y-1">
                        {stage.activeIngredients.map((ingredient, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-xs">
                            <span className="text-base">{ingredient.icon}</span>
                            <span className="text-navy font-medium">{ingredient.name}</span>
                            <span className="text-navy/70">({ingredient.amount})</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* What's Happening */}
                    <div className="mb-4">
                      <h5 className="text-sm font-bold text-navy mb-2">What's Happening:</h5>
                      <p className="text-sm text-navy/80 italic mb-2">"{stage.whatsHappening}"</p>
                      <ul className="text-xs text-navy/70 space-y-1">
                        {stage.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start space-x-1">
                            <span className="text-gold">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* You May Notice */}
                    <div className="mb-4">
                      <h5 className="text-sm font-bold text-navy mb-2">You May Notice:</h5>
                      <p className="text-sm text-navy/80 italic">"{stage.youMayNotice}"</p>
                    </div>

                    {/* Testimonial */}
                    <div className="bg-white/50 rounded-xl p-3 border border-white/30">
                      <div className="flex items-center space-x-2 mb-1">
                        <Star className="w-4 h-4 text-gold fill-current" />
                        <span className="text-xs font-medium text-navy">{stage.testimonial.author}</span>
                      </div>
                      <p className="text-xs text-navy/80 italic">"{stage.testimonial.text}"</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Timeline - Vertical */}
        <div className="lg:hidden space-y-8">
          {timelineStages.map((stage, index) => (
            <div 
              key={stage.id}
              className={`transition-all duration-500 ${
                index <= activeStage ? 'opacity-100' : 'opacity-70'
              }`}
            >
              <div className="flex items-start space-x-4">
                {/* Timeline Line */}
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${stage.color} border-2 ${stage.borderColor} flex items-center justify-center text-lg shadow-lg`}>
                    {stage.icon}
                  </div>
                  {index < timelineStages.length - 1 && (
                    <div className={`w-1 h-16 mt-2 rounded-full ${
                      index < activeStage ? 'bg-gradient-to-b from-gold to-ocean' : 'bg-navy/10'
                    }`}></div>
                  )}
                </div>

                {/* Content */}
                <div className={`flex-1 bg-gradient-to-br ${stage.color} rounded-2xl p-4 border-2 ${stage.borderColor} shadow-lg`}>
                  <div className="mb-3">
                    <h3 className="text-lg font-serif text-navy mb-1">{stage.phase}</h3>
                    <h4 className="text-base font-semibold text-navy/80">{stage.title}</h4>
                  </div>

                  {/* Collapsible Content */}
                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer text-sm font-bold text-navy mb-2">
                      <span>View Details</span>
                      <ChevronRight className="w-4 h-4 group-open:rotate-90 transition-transform" />
                    </summary>
                    
                    <div className="space-y-3 text-sm">
                      {/* Active Ingredients */}
                      <div>
                        <h5 className="font-bold text-navy mb-1">Active Ingredients:</h5>
                        <div className="grid grid-cols-2 gap-1">
                          {stage.activeIngredients.map((ingredient, idx) => (
                            <div key={idx} className="flex items-center space-x-1 text-xs">
                              <span>{ingredient.icon}</span>
                              <span className="text-navy/80">{ingredient.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* What's Happening */}
                      <div>
                        <h5 className="font-bold text-navy mb-1">What's Happening:</h5>
                        <p className="text-navy/80 italic text-xs">"{stage.whatsHappening}"</p>
                      </div>

                      {/* You May Notice */}
                      <div>
                        <h5 className="font-bold text-navy mb-1">You May Notice:</h5>
                        <p className="text-navy/80 italic text-xs">"{stage.youMayNotice}"</p>
                      </div>
                    </div>
                  </details>

                  {/* Testimonial */}
                  <div className="bg-white/50 rounded-lg p-2 mt-3 border border-white/30">
                    <div className="flex items-center space-x-1 mb-1">
                      <Star className="w-3 h-3 text-gold fill-current" />
                      <span className="text-xs font-medium text-navy">{stage.testimonial.author}</span>
                    </div>
                    <p className="text-xs text-navy/80 italic">"{stage.testimonial.text}"</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-ocean/10 to-gold/10 rounded-3xl p-8 border-2 border-gold/20">
            <h3 className="text-3xl font-serif text-navy mb-4">Ready to Start Your Journey?</h3>
            <p className="text-lg text-navy/80 mb-6">Join 50,000+ on Their Gut Health Journey</p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
              <button className="bg-ocean text-white px-8 py-4 rounded-full hover:bg-ocean/90 transition-colors font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Save 30% on Your First Month
              </button>
              <div className="bg-gradient-to-r from-gold/20 to-berry/20 px-4 py-2 rounded-full border border-gold/30">
                <span className="text-navy font-bold text-sm">30‑Day Risk‑Free • Love it or it's on us</span>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-navy/70">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span>Free shipping on all orders</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-ocean rounded-full"></div>
                <span>Individual results may vary</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-berry rounded-full"></div>
                <span>Third-party tested for quality</span>
              </div>
            </div>
          </div>
        </div>

        {/* FDA Disclaimer */}
        <div className="mt-12">
          <div className="bg-cream/50 rounded-lg p-4 border border-navy/10">
            <div className="flex items-start space-x-2">
              <Info className="w-4 h-4 text-navy/70 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-navy/70">
                *These statements have not been evaluated by the Food and Drug Administration. 
                This product is not intended to diagnose, treat, cure, or prevent any disease. 
                Individual results may vary based on diet, lifestyle, and other factors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}