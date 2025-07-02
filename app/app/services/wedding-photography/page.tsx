'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function WeddingPhotographyPage() {
  return (
    <div className="min-h-screen bg-white pt-32">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#f9f6f2] via-[#f3e7d9] to-[#e7d6c6] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#232323] mb-6 tracking-tight">
            Wedding Photography
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Capture every precious moment of your special day with our comprehensive wedding photography services. 
            From the first look to the last dance, we document your celebration with artistry and care.
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#232323] mb-6">Your Wedding Story, Beautifully Told</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Your wedding day is one of the most important days of your life, and we understand the responsibility 
                of capturing every moment. Our wedding photography packages are designed to tell your unique love story 
                through stunning imagery that you&apos;ll treasure forever.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We blend photojournalistic storytelling with artistic portraiture to create a comprehensive collection 
                that includes candid moments, formal portraits, and all the beautiful details that make your day special.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#b48b3c] mb-2">100+</div>
                  <div className="text-gray-600">Weddings Captured</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#b48b3c] mb-2">2-3 Days</div>
                  <div className="text-gray-600">Quick Preview</div>
                </div>
              </div>
            </div>
            
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/Maternity_Home.jpg"
                alt="Wedding Photography"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#232323] mb-12">What&apos;s Included in Your Package</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-[#b48b3c] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#232323]">Full Day Coverage</h3>
              <p className="text-gray-600">From getting ready to the last dance, we capture every moment of your special day.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-[#b48b3c] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#232323]">Professional Editing</h3>
              <p className="text-gray-600">Every image is professionally edited to ensure the highest quality and artistic appeal.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-[#b48b3c] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#232323]">Wedding Albums</h3>
              <p className="text-gray-600">Beautiful, custom-designed wedding albums to showcase your favorite moments.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-[#b48b3c] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#232323]">Digital Delivery</h3>
              <p className="text-gray-600">High-resolution digital files delivered through a beautiful online gallery.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-[#b48b3c] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#232323]">Engagement Sessions</h3>
              <p className="text-gray-600">Pre-wedding engagement sessions to get comfortable in front of the camera.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-[#b48b3c] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#232323]">Wedding Planning Guide</h3>
              <p className="text-gray-600">Comprehensive guide to help you plan the perfect photography timeline.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#b48b3c] to-[#a07a2c] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Book Your Wedding Photography?</h2>
          <p className="text-lg mb-8 text-white/90">
            Let&apos;s discuss your wedding photography needs and create a package that&apos;s perfect for your special day
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-[#b48b3c] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              href="/gallery"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#b48b3c] transition-colors"
            >
              View Wedding Gallery
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 