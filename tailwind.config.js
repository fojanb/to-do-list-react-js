module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        main: "hsl(182, 25%, 50%, 0.1)",
      },
      textColor: {
        light: "#b1a8a3",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
