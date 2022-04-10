const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './src/**/*.{js,jsx}',
    './node_modules/flowbite/**/*.js'
  ],
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/forms')
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.teal[500],
        secondary: colors.amber[400],
      },
    },
  },
};
