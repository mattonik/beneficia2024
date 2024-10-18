/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{pug,html,js}"],
  theme: {
    extend: {
      fontFamily: {
        think: ["Think"],
      },
      backgroundColor: {
        body: "#68BBCE;",
      },
      dropShadow: {
        beneficia: "16px 16px 0 #2a7690",
      },
      boxShadow: {
        beneficia: "16px 16px 0 #2a7690",
      },
    },
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      beneficia2024: {
        50: "#f0fafb",
        100: "#d9f1f4",
        200: "#b7e2ea",
        300: "#85ccdb",
        400: "#68bbce",
        500: "#3091aa",
        600: "#2a7690",
        700: "#286176",
        800: "#285162",
        900: "#264553",
        950: "#142c38",
      },
    },
  },
  plugins: [],
};

