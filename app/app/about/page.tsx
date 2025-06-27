'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Instagram, Linkedin, ArrowUp } from 'lucide-react';

const studioImages = [
  { src: '/images/Maternity2.jpg', alt: 'Studio Maternity Session' },
  { src: '/images/Baby0.jpg', alt: 'Studio Baby Session' },
  { src: '/images/Maternity3.jpg', alt: 'Studio Portrait' },
];

const team = [
  {
    name: 'Priya Sharma',
    role: 'Lead Photographer',
    img: 'https://randomuser.me/api/portraits/women/68.jpg',
    desc: 'Specializes in maternity and newborn shoots with a creative, gentle approach.',
    socials: {
      instagram: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Amit Verma',
    role: 'Studio Manager',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
    desc: 'Ensures every session runs smoothly and clients feel at home.',
    socials: {
      instagram: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Riya Kapoor',
    role: 'Photo Editor',
    img: 'https://randomuser.me/api/portraits/women/65.jpg',
    desc: 'Brings every photo to life with expert retouching and color work.',
    socials: {
      instagram: '#',
      linkedin: '#',
    },
  },
];

export default function About() {
  const [modalImg, setModalImg] = useState<null | { src: string; alt: string }>(null);
  const [showScroll, setShowScroll] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const gridRefs = useRef<(HTMLDivElement | null)[]>([]);
  const teamRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Escape key closes modal, focus trap
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setModalImg(null);
      if (modalImg && e.key === 'Tab' && modalRef.current) {
        // Focus trap
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        } else if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalImg]);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (modalImg) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        if (modalRef.current) modalRef.current.querySelector('button')?.focus();
      }, 100);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [modalImg]);

  // Animate grid items on scroll
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
        });
      },
      { threshold: 0.2 }
    );
    gridRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    teamRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, []);

  // Show scroll-to-top button
  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Parallax/tilt effect for collage
  function handleParallax(e: React.MouseEvent<HTMLDivElement, MouseEvent>, idx: number) {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y / rect.height) - 0.5) * 10;
    const rotateY = ((x / rect.width) - 0.5) * -10;
    el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`;
  }
  function resetParallax(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.currentTarget.style.transform = '';
  }

  // Scroll to top
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <main className="relative flex flex-col items-center w-full min-h-screen bg-gradient-to-br from-[#f9f6f2] via-[#f3e7d9] to-[#e7d6c6] overflow-x-hidden">
      {/* Animated background shapes & sparkles */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-gradient-to-br from-[#b48b3c]/30 to-[#e7d6c6]/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-80 h-80 bg-gradient-to-tr from-[#b48b3c]/20 to-[#f3e7d9]/40 rounded-full blur-2xl animate-pulse-slower" />
        {/* Sparkles */}
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-white/60 rounded-full blur-[2px] animate-sparkle" />
        <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 bg-[#b48b3c]/60 rounded-full blur-[1.5px] animate-sparkle2" />
      </div>

      {/* Main content wrapper for blur */}
      <div className={modalImg ? 'transition-all duration-300 filter blur-sm pointer-events-none select-none' : 'transition-all duration-300'}>
        {/* Hero/About Us Section */}
        <section className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 bg-white/60 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 sm:p-14 mb-12 mt-8 border border-[#b48b3c]/10">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#b48b3c] via-[#e7d6c6] to-[#232323] drop-shadow-lg relative">
              About Us
              <span className="block h-1 w-24 bg-gradient-to-r from-[#b48b3c] to-[#e7d6c6] rounded-full mt-2 mx-auto md:mx-0 animate-slide-in" />
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-[#b48b3c]/60 to-[#e7d6c6]/40 rounded-full blur-xl animate-float" />
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-light mb-4">
              Lens Teasers is a team of passionate photographers dedicated to capturing the most significant moments in your life. We specialize in baby, maternity, wedding, and event photography, offering both photography and editing services in Delhi NCR. Our mission is to help you preserve your memories for generations to come.
            </p>
            <p className="text-base sm:text-lg text-gray-600 font-light mb-6">
              Our studio blends creativity, care, and technical expertise to deliver timeless images. Whether it's a newborn's first smile or a family's milestone, we're here to make every moment unforgettable.
            </p>
          </div>
          {/* Studio Images Collage with parallax/tilt */}
          <div className="flex-1 flex flex-col gap-4 items-center md:items-end w-full">
            <div className="relative w-72 sm:w-96 h-80 flex flex-col items-end">
              {studioImages.map((img, idx) => (
                <div
                  key={img.src}
                  className={[
                    'absolute rounded-2xl overflow-hidden shadow-2xl border-4 bg-white/80',
                    idx === 0 ? 'left-0 top-6 z-10 w-40 h-56 rotate-[-8deg]' : '',
                    idx === 1 ? 'right-0 top-0 z-20 w-36 h-44 rotate-[6deg]' : '',
                    idx === 2 ? 'left-10 bottom-0 z-30 w-32 h-40 rotate-[3deg]' : '',
                    'hover:scale-105 transition-transform duration-300',
                  ].join(' ')}
                  onMouseMove={e => handleParallax(e, idx)}
                  onMouseLeave={resetParallax}
                  tabIndex={0}
                  aria-label={img.alt || 'Studio image'}
                  role="img"
                >
                  <Image src={img.src} alt={img.alt || 'Studio image'} fill className="object-cover" />
                </div>
              ))}
            </div>
            <a href="#studio" className="mt-64 md:mt-72 px-6 py-3 rounded-full bg-gradient-to-r from-[#b48b3c] to-[#e7d6c6] text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300 text-lg">
              Visit Our Studio
            </a>
          </div>
        </section>

        {/* Studio Grid */}
        <section id="studio" className="relative z-10 w-full max-w-5xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#b48b3c] mb-10 tracking-tight">Our Studio</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {studioImages.map((img, idx) => (
              <div
                key={idx}
                ref={el => { gridRefs.current[idx] = el; }}
                className="rounded-2xl overflow-hidden shadow-2xl border-2 border-[#b48b3c]/20 group hover:scale-105 transition-transform duration-300 bg-white/80 cursor-pointer opacity-0 translate-y-8"
                style={{ animationDelay: `${idx * 0.1 + 0.1}s` }}
                onClick={() => setModalImg(img)}
                tabIndex={0}
                aria-label={img.alt || 'Studio image'}
                role="button"
                onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && setModalImg(img)}
              >
                <Image src={img.src} alt={img.alt || 'Studio image'} width={400} height={300} className="object-cover w-full h-60 group-hover:scale-105 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="relative z-10 w-full max-w-6xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#b48b3c] mb-10 tracking-tight">Meet the Team</h2>
          <div className="relative rounded-3xl bg-white/50 backdrop-blur-xl p-6 sm:p-10 shadow-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
              {team.map((member, idx) => (
                <div
                  key={idx}
                  ref={el => { teamRefs.current[idx] = el; }}
                  className="relative bg-white/80 rounded-3xl shadow-2xl p-10 flex flex-col items-center text-center border-2 border-[#b48b3c]/30 hover:shadow-[#b48b3c]/30 hover:scale-105 transition-all duration-300 opacity-0 translate-y-8 group"
                  style={{ animationDelay: `${idx * 0.15 + 0.2}s` }}
                  tabIndex={0}
                  aria-label={member.name}
                  role="region"
                >
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-28 h-28 rounded-full overflow-hidden border-4 border-gradient-to-br from-[#b48b3c] to-[#e7d6c6] shadow-xl bg-gradient-to-br from-[#f3e7d9] to-[#e7d6c6] group-hover:animate-shimmer">
                    <Image src={member.img} alt={member.name} width={112} height={112} className="object-cover w-full h-full" />
                  </div>
                  <div className="pt-24 pb-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#b48b3c] mb-1">{member.name}</h3>
                    <p className="text-sm text-gray-700 font-semibold mb-2">{member.role}</p>
                    <p className="text-sm text-gray-600 font-light mb-4">{member.desc}</p>
                    <div className="flex justify-center gap-4 mt-2">
                      <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[#b48b3c] transition-colors" aria-label={member.name + ' Instagram'}>
                        <Instagram className="w-5 h-5" />
                      </a>
                      <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#b48b3c] transition-colors" aria-label={member.name + ' LinkedIn'}>
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Scroll to top button */}
        {showScroll && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-gradient-to-br from-[#b48b3c] to-[#e7d6c6] text-white shadow-xl hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-[#b48b3c]"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Modal */}
      {modalImg && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={() => setModalImg(null)}>
          <div
            ref={modalRef}
            className="relative bg-white rounded-2xl shadow-2xl p-4 max-w-lg w-full flex flex-col items-center animate-zoom-in"
            onClick={e => e.stopPropagation()}
            tabIndex={-1}
            aria-modal="true"
            role="dialog"
          >
            <Image src={modalImg.src} alt={modalImg.alt || 'Preview'} width={600} height={400} className="object-cover rounded-xl mb-4" />
            <button
              aria-label="Close modal"
              className="absolute top-2 right-2 text-gray-700 hover:text-[#b48b3c] text-2xl font-bold focus:outline-none focus:ring-2 focus:ring-[#b48b3c]"
              onClick={() => setModalImg(null)}
              tabIndex={0}
            >
              &times;
            </button>
          </div>
        </div>
      )}

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes slide-in {
          0% { width: 0; opacity: 0; }
          100% { width: 6rem; opacity: 1; }
        }
        .animate-slide-in {
          animation: slide-in 1s cubic-bezier(0.4,0,0.2,1) 0.2s both;
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s cubic-bezier(0.4,0,0.2,1) both;
        }
        .animate-pulse-slow {
          animation: pulse 6s cubic-bezier(0.4,0,0.6,1) infinite;
        }
        .animate-pulse-slower {
          animation: pulse 12s cubic-bezier(0.4,0,0.6,1) infinite;
        }
        @keyframes sparkle {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.3); }
        }
        .animate-sparkle {
          animation: sparkle 2.5s infinite alternate;
        }
        @keyframes sparkle2 {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        .animate-sparkle2 {
          animation: sparkle2 3.2s infinite alternate;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .group-hover\:animate-shimmer:hover {
          background: linear-gradient(90deg, #f3e7d9 25%, #b48b3c 50%, #e7d6c6 75%, #f3e7d9 100%);
          background-size: 400% 100%;
          animation: shimmer 1.5s linear infinite;
        }
        @keyframes zoom-in {
          0% { transform: scale(0.8); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-zoom-in {
          animation: zoom-in 0.4s cubic-bezier(0.4,0,0.2,1) both;
        }
      `}</style>
    </main>
  );
}
