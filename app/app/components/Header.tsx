'use client';
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import React from 'react';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Maternity PhotoShoot", href: "/maternity" },
  { name: "Baby PhotoShoot", href: "/babyphotoshoot" },
  { name: "Contact", href: "/contact" },
];

const serviceLinks = [
  { name: "All Services", href: "/services" },
  { name: "Wedding Photography", href: "/services/wedding-photography" },
  { name: "Pre-Wedding Photoshoot", href: "/services/pre-wedding-photography" },
  { name: "Birthday Event Photography", href: "/services/birthday-events" },
  { name: "Maternity Shoot", href: "/maternity" },
  { name: "Baby & Kids Photography", href: "/babyphotoshoot" },
  { name: "Cinematography", href: "/services/cinematography" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'shadow-2xl bg-white/80 backdrop-blur-xl' : 'bg-transparent'}`}
    >
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
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative uppercase tracking-widest text-sm font-semibold px-2 py-1 transition-colors duration-200 group
                  ${isActive ? 'text-[#b48b3c] underline underline-offset-4 decoration-[#b48b3c]' : 'text-[#232323] hover:text-[#b48b3c]'}
                `}
              >
                {link.name}
                
              </Link>
            );
          })}
          
          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button className="relative uppercase tracking-widest text-sm font-semibold text-[#232323] hover:text-[#b48b3c] px-2 py-1 transition-colors duration-200 group flex items-center gap-1">
              Services
              <svg 
                className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              <span className="absolute left-1/2 -bottom-1 w-0 group-hover:w-3/4 h-0.5 bg-gradient-to-r from-[#b48b3c] to-[#e7d6c6] rounded transition-all duration-300" style={{ transform: 'translateX(-50%)' }}></span>
            </button>
            
            {/* Dropdown Menu */}
            <div className={`absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-xl rounded-lg shadow-2xl border border-gray-200 transition-all duration-300 ${servicesDropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
              <div className="py-2">
                {serviceLinks.map((service, index) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className={`block px-4 py-3 text-sm text-[#232323] hover:bg-[#f9f6f2] hover:text-[#b48b3c] transition-colors duration-200 ${index === 0 ? 'border-b border-gray-200 font-semibold' : ''}`}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden ml-2 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#b48b3c] z-20 relative touch-manipulation border-2 border-red-500"
          onClick={() => { console.log('Hamburger clicked'); setMenuOpen((open) => !open); }}
          aria-label="Toggle navigation menu"
          style={{ WebkitTapHighlightColor: 'transparent' }}
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
            <span className={`block w-6 h-0.5 bg-[#b48b3c] rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-[#b48b3c] rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-[#b48b3c] rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-lg transition-all duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* Mobile nav */}
      <nav className={`fixed top-0 left-0 w-full h-full z-50 flex flex-col items-center justify-center bg-white/90 dark:bg-[#232323]/95 backdrop-blur-2xl transition-all duration-300 ${menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'} md:hidden`} style={{ WebkitOverflowScrolling: 'touch' }}>
        <ul className="flex flex-col gap-8 text-2xl font-bold uppercase tracking-widest text-[#232323] dark:text-white">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`relative px-4 py-2 transition-colors duration-200 group touch-manipulation
                    ${isActive ? 'text-[#b48b3c] underline underline-offset-4 decoration-[#b48b3c]' : 'hover:text-[#b48b3c]'}
                  `}
                  onClick={() => setMenuOpen(false)}
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  {link.name}
                  <span className={`absolute left-1/2 -bottom-1 h-1 bg-gradient-to-r from-[#b48b3c] to-[#e7d6c6] rounded transition-all duration-300
                    ${isActive ? 'w-3/4' : 'w-0 group-hover:w-3/4'}`}
                    style={{ transform: 'translateX(-50%)' }}
                  ></span>
                </Link>
              </li>
            );
          })}
          
          {/* Mobile Services Section */}
          <li className="text-center">
            <div className="mb-4">
              <span className="relative px-4 py-2 text-[#b48b3c] font-bold">
                Services
              </span>
            </div>
            <ul className="flex flex-col gap-4 text-lg font-normal">
              {serviceLinks.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="relative px-4 py-2 hover:text-[#b48b3c] transition-colors duration-200 group touch-manipulation"
                    onClick={() => setMenuOpen(false)}
                    style={{ WebkitTapHighlightColor: 'transparent' }}
                  >
                    {service.name}
                    <span className="absolute left-1/2 -bottom-1 w-0 group-hover:w-3/4 h-0.5 bg-gradient-to-r from-[#b48b3c] to-[#e7d6c6] rounded transition-all duration-300" style={{ transform: 'translateX(-50%)' }}></span>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </nav>
  );
}
