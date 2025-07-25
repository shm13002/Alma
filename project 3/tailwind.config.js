/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Poppins', 'sans-serif'],
        'recoleta': ['Recoleta', 'serif'],
      },
      colors: {
        // ALMA New Brand Colors
        'cream': '#F5E2B8',
        'gold': '#D7A437',
        'navy': '#1C2D4A',
        'berry': '#D1372A',
        'blueberry': '#2A3C6F',
        'ocean': '#2C5282',
      },
    },
  },
  plugins: [],
};
