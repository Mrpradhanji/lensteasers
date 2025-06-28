'use client';
import { useState, useEffect, useRef } from 'react';
import { Camera, Filter, X, ChevronLeft, ChevronRight, Heart, Share2, Sparkles, Eye, Download } from 'lucide-react';

// Gallery data with categories
const galleryData = [
  // Maternity Photos
  { id: 1, src: '/images/Maternity1.jpg', alt: 'Maternity Session 1', category: 'maternity', title: 'Beautiful Maternity Glow', likes: 128 },
 
  
  // Baby Photos
  { id: 6, src: '/images/Baby0.jpg', alt: 'Baby Session 1', category: 'baby', title: 'Newborn Dreams', likes: 234 },

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

  const filteredImages = selectedCategory === 'all' 
    ? galleryData 
    : galleryData.filter(img => img.category === selectedCategory);

  const handleImageError = (src: string) => {
    setImageErrors(prev => ({ ...prev, [src]: true }));
  };

  const openModal = async (image: typeof galleryData[0]) => {
    setIsLoading(true);
    setSelectedImage(image);
    setCurrentImageIndex(filteredImages.findIndex(img => img.id === image.id));
    // Simulate loading for smooth transition
    setTimeout(() => setIsLoading(false), 300);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
    setCurrentImageIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex = currentImageIndex === 0 ? filteredImages.length - 1 : currentImageIndex - 1;
    setSelectedImage(filteredImages[prevIndex]);
    setCurrentImageIndex(prevIndex);
  };

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
  }, [selectedImage, currentImageIndex, filteredImages]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50">
      {/* Hero Section with Parallax Effect */}
      <section className="relative py-20 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-[#b48b3c]/20 to-[#f3e7d9]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-[#b48b3c]/15 to-[#f9f0e9]/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-[#b48b3c]/10 to-transparent rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm text-gray-600 mb-6">
            <Sparkles className="w-4 h-4 text-[#b48b3c]" />
            Premium Photography Collection
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-[#b48b3c] to-[#e7d6c6] bg-clip-text text-transparent">Gallery</span>
          </h1>
          
          <div className="w-32 h-1 bg-gradient-to-r from-[#b48b3c] to-[#e7d6c6] rounded-full mx-auto mb-8"></div>
          
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Explore our collection of beautiful moments captured with love and care. 
            Each image tells a unique story of joy, love, and precious memories.
          </p>
        </div>
      </section>

      {/* Modern Filter Section */}
      <section className="sticky top-0 z-40 py-6 bg-white/80 backdrop-blur-xl border-b border-gray-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`group relative flex items-center gap-3 px-6 py-3 rounded-2xl font-medium transition-all duration-500 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-[#b48b3c] to-[#e7d6c6] text-white shadow-lg shadow-[#b48b3c]/25'
                      : 'bg-white/60 text-gray-700 hover:bg-white hover:shadow-lg border border-gray-200/50'
                  }`}
                >
                  <category.icon className={`w-5 h-5 transition-transform duration-300 ${
                    selectedCategory === category.id ? 'scale-110' : 'group-hover:scale-110'
                  }`} />
                  <span>{category.name}</span>
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
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
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
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 3h7v7H3V3zm11 0h7v7h-7V3zM3 14h7v7H3v-7zm11 0h7v7h-7v-7z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Gallery Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={galleryRef}
            className={`grid gap-6 ${
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
                {imageErrors[image.src] ? (
                  <div className="aspect-[4/5] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <Camera className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p className="text-lg font-medium">{image.title}</p>
                    </div>
                  </div>
                ) : (
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full aspect-[4/5] object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={() => handleImageError(image.src)}
                  />
                )}
                
                {/* Modern Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-white font-bold text-xl">{image.title}</h3>
                      <div className="flex items-center gap-2 text-white/80">
                        <Heart className="w-4 h-4" />
                        <span className="text-sm">{image.likes}</span>
                      </div>
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

                {/* Floating Action Button */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors">
                    <Download className="w-4 h-4 text-gray-700" />
                  </button>
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
              className="absolute -top-16 right-0 text-white hover:text-gray-300 transition-colors z-10 p-2 bg-black/50 rounded-full backdrop-blur-sm"
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
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full rounded-3xl shadow-2xl"
                />
              )}
            </div>

            {/* Enhanced Image info */}
            <div className="mt-8 text-center text-white">
              <h3 className="text-3xl font-bold mb-3">{selectedImage.title}</h3>
              <div className="flex items-center justify-center gap-6 mb-6">
                <span className="text-white/80 capitalize bg-white/20 px-4 py-2 rounded-full">
                  {selectedImage.category}
                </span>
                <div className="flex items-center gap-2 text-white/80">
                  <Heart className="w-5 h-5" />
                  <span className="font-medium">{selectedImage.likes} likes</span>
                </div>
              </div>
              <div className="flex justify-center gap-4">
                <button className="flex items-center gap-3 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300">
                  <Heart className="w-5 h-5" />
                  <span>Like</span>
                </button>
                <button className="flex items-center gap-3 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300">
                  <Share2 className="w-5 h-5" />
                  <span>Share</span>
                </button>
                <button className="flex items-center gap-3 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300">
                  <Download className="w-5 h-5" />
                  <span>Download</span>
                </button>
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