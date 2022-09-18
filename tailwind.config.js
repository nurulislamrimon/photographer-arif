/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'primary': '#0f0f0f',
      'secondary': '#7e5bef',
      'white': '#ffffff',
      'black': '#000000'
    },
    fontFamily: {
      'header': ['Mochiy Pop One', 'sans-serif'],
      'poppins': ['Poppins', 'sans-serif'],
      'style': ['Berkshire Swash', 'cursive'],
    },
    extend: {},
  },
  plugins: [],
}