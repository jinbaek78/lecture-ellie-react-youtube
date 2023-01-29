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
      lg: '1.25rem',
      xlg: '1.5rem',
      xxlg: '1.85rem',
    },
    extend: {
      colors: {
        'gray-black': '#1e1c1c',
      },
    },
  },

  plugins: [],
};
