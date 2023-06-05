/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors:{
        'love' : '#1b1725',
        'love-50': '#18131f'
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif']
      }
    },
  },
  plugins: [],
}