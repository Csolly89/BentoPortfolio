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
    extend: {
      keyframes: {
        'border-spin': {
          '100%': {
            transform: 'rotate(-360deg)',
          },
        },
      },
      animation: {
        'border-spin': 'border-spin 7s linear infinite'
      }
    },
  },
  plugins: [],
}