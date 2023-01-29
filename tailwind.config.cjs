/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    screens: {
      sm: { max: '770px' },
    },
    fontSize: {
      xs: '0.5rem',
      sm: '0.6rem',
    },
    extend: {
      colors: {
        'gray-black': '#1e1c1c',
      },
    },
  },

  plugins: [],
};
