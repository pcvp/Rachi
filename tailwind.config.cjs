/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        sora: ["Sora", "sans-serif"],
        sora: ["Roboto", "sans-serif"],
      },
      colors: {
        blue: {
          200: "#EFF8FF",
          900: "#0F9AFE",
        },
        gray: {
          100: "#DBDBDB",
          200: "#6E7275",
          900: "#293145",
        },
      },
    },
  },
  plugins: [],
};
