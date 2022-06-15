/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      margin: '16px',
    },
    extend: {
      screens: {
        '2xl' : '1320px',
      }
    },
  },
  plugins: [],
}
