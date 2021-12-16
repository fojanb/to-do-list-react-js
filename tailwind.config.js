module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        main: "hsl(182, 25%, 50%, 0.1)",
        fbg:"rgba(96, 157, 159, 0.158)"
      },
      textColor: {
        light: "#b1a8a3",
      },
      colors: {
        greeny: "#2a9d8f",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
