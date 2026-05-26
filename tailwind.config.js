/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Orbitron"', 'sans-serif'],
        body: ['"Space Grotesk"', 'sans-serif'],
      },
      colors: {
        void: '#070b14',
        ink: '#0d1420',
        slate: '#111827',
        muted: '#1e2a3a',
        border: '#1e3a5f',
        gold: '#c9a84c',
        'gold-light': '#e8c97a',
        dim: '#4a5568',
        soft: '#94a3b8',
        senate: '#6366f1',
        military: '#ef4444',
        trade: '#f59e0b',
        coalition: '#10b981',
      },
      animation: {
        'card-enter': 'cardEnter 0.35s ease-out',
        'meter-flash': 'meterFlash 0.6s ease-in-out 3',
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
      },
      keyframes: {
        cardEnter: {
          '0%': { opacity: '0', transform: 'translateY(30px) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        meterFlash: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
