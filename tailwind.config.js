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
        'hero-pattern': "url('images/home_banner_lg_bg.jpg')",
        'about_banner': "url('images/about_banner.png')",
        'contact_bnr': "url('images/contact_bnr.jpg')",
        'termn': "url('images/termn.jpg')",
        'privacy': "url('images/Privacy-.avif')",
      },

    },
  },
  plugins: [],
}

