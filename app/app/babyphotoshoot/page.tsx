'use client';

import { Heart, Camera, Star, Users, Calendar, ArrowRight, Check, Baby, Gift } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { useState } from 'react';


const babyPackages = [
  {
    name: "Baby Photography Mini Session",
    price: "₹4,999",
    duration: "45 Minutes",
    description: "Capture your baby's sweetest moments with our gentle, safe photography sessions.",

    features: [
      "45 Minutes Studio Session",
      "10 Edited Photos",
      "2 Themes Selection",
      "All Raw Images",
      "Outfits Included"
    ],
    popular: false
  },
  {
    name: "Baby Photography Silver Package",
    price: "₹7,999",
    duration: "1 Hour Studio Session",
    description: "Document your baby & toddler growth and milestones with our specialized baby photography.",
    features: [
      "1 Hour Studio Session",
      "15 Edited Photos",
      "3 Themes Selection",
      "All Raw Images",
      "Outfits Included",
      "One Photo Frame 12x18 Inches"
    ],
    popular: true
  },
  {
    name: "Baby Photography Gold Package",
    price: "₹11,999",
    duration: "2 hours Studio Session",
    description: "Capture your toddler & baby personality and energy with our fun, interactive sessions.",
    features: [
      "2 Hours Studio Session",
      "30 Edited Photos",
      "5 Themes Selection",
      "All Raw Images",
      "Cake Smash Included",
      "One Photo Frame 12x12 Inches",
      "Outfits Included"
    ],
    popular: false
  },
  {
    name: "Baby Photography Platinum Package",
    price: "₹15,999",
    duration: "3 hours Studio Session & Outdoor Session",
    description: "Turn their giggles and curiosity into timeless memories with vibrant, interactive shoots.",
    features: [
      "3 Hours Studio & Outdoor Session",
      "40 Edited Photos",
      "7 Themes Selection",
      "All Raw Images",
      "Cake Smash Included",
      "One Photo Frame 12x12 Inches",
      "One Photo Frame 14x20 Inches",
      "Outfits Included",
      "One Instagram Reel"
    ],
    popular: false
  }
];

const galleryImages = [
  { src: "/images/Baby/Baby18.jpg", alt: "Baby Portrait 1" },
  { src: "/images/Baby/Baby1.jpg", alt: "Baby Portrait 2" },
  { src: "/images/Baby/Baby2.jpg", alt: "Baby Portrait 3" },
  { src: "/images/Baby/Baby3.jpg", alt: "Baby Portrait 4" },
  { src: "/images/Baby/Baby13.jpg", alt: "Baby Portrait 5" },
  { src: "/images/Baby/Baby27.jpg", alt: "Baby Portrait 6" }
];

const testimonials = [
  {
    name: "Meera Kapoor",
    rating: 5,
    text: "The baby photoshoot was absolutely perfect! The photographer was so patient with our little one and the photos are absolutely stunning. We&apos;ll treasure them forever.",
    image: "/images/Maternity/Maternity1.jpg"
  },
  {
    name: "Sneha Reddy",
    rating: 5,
    text: "Our newborn session was magical. The team was so gentle and caring with our baby. The photos captured every precious detail perfectly!",
    image: "/images/Maternity/Maternity2.jpg"
  },
  {
    name: "Priya Verma",
    rating: 5,
    text: "The milestone session for our 6-month-old was incredible. The photographer knew exactly how to capture our baby&apos;s personality. Highly recommend!",
    image: "/images/Maternity/Maternity3.jpg"
  }
];

const babyTips = [
  {
    title: "Best Age for Newborn Photos",
    description: "The ideal time is 5-14 days after birth when babies are sleepiest and most flexible for posing.",
    icon: Baby
  },
  {
    title: "What to Bring",
    description: "Bring extra diapers, wipes, pacifiers, and a change of clothes. We provide all props and backdrops.",
    icon: Gift
  },
  {
    title: "Session Duration",
    description: "Newborn sessions typically take 2-3 hours to allow for feeding, changing, and soothing breaks.",
    icon: Calendar
  }
];

export default function BabyPhotoshoot() {
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
      <div className="relative bg-white text-black py-20 overflow-hidden">
        {/* Hero Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23b48b3c' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 bg-[#b48b3c]/10 rounded-full px-6 py-2">
              <Baby className="w-5 h-5 text-[#b48b3c]" />
              <span className="text-sm font-medium text-[#b48b3c]">Baby Photography</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
            Capture Your Baby&apos;s
            <span className="block text-[#b48b3c]">Precious Moments</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#232323]/80 max-w-3xl mx-auto font-light leading-relaxed">
            From newborn to toddler, we specialize in capturing the innocence, joy, and wonder of childhood through beautiful photography.
          </p>
          
          {/* Trust Indicators */}
          <div className="flex justify-center items-center space-x-8 mt-8">
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#b48b3c] text-[#b48b3c]" />
                ))}
              </div>
              <span className="text-sm font-medium text-[#232323]">5.0 Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-[#b48b3c]" />
              <span className="text-sm font-medium text-[#232323]">300+ Happy Families</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* Why Choose Us Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-[#b48b3c]/10 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-[#b48b3c] rounded-full"></div>
            <span className="text-sm font-medium text-[#b48b3c]">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#232323] mb-8 tracking-tight leading-tight">
            Safe & Professional
            <span className="block text-[#b48b3c]">Baby Photography</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white border border-[#f3e7d9] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-[#b48b3c]/10 p-4 rounded-2xl w-fit mx-auto mb-6">
                <Heart className="w-8 h-8 text-[#b48b3c]" />
              </div>
              <h3 className="text-xl font-bold text-[#232323] mb-4">Safe Environment</h3>
              <p className="text-[#232323]/70">Our studio is designed with babies in mind - warm, clean, and safe with all necessary equipment for newborn safety.</p>
            </div>
            
            <div className="bg-white border border-[#f3e7d9] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-[#b48b3c]/10 p-4 rounded-2xl w-fit mx-auto mb-6">
                <Camera className="w-8 h-8 text-[#b48b3c]" />
              </div>
              <h3 className="text-xl font-bold text-[#232323] mb-4">Expert Photographers</h3>
              <p className="text-[#232323]/70">Our photographers are specially trained in newborn and baby photography with years of experience.</p>
            </div>
            
            <div className="bg-white border border-[#f3e7d9] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-[#b48b3c]/10 p-4 rounded-2xl w-fit mx-auto mb-6">
                <Star className="w-8 h-8 text-[#b48b3c]" />
              </div>
              <h3 className="text-xl font-bold text-[#232323] mb-4">Beautiful Results</h3>
              <p className="text-[#232323]/70">We capture the most precious moments with artistic flair, creating timeless memories for your family.</p>
            </div>
          </div>
        </div>

        {/* Baby Tips Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#232323] mb-4 tracking-tight">Baby Photography Tips</h2>
            <p className="text-[#232323]/70 text-lg max-w-2xl mx-auto">
              Everything you need to know for the perfect baby photoshoot
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {babyTips.map((tip) => (
              <div key={tip.title} className="bg-white border border-[#f3e7d9] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-[#b48b3c]/10 p-4 rounded-2xl w-fit mb-6">
                  <tip.icon className="w-8 h-8 text-[#b48b3c]" />
                </div>
                <h3 className="text-xl font-bold text-[#232323] mb-4">{tip.title}</h3>
                <p className="text-[#232323]/70">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#232323] mb-4 tracking-tight">Our Baby Gallery</h2>
            <p className="text-[#232323]/70 text-lg max-w-2xl mx-auto">
              Take a look at some of our beautiful baby photography work
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <div key={image.src} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative h-80">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm p-4 rounded-full">
                      <Camera className="w-6 h-6 text-[#b48b3c]" />
                    </div>
                  </div>
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
              We offer specialized packages for different baby ages and milestones
            </p>
          </div>
          
          <div className="grid lg:grid-cols-4 gap-8">
            {babyPackages.map((pkg) => (
              <div key={pkg.name} className={`relative bg-white border border-[#f3e7d9] rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col h-full min-h-[520px] ${pkg.popular ? 'ring-2 ring-[#b48b3c] scale-105' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#b48b3c] text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-[#232323]">{pkg.name}</h3>
                  </div>
                  <div className="text-3xl font-bold text-[#b48b3c] mb-2">{pkg.price}</div>
                  <p className="text-[#232323]/70 mb-6">{pkg.description}</p>
                  <div className="space-y-3 mb-8 flex-1">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-[#b48b3c] flex-shrink-0" />
                        <span className="text-[#232323]/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/contact">
                    <button className="w-full bg-gradient-to-r from-[#b48b3c] to-[#a07a2c] hover:from-[#a07a2c] hover:to-[#8b6b1c] text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 mt-auto">
                      Book This Package
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#232323] mb-4 tracking-tight">What Parents Say</h2>
            <p className="text-[#232323]/70 text-lg max-w-2xl mx-auto">
              Hear from the happy families who trusted us with their baby&apos;s photos
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
                <p className="text-[#232323]/80 mb-6 italic">&ldquo;{testimonial.text}&rdquo;</p>
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
                    <div className="text-sm text-[#232323]/60">Happy Parent</div>
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
              <Baby className="w-4 h-4 text-[#b48b3c]" />
              <span className="text-sm font-medium text-[#b48b3c]">Ready to Book?</span>
            </div>
            <h2 className="text-4xl font-bold text-[#232323] mb-6 tracking-tight">Capture Your Baby&apos;s Precious Moments</h2>
            <p className="text-[#232323]/70 text-lg mb-8 max-w-2xl mx-auto">
              Don&apos;t let these precious moments slip away. Contact us today to schedule your baby&apos;s photography session and create memories that will last a lifetime.
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