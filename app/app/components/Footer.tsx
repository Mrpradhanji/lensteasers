'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-tr from-[#f3e7d9] via-[#fdfaf7] to-[#f3e7d9] text-gray-800 py-8 sm:py-10 mt-0 shadow-inner text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center space-y-4 sm:space-y-6">
        {/* Brand Name */}
        <div className="font-bold text-xl mb-2">Lens Teasers</div>
        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm lg:text-base font-medium">
          <Link href="/" className="hover:text-[#b48b3c] transition">Home</Link>
          <Link href="/services" className="hover:text-[#b48b3c] transition">Services</Link>
          <Link href="/gallery" className="hover:text-[#b48b3c] transition">Gallery</Link>
          <Link href="/about" className="hover:text-[#b48b3c] transition">About</Link>
          <Link href="/contact" className="hover:text-[#b48b3c] transition">Contact</Link>
        </div>
        {/* Social Icons */}
        <div className="flex justify-center items-center space-x-4 sm:space-x-6">
          <a
            href="https://www.instagram.com/lensteasers.kids?igsh=ZWVyc3ZpNHpjc2Ry"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 hover:text-[#E1306C] transition duration-300"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com/lensteasersphotography/"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 hover:text-[#1877F3] transition duration-300"
          >
            Facebook
          </a>
        </div>
        {/* Optional Tagline */}
        <p className="text-xs sm:text-sm text-gray-600 italic">Capturing joy, love & memories — one frame at a time.</p>
        {/* Copyright */}
        <p className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Lens Teasers Photography Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
} 