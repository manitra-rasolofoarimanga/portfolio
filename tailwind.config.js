/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './index.html',
  ],
  theme: {
    extend: {
      colors: {
        'black': '#080707',
        'raisin-black': '#1E1D20',
        'night': '#161416',
        'coffee': '#754934',
        'wenge': '#625B5D',
        'davys-gray': '#4A4448',
        'brown-sugar': '#BD7B5F',
        'ash-gray': '#C9D2CC',
        'desert-sand': '#DBC4B4',
        'beige': '#fff7f2',
        'light-grey': '#dfe0df',
      },
      fontFamily: {
        'sans': ['Quicksand', 'sans-serif'],
      }
    },
  },
  plugins: [],
})