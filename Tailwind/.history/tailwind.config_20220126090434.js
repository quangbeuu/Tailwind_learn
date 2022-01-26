module.exports = {
  mode: "jit",
  content: [
    './*.html', './*.{js,jsx,ts,tsx,vue,html}',
  ],
  darkMode:'class',
  theme: {
    extend: {
      spacing:{
        35: "35px"
      }
    },
  },
  plugins: [],
}
