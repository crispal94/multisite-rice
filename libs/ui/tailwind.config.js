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
    extend: {},
  },
  darkMode: 'class',
  plugins: [heroui()],
};
