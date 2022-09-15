/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#E38B29",
        "purple-dark": "#000131",
        hvid: "#FDFDFD",
        blaa: "#06EEF2",
        groen: "#04EA11",
        lyseroed: "#F900FE",
        tekstboks: "#C93AA2",
        bygning: "#92A0A9",
      },
    },
    fontFamily: {
      notoSans: "Noto Sans, sans-serif",
      oswald: "Oswald, sans-serif",
      inter: "Inter, sans-serif",
      rubik: "Rubik Dirt, sans-serif",
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
