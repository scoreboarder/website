const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        dots: "url('/background.png')",
      },
      colors: {
        primary: "#F1C657",
        primaryDarker: "#c49f3d",
        secondary: colors.gray[100],
        secondaryDarker: colors.gray[300],
        card: "#1c1e24",
        background: "#101114",
        separator: "#474a52",
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
