/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      textColor: {
        light: "#000",
        dark: "#fff",
      },
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

