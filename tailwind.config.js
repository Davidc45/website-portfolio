/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#F2F0CE',
          200: '#D0A5C0',
          300: '#B76E79',
          400: '#6441A5',
          500: '#2F2F2F'
        }
      },
      fontFamily:
      {
        body: ['Lexend Peta']
      }
    },
  },
  plugins: [],
}

