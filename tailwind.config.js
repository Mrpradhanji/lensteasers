module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'slide-in': {
          '0%': { width: '0', opacity: '0' },
          '100%': { width: '6rem', opacity: '1' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.5' },
        },
        'pulse-slower': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.3' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0.7', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.3)' },
        },
        sparkle2: {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'zoom-in': {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        'slide-in': 'slide-in 1s cubic-bezier(0.4,0,0.2,1) 0.2s both',
        'fade-in-up': 'fade-in-up 1s cubic-bezier(0.4,0,0.2,1) both',
        'pulse-slow': 'pulse-slow 6s cubic-bezier(0.4,0,0.6,1) infinite',
        'pulse-slower': 'pulse-slower 12s cubic-bezier(0.4,0,0.6,1) infinite',
        sparkle: 'sparkle 2.5s infinite alternate',
        sparkle2: 'sparkle2 3.2s infinite alternate',
        float: 'float 3s ease-in-out infinite',
        shimmer: 'shimmer 1.5s linear infinite',
        'zoom-in': 'zoom-in 0.4s cubic-bezier(0.4,0,0.2,1) both',
      },
    },
  },
  plugins: [],
}; 