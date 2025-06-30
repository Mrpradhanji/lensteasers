'use client';

import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import GradientButton from './components/GradientButton';
import { ShimmerLoader } from './components/GradientButton';
import { LazyMotion, domAnimation, m } from 'framer-motion';

// Replace galleryImages with real images
const galleryImages = [
  { src: '/images/maternity1.jpg', alt: 'Maternity Shoot 1' },
  { src: '/images/maternity2.jpg', alt: 'Maternity Shoot 2' },
  { src: '/images/maternity3.jpg', alt: 'Maternity Shoot 3' },
  { src: '/images/maternity4.jpg', alt: 'Maternity Shoot 4' },
  { src: '/images/baby1.jpg', alt: 'Baby Shoot 1' },
  { src: '/images/baby2.jpg', alt: 'Baby Shoot 2' },
  { src: '/images/baby3.jpg', alt: 'Baby Shoot 3' },
  { src: '/images/baby4.jpg', alt: 'Baby Shoot 4' },
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

const cardContainerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardItemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  const [imageLoaded, setImageLoaded] = useState<{ [src: string]: boolean }>({});

  const handleImageLoad = (src: string) => {
    setImageLoaded((prev) => ({ ...prev, [src]: true }));
  };

  return (
    <main className="relative min-h-screen w-full bg-white text-white overflow-x-hidden">
      {/* Hero Section with Video */}
      <m.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative flex items-center justify-center min-h-screen w-full pt-32 sm:pt-40 md:pt-56 px-2 sm:px-4"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/videos/Background_Video.mp4" type="video/mp4" />
          <source src="/videos/Background_Video.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/10 to-[#232323]/80 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center text-center text-white px-2 sm:px-4 py-20 sm:py-32 w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 drop-shadow-xl tracking-tight">
           Premium Baby Photoshoot & Maternity Shoot
          </h1>
          <p className="text-base sm:text-lg md:text-2xl max-w-2xl mb-10 text-white drop-shadow-lg font-light">
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
      </m.section>

      {/* Modern Tradition Section */}
      <section className="bg-transparent py-10 sm:py-16 px-2 sm:px-6 md:px-20 lg:px-36 mt-8 mb-12 z-30 rounded-2xl max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-light uppercase tracking-wide text-[#b48b3c]">
            A Modern Approach <span className="italic lowercase text-black">to an</span>{' '}
            <span className="font-semibold text-black">Age Old Tradition</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-10 items-start relative">
          {/* Left image (pushed down) */}
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px]">
            <div className="absolute bottom-[-1rem] sm:bottom-[-2rem] left-0 w-full h-full">
              {!imageLoaded['/images/Maternity_2.jpg'] && (
                <ShimmerLoader className="absolute inset-0" />
              )}
              <LazyMotion features={domAnimation}>
                <m.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: imageLoaded['/images/Maternity_2.jpg'] ? 1 : 0 }}
                  transition={{ duration: 1.5 }}
                  className="w-full h-full"
                >
                  <Image
                    src="/images/Maternity_2.jpg"
                    alt="Bride Portrait"
                    fill
                    className={`object-cover rounded-lg transition-opacity duration-500 ${imageLoaded['/images/Maternity_2.jpg'] ? 'opacity-100' : 'opacity-0'}`}
                    onLoadingComplete={() => handleImageLoad('/images/Maternity_2.jpg')}
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
              {!imageLoaded['/images/Baby0.jpg'] && (
                <ShimmerLoader className="absolute inset-0" />
              )}
              <LazyMotion features={domAnimation}>
                <m.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: imageLoaded['/images/Baby0.jpg'] ? 1 : 0 }}
                  transition={{ duration: 1.5 }}
                  className="w-full h-full"
                >
                  <Image
                    src="/images/Baby0.jpg"
                    alt="Bride by the Mountain"
                    fill
                    className={`object-cover rounded-lg transition-opacity duration-500 ${imageLoaded['/images/Baby0.jpg'] ? 'opacity-100' : 'opacity-0'}`}
                    onLoadingComplete={() => handleImageLoad('/images/Baby0.jpg')}
                    loading="lazy"
                  />
                </m.div>
              </LazyMotion>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Staggered Cards */}
      <m.section
        className="bg-gradient-to-br from-[#f9f6f2] via-[#f3e7d9] to-[#e7d6c6] py-10 sm:py-16 px-2 sm:px-6 md:px-20 lg:px-36 mt-8 mb-12 z-30 rounded-2xl max-w-7xl mx-auto shadow-lg"
        variants={cardContainerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-light uppercase tracking-wide text-[#b48b3c]">
            Explore Our{' '}
            <span className="font-semibold text-black">Photography Services</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* Baby Shoot Photography */}
          <m.div
            variants={cardItemVariants}
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
            <button className="mt-auto px-4 sm:px-5 py-2 rounded-full bg-[#b48b3c] text-white font-semibold shadow hover:bg-[#a07a2c] transition-colors text-sm sm:text-base">Learn More</button>
          </m.div>
          {/* Maternity Shoot Photography */}
          <m.div
            variants={cardItemVariants}
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
            <button className="mt-auto px-4 sm:px-5 py-2 rounded-full bg-[#b48b3c] text-white font-semibold shadow hover:bg-[#a07a2c] transition-colors text-sm sm:text-base">Learn More</button>
          </m.div>
          {/* Newborn Shoot Photography */}
          <m.div
            variants={cardItemVariants}
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
            <button className="mt-auto px-4 sm:px-5 py-2 rounded-full bg-[#b48b3c] text-white font-semibold shadow hover:bg-[#a07a2c] transition-colors text-sm sm:text-base">Learn More</button>
          </m.div>
        </div>
      </m.section>

      {/* Gallery Showcase Section with Staggered Animation */}
      <m.section
        className="w-full py-10 sm:py-20 bg-white px-2 sm:px-4"
        variants={cardContainerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-black tracking-tight">
          Featured Moments
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
          {galleryImages.map((img, idx) => (
            <m.div
              key={idx}
              variants={cardItemVariants}
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
            </m.div>
          ))}
        </div>
      </m.section>

      {/* Video Portfolio Section */}
      <section className="w-full py-10 sm:py-20 bg-[#f9f0e9] px-2 sm:px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-[#b48b3c] tracking-tight">
          Video Portfolio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 px-0 md:px-8">
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className="rounded-xl overflow-hidden shadow-xl bg-white transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="aspect-video w-full">
                <VideoPlayer url={`/videos/portfolio${num}.mp4`} />
              </div>
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
