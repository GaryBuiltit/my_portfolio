/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*/*.{html, js}", "./build/src/*/*.{html, js}"],
  theme: {
    extend: {
      colors: {
        profileGray: "rgb(51, 51, 51)",
      },

      // fontFamily: {

      // }
    },
  },
  plugins: [],
};
