/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#596464',
          200: '#546496',
          300: '#964d54',
          400: '#2E3643',
          500: '#1F2634'
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

