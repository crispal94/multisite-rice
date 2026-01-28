const { heroui } = require('@heroui/react');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/*.{ts,tsx,js,jsx}'),
    join(
      __dirname,
      '../../node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
    ),
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4F6F52', // Earthy Deep Green
        'primary-hover': '#3A523C',
        'primary-content': '#ffffff',
        secondary: '#ECE3CE', // Pale Beige
        accent: '#C4A484', // Warm Brown
        'background-light': '#FDFBF7', // Cream white
        'background-dark': '#1C1917', // Warm Dark
        'surface-light': '#FFFFFF',
        'surface-dark': '#292524',
        'text-main': '#2D241E', // Dark Brown Text
        'text-muted': '#6B5D52',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.375rem',
        lg: '0.5rem',
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        full: '9999px',
      },
      boxShadow: {
        soft: '0 10px 40px -10px rgba(79, 111, 82, 0.1)',
        card: '0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.02)',
      },
    },
  },
  darkMode: 'class',
  plugins: [heroui()],
};
