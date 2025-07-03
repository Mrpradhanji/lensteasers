'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function CinematographyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f9f6f2] via-[#f3e7d9] to-[#e7d6c6]">
      {/* Hero Section */}
      <section className="relative min-h-[400px] md:min-h-[600px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Cinema3.jpg"
            alt="Cinematography Hero Background"
            fill
            className="object-cover w-full h-full"
            priority
          />
        </div>
        {/* Overlay */}
        <div className="container mx-auto px-4 text-center relative z-10 pt-48 pb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#b48b3c] mb-6 tracking-tight drop-shadow-lg">
            Cinematography
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow">
            Relive your most precious moments with cinematic storytelling. Our expert team crafts beautiful films that capture the emotion, energy, and magic of your special day.
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#232323] mb-4 sm:mb-6">Cinematic Storytelling</h2>
              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                Our cinematography services go beyond simple video recording - we create cinematic experiences 
                that tell your story with emotion, artistry, and technical excellence. Using professional 
                equipment and creative techniques, we transform your moments into compelling visual narratives.
              </p>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                From intimate wedding films to corporate videos and event highlights, we bring a filmmaker&apos;s 
                eye to every project, ensuring your story is told beautifully and memorably.
              </p>
              
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-[#b48b3c] mb-1 sm:mb-2">4K</div>
                  <div className="text-gray-600 text-sm sm:text-base">Ultra HD Quality</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-[#b48b3c] mb-1 sm:mb-2">10-15</div>
                  <div className="text-gray-600 text-sm sm:text-base">Days Delivery</div>
                </div>
              </div>
            </div>
            
            <div className="relative h-64 sm:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/Cinema2.jpg"
                alt="Cinematography"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-gray-50 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#232323] mb-8 sm:mb-12">Our Cinematography Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#b48b3c] rounded-full flex items-center justify-center mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-[#232323]">Wedding Films</h3>
              <p className="text-gray-600 text-sm sm:text-base">Cinematic wedding videos that capture the emotion and beauty of your special day.</p>
            </div>
            
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#b48b3c] rounded-full flex items-center justify-center mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-[#232323]">Event Videos</h3>
              <p className="text-gray-600 text-sm sm:text-base">Professional event coverage for corporate functions, parties, and special occasions.</p>
            </div>
            
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#b48b3c] rounded-full flex items-center justify-center mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-[#232323]">Music Videos</h3>
              <p className="text-gray-600 text-sm sm:text-base">Creative music video production with artistic direction and professional editing.</p>
            </div>
            
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#b48b3c] rounded-full flex items-center justify-center mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-[#232323]">Corporate Videos</h3>
              <p className="text-gray-600 text-sm sm:text-base">Professional corporate video production for marketing, training, and brand promotion.</p>
            </div>
            
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#b48b3c] rounded-full flex items-center justify-center mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-[#232323]">Drone Footage</h3>
              <p className="text-gray-600 text-sm sm:text-base">Aerial cinematography with drone technology for stunning overhead perspectives.</p>
            </div>
            
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#b48b3c] rounded-full flex items-center justify-center mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-[#232323]">Professional Editing</h3>
              <p className="text-gray-600 text-sm sm:text-base">Expert video editing with color grading, sound design, and cinematic effects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#b48b3c] to-[#a07a2c] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Create Your Cinematic Story?</h2>
          <p className="text-lg mb-8 text-white/90">
            Let&apos;s bring your vision to life with professional cinematography and storytelling
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-[#b48b3c] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 