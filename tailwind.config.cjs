/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Orange: "hsl(26, 100%, 55%)",
        Paleorange: "hsl(25, 100%, 94%)",
        Verydarkblue: "hsl(220, 13%, 13%)",
        Darkgrayishblue: "hsl(219, 9%, 45%)",
        Grayishblue: "hsl(220, 14%, 75%)",
        Lightgrayishblue: "hsl(223, 64%, 98%)"
      }
    },
  },
  plugins: [],
}
