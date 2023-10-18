/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "fira": "'Fira Sans', sans-serif"
      },
      backgroundImage: {
        'hero-bg': "url('/banner1.jpg')",
      }
    },
  },
  plugins: [require("daisyui")],
}

