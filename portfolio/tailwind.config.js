/** @type {import('tailwindcss').Config} */
export default {
  content: ["../public/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'red-600': '#DC0B2D'
      }
    },
  },
  plugins: [],
}

