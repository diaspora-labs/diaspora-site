module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Korolev", "Roboto", "sans-serif"],
      },
      backgroundImage: {
        "home-bg": 'url("/images/team-images/Dutty-Boukman.jpg")',
      },
      colors: {
        purple: {
          light: "#7233ff",
          dark: "#451087",
        },
      },
    },
  },
  plugins: [],
}
