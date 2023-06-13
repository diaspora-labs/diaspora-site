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
          nav: "#854EFF",
        },
        orange: "#F05E17",
        green: {
          hover: "#00AA8E",
        },
        gray: {
          med: "#98989A"
        }
      },
      screens: {
        "max-2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        "max-xl": { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        "max-lg": { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        "max-md": { max: "767px" },
        // => @media (max-width: 767px) { ... }

        "max-sm": { max: "639px" },
        "max-smm": { max: "430px" },
        // => @media (max-width: 639px) { ... }
      },
      transitionProperty: {
        height: "height",
      },
    },
  },
  plugins: [],
}
