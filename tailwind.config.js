const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "white",
        primaryDarker: "#cb997e",
        primaryLighter: "#D0DDDE",
        secondary: "white",
        secondaryDarker: colors.gray[300],
        background: "#1c1e24",
        card: "#16181c",
        separator: "#2F3136",
        text: colors.white,
        textSecondary: colors.gray[400],
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
