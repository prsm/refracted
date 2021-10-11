const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/components/**/*.tsx'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui'],
    },
    extend: {
      colors: {
        gray: colors.trueGray,
        'ui-lila': '#B375FF',
        'ui-violett': '#7875FF',
        'ui-blue': '#75D8FF',
        'ui-green': '#64ff64',
        'ui-yellow': '#EBFF6B',
        'ui-orange': '#FFB56B',
        'ui-red': '#FF6968',
        'brand-sapling': {
          50: '#fdfdfb',
          100: '#fcfbf8',
          200: '#f7f6ec',
          300: '#f2f0e1',
          400: '#e9e4cb',
          500: '#DFD9B4',
          600: '#c9c3a2',
          700: '#a7a387',
          800: '#86826c',
          900: '#6d6a58',
        },
        'brand-olive': {
          50: '#fcfdfb',
          100: '#f9faf8',
          200: '#f1f3ed',
          300: '#e8ece1',
          400: '#d7ddcb',
          500: '#C6CFB5',
          600: '#b2baa3',
          700: '#959b88',
          800: '#777c6d',
          900: '#616559',
        },
        'brand-green': {
          50: '#fdfefa',
          100: '#fafdf5',
          200: '#f3fae6',
          300: '#ebf7d7',
          400: '#ddf0b8',
          500: '#CEEA9A',
          600: '#b9d38b',
          700: '#9bb074',
          800: '#7c8c5c',
          900: '#65734b',
        },
        'brand-white': '#FFFFFF',
        'brand-black': '#000000',
        'brand-main': {
          50: '#fff8f8',
          100: '#fff0f0',
          200: '#ffdada',
          300: '#ffc3c3',
          400: '#ff9696',
          500: '#FF6969',
          600: '#e65f5f',
          700: '#bf4f4f',
          800: '#993f3f',
          900: '#7d3333',
        },
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [],
};
