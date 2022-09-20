const { url } = require("inspector")

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Korolev", "Roboto", "sans-serif"],
      },
      backgroundImage: {
        "home-bg": 'url("/images/home-bg.png")',
        "roadmap-bg": 'url("/images/background-image.png")',
        "roadmap-mask": 'url("/images/roadmap/mask.png")',
      },
      colors: {
        purple: {
          light: "#7233ff",
          dark: "#451087",
          med: "#7134fe",
        },
        orange: "#F05E17"
      },
    },
  },
  plugins: [],
}
