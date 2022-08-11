/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4DB6AC",
        secondary: "#B8F2E3",
        black: '#000',
        white: '#fff',
      }
    },

  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}