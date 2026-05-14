import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cafe-black':   '#0B0B0B',
        'cafe-cream':   '#F5E6D3',
        'cafe-gold':    '#C8A96B',
        'cafe-white':   '#FAFAFA',
        'cafe-espresso':'#3B2A1F',
        'cafe-bronze':  '#8C6A43',
        'cafe-dark':    '#161616',
        'cafe-dark-2':  '#1A1A1A',
        'cafe-dark-3':  '#222222',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
        inter:    ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float':      'float 9s ease-in-out infinite',
        'float-slow': 'float 13s ease-in-out infinite',
        'shimmer':    'shimmer 2.5s linear infinite',
        'pulse-gold': 'pulse-gold 2.5s ease-in-out infinite',
        'spin-slow':  'spin 25s linear infinite',
        'bounce-slow':'bounce 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) scale(1)',    opacity: '0.3' },
          '33%':       { transform: 'translateY(-18px) scale(1.1)', opacity: '0.65' },
          '66%':       { transform: 'translateY(-8px) scale(0.95)', opacity: '0.45' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition:  '200% 0' },
        },
        'pulse-gold': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(200,169,107,0)' },
          '50%':       { boxShadow: '0 0 0 12px rgba(200,169,107,0.08)' },
        },
      },
      backgroundImage: {
        'gold-gradient':  'linear-gradient(135deg, #C8A96B 0%, #D4B96E 50%, #A88A52 100%)',
        'dark-gradient':  'linear-gradient(180deg, transparent 0%, #0B0B0B 100%)',
        'radial-dark':    'radial-gradient(ellipse at center, transparent 0%, rgba(11,11,11,0.8) 100%)',
      },
      screens: {
        xs: '375px',
      },
    },
  },
  plugins: [],
}

export default config
