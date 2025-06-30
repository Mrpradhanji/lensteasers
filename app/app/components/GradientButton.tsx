'use client';

import React from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';

export default function GradientButton({ label = "Let's get started", onClick }: { label?: string; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="relative px-6 py-3 text-white font-semibold rounded-xl bg-gray-950 transition-transform duration-300 hover:scale-105 active:scale-95 group overflow-hidden"
    >
      {/* Gradient border */}
      <span className="absolute inset-0 z-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>

      {/* Inner content */}
      <span className="relative z-10 flex items-center space-x-2 px-6 py-3 bg-gray-950 rounded-xl">
        <span className="transition-transform duration-500 group-hover:translate-x-1">
          {label}
        </span>
        <svg
          className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M8.22 5.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 010-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </button>
  );
}

// Modern shimmer effect loader for image placeholders
export function ShimmerLoader({ className = '' }: { className?: string }) {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className={`relative overflow-hidden bg-gray-200 rounded-xl w-full h-full ${className}`}
        style={{ minHeight: 100 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <m.div
          className="absolute inset-0 w-full h-full"
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
          style={{
            background:
              'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0) 100%)',
          }}
        />
      </m.div>
    </LazyMotion>
  );
}
