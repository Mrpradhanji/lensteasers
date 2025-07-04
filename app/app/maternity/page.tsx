'use client';

import { Heart, Camera, Star, Users, ArrowRight, Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { useState } from 'react';


const maternityPackages = [
  {
    name: "MINI",
    price: "₹4,999",
    duration: "45 Minutes Studio Session",
    description: "Perfect for capturing the beauty of your pregnancy journey",
    features: [
      "45 Minutes Studio Session",
      "6 Edited Photos(Digital Copy)",
      "All Raw Images(Digital Copy)",
      "One set up Shoot",
      "Outfits Included(Maximum 1)"
    ],
    popular: false
  },
  {
    name: "SILVER",
    price: "₹6,999",
    duration: "1 hour Studio Session",
    description: "Our most popular package with comprehensive coverage",
    features: [
      "All Raw Images(Digital Copy)",
      "12 Edited Photos(Digital Copy)",
      "One 12x18 Inches Photo Frame",
      "One Gown or drape from Studio",
      "Two set up Shoot",
      "Outfits Included(Maximum 2)",
    ],
    popular: true
  },
  {
    name: "GOLD",
    price: "₹9,999",
    duration: "1 hour Studio Session",
    description: "",
    features: [
      "All Raw Pics(Digital copy Only)",
      "20 Edited Pics (Digital copy Only)",
      "Album 12x12 Inches Photo Frame",
      "One Gown or drape from Studio",
      "Makeup and hair included",
      "MaximumTwo outfit Shoot",
      "Three set up Shoot",
      "Photo reel"
    ],
    popular: false
  },
  {
    name: "PLATINUM",
    price: "₹13,999",
    duration: "1 hour Studio & Outdoor Session",
    description: "",
    features: [
      "All Raw Pics(Digital copy Only)",
      "25 Edited Pics (Digital copy Only)",
      "Album 12x12 Inches Photo Frame",
      "Frame 14x20 Inches Photo Frame",
      "One Gown & one drape from Studio",
      "Makeup and hair included",
      "Maximum Three outfit Shoot",
      "Four set up Shoot",
      "Video reel"
    ],
    popular: false
  }
];

const galleryImages = [
  { src: "/images/Maternity/Maternity1.jpg", alt: "Maternity Portrait 1" },
  { src: "/images/Maternity/Maternity2.jpg", alt: "Maternity Portrait 2" },
  { src: "/images/Maternity/Maternity3.jpg", alt: "Maternity Portrait 3" },
  { src: "/images/Maternity/Maternity4.jpg", alt: "Maternity Portrait 4" },
  { src: "/images/Maternity/Maternity_5.jpg", alt: "Maternity Portrait 5" },
  { src: "/images/Maternity/Maternity_6.jpg", alt: "Maternity Portrait 6" },
  
];

const testimonials = [
  {
    name: "Priya Sharma",
    rating: 5,
    text: "The maternity shoot was absolutely magical! The team made me feel so comfortable and beautiful. The photos turned out stunning and I'll treasure them forever.",
    image: "/images/Baby/Baby1.jpg"
  },
  {
    name: "Anjali Patel",
    rating: 5,
    text: "I was nervous about my maternity shoot, but the photographers were so professional and caring. The results exceeded my expectations completely!",
    image: "/images/Baby/Baby2.jpg"
  },
  {
    name: "Riya Singh",
    rating: 5,
    text: "Best decision I made during my pregnancy! The photos are breathtaking and the whole experience was so special. Highly recommend!",
    image: "/images/Baby/Baby3.jpg"
  }
];

export default function Maternity() {
  const [imageLoaded, setImageLoaded] = useState<{ [src: string]: boolean }>({});

  const handleImageLoad = (src: string) => {
    setImageLoaded((prev) => ({ ...prev, [src]: true }));
  };

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
      <div className="relative w-full min-h-[400px] md:min-h-[600px]  flex items-center justify-center overflow-hidden">
        {/* Studio Image Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/MAT.jpg"
            alt="Contact Studio Background"
            fill
            className="object-cover w-full h-full"
            priority
          />
          
          <div className="absolute inset-0 bg-black/30" />
        </div>
        {/* Hero Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23b48b3c' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center mb-4 sm:mb-6">
            
          </div>
          <div className="relative z-10 text-center pt-20 sm:pt-32 md:pt-48 pb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 tracking-tight leading-tight">
              Celebrate Your
              <span className="block text-[#b48b3c]">Pregnancy Journey</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-black max-w-3xl mx-auto font-light leading-relaxed">
              Capture the beauty, strength, and love of motherhood with our professional maternity photography sessions.
            </p>          
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 sm:py-20 relative z-10">
        {/* Why Choose Us Section */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 bg-[#b48b3c]/10 rounded-full px-4 py-2 mb-4 sm:mb-6">
            <div className="w-2 h-2 bg-[#b48b3c] rounded-full"></div>
            <span className="text-sm font-medium text-[#b48b3c]">Why Choose Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#232323] mb-6 sm:mb-8 tracking-tight leading-tight">
            Experience the Perfect
            <span className="block text-[#b48b3c]">Maternity Session</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">
            <div className="bg-white border border-[#f3e7d9] rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-[#b48b3c]/10 p-3 sm:p-4 rounded-2xl w-fit mx-auto mb-4 sm:mb-6">
                <Camera className="w-6 h-6 sm:w-8 sm:h-8 text-[#b48b3c]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#232323] mb-3 sm:mb-4">Professional Studio</h3>
              <p className="text-[#232323]/70 text-sm sm:text-base">Our state-of-the-art studio provides the perfect setting with professional lighting and comfortable amenities.</p>
            </div>
            
            <div className="bg-white border border-[#f3e7d9] rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-[#b48b3c]/10 p-3 sm:p-4 rounded-2xl w-fit mx-auto mb-4 sm:mb-6">
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-[#b48b3c]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#232323] mb-3 sm:mb-4">Comfortable Experience</h3>
              <p className="text-[#232323]/70 text-sm sm:text-base">We understand pregnancy can be challenging. Our sessions are designed to be comfortable and relaxing.</p>
            </div>
            
            <div className="bg-white border border-[#f3e7d9] rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-[#b48b3c]/10 p-3 sm:p-4 rounded-2xl w-fit mx-auto mb-4 sm:mb-6">
                <Star className="w-6 h-6 sm:w-8 sm:h-8 text-[#b48b3c]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#232323] mb-3 sm:mb-4">Expert Team</h3>
              <p className="text-[#232323]/70 text-sm sm:text-base">Our experienced photographers specialize in maternity photography and know how to capture your beauty perfectly.</p>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#232323] mb-3 sm:mb-4 tracking-tight">Our Maternity Gallery</h2>
            <p className="text-[#232323]/70 text-base sm:text-lg max-w-2xl mx-auto">
              Take a look at some of our beautiful maternity photography work
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="group relative aspect-[3/4] w-full overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative w-full h-full">
                  <LazyMotion features={domAnimation}>
                    <m.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: imageLoaded[image.src] ? 1 : 0 }}
                      transition={{ duration: 1.5 }}
                      className="w-full h-full"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        onLoadingComplete={() => handleImageLoad(image.src)}
                        loading="lazy"
                      />
                    </m.div>
                  </LazyMotion>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Packages Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#232323] mb-4 tracking-tight">Choose Your Package</h2>
            <p className="text-[#232323]/70 text-lg max-w-2xl mx-auto">
              We offer flexible packages to suit every need and budget
            </p>
          </div>
          
          <div className="grid lg:grid-cols-4 gap-8">
            {maternityPackages.map((pkg) => (
              <div key={pkg.name} className={`relative bg-white border border-[#f3e7d9] rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 ${pkg.popular ? 'ring-2 ring-[#b48b3c] scale-105' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#b48b3c] text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#232323] mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-[#b48b3c] mb-2">{pkg.price}</div>
                  <div className="text-[#232323]/60 mb-4">{pkg.duration}</div>
                  <p className="text-[#232323]/70 mb-6">{pkg.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-[#b48b3c] flex-shrink-0" />
                        <span className="text-[#232323]/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-[#b48b3c] to-[#a07a2c] hover:from-[#a07a2c] hover:to-[#8b6b1c] text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                    Book This Package
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#232323] mb-4 tracking-tight">What Our Clients Say</h2>
            <p className="text-[#232323]/70 text-lg max-w-2xl mx-auto">
              Hear from the beautiful moms who trusted us with their maternity photos
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-white border border-[#f3e7d9] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#b48b3c] text-[#b48b3c]" />
                  ))}
                </div>
                <p className="text-[#232323]/80 mb-6 italic">&quot;{testimonial.text}&quot;</p>
                <div className="flex items-center space-x-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <LazyMotion features={domAnimation}>
                      <m.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: imageLoaded[testimonial.image] ? 1 : 0 }}
                        transition={{ duration: 1.5 }}
                        className="w-full h-full"
                      >
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                          onLoadingComplete={() => handleImageLoad(testimonial.image)}
                          loading="lazy"
                        />
                      </m.div>
                    </LazyMotion>
                  </div>
                  <div>
                    <div className="font-semibold text-[#232323]">{testimonial.name}</div>
                    <div className="text-sm text-[#232323]/60">Happy Mom</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-white border border-[#f3e7d9] rounded-3xl shadow-2xl p-12 relative overflow-hidden">
          {/* CTA Background Decoration */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#b48b3c]/5 to-transparent rounded-br-full"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-[#e7d6c6]/30 to-transparent rounded-tl-full"></div>
          
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center space-x-2 bg-[#b48b3c]/10 rounded-full px-4 py-2 mb-6">
              <Heart className="w-4 h-4 text-[#b48b3c]" />
              <span className="text-sm font-medium text-[#b48b3c]">Ready to Book?</span>
            </div>
            <h2 className="text-4xl font-bold text-[#232323] mb-6 tracking-tight">Capture Your Beautiful Journey</h2>
            <p className="text-[#232323]/70 text-lg mb-8 max-w-2xl mx-auto">
              Don&apos;t miss the opportunity to preserve these precious moments. Contact us today to schedule your maternity photography session.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-gradient-to-r from-[#b48b3c] to-[#a07a2c] hover:from-[#a07a2c] hover:to-[#8b6b1c] text-white py-4 px-8 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2">
                <span>Book Your Session</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}