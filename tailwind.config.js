module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        main: ['Roboto']
      },
      colors: {
        blue: {
          primarygrad: '#495bfc',
          secondarygrad: '#114188'
        },
        word: {
          03: '#fbfbfb',
          04: '#6c86ad8c',
          05: '#6c86ad',
          06: '#fbfbfbbf',
          07: '#fbfbfb'
        },
        back: {
          01: '#06070a',
          02: '#131823',
          03: '#060a1080',
          04: '#06070ab8',
          05: '#06070a',
          06: '#06070abf',
          07: '#06070a',
          08: '#060a1080',
          09: '#131823',
          10: '#06070abf'
        }
      }
    }
  },
  variants: {
    extend: {
      margin: ['first', 'last'],
      transitionProperty: ['hover', 'focus']
    }
  },
  plugins: []
}
