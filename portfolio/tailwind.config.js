/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "../public/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        'red-600': '#DC0B2D'
      }
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
}

