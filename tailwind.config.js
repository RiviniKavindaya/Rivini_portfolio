/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7c6dfa",
        dark: "#07090f",
      },
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        dm: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}