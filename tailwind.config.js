module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  mode:'jit',
  theme: {
    extend: {
      backgroundImage: {
        'cats-chat': "url('/assets/img/Cat_Icon')"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
