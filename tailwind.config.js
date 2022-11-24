/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "mainOrange": "hsl(26, 100%, 55%)",
        "lightOrange": "hsl(25, 100%, 94%)",
      },
      fontFamily: {
        KumbhSans: ["KumbhSans", "sans-serif"]
      },
      
    },
  },
  plugins: [],
}
