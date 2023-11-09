/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: '#F2C033',
        secondary: '#045285',
        dark: '#1A1A1A',
      },
    },
    fontFamily: {
      rubik: ['Rubik', 'system-ui'],
      poppins: ['Poppins', 'system-ui'],
      roboto: ['Roboto', 'system-ui'],
      karla: ['karla', 'system-ui'],
    },
  },
  plugins: [],
};
