/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {

          'primary': '#131414',
          'secondary': '#fcc203',
          'accent': '#c9d1cd',
          'neutral': '#fcc203',
          'white': '#ffffff',
          'black': '#000000',

          "base-100": "#FFFFFF",

          "info": "#3ABFF8",

          "success": "#36D399",

          "warning": "#FBBD23",

          "error": "#F87272",
        },
      },
    ],
  },
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'header': ['Mochiy Pop One', 'sans-serif'],
      'poppins': ['Poppins', 'sans-serif'],
      'style': ['Berkshire Swash', 'cursive'],
    },
    extend: {},
  },
  plugins: [require('daisyui')],
}