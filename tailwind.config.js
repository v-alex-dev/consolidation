/** @type {import('tailwindcss').Config} **/
module.exports = {
  content: [
    './index.html',
    './app.js',
    './**/*.js'],
  theme: {
    extend: {
      gridTemplateRows: {
        // Simple 8 row grid
        '3': '2fr 1.5fr 0.5fr',

        // Complex site-specific row configuration
        'layout': '200px minmax(900px, 1fr) 100px',
      },
      
    },
  },
  plugins: [],
}

