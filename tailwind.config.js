/** @type {import('tailwindcss').Config} */
/*
npx tailwindcss -i ./styles/input.css -o ./styles/output.css --watch
*/
module.exports = {
  content: ["./components/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}