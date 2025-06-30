'use client';

import { Package, Star, ShoppingBag, Settings, Check, Target, Zap, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const packages = [
  {
    name: "Basic Product Package",
    price: "₹5,000",
    products: "Up to 10 products",
    features: [
      "Professional studio lighting",
      "White background shots",
      "3 angles per product",
      "Basic editing",
      "Digital files",
      "3-5 day delivery"
    ],
    popular: false
  },
  {
    name: "Professional Product Package",
    price: "₹12,000",
    products: "Up to 25 products",
    features: [
      "Professional studio lighting",
      "Multiple background options",
      "5+ angles per product",
      "Advanced editing",
      "E-commerce ready",
      "Print-ready files",
      "2-3 day delivery",
      "Lifestyle shots included"
    ],
    popular: true
  },
  {
    name: "Premium Product Package",
    price: "₹25,000",
    products: "Up to 50 products",
    features: [
      "Premium studio setup",
      "Custom backgrounds",
      "8+ angles per product",
      "Professional editing",
      "E-commerce optimization",
      "Print-ready files",
      "Same day delivery",
      "Lifestyle photography",
      "Product videos included"
    ],
    popular: false
  }
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    business: "Fashion Boutique Owner",
    rating: 5,
    comment: "Excellent product photography service! Our online sales increased by 40% after using their photos."
  },
  {
    name: "Priya Singh",
    business: "Jewelry Designer",
    rating: 5,
    comment: "Professional service with stunning results. The product photos look amazing on our website."
  },
  {
    name: "Amit Patel",
    business: "Electronics Store",
    rating: 5,
    comment: "High-quality product photography that showcases our products perfectly. Highly recommended!"
  }
];

export default function ProductPhotography() {
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
              <Package className="w-5 h-5" />
              <span className="text-sm font-medium">Product Photography</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
            Showcase Your Products
            <span className="block text-[#f3e7d9]">Professionally</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed">
            Professional product photography that drives sales and enhances your brand image for e-commerce and marketing.
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
              <ShoppingBag className="w-4 h-4 text-[#f3e7d9]" />
              <span className="text-sm font-medium">500+ Products Shot</span>
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
              Professional Product
              <span className="block text-[#b48b3c]">Photography Services</span>
            </h2>
            <p className="text-[#232323]/70 text-lg max-w-2xl mx-auto">
              Comprehensive product photography solutions for businesses of all sizes
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-[#f3e7d9] rounded-2xl shadow-lg p-8 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="bg-[#b48b3c]/10 p-4 rounded-2xl w-fit mb-6">
                <Settings className="w-8 h-8 text-[#b48b3c]" />
              </div>
              <h3 className="text-2xl font-bold text-[#232323] mb-4">Studio Photography</h3>
              <p className="text-[#232323]/70 mb-6">Professional studio setup with perfect lighting for your products</p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-3">
                  <Check className="w-4 h-4 text-[#b48b3c] flex-shrink-0" />
                  <span className="text-[#232323]/80">Professional lighting setup</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-4 h-4 text-[#b48b3c] flex-shrink-0" />
                  <span className="text-[#232323]/80">Multiple background options</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-4 h-4 text-[#b48b3c] flex-shrink-0" />
                  <span className="text-[#232323]/80">High-resolution images</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-[#f3e7d9] rounded-2xl shadow-lg p-8 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="bg-[#b48b3c]/10 p-4 rounded-2xl w-fit mb-6">
                <Target className="w-8 h-8 text-[#b48b3c]" />
              </div>
              <h3 className="text-2xl font-bold text-[#232323] mb-4">E-commerce Ready</h3>
              <p className="text-[#232323]/70 mb-6">Optimized images perfect for online stores and marketplaces</p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-3">
                  <Check className="w-4 h-4 text-[#b48b3c] flex-shrink-0" />
                  <span className="text-[#232323]/80">Multiple angles</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-4 h-4 text-[#b48b3c] flex-shrink-0" />
                  <span className="text-[#232323]/80">Consistent sizing</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-4 h-4 text-[#b48b3c] flex-shrink-0" />
                  <span className="text-[#232323]/80">Fast loading optimized</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-[#f3e7d9] rounded-2xl shadow-lg p-8 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="bg-[#b48b3c]/10 p-4 rounded-2xl w-fit mb-6">
                <Zap className="w-8 h-8 text-[#b48b3c]" />
              </div>
              <h3 className="text-2xl font-bold text-[#232323] mb-4">Quick Turnaround</h3>
              <p className="text-[#232323]/70 mb-6">Fast delivery to keep your business moving forward</p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-3">
                  <Check className="w-4 h-4 text-[#b48b3c] flex-shrink-0" />
                  <span className="text-[#232323]/80">Same day delivery</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-4 h-4 text-[#b48b3c] flex-shrink-0" />
                  <span className="text-[#232323]/80">Bulk discounts</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-4 h-4 text-[#b48b3c] flex-shrink-0" />
                  <span className="text-[#232323]/80">Priority processing</span>
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
              Choose Your Product
              <span className="block text-[#b48b3c]">Photography Package</span>
            </h2>
            <p className="text-[#232323]/70 text-lg max-w-2xl mx-auto">
              Flexible packages designed for businesses of all sizes
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
                    <Package className="w-4 h-4" />
                    <span>{pkg.products}</span>
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
              Product Photography
              <span className="block text-[#b48b3c]">Portfolio</span>
            </h2>
            <p className="text-[#232323]/70 text-lg max-w-2xl mx-auto">
              Examples of our professional product photography work
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-square relative">
                  <Image
                    src={`/images/Baby${num % 4}.jpg`}
                    alt={`Product photography ${num}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h4 className="font-semibold">Product Photography</h4>
                    <p className="text-sm text-white/80">Professional studio shots</p>
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
              What Our Business
              <span className="block text-[#b48b3c]">Clients Say</span>
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
                <p className="text-[#232323]/80 mb-6 italic">&quot;{testimonial.comment}&apos;</p>
                <div>
                  <h4 className="font-semibold text-[#232323]">{testimonial.name}</h4>
                  <p className="text-sm text-[#232323]/60">{testimonial.business}</p>
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
              <Package className="w-4 h-4 text-[#b48b3c]" />
              <span className="text-sm font-medium text-[#b48b3c]">Ready to Boost Sales?</span>
            </div>
            <h2 className="text-4xl font-bold text-[#232323] mb-6 tracking-tight">Transform Your Products with Professional Photography</h2>
            <p className="text-[#232323]/70 text-lg mb-8 max-w-2xl mx-auto">
              Professional product photography can increase your sales by up to 40%. Let&apos;s showcase your products in their best light.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-gradient-to-r from-[#b48b3c] to-[#a07a2c] hover:from-[#a07a2c] hover:to-[#8b6b1c] text-white py-4 px-8 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Get Started Today
              </Link>
              <Link href="/gallery" className="bg-white border-2 border-[#b48b3c] text-[#b48b3c] hover:bg-[#b48b3c] hover:text-white py-4 px-8 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 