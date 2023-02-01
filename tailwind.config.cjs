/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        ...defaultTheme.screens,
        sm: { min: '100px', max: '350px' },

        md: { min: '350px', max: '500px' },

        lg: { min: '500px', max: '700px' },

        xl: { min: '700px', max: '1200px' },

        '2xl': '1200px',
      },
      colors: {
        brand: '#FF0000',
      },
    },
  },
  plugins: [],
};
