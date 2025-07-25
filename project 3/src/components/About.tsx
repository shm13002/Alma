import React, { useState, useEffect, useRef } from 'react';
import { Heart, Leaf, Shield, Award, Users, Star, ArrowRight, Mail, Phone, MapPin, ChevronDown, ChevronUp, Play } from 'lucide-react';
import AlmaLogo from './AlmaLogo';

export default function About() {
  const [isTimelineVisible, setIsTimelineVisible] = useState(false);
  const [activeStory, setActiveStory] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTimelineVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const founderStory = [
    {
      year: "2019",
      title: "The Breaking Point",
      content: "After years of digestive discomfort and countless doctor visits with no real answers, our founder Sarah hit her breaking point. Bloated, exhausted, and frustrated with one-size-fits-all solutions that didn't work.",
      image: "👩‍💼"
    },
    {
      year: "2020",
      title: "The Kitchen Lab",
      content: "Late nights in her small apartment kitchen, Sarah began experimenting with natural ingredients. Mixing L-Glutamine with probiotics, testing fiber combinations, documenting everything in a worn notebook.",
      image: "🧪"
    },
    {
      year: "2021",
      title: "The First Breakthrough",
      content: "After 18 months of trial and error, the first batch that actually worked. Not just for Sarah, but for the 12 friends who agreed to test her 'kitchen experiments.' The feedback was unanimous: 'This actually helps.'",
      image: "✨"
    },
    {
      year: "2022",
      title: "Building the Team",
      content: "Partnering with registered dietitians and supplement formulators to scale the formula safely. Every ingredient researched, every dose optimized, every batch third-party tested.",
      image: "👥"
    },
    {
      year: "2024",
      title: "50,000+ Lives Changed",
      content: "Today, alma supports digestive wellness for over 50,000 customers. But we're just getting started on our mission to make gut health accessible, effective, and delicious for everyone.",
      image: "🌟"
    }
  ];

  const differentiators = [
    {
      title: "Strain-Specific Probiotics + Postbiotics",
      description: "We use clinically-studied probiotic strains (LactoSpore® and DE111®) plus innovative HT-BPL1® postbiotic for enhanced stability and effectiveness.",
      icon: Shield,
      badge: "Science-Backed"
    },
    {
      title: "cGMP Manufacturing & Third-Party Testing",
      description: "Every batch is manufactured in FDA-registered, cGMP-certified facilities and tested by independent labs for purity, potency, and safety.",
      icon: Award,
      badge: "Quality Assured"
    },
    {
      title: "Full-Dose Transparency",
      description: "No proprietary blends or hidden ingredients. Every active ingredient is listed with its exact amount—doses that actually make a difference.",
      icon: Leaf,
      badge: "Transparent"
    }
  ];

  const testimonials = [
    {
      text: "Finally, a company that doesn't hide behind proprietary blends. I know exactly what I'm taking and why.",
      author: "Dr. Jennifer M.",
      role: "Nutritionist",
      rating: 5
    },
    {
      text: "The individual packs are genius—always fresh, perfect for travel, and I never forget my daily dose.",
      author: "Marcus R.",
      role: "Verified Customer",
      rating: 5
    },
    {
      text: "Three months in and my digestive comfort has completely transformed. Worth every penny.",
      author: "Sarah K.",
      role: "Verified Customer", 
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-32 h-32 bg-gold/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-40 h-40 bg-ocean/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-navy/10 px-4 py-2 rounded-full mb-6">
                <Heart className="w-4 h-4 text-navy" />
                <span className="text-navy font-medium text-sm">Our Story</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-navy mb-6 leading-tight">
                From Stubborn Bloat to
                <span className="block text-gold relative">
                  Soul-Deep Wellness
                  <div className="absolute -bottom-2 left-0 lg:left-0 w-32 h-1 bg-gradient-to-r from-gold to-gold/80 rounded-full opacity-70 mx-auto lg:mx-0"></div>
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-navy mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                The journey that led to creating the most comprehensive gut health gummies on the market.
              </p>

              {/* Scroll Cue */}
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-navy/70 animate-bounce">
                <span className="text-sm">Scroll to discover our story</span>
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>

            {/* Founder Image Placeholder */}
            <div className="relative">
              <div className="bg-gradient-to-br from-ocean/10 to-gold/10 rounded-3xl p-8">
                <div className="bg-white/50 rounded-2xl p-12 text-center shadow-xl border border-white/30">
                  <div className="w-48 h-48 bg-gradient-to-br from-gold to-gold/80 rounded-full mx-auto mb-6 flex items-center justify-center text-6xl">
                    👩‍💼
                  </div>
                  <h3 className="text-2xl font-serif text-navy mb-2">Sarah Chen</h3>
                  <p className="text-navy/70 mb-4">Founder & CEO</p>
                  <div className="inline-flex items-center space-x-2 bg-gold/10 px-3 py-1 rounded-full">
                    <span className="text-navy font-medium text-sm">Former Software Engineer turned Wellness Advocate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Origin Story Timeline */}
      <section ref={timelineRef} className="py-20 bg-gradient-to-br from-cream/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6">
              The Netflix Pilot Version
            </h2>
            <p className="text-xl text-navy max-w-3xl mx-auto leading-relaxed">
              Every great story has a beginning. Here's how a frustrated software engineer became 
              a gut health advocate and changed 50,000+ lives.
            </p>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Progress Line */}
              <div className="absolute top-24 left-0 right-0 h-1 bg-navy/10 rounded-full">
                <div 
                  className={`h-1 bg-gradient-to-r from-gold to-ocean rounded-full transition-all duration-2000 ${
                    isTimelineVisible ? 'w-full' : 'w-0'
                  }`}
                ></div>
              </div>

              {/* Timeline Items */}
              <div className="flex justify-between">
                {founderStory.map((story, index) => (
                  <div 
                    key={index}
                    className={`flex-1 transition-all duration-500 delay-${index * 200} ${
                      isTimelineVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
                    }`}
                  >
                    {/* Year Badge */}
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-gold to-gold/80 border-2 border-white flex items-center justify-center text-white font-bold shadow-lg">
                      {story.year}
                    </div>

                    {/* Story Card */}
                    <div className="bg-white rounded-2xl p-6 shadow-xl border border-navy/10 mx-4">
                      <div className="text-center mb-4">
                        <div className="text-4xl mb-2">{story.image}</div>
                        <h3 className="text-xl font-serif text-navy mb-2">{story.title}</h3>
                      </div>
                      <p className="text-navy/80 text-sm leading-relaxed">{story.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-8">
            {founderStory.map((story, index) => (
              <div 
                key={index}
                className={`transition-all duration-500 delay-${index * 100} ${
                  isTimelineVisible ? 'opacity-100' : 'opacity-70'
                }`}
              >
                <div className="flex items-start space-x-4">
                  {/* Timeline Line */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold/80 border-2 border-white flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      {story.year.slice(-2)}
                    </div>
                    {index < founderStory.length - 1 && (
                      <div className="w-1 h-16 mt-2 bg-gradient-to-b from-gold to-ocean rounded-full"></div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white rounded-2xl p-4 shadow-lg border border-navy/10">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="text-2xl">{story.image}</span>
                      <h3 className="text-lg font-serif text-navy">{story.title}</h3>
                    </div>
                    <p className="text-navy/80 text-sm leading-relaxed">{story.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are / What We Do */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Who We Are */}
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-navy mb-8">Who We Are</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-ocean rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-2">Multidisciplinary Team</h3>
                    <p className="text-navy/80">Former engineers, registered dietitians, and supplement formulators united by a mission to make gut health accessible.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Heart className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-2">Clean-Label Advocates</h3>
                    <p className="text-navy/80">We believe you deserve to know exactly what you're putting in your body—no proprietary blends, no hidden ingredients.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-berry rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Leaf className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-2">Wellness for All</h3>
                    <p className="text-navy/80">Primarily serving women 25-45 seeking bloat relief and holistic wellness, but our formula works for anyone ready to prioritize their gut health.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* What We Do */}
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-navy mb-8">What We Do</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blueberry rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-2">Comprehensive Gut Support</h3>
                    <p className="text-navy/80">15+ active ingredients working synergistically—probiotics, digestive enzymes, gut barrier support, and soothing botanicals in one convenient gummy.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-ocean rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-2">Individual Freshness Packs</h3>
                    <p className="text-navy/80">8 gummies per pack = 1 serving. No more stale bottles or forgotten doses. Each pack stays fresh until you're ready.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-2">Tastes Like Premium Candy</h3>
                    <p className="text-navy/80">We solved the biggest problem with supplements—compliance. When it tastes this good, you'll actually want to take it daily.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Alma Different */}
      <section className="py-20 bg-gradient-to-br from-cream/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6">
              What Makes <span className="font-recoleta font-black" style={{ letterSpacing: '-0.05em' }}>alma</span> Different
            </h2>
            <p className="text-xl text-navy max-w-3xl mx-auto leading-relaxed">
              In a crowded supplement market, we stand apart through science, transparency, and uncompromising quality.
            </p>
          </div>

          {/* Differentiator Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentiators.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={index}
                  className="group bg-white rounded-3xl p-8 shadow-xl border border-navy/10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Badge */}
                  <div className="inline-flex items-center space-x-2 bg-gold/10 px-3 py-1 rounded-full mb-6">
                    <span className="text-gold font-bold text-xs">{item.badge}</span>
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-ocean to-ocean/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-serif text-navy mb-4">{item.title}</h3>
                  <p className="text-navy/80 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Builders */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6">
              Trusted by Thousands
            </h2>
            <p className="text-xl text-navy max-w-3xl mx-auto leading-relaxed">
              Real feedback from real customers who've transformed their digestive wellness with alma.
            </p>
          </div>

          {/* Testimonials Carousel */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-cream/50 to-white rounded-3xl p-6 shadow-lg border border-navy/10"
              >
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-navy italic mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-gold to-gold/80 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy">{testimonial.author}</h4>
                    <p className="text-navy/70 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-ocean/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-ocean" />
              </div>
              <h3 className="font-semibold text-navy mb-2">cGMP Certified</h3>
              <p className="text-navy/70 text-sm">FDA-registered facility</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-semibold text-navy mb-2">Third-Party Tested</h3>
              <p className="text-navy/70 text-sm">Independent lab verified</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-berry/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-berry" />
              </div>
              <h3 className="font-semibold text-navy mb-2">50,000+ Customers</h3>
              <p className="text-navy/70 text-sm">Lives transformed</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blueberry/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-blueberry" />
              </div>
              <h3 className="font-semibold text-navy mb-2">30-Day Guarantee</h3>
              <p className="text-navy/70 text-sm">Love it or it's on us</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision / Where We're Going */}
      <section className="py-20 bg-gradient-to-br from-ocean/5 to-gold/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-navy/10 px-4 py-2 rounded-full mb-6">
            <Star className="w-4 h-4 text-navy" />
            <span className="text-navy font-medium text-sm">Our Vision</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-serif text-navy mb-8">
            Wellness for the Soul, One Gut at a Time
          </h2>

          <p className="text-xl text-navy mb-12 leading-relaxed">
            We envision a world where digestive wellness isn't a luxury—it's accessible, effective, 
            and enjoyable for everyone. Where taking care of your gut health feels like a daily treat, 
            not a chore.
          </p>

          {/* Future Roadmap */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/70 rounded-2xl p-6 border border-navy/10">
              <h3 className="text-xl font-serif text-navy mb-4">Coming Soon</h3>
              <ul className="space-y-3 text-navy/80">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span>New tropical flavor varieties</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-ocean rounded-full"></div>
                  <span>Clinical study results (in progress)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-berry rounded-full"></div>
                  <span>Targeted formulas for specific needs</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/70 rounded-2xl p-6 border border-navy/10">
              <h3 className="text-xl font-serif text-navy mb-4">Join Our Community</h3>
              <ul className="space-y-3 text-navy/80">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blueberry rounded-full"></div>
                  <span>Monthly wellness newsletter</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span>Exclusive member discounts</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-ocean rounded-full"></div>
                  <span>Early access to new products</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-navy/10">
            <h3 className="text-2xl font-serif text-navy mb-4">Stay Connected</h3>
            <p className="text-navy/80 mb-6">Get digestive wellness tips and be the first to know about new products.</p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full bg-cream/50 text-navy placeholder-navy/60 border border-navy/20 focus:outline-none focus:ring-2 focus:ring-gold/50"
              />
              <button
                type="submit"
                className="bg-ocean text-white px-6 py-3 rounded-full hover:bg-ocean/90 transition-colors font-bold flex items-center justify-center space-x-2"
              >
                <span>Join</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 bg-navy relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-40 h-40 bg-gold/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Ready to Transform Your Gut Health?
          </h2>
          <p className="text-xl text-white/80 mb-8 leading-relaxed">
            Join 50,000+ people who've discovered the alma difference. Your digestive wellness journey starts here.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
            <button className="group bg-gold text-white px-8 py-4 rounded-full hover:bg-gold/90 transition-all duration-300 font-bold text-lg flex items-center space-x-3 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              <span>Shop Gut Health Gummies - 30% Off</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="text-white/80 hover:text-white transition-colors font-medium flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>Chat with our team</span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center space-x-8 text-white/60 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white/60 rounded-full"></div>
              <span>Free shipping on all orders</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-gold rounded-full"></div>
              <span>30‑Day Risk‑Free • Love it or it's on us</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white/60 rounded-full"></div>
              <span>Third-party tested for quality</span>
            </div>
          </div>
        </div>
      </section>

      {/* FDA Disclaimer */}
      <div className="bg-cream/50 py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-navy/70 text-center">
            *These statements have not been evaluated by the Food and Drug Administration. 
            This product is not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>
      </div>
    </div>
  );
}