/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "patter-circle": "url(../src/assets/images/pattern-circle.svg)",
        "patter-rings": "url(../src/assets/images/pattern-rings.svg)",
      },
      width: {
        798: "798px",
      },
      height: {
        103: "103px",
      },
      boxShadow: {
        shadow: "0px 4px 28px rgba(0, 0, 0, 0.25)",
      },
      colors: {
        white: "#ffffff",
        bgColor: "#151515",
        green: "#4EE1A0",
        grey: "#D9D9D9",
        darkgrey: "#242424",
        red: "#FF6F5B",
      },
    },
    fontFamily: {
      "grotesk-variable": ["SpaceGrotesk-Variable", "sans-serif"],
      "grotesk-bold": ["SpaceGrotesk-Bold", "sans-serif"],
      "grotesk-medium": ["SpaceGrotesk-Medium", "sans-serif"],
    },
    screens: {
      sm: { min: "375px", max: "767px" },
      md: { min: "768px", max: "1439px" },
      lg: { min: "1440px" },
    },
  },
  plugins: [],
};
