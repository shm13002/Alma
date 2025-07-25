import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'How should I take these gut health gummies?',
    answer: 'Take 2 gummies daily with food as directed. Individual results may vary. These probiotics and digestive enzymes are intended to support digestive wellness as part of a healthy lifestyle.*'
  },
  {
    question: 'What makes these gut health gummies different?',
    answer: 'Our premium digestive support gummies contain carefully selected probiotic strains and digestive enzymes. The formula combines probiotics and enzymes in a delicious gummy format for convenient daily digestive support.*'
  },
  {
    question: 'How do these compare to other digestive supplements?',
    answer: 'Our <span className="font-recoleta font-black" style="letter-spacing: -0.05em;">alma</span> gummies taste great (not like medicine) and combine probiotics, digestive enzymes, and gut support ingredients in one convenient formula. Each batch is third-party tested for quality.'
  },
  {
    question: 'How should I take these digestive enzyme gummies?',
    answer: 'Take 2 gummies daily with food for optimal absorption. Each bottle contains 60 gummies for a full 30-day supply. For best results, take consistently at the same time each day as part of your wellness routine.*'
  },
  {
    question: 'What is your risk-free guarantee?',
    answer: 'We offer a 30-day risk-free guarantee - love it or it\'s on us! If you\'re not completely satisfied with your purchase, contact us for a full refund. Individual results may vary.*'
  },
  {
    question: 'Are there any side effects?',
    answer: 'Our gut health gummies are made with natural ingredients and are generally well-tolerated. Some people may experience mild digestive adjustment initially. Consult your healthcare professional before starting any new supplement.*'
  },
  {
    question: 'Are these gummies vegan and gluten-free?',
    answer: 'Yes! Our digestive enzyme gummies are vegan, gluten-free, and Non-GMO. Perfect for those with dietary restrictions seeking convenient digestive support.*'
  },
  {
    question: 'How should I store these probiotics?',
    answer: 'Store your gut health gummies in a cool, dry place away from direct sunlight. Keep tightly closed and out of reach of children. No refrigeration required - convenient for travel!'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#5C9F5E]/5 to-[#A87EC3]/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#A87EC3]/15 px-4 py-2 rounded-full mb-6">
            <HelpCircle className="w-4 h-4 text-[#A87EC3]" />
            <span className="text-[#444444] font-medium text-sm">Gut Health Questions?</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif text-[#444444] mb-6">
            Gut Health Gummies FAQ
          </h2>
          <p className="text-xl text-[#444444] leading-relaxed">
            Everything about our probiotics, digestive enzymes, and bloating relief gummies
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#F3EFE7] rounded-2xl border border-white/30 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-[#F3B22E]/5 transition-colors"
              >
                <h3 className="text-lg font-serif text-[#444444] pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-[#F3B22E]" />
                  ) : (
                    <Plus className="w-5 h-5 text-[#F3B22E]" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-[#444444]/80 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-[#444444] mb-4">Still have questions?</p>
          <button className="bg-gold text-white px-6 py-3 rounded-full hover:bg-gold/90 transition-colors font-medium">
            Contact Our Customer Service Team
          </button>
        </div>
      </div>
      
      {/* FDA Disclaimer */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="bg-cream/50 rounded-lg p-4 border border-navy/10">
          <p className="text-sm text-navy/70 text-center">
            *These statements have not been evaluated by the Food and Drug Administration. 
            This product is not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>
      </div>
    </section>
  );
}