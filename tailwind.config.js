const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#007A7A",
        primaryDarker: "#006767",
        primaryLighter: "#D0DDDE",
        secondary: colors.gray[200],
        secondaryDarker: colors.gray[300],
      },
      fontFamily: {
        heading: ["HK Grotesk", "sans-serif"],
        base: ["Inter", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
