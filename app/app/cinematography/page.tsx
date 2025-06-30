'use client';

import { Star, Users, Phone, ArrowRight, Check, Video, Music, Play, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const packages = [
  {
    name: "Basic Video Package",
    price: "₹35,000",
    duration: "2-3 hours",
    features: [
      "HD video recording",
      "Basic editing",
      "Background music",
      "5-7 minute highlight reel",
      "Digital delivery",
      "7-10 day delivery"
    ],
    popular: false
  },
  {
    name: "Professional Video Package",
    price: "₹75,000",
    duration: "6-8 hours",
    features: [
      "4K video recording",
      "Multiple camera setup",
      "Professional editing",
      "Custom music selection",
      "10-15 minute feature film",
      "Drone shots included",
      "5-7 day delivery",
      "Cinematic effects"
    ],
    popular: true
  },
  {
    name: "Premium Video Package",
    price: "₹1,50,000",
    duration: "Full day",
    features: [
      "4K cinematic recording",
      "Multi-camera setup",
      "Professional editing",
      "Custom soundtrack",
      "20-30 minute feature film",
      "Drone cinematography",
      "Same day highlights",
      "Cinematic effects",
      "Color grading"
    ],
    popular: false
  }
];

const testimonials = [
  {
    name: "Anjali & Rajesh",
    event: "Wedding Cinematography",
    rating: 5,
    comment: "Absolutely stunning wedding video! The cinematography was breathtaking and captured every emotion perfectly."
  },
  {
    name: "Corporate Events Ltd",
    event: "Corporate Video",
    rating: 5,
    comment: "Professional service with outstanding results. Our corporate video exceeded all expectations."
  },
  {
    name: "Priya Sharma",
    event: "Birthday Event Video",
    rating: 5,
    comment: "Amazing video coverage of my daughter's birthday! The highlight reel was perfect and everyone loved it."
  }
];

export default function Cinematography() {
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
              <Video className="w-5 h-5" />
              <span className="text-sm font-medium">Professional Cinematography</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
            Cinematic Storytelling
            <span className="block text-[#f3e7d9]">Through Video</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed">
            Transform your special moments into cinematic masterpieces with our professional video services.
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
              <Clock className="w-4 h-4 text-[#f3e7d9]" />
              <span className="text-sm font-medium">100+ Videos Created</span>
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
              Professional Video
              <span className="block text-[#b48b3c]">Services</span>
            </h2>
            <p className="text-[#232323]/70 text-lg max-w-2xl mx-auto">
              Comprehensive video production services for all your special occasions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-[#f3e7d9] rounded-2xl shadow-lg p-8 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="bg-[#b48b3c]/10 p-4 rounded-2xl w-fit mb-6">
                <Phone className="w-8 h-8 text-[#b48b3c]" />
              </div>
              <h3 className="text-2xl font-bold text-[#232323] mb-4">Wedding Videos</h3>
              <p className="text-[#232323]/70 mb-6">Cinematic wedding videos that tell your love story beautifully</p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-3">
                  <Check className="w-4 h-4 text-[#b48b3c] flex-shrink-0" />
                  <span className="text-[#232323]/80">Full ceremony coverage</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-4 h-4 text-[#b48b3c] flex-shrink-0" />
                  <span className="text-[#232323]/80">Reception highlights</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-4 h-4 text-[#b48b3c] flex-shrink-0" />
                  <span className="text-[#232323]/80">Cinematic editing</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-[#f3e7d9] rounded-2xl shadow-lg p-8 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="bg-[#b48b3c]/10 p-4 rounded-2xl w-fit mb-6">
                <Users className="w-8 h-8 text-[#b48b3c]" />
              </div>
              <h3 className="text-2xl font-bold text-[#232323] mb-4">Event Cinematography</h3>
              <p className="text-[#232323]/70 mb-6">Professional video coverage for all types of events</p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-3">
                  <Check className="w-4 h-4 text-[#b48b3c] flex-shrink-0" />
                  <span className="text-[#232323]/80">Birthday celebrations</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-4 h-4 text-[#b48b3c] flex-shrink-0" />
                  <span className="text-[#232323]/80">Corporate events</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-4 h-4 text-[#b48b3c] flex-shrink-0" />
                  <span className="text-[#232323]/80">Special occasions</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-[#f3e7d9] rounded-2xl shadow-lg p-8 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="bg-[#b48b3c]/10 p-4 rounded-2xl w-fit mb-6">
                <Music className="w-8 h-8 text-[#b48b3c]" />
              </div>
              <h3 className="text-2xl font-bold text-[#232323] mb-4">Music Videos</h3>
              <p className="text-[#232323]/70 mb-6">Creative music video production for artists and musicians</p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-3">
                  <Check className="w-4 h-4 text-[#b48b3c] flex-shrink-0" />
                  <span className="text-[#232323]/80">Creative concepts</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-4 h-4 text-[#b48b3c] flex-shrink-0" />
                  <span className="text-[#232323]/80">Professional editing</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-4 h-4 text-[#b48b3c] flex-shrink-0" />
                  <span className="text-[#232323]/80">Visual effects</span>
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
              Choose Your Video
              <span className="block text-[#b48b3c]">Production Package</span>
            </h2>
            <p className="text-[#232323]/70 text-lg max-w-2xl mx-auto">
              Professional video packages for every budget and requirement
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
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
                    <Video className="w-4 h-4" />
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

        {/* Video Showcase Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-[#b48b3c]/10 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-[#b48b3c] rounded-full"></div>
              <span className="text-sm font-medium text-[#b48b3c]">Our Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#232323] mb-8 tracking-tight leading-tight">
              Cinematography
              <span className="block text-[#b48b3c]">Showcase</span>
            </h2>
            <p className="text-[#232323]/70 text-lg max-w-2xl mx-auto">
              Watch some of our best cinematography work
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-video relative">
                  <Image
                    src={`/images/Baby${num % 4}.jpg`}
                    alt={`Cinematography work ${num}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm p-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Play className="w-8 h-8 text-[#b48b3c]" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h4 className="font-semibold">Cinematography Work</h4>
                    <p className="text-sm text-white/80">Click to watch video</p>
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
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-white border border-[#f3e7d9] rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#b48b3c] text-[#b48b3c]" />
                  ))}
                </div>
                <p className="text-[#232323]/80 mb-6 italic">&ldquo;{testimonial.comment}&rdquo;</p>
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
              <Video className="w-4 h-4 text-[#b48b3c]" />
              <span className="text-sm font-medium text-[#b48b3c]">Ready to Create Magic?</span>
            </div>
            <h2 className="text-4xl font-bold text-[#232323] mb-6 tracking-tight">Let&apos;s Turn Your Vision Into Cinematic Reality</h2>
            <p className="text-[#232323]/70 text-lg mb-8 max-w-2xl mx-auto">
              Professional cinematography that captures every emotion and creates lasting memories. Contact us to discuss your video project.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-gradient-to-r from-[#b48b3c] to-[#a07a2c] hover:from-[#a07a2c] hover:to-[#8b6b1c] text-white py-4 px-8 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Start Your Project
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