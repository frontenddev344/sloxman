/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
        'rubik': ['Rubik', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('../build/images/home_banner_lg_bg.jpg')",
        'about_banner': "url('../build/images/about_banner.png')",
        'contact_bnr': "url('../build/images/contact_bnr.jpg')",
        'termn': "url('../build/images/termn.jpg')",
        'privacy': "url('../build/images/Privacy-.avif')",
      },



    },
  },
  plugins: [],
}

