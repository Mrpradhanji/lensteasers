'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const services = [
  {
    id: 'wedding',
    title: 'Wedding Photography',
    description: 'Capture your special day with our comprehensive wedding photography services. From the first look to the last dance, we document every precious moment of your celebration.',
    features: [
      'Full day coverage',
      'Pre-wedding shoots',
      'Engagement sessions',
      'Wedding albums',
      'Digital delivery',
      'Professional editing'
    ],
    image: '/images/Maternity_Home.jpg', // Placeholder - replace with wedding image
    href: '/services/wedding-photography'
  },
  {
    id: 'pre-wedding',
    title: 'Pre-Wedding Photoshoot',
    description: 'Create beautiful memories before your big day with our pre-wedding photography sessions. Perfect for save-the-dates, wedding websites, and engagement announcements.',
    features: [
      'Multiple locations',
      'Outdoor & indoor shoots',
      'Engagement rings focus',
      'Casual & formal styles',
      'Quick turnaround',
      'Social media ready'
    ],
    image: '/images/BabyShoot.jpg', // Placeholder - replace with pre-wedding image
    href: '/services/pre-wedding-photography'
  },
  {
    id: 'birthday',
    title: 'Birthday Event Photography',
    description: 'Make every birthday celebration unforgettable with our event photography services. From intimate family gatherings to grand birthday parties.',
    features: [
      'Event coverage',
      'Cake cutting moments',
      'Guest interactions',
      'Decor documentation',
      'Group photos',
      'Same-day highlights'
    ],
    image: '/images/Baby1.jpg', // Placeholder - replace with birthday image
    href: '/services/birthday-events'
  },
  {
    id: 'maternity',
    title: 'Maternity Shoot',
    description: 'Celebrate the beauty of motherhood with our elegant maternity photography sessions. We create timeless portraits that capture the glow and anticipation of this special time.',
    features: [
      'Indoor & outdoor shoots',
      'Professional styling',
      'Partner & family inclusion',
      'Belly casting',
      'Maternity wardrobe',
      'Artistic editing'
    ],
    image: '/images/Maternity_Home.jpg',
    href: '/maternity'
  },
  {
    id: 'baby-kids',
    title: 'Baby & Kids Photography',
    description: 'Preserve the precious moments of childhood with our specialized baby and kids photography. From newborns to toddlers, we capture every milestone.',
    features: [
      'Newborn sessions',
      'Milestone photography',
      'Family portraits',
      'Safe environment',
      'Props & accessories',
      'Growth documentation'
    ],
    image: '/images/BabyShoot.jpg',
    href: '/babyphotoshoot'
  },
  {
    id: 'product',
    title: 'Product Photography',
    description: 'Showcase your products in their best light with our professional product photography services. Perfect for e-commerce, catalogs, and marketing materials.',
    features: [
      'Studio lighting',
      'Multiple angles',
      'Lifestyle shots',
      'White background',
      'Detail close-ups',
      'Batch processing'
    ],
    image: '/images/Unsplash.jpg', // Placeholder - replace with product image
    href: '/services/product-photography'
  },
  {
    id: 'cinematography',
    title: 'Cinematography',
    description: 'Bring your special moments to life with our cinematic videography services. From wedding films to event highlights, we create compelling visual stories.',
    features: [
      'Wedding films',
      'Event videos',
      'Music videos',
      'Corporate videos',
      'Drone footage',
      'Professional editing'
    ],
    image: '/images/Maternity1.jpg', // Placeholder - replace with cinematography image
    href: '/services/cinematography'
  }
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white pt-32">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#f9f6f2] via-[#f3e7d9] to-[#e7d6c6] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#232323] mb-6 tracking-tight">
            Our Photography Services
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            From capturing your most precious moments to creating stunning visual content, 
            we offer a comprehensive range of photography and videography services tailored to your needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
                onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
              >
                {/* Service Image */}
                <div className="relative h-48 sm:h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg sm:text-2xl font-bold text-white mb-2">{service.title}</h3>
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-4 sm:p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base">
                    {service.description}
                  </p>
                  
                  {/* Features List */}
                  <div className={`transition-all duration-300 ${selectedService === service.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    <h4 className="font-semibold text-[#b48b3c] mb-3 text-sm sm:text-base">What&apos;s Included:</h4>
                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-xs sm:text-sm text-gray-600">
                          <span className="w-2 h-2 bg-[#b48b3c] rounded-full mr-3 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
                    <button
                      className="text-[#b48b3c] font-semibold hover:text-[#a07a2c] transition-colors text-sm sm:text-base"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedService(selectedService === service.id ? null : service.id);
                      }}
                    >
                      {selectedService === service.id ? 'Show Less' : 'Learn More'}
                    </button>
                    <Link
                      href={service.href}
                      className="bg-[#b48b3c] hover:bg-[#a07a2c] text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors w-full sm:w-auto text-center"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gradient-to-br from-[#232323] to-[#2a2a2a] py-16 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Choose LensTeasers?</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              We combine artistic vision with technical expertise to deliver exceptional results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#b48b3c] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Passion</h3>
              <p className="text-gray-300">We&apos;re passionate about capturing your precious moments</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#b48b3c] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality</h3>
              <p className="text-gray-300">Professional equipment and editing for stunning results</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#b48b3c] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Timely</h3>
              <p className="text-gray-300">Quick turnaround times without compromising quality</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#b48b3c] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Experience</h3>
              <p className="text-gray-300">Years of experience in various photography styles</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#b48b3c] to-[#a07a2c] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Capture Your Moments?</h2>
          <p className="text-lg mb-8 text-white/90">
            Let&apos;s discuss your photography needs and create something beautiful together
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
              View Gallery
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
