/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        '1150':"1150px",
        '1149':"1149px"
      }
    },
  },
  plugins: [],
}