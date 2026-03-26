/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        primary: 'var(--primary)',
        accent: 'var(--accent)',
        'accent-light': 'var(--accent-light)',
        'card-bg': 'var(--card-bg)',
        border: 'var(--border)',
        text: 'var(--text)',
        muted: 'var(--muted)',
        veg: 'var(--veg)',
        nonveg: 'var(--nonveg)',
      },
      fontFamily: {
        cormorant: ['Cormorant Garamond', 'serif'],
        nunito: ['Nunito', 'sans-serif'],
      },
      animation: {
        fadeUp: 'fadeUp 0.8s ease-out forwards',
        up: 'up 0.6s ease-out forwards',
        zoomIn: 'zoomIn 0.5s ease-out forwards',
        popIn: 'popIn 0.4s ease-out forwards',
        floatUp: 'floatUp 0.5s ease-out forwards',
        glowPulse: 'glowPulse 2s ease-in-out infinite',
        shimmer: 'shimmer 2s infinite',
        slowZoom: 'slowZoom 20s ease-in-out infinite alternate',
        slideIn: 'slideIn 0.3s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        up: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        zoomIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        popIn: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        floatUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(212, 168, 83, 0.2)' },
          '50%': { boxShadow: '0 0 20px rgba(212, 168, 83, 0.4), 0 0 30px rgba(212, 168, 83, 0.2)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at center, rgba(139, 94, 60, 0.15) 0%, transparent 70%)',
      },
      utility: {
        'scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': { display: 'none' },
        },
      },
    },
  },
  plugins: [],
}
