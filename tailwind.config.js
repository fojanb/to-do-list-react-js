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

/*  title_color: "f4cd7c",
icon_color: "73d0ff",
text_color: "c7c8c2",
bg_color: "1f2430",*/