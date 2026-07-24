/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ecell-bg': '#000000',
        'ecell-bg2': '#080808',
        'ecell-blue': '#3086F8',
        'ecell-glow': '#8EBFFF',
        'ecell-light': '#93A5FF',
        'ecell-gray': '#C9D1D9',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'sora': ['Sora', 'sans-serif'],
      },
      boxShadow: {
        'glow-sm': '0 0 10px rgba(59, 130, 246, 0.3)',
        'glow-md': '0 0 20px rgba(59, 130, 246, 0.4)',
        'glow-lg': '0 0 40px rgba(59, 130, 246, 0.5)',
        'glow-xl': '0 0 60px rgba(59, 130, 246, 0.6)',
        'card': '0 4px 24px rgba(0,0,0,0.4)',
      },
      backgroundImage: {
        'blue-radial': 'radial-gradient(ellipse at center, rgba(59,130,246,0.15) 0%, transparent 70%)',
        'hero-gradient': 'linear-gradient(135deg, #05060B 0%, #0A0F1F 50%, #05060B 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
        'blue-gradient': 'linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)',
      },
      borderColor: {
        'glass': 'rgba(255,255,255,0.08)',
        'glass-hover': 'rgba(59,130,246,0.4)',
      },
      backdropBlur: {
        'glass': '20px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'gradient-wave': 'gradientWave 8s ease infinite',
        'spin-slow': 'spin 20s linear infinite',
        'border-glow': 'borderGlow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(59,130,246,0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(59,130,246,0.7)' },
        },
        gradientWave: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        borderGlow: {
          '0%, 100%': { borderColor: 'rgba(59,130,246,0.3)' },
          '50%': { borderColor: 'rgba(96,165,250,0.8)' },
        },
        shimmer: {
          '0%': { left: '-100%' },
          '100%': { left: '200%' },
        },
      },
    },
  },
  plugins: [],
}
