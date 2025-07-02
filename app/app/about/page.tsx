'use client';
import { useEffect, useRef, useState } from 'react';
import { Instagram, Linkedin, ArrowUp, Camera, Users, Award, Heart } from 'lucide-react';
import Image from 'next/image';
import { LazyMotion, domAnimation, m } from 'framer-motion';


const studioImages = [
  { src: '/images/Maternity_Home.jpg', alt: 'Studio Maternity Session' },
  { src: '/images/NewBorn.jpg', alt: 'Studio Baby Session' },
  { src: '/images/Maternity3.jpg', alt: 'Studio Portrait' },
];

const studioEnvironmentImages = [
  { src: '/images/Studio1.jpg', alt: 'Studio Setup' },
  { src: '/images/Studio2.jpg', alt: 'Studio Equipment' },
  { src: '/images/Studio3.jpg', alt: 'Studio Environment' },
  { src: '/images/Studio4.jpg', alt: 'Studio Environment' },
  { src: '/images/Studio5.jpg', alt: 'Studio Environment' },
  { src: '/images/Studio6.jpg', alt: 'Studio Environment' },
 
];

const team = [
  {
    name: 'Priya Sharma',
    role: 'Lead Photographer',
    img: 'https://randomuser.me/api/portraits/women/68.jpg',
    desc: 'Specializes in maternity and newborn shoots with a creative, gentle approach.',
    socials: {
      instagram: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Amit Verma',
    role: 'Studio Manager',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
    desc: 'Ensures every session runs smoothly and clients feel at home.',
    socials: {
      instagram: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Riya Kapoor',
    role: 'Photo Editor',
    img: 'https://randomuser.me/api/portraits/women/65.jpg',
    desc: 'Brings every photo to life with expert retouching and color work.',
    socials: {
      instagram: '#',
      linkedin: '#',
    },
  },
];

const stats = [
  { icon: Camera, number: '500+', label: 'Sessions Completed' },
  { icon: Users, number: '200+', label: 'Happy Families' },
  { icon: Award, number: '9+', label: 'Years Experience' },
  { icon: Heart, number: '100%', label: 'Client Satisfaction' },
];

export default function About() {
  const [modalImg, setModalImg] = useState<{ src: string; alt: string } | null>(null);
  const [showScroll, setShowScroll] = useState(false);
  const [imageErrors, setImageErrors] = useState<{[key: string]: boolean}>({});
  const [imageLoaded, setImageLoaded] = useState<{ [src: string]: boolean }>({});
  const modalRef = useRef<HTMLDivElement>(null);
  const gridRefs = useRef<(HTMLDivElement | null)[]>([]);
  const teamRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleImageError = (src: string) => {
    console.error('Image failed to load:', src);
    console.error('Full image path:', window.location.origin + src);
    setImageErrors((prev) => ({ ...prev, [src]: true }));
  };

  const handleImageLoad = (src: string) => {
    setImageLoaded((prev) => ({ ...prev, [src]: true }));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setModalImg(null);
      if (modalImg && e.key === 'Tab' && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0] as HTMLElement;
        const last = focusable[focusable.length - 1] as HTMLElement;
        if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        } else if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalImg]);

  useEffect(() => {
    if (modalImg) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        modalRef.current?.querySelector('button')?.focus();
      }, 100);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [modalImg]);

  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-gray-100 py-16 sm:py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Capturing Life&apos;s <span className="block text-[#b48b3c]">Beautiful Moments</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                Lens Teasers is a team of passionate photographers dedicated to capturing the most significant moments in your life.
              </p>
              <p className="text-base sm:text-lg text-gray-600">
                We specialize in baby, maternity, wedding, and event photography, offering both photography and editing services in Delhi NCR.
              </p>
            </div>
            <div className="grid grid-cols-4 grid-rows-2 gap-6 max-w-5xl mx-auto w-full" style={{ minHeight: '600px' }}>
              {/* Portrait (left, spans 2 rows and 2 columns) */}
              <div className="row-span-2 col-span-2 relative rounded-2xl overflow-hidden shadow-xl h-full">
                <Image src="/images/Maternity/Maternity1.jpg" alt="Studio Maternity Session" fill className="object-cover" />
              </div>
              {/* Landscape 1 (top right) */}
              <div className="col-span-2 row-span-1 relative rounded-2xl overflow-hidden shadow-xl">
                <Image src="/images/Studio/Studio1.jpg" alt="Studio Setup" fill className="object-cover" style={{ minHeight: '50%' }} />
              </div>
              {/* Landscape 2 (bottom right) */}
              <div className="col-span-2 row-span-1 relative rounded-2xl overflow-hidden shadow-xl">
                <Image src="/images/Baby/BabyShoot.jpg" alt="Studio Baby Session" fill className="object-cover" style={{ minHeight: '50%' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center space-y-3">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full">
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#b48b3c]" />
                </div>
                <div className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Studio Section */}
      <section className="py-20 bg-[#f9f0e9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Studio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A professional environment designed to make you feel comfortable and confident during your photography session.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {studioEnvironmentImages.map((img, idx) => (
              <div
                key={idx}
                ref={(el) => {
                  gridRefs.current[idx] = el;
                }}
                className="group cursor-pointer transition-all duration-700"
                onClick={() => setModalImg(img)}
                tabIndex={0}
                aria-label={img.alt}
                role="button"
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setModalImg(img)}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white">
                  <LazyMotion features={domAnimation}>
                    <m.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: imageLoaded[img.src] ? 1 : 0 }}
                      transition={{ duration: 1.5 }}
                      className="w-full h-full"
                    >
                      {imageErrors[img.src] ? (
                        <div className="w-full h-80 bg-gray-200 flex items-center justify-center">
                          <Camera className="w-12 h-12 mx-auto mb-2" />
                          <p className="text-sm text-center">{img.alt}</p>
                        </div>
                      ) : (
                        <Image
                          src={img.src}
                          alt={img.alt}
                          width={400}
                          height={320}
                          className="object-cover w-full h-80 group-hover:scale-105 transition-transform duration-500"
                          onError={() => handleImageError(img.src)}
                          onLoadingComplete={() => handleImageLoad(img.src)}
                          priority={idx === 0}
                        />
                      )}
                    </m.div>
                  </LazyMotion>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Meet Our <span className='text-[#b48b3c]'>Team</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our talented team of professionals is dedicated to creating beautiful memories for your family.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <div
                key={idx}
                ref={(el) => {
                  teamRefs.current[idx] = el;
                }}
                className="group text-center transition-all duration-700"
                tabIndex={0}
                aria-label={member.name}
                role="region"
              >
                <div className="relative bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="relative mb-6">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-blue-100">
                      <LazyMotion features={domAnimation}>
                        <m.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: imageLoaded[member.img] ? 1 : 0 }}
                          transition={{ duration: 1.5 }}
                          className="w-full h-full"
                        >
                          <Image
                            src={member.img}
                            alt={member.name}
                            width={128}
                            height={128}
                            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                            onError={() => handleImageError(member.img)}
                            onLoadingComplete={() => handleImageLoad(member.img)}
                            priority={idx === 0}
                          />
                        </m.div>
                      </LazyMotion>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                    <p className="text-[#b48b3c] font-semibold">{member.role}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{member.desc}</p>
                    <div className="flex justify-center gap-4 pt-4">
                      <a 
                        href={member.socials.instagram} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-400 hover:text-pink-500 transition-colors duration-300"
                        aria-label={`${member.name} Instagram`}
                      >
                        <Instagram className="w-5 h-5" />
                      </a>
                      <a 
                        href={member.socials.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#f9f0e9] via-white to-[#f3e7d9] relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-[#b48b3c] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#b48b3c] rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Ready to Create 
              <span className="block text-[#b48b3c]">Beautiful Memories?</span>
            </h2>
            <div className="w-24 h-1 bg-[#b48b3c] rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Let us help you capture those precious moments that will last a lifetime. 
              Every smile, every milestone, every beautiful memory.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="group inline-flex items-center px-8 py-4 bg-[#b48b3c] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <span>Book Your Session</span>
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            
            <a
              href="/gallery"
              className="inline-flex items-center px-6 py-3 text-[#b48b3c] font-medium border-2 border-[#b48b3c] rounded-full hover:bg-[#b48b3c] hover:text-white transition-all duration-300"
            >
              View Our Gallery
            </a>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-500">
            <div className="flex items-center justify-center">
              <div className="w-8 h-8 bg-[#b48b3c] rounded-full flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              Premium Photography Equipment
            </div>
            <div className="flex items-center justify-center">
              <div className="w-8 h-8 bg-[#b48b3c] rounded-full flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              9+ Years of Experience
            </div>
            <div className="flex items-center justify-center">
              <div className="w-8 h-8 bg-[#b48b3c] rounded-full flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              Timeless Memories Captured
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to top */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}

      {/* Modal */}
      {modalImg && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setModalImg(null)}
        >
          <div
            ref={modalRef}
            className="relative bg-white rounded-2xl shadow-2xl p-4 max-w-2xl w-full mx-4 animate-zoom-in"
            onClick={(e) => e.stopPropagation()}
            tabIndex={-1}
            aria-modal="true"
            role="dialog"
          >
            <LazyMotion features={domAnimation}>
              <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: imageLoaded[modalImg.src] ? 1 : 0 }}
                transition={{ duration: 1.5 }}
                className="w-full h-full"
              >
                <Image
                  src={modalImg.src}
                  alt={modalImg.alt || 'Preview'}
                  className="object-cover rounded-xl mb-4 w-full"
                  width={400}
                  height={256}
                  onError={() => handleImageError(modalImg.src)}
                  onLoadingComplete={() => handleImageLoad(modalImg.src)}
                />
              </m.div>
            </LazyMotion>
            <button
              aria-label="Close modal"
              className="absolute top-4 right-4 text-gray-700 hover:text-blue-600 text-2xl font-bold focus:outline-none focus:ring-2 focus:ring-blue-500 p-2"
              onClick={() => setModalImg(null)}
              tabIndex={0}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
