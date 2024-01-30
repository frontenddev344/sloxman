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
        'contact_bnr': "url('../src/images/contact_bnr.jpg')",
        'termn': "url('../src/images/termn.jpg')",
        'privacy': "url('../src/images/Privacy-.avif')",
      },



    },
  },
  plugins: [],
}

