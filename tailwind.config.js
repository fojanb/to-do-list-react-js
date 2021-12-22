module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        main: "#2d333b",
        fbg:"rgba(96, 157, 159, 0.158)"
      },
      textColor: {
        light: "#adbac7",
      },
      colors: {
        greeny: "#277da1",
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