/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#131414",
          secondary: "#c9d1cd",
          accent: "#656769",
          neutral: "#656769",
          white: "#ffffff",
          black: "#000000",

          "base-100": "#FFFFFF",

          info: "#3ABFF8",

          success: "#fcc203",

          warning: "#FBBD23",

          error: "red",
        },
      },
    ],
  },
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      name: ["Ms Madi", "cursive"],
      header: ["Mochiy Pop One", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      style: ["Berkshire Swash", "cursive"],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
