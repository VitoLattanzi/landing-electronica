/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#0b1121',
        'brand-cyan': '#00d2ff',
        'brand-cyan-light': '#00e5ff',
      },
      boxShadow: {
        'neon': '0 0 10px rgba(0, 210, 255, 0.5)',
        'neon-strong': '0 0 20px rgba(0, 210, 255, 0.8)',
      },
      animation: {
        'glow-pulse': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}