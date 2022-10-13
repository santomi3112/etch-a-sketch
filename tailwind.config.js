/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'silkscreen': ['Silkscreen', 'cursive'],
      },
      colors: {
        'spaceCadet': '#39375B',
        'biru2': '#14213D',
        'kuning3': '#FCA311',
        'abu4': '#E5E5E5'
      },
    },
  },
  plugins: [],
}
// {html,js}