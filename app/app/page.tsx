import Image from "next/image";
import Link from "next/link";

const galleryImages = [
  "/images/sample1.jpg",
  "/images/sample2.jpg",
  "/images/sample3.jpg",
  "/images/sample4.jpg",
];

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-white text-white overflow-x-hidden">
      {/* Hero Section with Video */}
      <section className="relative flex items-center justify-center min-h-screen w-full pt-80">
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
        <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 py-32 w-full">
         
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-white drop-shadow-xl tracking-tight">
            Timeless Wedding & Event Photography
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-2xl mb-10 drop-shadow-lg font-light">
            Capturing your most precious moments with creativity and passion. Specializing in baby, maternity, wedding, and event photography in Delhi NCR.
          </p>
          <Link
            href="/contact"
            aria-label="Book your photoshoot now"
            className="bg-[#b48b3c] hover:bg-[#a07a2c] text-white px-10 py-4 rounded-full text-xl font-semibold shadow-lg transition-colors duration-300"
          >
            Book Your Photoshoot
          </Link>
        </div>
      </section>

      {/* Gallery Showcase Section */}
      <section className="w-full py-20 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white tracking-tight">
          Featured Moments
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
          {galleryImages.map((src, idx) => (
            <div key={idx} className="overflow-hidden rounded-lg shadow-lg group">
              <Image
                src={src}
                alt={`Gallery image ${idx + 1}`}
                width={600}
                height={800}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* About/Editorial Section */}
      <section className="w-full py-24 bg-gradient-to-b from-[#232323] via-[#2d2d2d] to-[#232323] text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 tracking-tight">
            Our Philosophy
          </h3>
          <p className="text-lg md:text-xl font-light mb-4">
            We believe every wedding and event is a unique story waiting to be told. Our approach is modern, artistic, and unobtrusive—capturing genuine emotions and timeless moments that you'll cherish forever.
          </p>
          <p className="text-base md:text-lg text-gray-300">
            With years of experience and a passion for storytelling, we document your day with a fine-art editorial style, ensuring every detail is remembered.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-8 bg-[#232323] text-center text-gray-400 text-sm border-t border-gray-800">
        &copy; {new Date().getFullYear()} Lens Teasers Photography Studio. All rights reserved.
      </footer>
    </main>
  );
}
