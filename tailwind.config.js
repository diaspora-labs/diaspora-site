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
        "home-bg-labs": 'url("/images/background-image-labs.png")',
        "roadmap-bg": 'url("/images/background-image.png")',
        "roadmap-mask": 'url("/images/roadmap/mask.png")',
        "gradient-radial": 'radial-gradient(var(--tw-gradient-stops))',
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
          med: "#98989A",
          ligth: "#313131",
          dark: "#54565A",
        },
        custom: {
          black: "#451087",
          purple: "#7233ff",
          overlay: "#313131",
          zinc: "#313131",
          light: "#321672",
          dark: "#070311"
        },
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
