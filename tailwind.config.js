/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'Alex': ["Alex Brush", "cursive"],
      'Prompt': ["Prompt", 'sans-serif'],
      'Sans': ["Nunito Sans", 'sans-serif'],
      'Cursive': ["Qwigley", 'cursive'],
      'Gov': ["Frijole", 'system-ui'],
    },
    extend: {},
  },
  plugins: [],
}