/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        "desktop": "1440px"
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"]
      },
      colors: {
        "purple-600": "var(--purple-600)",
        "orange-300":"var(--orange-300)",
        "blue-300": "var(--blue-300)",
        "pink-400":"var(--pink-400)",
        "green-400":"var(--green-400)",
        "purple-700":"var(--purple-700)",
        "yellow-300":"var(--yellow-300)",

        "navy-950":"var(--navy-950)",
        "navy-900":"var(--navy-900)",
        "purple-500":"var(--purple-500)",
        "navy-200":"var(--navy-200)",
        "navy-500":"var(--navy-500)",
      },
      borderRadius: {
        "card-radius": "var(--card-radius)"
      }
    },
  },
  plugins: [],
}

