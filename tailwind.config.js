/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      netred: "#E50914",
      netredHover: "#C11119",
      textColor: "#8C8C8C",
      inputbg: "#333",
      red: colors.red,
      black: colors.black,
      gray: colors.gray,
      white: colors.white,
      blue: colors.blue,
    },
  },
  plugins: [],
}
