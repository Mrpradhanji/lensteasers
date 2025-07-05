'use client';

import { useState } from 'react';
import Image from 'next/image';

// Theme data structure
interface Theme {
  name: string;
  image: string;
  alt: string;
  description: string;
}

// Themes data - easily expandable
const themes: Theme[] = [
  {
    name: "Astronaut",
    image: "/images/Baby/Baby1.jpg",
    alt: "Astronaut Theme",
    description: "Stars, planets, and rocket ships set the scene for a cosmic adventure. Perfect for capturing your little astronaut imagination and wonder."
  },
  {
    name: "Balloon",
    image: "/images/Baby/Baby2.jpg",
    alt: "Balloon Theme",
    description: "Colorful balloons, festive backdrops, and joyful expressions. Great for birthdays and milestone celebrations."
  },
  {
    name: "Music",
    image: "/images/Baby/Baby3.jpg",
    alt: "Music Theme",
    description: "Instruments, notes, and a playful musical setting for your baby star. Perfect for music-loving families."
  },
  {
    name: "Cake Smash",
    image: "/images/Cake.jpg",
    alt: "Cake Smash Theme",
    description: "Fun, messy, and adorable moments with a birthday cake. Capture the joy and excitement of your baby's first cake experience."
  },
  {
    name: "Piano",
    image: "/images/Themes/Piano1.jpg",
    alt: "Piano Theme",
    description: "Elegant, playful, and musical vibes with mini keys. Capture your baby charm while they explore the joy of music for the first time."
  },
  {
    name: "Pitstop",
    image: "/images/Themes/Pit1.jpg",
    alt: "Pitstop Theme",
    description: "Fast, fun, and full of little racer energy. Capture the thrill and excitement as your baby zooms through their first racing adventure."
  },
  // Add more themes here easily
  {
    name: "Pilot",
    image: "/images/Themes/Pilot1.jpg",
    alt: "Garden Theme",
    description: "High-flying dreams and tiny aviator goggles. Capture your little one soaring through imagination in their first sky-high adventure."
  },
  {
    name: "Chef",
    image: "/images/Themes/Chef.jpg",
    alt: "Ocean Theme",
    description: "Whisks, flour, and playful mess in the kitchen. Watch your baby cook up cuteness in their first culinary moment."
  },
  {
    name: "McDonalds",
    image: "/images/Themes/McDonalds.jpg",
    alt: "Sports Theme",
    description: "Fries, fun, and golden arches vibes. Capture the joy as your baby explores their love for playful meals and bright colors."
  },
  {
    name: "Jungle",
    image: "/images/Themes/Jungle1.jpg",
    alt: "Sports Theme",
    description: "Wild, curious, and full of adventure. Snap the excitement of your little explorer among friendly jungle creatures."
  },
  {
    name: "Moon",
    image: "/images/Themes/Moon2.jpg",
    alt: "Sports Theme",
    description: "Dreamy, glowing, and full of wonder. Capture your baby reaching for the stars in their first moonlit fantasy."
  },
  {
    name: "Harry Potter",
    image: "/images/Themes/Harry2.jpg",
    alt: "Sports Theme",
    description: "Magic, wands, and baby wizardry. Capture the spellbinding charm of your little one in a world of fantasy and fun."
  },
  {
    name: "Frozen",
    image: "/images/Themes/Frozen1.jpg",
    alt: "Sports Theme",
    description: "Sparkles, snowflakes, and icy giggles. Let your baby shine like royalty in a magical Frozen wonderland."
  },
  {
    name: "Barbie",
    image: "/images/Themes/Barbie.jpg",
    alt: "Sports Theme",
    description: "Pink, glam, and fabulous fun. Capture your baby living the Barbie dream in a world of sparkle and style."
  },
  {
    name: "Stadium",
    image: "/images/Themes/Stadium2.jpg",
    alt: "Sports Theme",
    description: "Cheers, jerseys, and baby victories. Capture your tiny champ in action as they take the spotlight on their first field of dreams."
  }
];

export default function BabyThemes() {
  const [activeTheme, setActiveTheme] = useState(0);

  return (
    <section className="max-w-4xl mx-auto mb-20">
      <h2 className="text-3xl font-bold text-center text-[#b48b3c] mb-8">Popular Baby Photoshoot Themes</h2>
      
      {/* Theme Navigation Buttons */}
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {themes.map((theme, idx) => (
          <button
            key={theme.name}
            className={`px-6 py-2 rounded-full font-semibold border transition-colors duration-200 ${
              activeTheme === idx 
                ? 'bg-[#b48b3c] text-white border-[#b48b3c] shadow-lg' 
                : 'bg-white text-[#b48b3c] border-[#b48b3c]'
            }`}
            onClick={() => setActiveTheme(idx)}
          >
            {theme.name}
          </button>
        ))}
      </div>

      {/* Active Theme Display */}
      <div className="bg-white/90 rounded-3xl shadow-2xl p-0 sm:p-0 mb-6 flex flex-col sm:flex-row items-center overflow-hidden border border-[#f3e7d9]">
        <div className="relative w-full sm:w-1/2 aspect-[4/5] min-h-[320px] sm:min-h-[420px] flex-shrink-0">
          <Image 
            src={themes[activeTheme].image} 
            alt={themes[activeTheme].alt} 
            fill 
            className="object-contain" 
          />
        </div>
        <div className="w-full sm:w-1/2 p-8 flex flex-col justify-center items-start">
          <h3 className="text-2xl font-bold text-[#b48b3c] mb-4">{themes[activeTheme].name}</h3>
          <p className="text-[#232323] text-lg leading-relaxed">{themes[activeTheme].description}</p>
        </div>
      </div>

      {/* Total Themes Indicator */}
      <div className="text-center">
        <button className="inline-block px-8 py-3 rounded-full bg-[#b48b3c] text-white font-semibold shadow hover:bg-[#a07a2c] transition-colors mb-4">
          50+ Themes
        </button>
      </div>
    </section>
  );
} 