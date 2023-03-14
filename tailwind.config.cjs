/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        arcaRed: {
          500: '#E8244C',
          700: '#CE153B'
        }
      },
      lineHeight: {
        11: "2.75rem",
        12: "2.85rem",
        13: "2.95rem"
      },
    },
    minHeight: {
      'screen': ['100vh', '100dvh'],
    }
  },
  plugins: [require("tw-elements/dist/plugin")],
}
