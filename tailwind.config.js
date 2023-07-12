/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#F2F0CE',
          200: '#000033',
          300: '#1a1a4f',
          400: '#320b52',
          500: '#000066'
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

