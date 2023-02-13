/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-main": "url(../src/assets/)",
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
        bgColor: "#151515",
      },
    },
    fontFamily: {
      helvetica: ["Helvetica Neue, sans-serif"],
    },
    screens: {
      sm: { min: "375px", max: "767px" },
      md: { min: "768px", max: "1439px" },
      lg: { min: "1440px" }, 
    },
  },
  plugins: [],
};