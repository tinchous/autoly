/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // COLORES DEL LOCAL
        black:  "#000000",
        fire:   "#E63946",
        orange: "#F4A261",
        neon:   "#FF00FF",
        // FIX DEL ERROR: gray-500 ahora existe
        gray: {
          500: "#6B7280"
        }
      },
    },
  },
  plugins: [],
}
