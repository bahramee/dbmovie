/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/features/movie/presentation/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.blue['500'],
        secondary: colors.teal['200'],
        pen: colors.black,
        pengrey: colors.gray['600'],
        penlight: colors.gray['400'],
        highlight: colors.gray['200'],
      }
    },
    fontSize: {
      xs: '0.6rem',
      sm: '0.8rem',
      '2sm': '0.6rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    }
  },
  plugins: [],
}
