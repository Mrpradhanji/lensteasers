'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function PreWeddingPhotographyPage() {
  return (
    <div className="min-h-screen bg-white pt-32">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#f9f6f2] via-[#f3e7d9] to-[#e7d6c6] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#232323] mb-6 tracking-tight">
            Pre-Wedding Photoshoot
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Create beautiful memories before your big day with our pre-wedding photography sessions. 
            Perfect for save-the-dates, wedding websites, and engagement announcements.
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#232323] mb-6">Capture Your Love Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Pre-wedding photography is more than just engagement photos - it's about capturing the excitement, 
                love, and anticipation of your upcoming wedding. These sessions allow you to get comfortable in front 
                of the camera while creating stunning images for your wedding announcements and keepsakes.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We offer both indoor and outdoor sessions, multiple location options, and can incorporate your 
                personal style and interests to create truly unique and meaningful photographs.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#b48b3c] mb-2">2-3</div>
                  <div className="text-gray-600">Hours Session</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#b48b3c] mb-2">50+</div>
                  <div className="text-gray-600">Edited Photos</div>
                </div>
              </div>
            </div>
            
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/BabyShoot.jpg"
                alt="Pre-Wedding Photography"
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
          <h2 className="text-3xl font-bold text-center text-[#232323] mb-12">What's Included in Your Session</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-[#b48b3c] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#232323]">Multiple Locations</h3>
              <p className="text-gray-600">Choose from various indoor and outdoor locations to match your style and preferences.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-[#b48b3c] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#232323]">Engagement Ring Focus</h3>
              <p className="text-gray-600">Beautiful close-up shots of your engagement ring and romantic moments.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-[#b48b3c] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#232323]">Casual & Formal Styles</h3>
              <p className="text-gray-600">Mix of casual, romantic, and formal poses to capture different aspects of your relationship.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-[#b48b3c] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#232323]">Quick Turnaround</h3>
              <p className="text-gray-600">Fast delivery of edited photos for your save-the-dates and announcements.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-[#b48b3c] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#232323]">Social Media Ready</h3>
              <p className="text-gray-600">Perfectly sized images for Instagram, Facebook, and other social platforms.</p>
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#b48b3c] to-[#a07a2c] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready for Your Pre-Wedding Shoot?</h2>
          <p className="text-lg mb-8 text-white/90">
            Let's create beautiful engagement photos that tell your unique love story
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-[#b48b3c] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Book Your Session
            </Link>
            <Link
              href="/gallery"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#b48b3c] transition-colors"
            >
              View Pre-Wedding Gallery
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 