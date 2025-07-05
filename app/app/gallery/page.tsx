'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { Camera, X, ChevronLeft, ChevronRight, Heart, Sparkles, Eye } from 'lucide-react';
import Image from 'next/image';
import { LazyMotion, domAnimation, m } from 'framer-motion';


// Gallery data with categories
const galleryData = [
  // Maternity Photos
  { id: 1, src: '/images/Maternity/Maternity1.jpg', alt: 'Maternity Session 1', category: 'maternity', title: 'Beautiful Maternity Glow1' },
  { id: 2, src: '/images/Maternity/Maternity2.jpg', alt: 'Maternity Session 2', category: 'maternity', title: 'Beautiful Maternity Glow2' },
  { id: 3, src: '/images/Maternity/Maternity3.jpg', alt: 'Maternity Session 3', category: 'maternity', title: 'Beautiful Maternity Glow3' },
  
  { id: 4, src: '/images/Maternity/Maternity4.jpg', alt: 'Maternity Session 4', category: 'maternity', title: 'Beautiful Maternity Glow4' },
  { id: 5, src: '/images/Maternity/Maternity_5.jpg', alt: 'Maternity Session 5', category: 'maternity', title: 'Beautiful Maternity Glow5' },
  { id: 6, src: '/images/Maternity/Maternity_6.jpg', alt: 'Maternity Session 6', category: 'maternity', title: 'Beautiful Maternity Glow6' },
  { id: 7, src: '/images/Maternity/Maternity_7.jpg', alt: 'Maternity Session 7', category: 'maternity', title: 'Beautiful Maternity Glow7' },
  { id: 8, src: '/images/Maternity/Maternity_8.jpg', alt: 'Maternity Session 8', category: 'maternity', title: 'Beautiful Maternity Glow8' },
  { id: 9, src: '/images/Maternity/Maternity_9.jpg', alt: 'Maternity Session 9', category: 'maternity', title: 'Beautiful Maternity Glow9' },
  { id: 10, src: '/images/Maternity/Maternity_10.jpg', alt: 'Maternity Session 10', category: 'maternity', title: 'Beautiful Maternity Glow10' },
  { id: 11, src: '/images/Maternity/Maternity_11.jpg', alt: 'Maternity Session 11', category: 'maternity', title: 'Beautiful Maternity Glow11' },
  { id: 12, src: '/images/Maternity/Maternity_12.jpg', alt: 'Maternity Session 12', category: 'maternity', title: 'Beautiful Maternity Glow12' },
  { id: 13, src: '/images/Maternity/Maternity_13.jpg', alt: 'Maternity Session 13', category: 'maternity', title: 'Beautiful Maternity Glow13' },
  { id: 14, src: '/images/Maternity/Maternity_14.jpg', alt: 'Maternity Session 14', category: 'maternity', title: 'Beautiful Maternity Glow14' },
  { id: 17, src: '/images/Maternity/Maternity_17.jpg', alt: 'Maternity Session 17', category: 'maternity', title: 'Beautiful Maternity Glow17' },
  { id: 18, src: '/images/Maternity/Maternity_18.jpg', alt: 'Maternity Session 18', category: 'maternity', title: 'Beautiful Maternity Glow18' },
  { id: 19, src: '/images/Maternity/Maternity_19.jpg', alt: 'Maternity Session 19', category: 'maternity', title: 'Beautiful Maternity Glow19' },
  { id: 20, src: '/images/Maternity/Maternity_20.jpg', alt: 'Maternity Session 20', category: 'maternity', title: 'Beautiful Maternity Glow20' },
  { id: 21, src: '/images/Maternity/Maternity_21.jpg', alt: 'Maternity Session 21', category: 'maternity', title: 'Beautiful Maternity Glow21' },
  { id: 22, src: '/images/Maternity/Maternity_22.jpg', alt: 'Maternity Session 22', category: 'maternity', title: 'Beautiful Maternity Glow22' },
  { id: 23, src: '/images/Maternity/Maternity_23.jpg', alt: 'Maternity Session 23', category: 'maternity', title: 'Beautiful Maternity Glow23' },
  { id: 24, src: '/images/Maternity/Maternity_24.jpg', alt: 'Maternity Session 24', category: 'maternity', title: 'Beautiful Maternity Glow24' },
  { id: 25, src: '/images/Maternity/Maternity_25.jpg', alt: 'Maternity Session 25', category: 'maternity', title: 'Beautiful Maternity Glow25' },
  { id: 26, src: '/images/Maternity/Maternity_26.jpg', alt: 'Maternity Session 26', category: 'maternity', title: 'Beautiful Maternity Glow26' },
  { id: 27, src: '/images/Maternity/Maternity_27.jpg', alt: 'Maternity Session 27', category: 'maternity', title: 'Beautiful Maternity Glow27' },
  { id: 28, src: '/images/Maternity/Maternity_28.jpg', alt: 'Maternity Session 28', category: 'maternity', title: 'Beautiful Maternity Glow28' },
  { id: 29, src: '/images/Maternity/Maternity_29.jpg', alt: 'Maternity Session 29', category: 'maternity', title: 'Beautiful Maternity Glow29' },
  { id: 30, src: '/images/Maternity/Maternity_30.jpg', alt: 'Maternity Session 30', category: 'maternity', title: 'Beautiful Maternity Glow30' },
  { id: 31, src: '/images/Maternity/Maternity_31.jpg', alt: 'Maternity Session 31', category: 'maternity', title: 'Beautiful Maternity Glow31' },
  { id: 32, src: '/images/Maternity/Maternity_32.jpg', alt: 'Maternity Session 32', category: 'maternity', title: 'Beautiful Maternity Glow32' },
  { id: 65, src: '/images/Maternity/Maternity_33.jpg', alt: 'Maternity Session 33', category: 'maternity', title: 'Beautiful Maternity Glow33' },
  { id: 66, src: '/images/Maternity/Maternity_34.jpg', alt: 'Maternity Session 34', category: 'maternity', title: 'Beautiful Maternity Glow34' },


 
  
  // Baby Photos
  { id: 33, src: '/images/Baby/Baby00.jpg', alt: 'Baby Session 1', category: 'baby', title: 'Newborn Dreams' },
  { id: 34, src: '/images/Baby/Baby1.jpg', alt: 'Baby Session 2', category: 'baby', title: 'Newborn Dreams' },
  { id: 35, src: '/images/Baby/Baby3.jpg', alt: 'Baby Session 4', category: 'baby', title: 'Newborn Dreams' },
  { id: 36, src: '/images/Baby/Baby4.jpg', alt: 'Baby Session 5', category: 'baby', title: 'Newborn Dreams' },
  { id: 37, src: '/images/Baby/Baby5.jpg', alt: 'Baby Session 6', category: 'baby', title: 'Newborn Dreams' },
  { id: 38, src: '/images/Baby/Baby7.jpg', alt: 'Baby Session 8', category: 'baby', title: 'Newborn Dreams' },
  { id: 39, src: '/images/Baby/Baby8.jpg', alt: 'Baby Session 9', category: 'baby', title: 'Newborn Dreams' },
  { id: 40, src: '/images/Baby/Baby9.jpg', alt: 'Baby Session 10', category: 'baby', title: 'Newborn Dreams' },
  { id: 41, src: '/images/Baby/Baby10.jpg', alt: 'Baby Session 11', category: 'baby', title: 'Newborn Dreams' },
  { id: 42, src: '/images/Baby/Baby11.jpg', alt: 'Baby Session 12', category: 'baby', title: 'Newborn Dreams' },
  { id: 43, src: '/images/Baby/Baby12.jpg', alt: 'Baby Session 13', category: 'baby', title: 'Newborn Dreams' },
  { id: 44, src: '/images/Baby/Baby13.jpg', alt: 'Baby Session 14', category: 'baby', title: 'Newborn Dreams' },
  { id: 45, src: '/images/Baby/Baby14.jpg', alt: 'Baby Session 15', category: 'baby', title: 'Newborn Dreams' },
  { id: 46, src: '/images/Baby/Baby15.jpg', alt: 'Baby Session 16', category: 'baby', title: 'Newborn Dreams' },
  { id: 47, src: '/images/Baby/Baby16.jpg', alt: 'Baby Session 17', category: 'baby', title: 'Newborn Dreams' },
  { id: 48, src: '/images/Baby/Baby17.jpg', alt: 'Baby Session 18', category: 'baby', title: 'Newborn Dreams' },
  { id: 49, src: '/images/Baby/Baby18.jpg', alt: 'Baby Session 19', category: 'baby', title: 'Newborn Dreams' },
  { id: 50, src: '/images/Baby/Baby19.jpg', alt: 'Baby Session 20', category: 'baby', title: 'Newborn Dreams' },
  { id: 51, src: '/images/Baby/Baby20.jpg', alt: 'Baby Session 21', category: 'baby', title: 'Newborn Dreams' },
  { id: 52, src: '/images/Baby/Baby21.jpg', alt: 'Baby Session 22', category: 'baby', title: 'Newborn Dreams' },
  { id: 53, src: '/images/Baby/Baby22.jpg', alt: 'Baby Session 23', category: 'baby', title: 'Newborn Dreams' },
  { id: 54, src: '/images/Baby/Baby23.jpg', alt: 'Baby Session 24', category: 'baby', title: 'Newborn Dreams' },
  { id: 55, src: '/images/Baby/Baby24.jpg', alt: 'Baby Session 25', category: 'baby', title: 'Newborn Dreams' },
  { id: 56, src: '/images/Baby/Baby25.jpg', alt: 'Baby Session 26', category: 'baby', title: 'Newborn Dreams' },
  { id: 57, src: '/images/Baby/Baby26.jpg', alt: 'Baby Session 27', category: 'baby', title: 'Newborn Dreams' },
  { id: 58, src: '/images/Baby/Baby27.jpg', alt: 'Baby Session 28', category: 'baby', title: 'Newborn Dreams' },
  { id: 59, src: '/images/Baby/Baby28.jpg', alt: 'Baby Session 29', category: 'baby', title: 'Newborn Dreams' },
  { id: 60, src: '/images/Baby/Baby29.jpg', alt: 'Baby Session 30', category: 'baby', title: 'Newborn Dreams' },
  { id: 61, src: '/images/Baby/Baby30.jpg', alt: 'Baby Session 31', category: 'baby', title: 'Newborn Dreams' },
  { id: 62, src: '/images/Baby/Baby31.jpg', alt: 'Baby Session 32', category: 'baby', title: 'Newborn Dreams' },
  { id: 63, src: '/images/Baby/Baby32.jpg', alt: 'Baby Session 33', category: 'baby', title: 'Newborn Dreams' },
  { id: 64, src: '/images/Baby/Baby33.jpg', alt: 'Baby Session 34', category: 'baby', title: 'Newborn Dreams' },
  

];

const categories = [
  { id: 'all', name: 'All Photos', icon: Camera, count: galleryData.length },
  { id: 'maternity', name: 'Maternity', icon: Heart, count: galleryData.filter(img => img.category === 'maternity').length },
  { id: 'baby', name: 'Baby & Newborn', icon: Heart, count: galleryData.filter(img => img.category === 'baby').length },
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<typeof galleryData[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState<{[key: string]: boolean}>({});
  const [isLoading, setIsLoading] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('grid');
  const galleryRef = useRef<HTMLDivElement>(null);
  const [imageLoaded, setImageLoaded] = useState<{ [src: string]: boolean }>({});

  const filteredImages = selectedCategory === 'all' 
    ? galleryData 
    : galleryData.filter(img => img.category === selectedCategory);

  const handleImageError = (src: string) => {
    setImageErrors(prev => ({ ...prev, [src]: true }));
  };

  const handleImageLoad = (src: string) => {
    setImageLoaded((prev) => ({ ...prev, [src]: true }));
  };

  const openModal = async (image: typeof galleryData[0]) => {
    setIsLoading(true);
    setSelectedImage(image);
    setCurrentImageIndex(filteredImages.findIndex(img => img.id === image.id));
    // Simulate loading for smooth transition
    setTimeout(() => setIsLoading(false), 300);
  };

  const closeModal = useCallback(() => {
    setSelectedImage(null);
  }, []);

  const nextImage = useCallback(() => {
    const nextIndex = (currentImageIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
    setCurrentImageIndex(nextIndex);
  }, [currentImageIndex, filteredImages]);

  const prevImage = useCallback(() => {
    const prevIndex = currentImageIndex === 0 ? filteredImages.length - 1 : currentImageIndex - 1;
    setSelectedImage(filteredImages[prevIndex]);
    setCurrentImageIndex(prevIndex);
  }, [currentImageIndex, filteredImages]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage) {
        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, nextImage, prevImage, closeModal]);

  useEffect(() => {
    // ...
  }, [selectedCategory, nextImage, prevImage]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f9f6f2] via-[#f3e7d9] to-[#e7d6c6]">
      {/* Hero Section with Background Image */}
      <section className="relative w-full min-h-[500px] md:min-h-[800px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Gall.jpg"
            alt="Gallery Hero Background"
            fill
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        {/* Hero Content */}
        <div className="container mx-auto px-4 text-center relative z-10">
          
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Our <span className="bg-gradient-to-r from-[#b48b3c] to-[#e7d6c6] bg-clip-text text-transparent">Gallery</span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-[#b48b3c] to-[#e7d6c6] rounded-full mx-auto mb-8 opacity-80"></div>
          <p className="text-xl lg:text-2xl text-white max-w-4xl mx-auto leading-relaxed drop-shadow">
            Explore our collection of beautiful moments captured with love and care. 
            Each image tells a unique story of joy, love, and precious memories.
          </p>
        </div>
      </section>

      {/* Modern Filter Section */}
      <section className="sticky top-0 z-40 py-4 sm:py-6 bg-gradient-to-br from-[#f9f6f2] via-[#f3e7d9] to-[#e7d6c6] border-b border-gray-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`group relative flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-2xl font-medium transition-all duration-500 text-sm sm:text-base ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-[#b48b3c] to-[#e7d6c6] text-white shadow-lg shadow-[#b48b3c]/25'
                      : 'bg-white/60 text-gray-700 hover:bg-white hover:shadow-lg border border-gray-200/50'
                  }`}
                >
                  <category.icon className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ${
                    selectedCategory === category.id ? 'scale-110' : 'group-hover:scale-110'
                  }`} />
                  <span className="hidden sm:inline">{category.name}</span>
                  <span className="sm:hidden">{category.name.split(' ')[0]}</span>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    selectedCategory === category.id 
                      ? 'bg-white/20 text-white' 
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {category.count}
                  </span>
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-2xl p-1 border border-gray-200/50">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-xl transition-all duration-300 ${
                  viewMode === 'grid' 
                    ? 'bg-[#b48b3c] text-white shadow-lg' 
                    : 'text-gray-600 hover:text-[#b48b3c]'
                }`}
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 3h7v7H3V3zm0 11h7v7H3v-7zm11-11h7v7h-7V3zm0 11h7v7h-7v-7z"/>
                </svg>
              </button>
              <button
                onClick={() => setViewMode('masonry')}
                className={`p-2 rounded-xl transition-all duration-300 ${
                  viewMode === 'masonry' 
                    ? 'bg-[#b48b3c] text-white shadow-lg' 
                    : 'text-gray-600 hover:text-[#b48b3c]'
                }`}
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 3h7v7H3V3zm11 0h7v7h-7V3zM3 14h7v7H3v-7zm11 0h7v7h-7v-7z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Gallery Grid */}
      <section className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={galleryRef}
            className={`grid gap-4 sm:gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                : 'columns-1 sm:columns-2 lg:columns-3 xl:columns-4'
            }`}
          >
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className={`group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl cursor-pointer transform hover:scale-[1.02] transition-all duration-700 ${
                  viewMode === 'masonry' ? 'break-inside-avoid mb-6' : ''
                }`}
                onClick={() => openModal(image)}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'both'
                }}
              >
                <LazyMotion features={domAnimation}>
                  <m.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: imageLoaded[image.src] ? 1 : 0 }}
                    transition={{ duration: 1.5 }}
                    className="w-full h-full"
                  >
                    {imageErrors[image.src] ? (
                      <div className="aspect-[4/5] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                        <div className="text-center text-gray-500">
                          <Camera className="w-16 h-16 mx-auto mb-4 opacity-50" />
                          <p className="text-lg font-medium">{image.title}</p>
                        </div>
                      </div>
                    ) : (
                      <Image
                        src={image.src}
                        alt={image.alt}
                        className="w-full aspect-[4/5] object-cover group-hover:scale-110 transition-transform duration-700"
                        width={500}
                        height={625}
                        onError={() => handleImageError(image.src)}
                        onLoadingComplete={() => handleImageLoad(image.src)}
                        loading="lazy"
                      />
                    )}
                  </m.div>
                </LazyMotion>
                
                {/* Modern Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-white font-bold text-xl">{image.title}</h3>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/80 text-sm capitalize bg-white/20 px-3 py-1 rounded-full">
                        {image.category}
                      </span>
                      <button className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
                        <Eye className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-gradient-to-br from-[#b48b3c]/20 to-[#f3e7d9]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Camera className="w-12 h-12 text-[#b48b3c]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-700 mb-2">No photos found</h3>
              <p className="text-gray-500">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* Enhanced Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md">
          <div className="relative max-w-6xl w-full mx-4">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10 p-2 bg-black/50 rounded-full backdrop-blur-sm"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 backdrop-blur-sm rounded-full p-3 hover:bg-black/70"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 backdrop-blur-sm rounded-full p-3 hover:bg-black/70"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image with loading state */}
            <div className="relative">
              {isLoading ? (
                <div className="aspect-[4/3] bg-gray-800 rounded-3xl flex items-center justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#b48b3c]"></div>
                </div>
              ) : imageErrors[selectedImage.src] ? (
                <div className="aspect-[4/3] bg-gray-800 rounded-3xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <Camera className="w-20 h-20 mx-auto mb-4 opacity-50" />
                    <p className="text-2xl font-bold">{selectedImage.title}</p>
                  </div>
                </div>
              ) : (
                <LazyMotion features={domAnimation}>
                  <m.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: imageLoaded[selectedImage.src] ? 1 : 0 }}
                    transition={{ duration: 1.5 }}
                    className="w-full h-full flex justify-center items-center"
                  >
                    <Image
                      src={selectedImage.src}
                      alt={selectedImage.alt}
                      className="rounded-3xl shadow-2xl max-w-[90vw] max-h-[80vh] object-contain"
                      width={1200}
                      height={1500}
                      onLoadingComplete={() => handleImageLoad(selectedImage.src)}
                    />
                  </m.div>
                </LazyMotion>
              )}
            </div>

            {/* Enhanced Image info */}
            <div className="mt-8 text-center text-white">
              <h3 className="text-3xl font-bold mb-3">{selectedImage.title}</h3>
              <div className="flex items-center justify-center gap-6 mb-6">
                <span className="text-white/80 capitalize bg-white/20 px-4 py-2 rounded-full">
                  {selectedImage.category}
                </span>
              </div>
              <div className="flex justify-center gap-4">
                {/* All modal action buttons removed except close */}
              </div>
            </div>

            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
              {currentImageIndex + 1} of {filteredImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 