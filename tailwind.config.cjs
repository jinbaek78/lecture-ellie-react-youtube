/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      ...defaultTheme.screens,
      xs: { min: '0px', max: '900px' },
    },

    extend: {
      colors: {
        brand: '#FF0000',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
