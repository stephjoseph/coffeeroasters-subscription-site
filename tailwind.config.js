/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-cyan': '#0E8784',
        'dark-grey-blue': '#333D4B',
        'pale-orange': '#FDD6BA',
        'light-cream': '#FEFCF7',
        grey: '#83888F',
      },
    },
  },
  plugins: [],
};
