/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fontJotiOne: ["font-joti"],
        fontInter: ["font-inter"],
      },
    },
  },
  plugins: [],
};
