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
    <header className="fixed top-0 left-0 w-full z-30 bg-transparent flex items-center justify-between px-10 py-5 transition-all">
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
        <ul className="flex gap-10 text-lg font-semibold">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-white hover:text-[#b48b3c] transition-colors duration-200 px-2 py-1 rounded"
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