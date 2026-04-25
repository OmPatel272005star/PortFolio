/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['"Press Start 2P"', 'cursive'],
        mono: ['"Roboto Mono"', 'monospace'],
      },
      colors: {
        accent: {
          yellow: '#facc15',
          orange: '#f97316',
          green: '#22c55e',
          blue: '#3b82f6',
          red: '#ef4444',
          teal: '#14b8a6',
        },
      },
      boxShadow: {
        brutal: '6px 6px 0px #000000',
        'brutal-sm': '4px 4px 0px #000000',
        'brutal-xs': '3px 3px 0px #000000',
      },
    },
  },
  plugins: [],
}
