import Image from "next/image";
import Link from "next/link";

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
  return (
    <header className="w-full flex items-center justify-between px-6 py-4 shadow-md bg-white sticky top-0 z-50">
      <Link href="/">
        <Image
          src="/images/Lens Teaser Final Logo (1).png"
          alt="Lens Teasers Logo"
          width={160}
          height={50}
          priority
          style={{ height: "50px", width: "auto" }}
        />
      </Link>
      <nav>
        <ul className="flex gap-8 text-base font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className="text-[#171717] hover:text-[#b48b3c] transition-colors">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
} 