/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'nav-side': "url(src/assets/img/beams.jpg)"
      }
    },
  },
  plugins: [
    daisyui
  ],
}