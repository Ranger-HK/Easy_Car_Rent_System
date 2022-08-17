/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: '#root',
  theme: {
    extend: {

      backgroundImage:{
        'hero-pattern':"url('assets/images/wall2.jpg')",
        'bgImg':"url('assets/images/backwall.jpg')"

      },
      fontFamily:{
        'dosis':"'Dosis',sans-serif",
        'roboto':"'Roboto Condensed', sans-serif",
      },
    },
  },
  plugins: [],
}
