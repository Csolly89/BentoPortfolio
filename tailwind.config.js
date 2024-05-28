const plugin = require('tailwindcss');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'Alex': ["Alex Brush", "cursive"],
      'Prompt': ["Cormorant", 'serif'],
    },
    extend: {
      colors: {
        textwhite: "#fffbfe",
        charcoal: "#424b54",
        eerie: "#111d13",
        primary: "#244f26",
        secondary: "#3b1c32",
        accent: "#149911",
      },
      },
      
    },
  };
  plugin;