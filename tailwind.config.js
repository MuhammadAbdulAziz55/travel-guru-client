/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      margin: {
        "15%": "15%",
      },
      colors: {
        des: "#750d7b",
        btnBooking: "#ffa500",
      },
      flexBasis: {
        "3/6": "58%",
      },
    },
  },
  plugins: [],
};
