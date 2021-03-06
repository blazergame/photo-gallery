module.exports = {
  theme: {
    extend: {
      gridTemplateRows: {
        // Simple 8 row grid
       '2.5': 'repeat(2.5, minmax(0, 1fr))'
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'card-gray': '#FEEBE6',
      })
    }
  },
  variants: {},
  plugins: [],
}
