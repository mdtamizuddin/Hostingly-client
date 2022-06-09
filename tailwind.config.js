module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#392D69",

          "secondary": "#B57BEE",

          "accent": "#212121",

          "neutral": "#888D92",

          "base-100": "#FFFFFF",

          "info": "#3ABFF8",

          "success": "#36D399",

          "warning": "#ECB460",

          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
