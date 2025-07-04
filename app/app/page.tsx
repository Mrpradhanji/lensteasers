'use client';

import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import GradientButton from './components/GradientButton';
import { ShimmerLoader } from './components/GradientButton';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { emailjsConfig } from './config/emailjs';
import * as emailjs from '@emailjs/browser';

// Replace galleryImages with real images
const galleryImages = [
  { src: '/images/Maternity1.jpg', alt: 'Maternity Shoot 1' },
  { src: '/images/Maternity2.jpg', alt: 'Maternity Shoot 2' },
  { src: '/images/Maternity3.jpg', alt: 'Maternity Shoot 3' },
  { src: '/images/Maternity4.jpg', alt: 'Maternity Shoot 4' },
  { src: '/images/Baby/Baby11.jpg', alt: 'Baby Shoot 1' },
  { src: '/images/Baby2.jpg', alt: 'Baby Shoot 2' },
  { src: '/images/Baby3.jpg', alt: 'Baby Shoot 3' },
  { src: '/images/Baby/Baby30.jpg', alt: 'Baby Shoot 4' },
];

// Dynamically import ReactPlayer with no SSR
const ReactPlayer = dynamic(() => import('react-player'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-gray-200 animate-pulse flex items-center justify-center">Loading...</div>
});

// Client-side only wrapper component
function VideoPlayer({ url }: { url: string }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div className="w-full h-full bg-gray-200 animate-pulse flex items-center justify-center">Loading...</div>;
  }

  return (
    <ReactPlayer
      url={url}
      width="100%"
      height="100%"
      controls
      style={{ background: 'black' }}
    />
  );
}

function PopupModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);
    try {
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          user_name: name,
          user_phone: phone,
          subject: 'Popup Lead',
          message: `Name: ${name}\nPhone: ${phone}`,
        },
        emailjsConfig.publicKey
      );
      setSuccess(true);
      setName('');
      setPhone('');

      //Auto close
      setTimeout (() => {
        onClose();
        setSuccess(false);
      },2000)
    } catch (err) {
      setError('Failed to send. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-md mx-auto bg-white rounded-3xl shadow-2xl p-8 sm:p-10 border border-[#f3e7d9] animate-modalPop">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-[#b48b3c] text-2xl font-bold transition-colors">&times;</button>
        <div className="flex flex-col items-center mb-4">
          <div className="w-14 h-14 bg-gradient-to-br from-[#b48b3c]/20 to-[#e7d6c6]/40 rounded-full flex items-center justify-center mb-2">
            <svg className="w-7 h-7 text-[#b48b3c]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 7a4 4 0 1 0-8 0c0 4-2 5-2 7a6 6 0 0 0 12 0c0-2-2-3-2-7z" /><circle cx="12" cy="17" r="1" /></svg>
          </div>
          <h2 className="text-2xl font-bold text-[#b48b3c] mb-1">Get in Touch</h2>
          <p className="text-gray-500 text-sm mb-2">Let us know your details and we'll reach out soon!</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-[#f3e7d9] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#b48b3c] text-gray-900 placeholder-gray-400 transition-all"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border border-[#f3e7d9] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#b48b3c] text-gray-900 placeholder-gray-400 transition-all"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#b48b3c] to-[#a07a2c] text-white py-3 rounded-xl font-semibold hover:from-[#a07a2c] hover:to-[#8b6b1c] transition-all shadow-lg hover:shadow-xl text-lg"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Submit'}
          </button>
        </form>
        {success && <div className="text-green-600 text-center mt-4">Thank you! We will contact you soon.</div>}
        {error && <div className="text-red-600 text-center mt-4">{error}</div>}
      </div>
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease;
        }
        @keyframes modalPop {
          0% { transform: scale(0.95) translateY(30px); opacity: 0; }
          100% { transform: scale(1) translateY(0); opacity: 1; }
        }
        .animate-modalPop {
          animation: modalPop 0.35s cubic-bezier(0.22, 1, 0.36, 1);
        }
      `}</style>
    </div>
  );
}

export default function Home() {
  const [imageLoaded, setImageLoaded] = useState<{ [src: string]: boolean }>({});
  const pathname = usePathname();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Reset imageLoaded state when navigating to the home page
    setImageLoaded({});
    if (typeof window === 'undefined') return;
    const hasShown = localStorage.getItem('popup_shown');
    if (!hasShown) {
      const timer = setTimeout(() => {
        setShowModal(true);
        localStorage.setItem('popup_shown', 'true');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  const handleImageLoad = (src: string) => {
    setImageLoaded((prev) => ({ ...prev, [src]: true }));
  };

  return (
    <main className="relative min-h-screen w-full bg-white text-white overflow-x-hidden">
      <PopupModal open={showModal} onClose={() => setShowModal(false)} />
      {/* Hero Section with Video */}
      <section
        className="relative flex items-center justify-center min-h-screen w-full pt-32 sm:pt-40 md:pt-56 px-2 sm:px-4"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/videos/Background_Video__.mp4" type="video/mp4" />
          <source src="/videos/Back.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/10 to-[#232323]/80 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center text-center text-white px-2 sm:px-4 py-20 sm:py-32 w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6  drop-shadow-xl tracking-tight">
           Premium Baby Photoshoot <span className="text-[#b48b3c]">& Maternity Shoot</span>
          </h1>
          <p className="text-base sm:text-lg md:text-2xl max-w-2xl mb-10 text-black drop-shadow-lg font-light">
            Capturing your most precious moments with creativity and passion. Specializing in baby, maternity. Capturing your most precious moments with creativity, care, and heartfelt storytelling. Specializing in newborn, infant, and maternity photography that turns memories into timeless treasures.
          </p>
          <Link
            href="/contact"
            aria-label="Book your photoshoot now"
            className="bg-[#b48b3c] hover:bg-[#a07a2c] text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full text-lg sm:text-xl font-semibold shadow-lg transition-colors duration-300"
          >
            Book Your Photoshoot
          </Link>
        </div>
      </section>

      {/* Modern Tradition Section */}
      <section className="bg-transparent py-10 sm:py-16 px-2 sm:px-6 md:px-20 lg:px-36 mt-8 mb-12 z-30 rounded-2xl max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-light uppercase tracking-wide text-[#b48b3c]">
            A Modern Approach
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-10 items-start relative">
          {/* Left image (pushed down) */}
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px]">
            <div className="absolute bottom-[-1rem] sm:bottom-[-2rem] left-0 w-full h-full">
              {!imageLoaded['/images/Maternity2.jpg'] && (
                <ShimmerLoader className="absolute inset-0" />
              )}
              <LazyMotion features={domAnimation}>
                <m.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: imageLoaded['/images/Maternity2.jpg'] ? 1 : 0 }}
                  transition={{ duration: 1.5 }}
                  className="w-full h-full"
                >
                  <Image
                    src="/images/Maternity2.jpg"
                    alt="Bride Portrait"
                    fill
                    className={`object-cover rounded-lg transition-opacity duration-500 ${imageLoaded['/images/Maternity2.jpg'] ? 'opacity-100' : 'opacity-0'}`}
                    onLoadingComplete={() => handleImageLoad('/images/Maternity2.jpg')}
                    loading="lazy"
                  />
                </m.div>
              </LazyMotion>
            </div>
          </div>

          {/* Text center */}
          <div className="z-10 text-center lg:text-left text-sm sm:text-base text-black space-y-4">
            <p>
            Lensteasers is a team of committed photographers that are passionate about capturing the significant moments in their client&apos;s life. Baby, weddings, events, portfolios, and product shoots are just a few of the services we provide, demonstrating our proficiency in a variety of fields of modern photography. It&apos;s wonderful to read that we also specialise in newborn and maternity shoots, emphasising the significance of these occasions for women and their families.
            </p>
            <p>
            The fact that we provide both photography and editing services in Delhi and the NCR demonstrates their dedication to offering the finest service possible. It is apparent that Lensteasers is committed to assisting its clients in preserving their memories for future generations.
            </p>
          </div>

          {/* Right image (pulled up) */}
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px]">
            <div className="absolute top-[-1rem] sm:top-[-2rem] right-0 w-full h-full">
              {!imageLoaded['/images/Baby/Baby24.jpg'] && (
                <ShimmerLoader className="absolute inset-0" />
              )}
              <LazyMotion features={domAnimation}>
                <m.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: imageLoaded['/images/Baby/Baby24.jpg'] ? 1 : 0 }}
                  transition={{ duration: 1.5 }}
                  className="w-full h-full"
                >
                  <Image
                    src="/images/Baby/Baby24.jpg"
                    alt="Bride by the Mountain"
                    fill
                    className={`object-cover rounded-lg transition-opacity duration-500 ${imageLoaded['/images/Baby/Baby24.jpg'] ? 'opacity-100' : 'opacity-0'}`}
                    onLoadingComplete={() => handleImageLoad('/images/Baby/Baby24.jpg')}
                    loading="lazy"
                  />
                </m.div>
              </LazyMotion>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Staggered Cards */}
      <section
        className="bg-gradient-to-br from-[#f9f6f2] via-[#f3e7d9] to-[#e7d6c6] py-10 sm:py-16 px-2 sm:px-6 md:px-20 lg:px-36 mt-8 mb-12 z-30 rounded-2xl max-w-7xl mx-auto shadow-lg"
      >
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-light uppercase tracking-wide text-[#b48b3c]">
            Explore Our{' '}
            <span className="font-semibold text-black">Photography Services</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* Baby Shoot Photography */}
          <div
            className="bg-white border border-[#f3e7d9] rounded-2xl shadow-md p-6 sm:p-8 flex flex-col items-center text-center hover:shadow-2xl hover:scale-105 hover:border-[#b48b3c] transition-all duration-300 group"
          >
            {/* Accent bar */}
            <div className="w-12 h-1 rounded-full bg-gradient-to-r from-[#b48b3c] to-[#e7d6c6] mb-4" />
            <div className="mb-4 w-48 h-48 sm:w-56 sm:h-56 relative">
              {!imageLoaded['/images/BabyShoot.jpg'] && (
                <ShimmerLoader className="absolute inset-0" />
              )}
              <LazyMotion features={domAnimation}>
                <m.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: imageLoaded['/images/BabyShoot.jpg'] ? 1 : 0 }}
                  transition={{ duration: 1.5 }}
                  className="w-full h-full"
                >
                  <Image
                    src="/images/BabyShoot.jpg"
                    alt="Baby Shoot Photography"
                    fill
                    className={`object-cover rounded-xl border-4 border-[#b48b3c] shadow-lg group-hover:border-[#a07a2c] transition-all duration-300 ${imageLoaded['/images/BabyShoot.jpg'] ? 'opacity-100' : 'opacity-0'}`}
                    sizes="(max-width: 640px) 192px, 224px"
                    onLoadingComplete={() => handleImageLoad('/images/BabyShoot.jpg')}
                    loading="lazy"
                  />
                </m.div>
              </LazyMotion>
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-[#b48b3c] tracking-tight">Baby Shoot Photography</h3>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-4 font-light">Cherish the innocence and joy of your baby&apos;s early days with creative, heartwarming photography sessions.</p>
            <Link href="/babyphotoshoot" className="mt-auto px-4 sm:px-5 py-2 rounded-full bg-[#b48b3c] text-white font-semibold shadow hover:bg-[#a07a2c] transition-colors text-sm sm:text-base block text-center">Learn More</Link>
          </div>
          {/* Maternity Shoot Photography */}
          <div
            className="bg-white border border-[#f3e7d9] rounded-2xl shadow-md p-6 sm:p-8 flex flex-col items-center text-center hover:shadow-2xl hover:scale-105 hover:border-[#b48b3c] transition-all duration-300 group"
          >
            <div className="w-12 h-1 rounded-full bg-gradient-to-r from-[#b48b3c] to-[#e7d6c6] mb-4" />
            <div className="mb-4 w-48 h-48 sm:w-56 sm:h-56 relative">
              {!imageLoaded['/images/Maternity_Home.jpg'] && (
                <ShimmerLoader className="absolute inset-0" />
              )}
              <LazyMotion features={domAnimation}>
                <m.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: imageLoaded['/images/Maternity_Home.jpg'] ? 1 : 0 }}
                  transition={{ duration: 1.5 }}
                  className="w-full h-full"
                >
                  <Image
                    src="/images/Maternity_Home.jpg"
                    alt="Maternity Shoot Photography"
                    fill
                    className={`object-cover rounded-xl border-4 border-[#b48b3c] shadow-lg group-hover:border-[#a07a2c] transition-all duration-300 ${imageLoaded['/images/Maternity_Home.jpg'] ? 'opacity-100' : 'opacity-0'}`}
                    sizes="(max-width: 640px) 192px, 224px"
                    onLoadingComplete={() => handleImageLoad('/images/Maternity_Home.jpg')}
                    loading="lazy"
                  />
                </m.div>
              </LazyMotion>
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-[#b48b3c] tracking-tight">Maternity Shoot Photography</h3>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-4 font-light">Celebrate the beauty of motherhood and the anticipation of new life with elegant, memorable maternity portraits.</p>
            <Link href="/maternity" className="mt-auto px-4 sm:px-5 py-2 rounded-full bg-[#b48b3c] text-white font-semibold shadow hover:bg-[#a07a2c] transition-colors text-sm sm:text-base block text-center">Learn More</Link>
          </div>
          {/* Newborn Shoot Photography */}
          <div
            className="bg-white border border-[#f3e7d9] rounded-2xl shadow-md p-6 sm:p-8 flex flex-col items-center text-center hover:shadow-2xl hover:scale-105 hover:border-[#b48b3c] transition-all duration-300 group sm:col-span-2 lg:col-span-1"
          >
            <div className="w-12 h-1 rounded-full bg-gradient-to-r from-[#b48b3c] to-[#e7d6c6] mb-4" />
            <div className="mb-4 w-48 h-48 sm:w-56 sm:h-56 relative">
              {!imageLoaded['/images/NewBorn.jpg'] && (
                <ShimmerLoader className="absolute inset-0" />
              )}
              <LazyMotion features={domAnimation}>
                <m.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: imageLoaded['/images/NewBorn.jpg'] ? 1 : 0 }}
                  transition={{ duration: 1.5 }}
                  className="w-full h-full"
                >
                  <Image
                    src="/images/NewBorn.jpg"
                    alt="Newborn Shoot Photography"
                    fill
                    className={`object-cover rounded-xl border-4 border-[#b48b3c] shadow-lg group-hover:border-[#a07a2c] transition-all duration-300 ${imageLoaded['/images/NewBorn.jpg'] ? 'opacity-100' : 'opacity-0'}`}
                    sizes="(max-width: 640px) 192px, 224px"
                    onLoadingComplete={() => handleImageLoad('/images/NewBorn.jpg')}
                    loading="lazy"
                  />
                </m.div>
              </LazyMotion>
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-[#b48b3c] tracking-tight">Newborn Shoot Photography</h3>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-4 font-light">Capture the first precious moments of your newborn&apos;s life with gentle, artistic photography in a safe environment.</p>
            <Link href="/gallery" className="mt-auto px-4 sm:px-5 py-2 rounded-full bg-[#b48b3c] text-white font-semibold shadow hover:bg-[#a07a2c] transition-colors text-sm sm:text-base block text-center">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Gallery Showcase Section with Staggered Animation */}
      <section
        className="w-full py-10 sm:py-20 bg-white px-2 sm:px-4"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-black tracking-tight">
          Featured Moments
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className="overflow-hidden shadow-lg group rounded-xl relative"
            >
              {!imageLoaded[img.src] && (
                <ShimmerLoader className="absolute inset-0" />
              )}
              <LazyMotion features={domAnimation}>
                <m.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: imageLoaded[img.src] ? 1 : 0 }}
                  transition={{ duration: 1.5 }}
                  className="w-full h-full"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={500}
                    height={600}
                    className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-xl ${imageLoaded[img.src] ? 'opacity-100' : 'opacity-0'}`}
                    onLoadingComplete={() => handleImageLoad(img.src)}
                    loading="lazy"
                  />
                </m.div>
              </LazyMotion>
            </div>
          ))}
        </div>
      </section>

      {/* Video Portfolio Section */}
      <section className="w-full py-10 sm:py-20 bg-[#f9f0e9] px-2 sm:px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-[#b48b3c] tracking-tight">
          Video Portfolio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 px-0 md:px-8">
          {[
            { title: "Background Video1", url: "/videos/Baby_Video1.mp4" },
            { title: "Background Video2", url: "/videos/Maternity_Video1.mp4" },
            { title: "Background Video3", url: "/videos/Maternity_Video2.mp4" },
          ].map((video, idx) => (
            <div
              key={idx}
              className="rounded-xl overflow-hidden shadow-xl bg-white transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="aspect-video w-full">
                <VideoPlayer url={video.url} />
              </div>
              <div className="p-4 text-center font-semibold">{video.title}</div>
            </div>
          ))}
        </div>
        
        {/*Button */}

        <div className='flex justify-center mt-8 '>
          <Link href="/gallery">
          
          <GradientButton
        label="Explore Gallery"
        onClick={() => console.log("Clicked!")}
      />


          </Link>
        </div>
        
      </section>

      {/* Modern Footer Image Section */}
      <section className="relative w-full md:min-h-[500px] lg:min-h-[600px] flex items-center justify-center min-h-[300px] sm:min-h-[400px] overflow-hidden shadow-lg mt-0">
        <div className="absolute inset-0 w-full h-full">
          {!imageLoaded['/images/footer_image.jpg'] && (
            <ShimmerLoader className="absolute inset-0" />
          )}
          <LazyMotion features={domAnimation}>
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: imageLoaded['/images/footer_image.jpg'] ? 1 : 0 }}
              transition={{ duration: 1.5 }}
              className="w-full h-full"
            >
              <Image
                src="/images/footer_image.jpg"
                alt="Footer_Image"
                fill
                className={`object-cover object-center w-full h-full transition-opacity duration-500 ${imageLoaded['/images/footer_image.jpg'] ? 'opacity-100' : 'opacity-0'}`}
                onLoadingComplete={() => handleImageLoad('/images/footer_image.jpg')}
                loading="lazy"
              />
            </m.div>
          </LazyMotion>
        </div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#232323]/90 via-[#232323]/60 to-transparent" />
        {/* Brand statement */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 py-36 mt-60">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white drop-shadow-lg mb-4 text-center">Preserving Your Most Precious Moments</h2>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl text-center mb-6 font-light">From maternity to newborn and beyond, we create timeless memories with artistry, care, and passion. Let us tell your story through our lens.</p>
          <Link href="/contact" className="bg-[#b48b3c] hover:bg-[#a07a2c] text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition-colors duration-300">Book a Session</Link>
        </div>
      </section>

      {/* Modern Minimal Footer */}
      

    </main>
  );
}
