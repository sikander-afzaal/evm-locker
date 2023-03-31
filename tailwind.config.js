const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        goldGr: "linear-gradient(to right, #121212,#bd9d55)",
        bodyGr: "url('/bg.png')",
      },
      colors: {
        gold: "#967C3E",
      },
    },
  },
  plugins: [],
};
