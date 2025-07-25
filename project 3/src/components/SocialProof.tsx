import React from 'react';
import { Star, Quote, Heart } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah M.',
    location: 'California',
    content: 'These gut health gummies taste amazing and I love the convenient format! Great digestive support as part of my daily routine.',
    rating: 5,
    verified: true,
    image: '👩‍💼'
  },
  {
    name: 'Marcus R.',
    location: 'New York',
    content: 'As a busy entrepreneur, I needed convenient gut support. These digestive enzyme gummies taste great (not like medicine) and fit perfectly into my routine.',
    rating: 5,
    verified: true,
    image: '👨‍💻'
  },
  {
    name: 'Emma T.',
    location: 'Texas',
    content: 'I\'ve tried many gut health supplements, but these taste the best and are so convenient. Love having digestive support in gummy form!',
    rating: 5,
    verified: true,
    image: '👩‍🎨'
  },
  {
    name: 'David L.',
    location: 'Florida',
    content: 'Three weeks in and I\'m really happy with my daily routine. These probiotics are convenient and taste great - much better than pills!',
    rating: 5,
    verified: true,
    image: '👨‍🏫'
  },
  {
    name: 'Lisa K.',
    location: 'Oregon',
    content: 'Finally found digestive enzyme gummies that taste great and don\'t upset my stomach. Clean ingredients, convenient format. Will definitely reorder!',
    rating: 5,
    verified: true,
    image: '👩‍🔬'
  },
  {
    name: 'James W.',
    location: 'Colorado',
    content: 'My wife got these gut health gummies for me and I was skeptical about gummies. But they taste amazing and are so much easier than pills. Great product!',
    rating: 5,
    verified: true,
    image: '👨‍🎯'
  }
];

export default function SocialProof() {
  return (
    <section id="reviews" className="py-20 bg-[#F3EFE7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gold/15 px-4 py-2 rounded-full mb-6 spray-oval spray-light">
            <Heart className="w-4 h-4 text-[#F3B22E]" />
            <span className="text-[#444444] font-medium text-sm">Real Customer Experiences</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6 spray-horizontal spray-light">
            50,000+ Happy Customers
          </h2>
          <p className="text-xl text-[#444444] max-w-3xl mx-auto leading-relaxed">
            Real people, real experiences. See what customers say about our digestive support gummies.
          </p>

          {/* Overall Rating */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-[#F3B22E] fill-current" />
              ))}
            </div>
            <span className="text-2xl font-bold text-[#444444]">4.9/5</span>
            <span className="text-[#444444]/70">Average rating</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#F3EFE7] to-white/50 rounded-3xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/30"
            >
              {/* Quote Icon */}
              <div className="w-10 h-10 bg-[#F3B22E]/15 rounded-2xl flex items-center justify-center mb-4">
                <Quote className="w-5 h-5 text-[#F3B22E]" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#F3B22E] fill-current" />
                ))}
                {testimonial.verified && (
                  <span className="text-[#5C9F5E] text-xs font-medium ml-2 bg-[#5C9F5E]/10 px-2 py-1 rounded-full">
                    Verified
                  </span>
                )}
              </div>

              {/* Content */}
              <p className="text-[#444444] leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#F3B22E] to-[#E8A634] rounded-full flex items-center justify-center text-lg">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="font-semibold text-[#444444]">{testimonial.name}</h4>
                  <p className="text-[#444444]/70 text-sm">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="space-y-4">
            <button className="bg-ocean text-white px-8 py-4 rounded-full hover:bg-ocean/90 transition-colors font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Try Digestive Support Gummies - 30% Off
            </button>
            <div className="inline-block bg-gradient-to-r from-gold/20 to-berry/20 px-4 py-2 rounded-full border border-gold/30">
              <span className="text-navy font-bold text-sm">30‑Day Risk‑Free • Love it or it's on us</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}