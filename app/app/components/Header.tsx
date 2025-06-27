'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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

  return (
    <header className="fixed top-0 left-0 w-full z-30 bg-transparent flex items-center justify-between px-4 md:px-10 py-2 transition-all">
      <Link href="/" className="flex-shrink-0">
        <Image
          src="/images/Lens Teaser Final Logo (1).png"
          alt="Lens Teasers Logo"
          width={160}
          height={50}
          priority
          className="h-12 w-auto md:h-20 max-w-full object-contain"
        />
      </Link>
      {/* Hamburger for mobile */}
      <button
        className="md:hidden ml-2 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#b48b3c]"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle navigation menu"
      >
        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
        </svg>
      </button>
      {/* Navbar links */}
      <nav
        className={`$ {
          menuOpen ? "block" : "hidden"
        } md:block absolute md:static top-full left-0 w-full md:w-auto bg-[#232323] md:bg-transparent transition-all duration-300 md:transition-none shadow md:shadow-none`}
      >
        <ul className="flex flex-col md:flex-row md:gap-8 gap-2 md:items-center text-lg font-semibold px-4 md:px-0 py-4 md:py-0 overflow-x-auto">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="block text-white hover:text-[#b48b3c] transition-colors duration-200 px-2 py-2 rounded text-center"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
} 