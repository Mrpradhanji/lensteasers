'use client';

import Image from 'next/image';
import Link from 'next/link';

const portfolioImages = [
  '/images/Prewedding/Pre_1.jpg',
  '/images/Prewedding/Pre_2.jpg',
  '/images/Prewedding/Pre_3.jpg',
  '/images/Prewedding/Pre_4.jpg',
  '/images/Prewedding/Pre_5.jpg',
  '/images/Prewedding/Pre_6.jpg',
  '/images/Prewedding/Pre_7.jpg',
  '/images/Prewedding/Pre_12.jpg',
  '/images/Prewedding/Pre_9.jpg'
];

export default function PreWeddingPhotographyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f9f6f2] via-[#f3e7d9] to-[#e7d6c6]">
      {/* Hero Section */}
      <section className="relative min-h-[400px] md:min-h-[600px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Prewedding/Pexels2.jpg"
            alt="Pre-Wedding Hero Background"
            fill
            className="object-cover w-full h-full"
            priority
          />
        </div>
        {/* Overlay */}
        
      </section>

      {/* Main Image Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="container mx-auto px-4 text-center relative z-10 pt-12 pb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#b48b3c] mb-6 tracking-tight drop-shadow-lg">
            Pre-Wedding Photoshoot
          </h1>
          <p className="text-lg sm:text-xl text-black max-w-3xl mx-auto leading-relaxed drop-shadow">
            Create beautiful memories before your big day with our pre-wedding photography sessions. Perfect for save-the-dates, wedding websites, and engagement announcements.
          </p>
        </div>
          
          
          <div className="relative h-80 md:h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/Prewedding/Pre_2.jpg"
              alt="Pre-Wedding Main"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#232323] mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pre-wedding Photography */}
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center flex flex-col items-center min-h-[420px]">
              <Image src="/images/Prewedding/Pre_3.jpg" alt="Pre-wedding Photography" width={120} height={120} className="rounded-full mb-4 object-cover" />
              <h3 className="text-xl font-semibold mb-3 text-[#232323]">Pre-wedding Photography</h3>
              <p className="text-gray-600 mb-4">Romantic, creative, and personalized pre-wedding sessions to tell your love story.</p>
              <Link href="/contact" className="text-[#b48b3c] font-semibold hover:underline">Book Now</Link>
            </div>
            {/* Candid Photography */}
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center flex flex-col items-center min-h-[420px]">
              <Image src="/images/Prewedding/Pre_4.jpg" alt="Candid Photography" width={120} height={120} className="rounded-full mb-4 object-cover" />
              <h3 className="text-xl font-semibold mb-3 text-[#232323]">Candid Photography</h3>
              <p className="text-gray-600 mb-4">Natural, spontaneous moments captured with artistry and emotion.</p>
              <Link href="/contact" className="text-[#b48b3c] font-semibold hover:underline">Book Now</Link>
            </div>
            {/* Cinematography */}
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center flex flex-col items-center min-h-[420px]">
              <Image src="/images/Prewedding/Pre_5.jpg" alt="Cinematography" width={120} height={120} className="rounded-full mb-4 object-cover" />
              <h3 className="text-xl font-semibold mb-3 text-[#232323]">Cinematography</h3>
              <p className="text-gray-600 mb-4">Beautiful cinematic films to relive your pre-wedding journey.</p>
              <Link href="/contact" className="text-[#b48b3c] font-semibold hover:underline">Book Now</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#232323] mb-12">Portfolio</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {portfolioImages.map((src, idx) => (
              <div key={idx} className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={src}
                  alt={`Portfolio ${idx + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#b48b3c] to-[#a07a2c] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Book Your Pre - Wedding Photography?</h2>
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

          </div>
        </div>
      </section>
    </div>
  );
} 