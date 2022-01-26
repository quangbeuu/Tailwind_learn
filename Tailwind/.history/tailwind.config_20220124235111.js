module.exports = {
  mode: "jit"
  content: [
    './*.html', './*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      spacing:{
        35: "35px"
      }
    },
  },
  plugins: [],
}
