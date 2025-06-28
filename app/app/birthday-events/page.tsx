'use client';

import { useState } from 'react';
import { Camera, Gift, Users, Clock, Star, Check, ArrowRight, Calendar, Heart, Smile } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const packages = [
  {
    name: "Basic Birthday Package",
    price: "₹8,000",
    duration: "2-3 hours",
    features: [
      "Event coverage for 2-3 hours",
      "50+ edited photos",
      "Online gallery",
      "Quick delivery (3-5 days)",
      "Social media ready images"
    ],
    popular: false
  },
  {
    name: "Premium Birthday Package",
    price: "₹12,000",
    duration: "4-5 hours",
    features: [
      "Full event coverage (4-5 hours)",
      "100+ edited photos",
      "Online gallery",
      "Print-ready files",
      "Quick delivery (2-3 days)",
      "Candid moments focus",
      "Group photos included"
    ],
    popular: true
  },
  {
    name: "Luxury Birthday Package",
    price: "₹18,000",
    duration: "6-8 hours",
    features: [
      "Complete day coverage (6-8 hours)",
      "150+ edited photos",
      "Online gallery",
      "Print-ready files",
      "Same day highlights",
      "Professional editing",
      "All group photos",
      "Candid storytelling"
    ],
    popular: false
  }
];

const testimonials = [
  {
    name: "Priya Sharma",
    event: "Daughter's 5th Birthday",
    rating: 5,
    comment: "Amazing coverage of my daughter's birthday! The photographer captured every precious moment. Highly recommended!"
  },
  {
    name: "Rahul Verma",
    event: "Son's 10th Birthday",
    rating: 5,
    comment: "Professional service with beautiful photos. The kids had a great time and the photos turned out perfect."
  },
  {
    name: "Anjali Patel",
    event: "Husband's 30th Birthday",
    rating: 5,
    comment: "Excellent birthday photography service. The candid shots were the best part. Will definitely book again!"
  }
];

export default function BirthdayEvents() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f9f6f2] via-[#f3e7d9] to-[#e7d6c6] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#b48b3c]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-[#e7d6c6]/30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-[#b48b3c]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-[#f3e7d9]/40 rounded-full blur-2xl"></div>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#b48b3c] via-[#a07a2c] to-[#8b6b1c] text-white py-20 overflow-hidden">
        {/* Hero Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2">
              <Gift className="w-5 h-5" />
              <span className="text-sm font-medium">Birthday Event Photography</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
            Capture the Joy of
            <span className="block text-[#f3e7d9]">Birthday Celebrations</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed">
            From first birthdays to milestone celebrations, we capture every smile, laugh, and precious moment of your special day.
          </p>
          
          {/* Trust Indicators */}
          <div className="flex justify-center items-center space-x-8 mt-8">
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#f3e7d9] text-[#f3e7d9]" />
                ))}
              </div>
              <span className="text-sm font-medium">5.0 Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-[#f3e7d9]" />
              <span className="text-sm font-medium">200+ Birthday Events</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* What We Offer Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-[#b48b3c]/10 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-[#b48b3c] rounded-full"></div>
              <span className="text-sm font-medium text-[#b48b3c]">Our Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#232323] mb-8 tracking-tight leading-tight">
              What We Offer for
              <span className="block text-[#b48b3c]">Birthday Events</span>
            </h2>
            <p className="text-[#232323]/70 text-lg max-w-2xl mx-auto">
              Comprehensive birthday photography services tailored to make your celebration unforgettable
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-[#f3e7d9] rounded-2xl shadow-lg p-8 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="bg-[#b48b3c]/10 p-4 rounded-2xl w-fit mb-6">
                <Camera className="w-8 h-8 text-[#b48b3c]" />
              </div>
              <h3 className="text-2xl font-bold text-[#232323] mb-4">Event Coverage</h3>
              <p className="text-[#232323]/70 mb-6">Complete coverage of your birthday celebration from setup to cleanup</p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-3">
                  <Check className="w-4 h-4 text-[#b48b3c] flex-shrink-0" />
                  <span className="text-[#232323]/80">Arrival and setup shots</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-4 h-4 text-[#b48b3c] flex-shrink-0" />
                  <span className="text-[#232323]/80">Cake cutting ceremony</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-4 h-4 text-[#b48b3c] flex-shrink-0" />
                  <span className="text-[#232323]/80">Gift opening moments</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-[#f3e7d9] rounded-2xl shadow-lg p-8 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="bg-[#b48b3c]/10 p-4 rounded-2xl w-fit mb-6">
                <Users className="w-8 h-8 text-[#b48b3c]" />
              </div>
              <h3 className="text-2xl font-bold text-[#232323] mb-4">Group Photography</h3>
              <p className="text-[#232323]/70 mb-6">Beautiful group photos with family and friends</p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-3">
                  <Check className="w-4 h-4 text-[#b48b3c] flex-shrink-0" />
                  <span className="text-[#232323]/80">Family portraits</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-4 h-4 text-[#b48b3c] flex-shrink-0" />
                  <span className="text-[#232323]/80">Friend group shots</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-4 h-4 text-[#b48b3c] flex-shrink-0" />
                  <span className="text-[#232323]/80">Candid interactions</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-[#f3e7d9] rounded-2xl shadow-lg p-8 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="bg-[#b48b3c]/10 p-4 rounded-2xl w-fit mb-6">
                <Clock className="w-8 h-8 text-[#b48b3c]" />
              </div>
              <h3 className="text-2xl font-bold text-[#232323] mb-4">Quick Delivery</h3>
              <p className="text-[#232323]/70 mb-6">Fast turnaround time to share your memories quickly</p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-3">
                  <Check className="w-4 h-4 text-[#b48b3c] flex-shrink-0" />
                  <span className="text-[#232323]/80">Same day highlights</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-4 h-4 text-[#b48b3c] flex-shrink-0" />
                  <span className="text-[#232323]/80">3-5 day delivery</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-4 h-4 text-[#b48b3c] flex-shrink-0" />
                  <span className="text-[#232323]/80">Online gallery access</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Pricing Packages */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-[#b48b3c]/10 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-[#b48b3c] rounded-full"></div>
              <span className="text-sm font-medium text-[#b48b3c]">Pricing</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#232323] mb-8 tracking-tight leading-tight">
              Choose Your Perfect
              <span className="block text-[#b48b3c]">Birthday Package</span>
            </h2>
            <p className="text-[#232323]/70 text-lg max-w-2xl mx-auto">
              Flexible packages designed to capture your birthday celebration perfectly
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div 
                key={pkg.name}
                className={`relative bg-white border-2 rounded-3xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 ${
                  pkg.popular 
                    ? 'border-[#b48b3c] shadow-xl scale-105' 
                    : 'border-[#f3e7d9] hover:border-[#b48b3c]'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-[#b48b3c] text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-[#232323] mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-[#b48b3c] mb-2">{pkg.price}</div>
                  <div className="text-[#232323]/60 flex items-center justify-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{pkg.duration}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-[#b48b3c] flex-shrink-0" />
                      <span className="text-[#232323]/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href="/contact"
                  className="w-full bg-gradient-to-r from-[#b48b3c] to-[#a07a2c] hover:from-[#a07a2c] hover:to-[#8b6b1c] text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <span>Book This Package</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-[#b48b3c]/10 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-[#b48b3c] rounded-full"></div>
              <span className="text-sm font-medium text-[#b48b3c]">Our Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#232323] mb-8 tracking-tight leading-tight">
              Birthday Celebration
              <span className="block text-[#b48b3c]">Gallery</span>
            </h2>
            <p className="text-[#232323]/70 text-lg max-w-2xl mx-auto">
              Take a look at some of our favorite birthday photography moments
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-square relative">
                  <Image
                    src={`/images/Baby${num % 4}.jpg`}
                    alt={`Birthday celebration ${num}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h4 className="font-semibold">Birthday Celebration</h4>
                    <p className="text-sm text-white/80">Candid moments captured</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-[#b48b3c]/10 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-[#b48b3c] rounded-full"></div>
              <span className="text-sm font-medium text-[#b48b3c]">Client Reviews</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#232323] mb-8 tracking-tight leading-tight">
              What Our Clients
              <span className="block text-[#b48b3c]">Say About Us</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white border border-[#f3e7d9] rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#b48b3c] text-[#b48b3c]" />
                  ))}
                </div>
                <p className="text-[#232323]/80 mb-6 italic">"{testimonial.comment}"</p>
                <div>
                  <h4 className="font-semibold text-[#232323]">{testimonial.name}</h4>
                  <p className="text-sm text-[#232323]/60">{testimonial.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-white border border-[#f3e7d9] rounded-3xl shadow-2xl p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#b48b3c]/5 to-transparent rounded-bl-full"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#e7d6c6]/30 to-transparent rounded-tr-full"></div>
          
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center space-x-2 bg-[#b48b3c]/10 rounded-full px-4 py-2 mb-6">
              <Gift className="w-4 h-4 text-[#b48b3c]" />
              <span className="text-sm font-medium text-[#b48b3c]">Ready to Book?</span>
            </div>
            <h2 className="text-4xl font-bold text-[#232323] mb-6 tracking-tight">Let's Make Your Birthday Unforgettable</h2>
            <p className="text-[#232323]/70 text-lg mb-8 max-w-2xl mx-auto">
              Book your birthday photography session today and ensure every precious moment is captured beautifully.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-gradient-to-r from-[#b48b3c] to-[#a07a2c] hover:from-[#a07a2c] hover:to-[#8b6b1c] text-white py-4 px-8 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Book Your Session
              </Link>
              <Link href="/gallery" className="bg-white border-2 border-[#b48b3c] text-[#b48b3c] hover:bg-[#b48b3c] hover:text-white py-4 px-8 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                View More Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 