/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./distt/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
        'rubik': ['Rubik', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('../src/images/home_banner_lg_bg.png')",
        'about_banner': "url('../src/images/about_banner.png')",
      },



    },
  },
  plugins: [],
}