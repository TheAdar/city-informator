const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      'sans': ['Mulish', ...fontFamily.sans],
      'serif': ['Mulish', ...fontFamily.serif],
      'mono': ['Mulish', ...fontFamily.mono],
    },
    extend: {
      keyframes: {
        test: {
          '0%': {
            top: '40%',

          },

          '100%': {
            top: 10,
          },

        }
      },
      animation: {
        test: 'test 0.2s'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
};