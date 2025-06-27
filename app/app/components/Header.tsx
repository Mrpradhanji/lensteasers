'use client';
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
  { name: "Maternity PhotoShoot", href: "/maternity" },
  { name: "Baby PhotoShoot", href: "/babyphotoshoot" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'shadow-2xl bg-white/80 backdrop-blur-xl' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 sm:py-3 flex items-center justify-between">
        {/* Logo aligned left */}
        <Link href="/" className="flex-shrink-0 flex items-center gap-2">
          <div className="relative h-12 w-36 md:h-14 md:w-44">
            <Image
              src="/images/Lens Teaser Final Logo (1).png"
              alt="Lens Teasers Logo"
              fill
              priority
              className="object-contain"
              sizes="144px"
            />
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative uppercase tracking-widest text-sm font-semibold text-[#232323] hover:text-[#b48b3c] px-2 py-1 transition-colors duration-200 group"
            >
              {link.name}
              <span className="absolute left-1/2 -bottom-1 w-0 group-hover:w-3/4 h-0.5 bg-gradient-to-r from-[#b48b3c] to-[#e7d6c6] rounded transition-all duration-300" style={{ transform: 'translateX(-50%)' }}></span>
            </Link>
          ))}
        </nav>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden ml-2 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#b48b3c] z-20 relative"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation menu"
        >
          <span className="block w-7 h-7 relative">
            <span className={`absolute left-1/2 top-2 w-6 h-0.5 bg-[#b48b3c] rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : '-translate-x-1/2'}`}></span>
            <span className={`absolute left-1/2 top-4 w-6 h-0.5 bg-[#b48b3c] rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : '-translate-x-1/2'}`}></span>
            <span className={`absolute left-1/2 top-6 w-6 h-0.5 bg-[#b48b3c] rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : '-translate-x-1/2'}`}></span>
          </span>
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-lg transition-all duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}></div>

      {/* Mobile nav */}
      <nav className={`fixed top-0 left-0 w-full h-full z-50 flex flex-col items-center justify-center bg-white/90 dark:bg-[#232323]/95 backdrop-blur-2xl transition-all duration-300 ${menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'} md:hidden`}>
        <ul className="flex flex-col gap-8 text-2xl font-bold uppercase tracking-widest text-[#232323] dark:text-white">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="relative px-4 py-2 hover:text-[#b48b3c] transition-colors duration-200 group"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
                <span className="absolute left-1/2 -bottom-1 w-0 group-hover:w-3/4 h-1 bg-gradient-to-r from-[#b48b3c] to-[#e7d6c6] rounded transition-all duration-300" style={{ transform: 'translateX(-50%)' }}></span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
