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
        cowboy: {
          sand: '#E6C089',
          shadow: '#2B1A12',
        },
        night: {
          bg: '#0E1723',
        },
        star: {
          gold: '#F6C64E',
          goldDim: '#C6A041',
        },
        desert: {
          front: '#F5A623',
          mid1: '#D87424',
          mid2: '#A94222',
          back: '#6E2019',
        },
        wood: {
          sign: '#8B6E53',
          beam: '#F4E2A3',
          beamLight: '#FCEFD0',
        },
      },
      fontFamily: {
        'rye': ['Rye', 'cursive'],
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'drift': 'drift 20s linear infinite',
        'bob': 'bob 2s ease-in-out infinite',
        'rotate-slow': 'rotate 10s linear infinite',
        'tumble': 'tumble 8s ease-in-out infinite',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
        drift: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100vw)' },
        },
        bob: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        tumble: {
          '0%, 100%': { transform: 'translateX(0px) rotate(0deg)' },
          '25%': { transform: 'translateX(10px) rotate(90deg)' },
          '50%': { transform: 'translateX(0px) rotate(180deg)' },
          '75%': { transform: 'translateX(-10px) rotate(270deg)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
