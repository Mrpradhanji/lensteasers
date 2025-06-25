import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh] px-4 py-16 bg-gradient-to-b from-white to-[#f7f3ed]">
      <Image
        src="/images/Lens Teaser Final Logo (1).png"
        alt="Lens Teasers Logo"
        width={260}
        height={80}
        priority
        className="mb-8"
        style={{ height: "80px", width: "auto" }}
      />
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#222]">
        Welcome to Lens Teasers Photography Studio
      </h1>
      <p className="text-lg md:text-xl text-center max-w-2xl mb-8 text-[#444]">
        Capturing your most precious moments with creativity and passion. Specializing in baby, maternity, wedding, and event photography in Delhi NCR.
      </p>
      <Link
        href="/contact"
        className="bg-[#b48b3c] text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-[#a07a2c] transition-colors"
      >
        Book Your Photoshoot
      </Link>
    </main>
  );
}
