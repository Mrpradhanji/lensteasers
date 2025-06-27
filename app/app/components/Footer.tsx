'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Facebook } from 'lucide-react';
import { useEffect, useState } from 'react';

const Footer = () => {
  const [year, setYear] = useState('');
  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer role="contentinfo" aria-label="Site footer" className="bg-gradient-to-tr from-[#f3e7d9] via-[#fdfaf7] to-[#f3e7d9] text-gray-800 py-10 mt-0 shadow-inner">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col items-center space-y-6 text-center">
        {/* Logo */}
        <div className="flex-shrink-0 flex flex-col items-center md:items-start mb-2 md:mb-0">
          <Image
            src="/images/Lens Teaser Final Logo (1).png"
            alt="Lens Teasers Logo"
            width={120}
            height={40}
            className="object-contain"
          />
        </div>
        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm sm:text-base font-medium">
          <Link href="/" className="hover:text-[#b48b3c] transition">Home</Link>
          <Link href="/services" className="hover:text-[#b48b3c] transition">Services</Link>
          <Link href="/gallery" className="hover:text-[#b48b3c] transition">Gallery</Link>
          <Link href="/about" className="hover:text-[#b48b3c] transition">About</Link>
          <Link href="/contact" className="hover:text-[#b48b3c] transition">Contact</Link>
        </div>
        {/* Social Icons */}
        <div className="flex justify-center items-center space-x-6">
          <a
            href="https://www.instagram.com/lensteasers.kids?igsh=ZWVyc3ZpNHpjc2Ry"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 hover:text-[#E1306C] transition duration-300"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="https://www.facebook.com/lensteasersphotography/"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 hover:text-[#1877F3] transition duration-300"
          >
            <Facebook className="w-6 h-6" />
          </a>
        </div>
        {/* Optional Tagline */}
        <p className="text-sm text-gray-600 italic">Capturing joy, love & memories — one frame at a time.</p>
        {/* Copyright */}
        <p className="text-xs text-gray-500">
          &copy; {year} Lens Teasers Photography Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 