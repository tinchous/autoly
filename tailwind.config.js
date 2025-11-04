/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: "#00ffea",
        "fire-red": "#ff2d00",
        "orange-500": "#ff6b00",
      },
    },
  },
  plugins: [],
}
