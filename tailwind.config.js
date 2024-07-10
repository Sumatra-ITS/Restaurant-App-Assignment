/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        bl: '#12131A',
        'gr-2': '#F7F7F7',
        'gr-3': '#EBE7E7',
        'gr-4': '#9399A1',
        og: '#F64E0C'
      }
    }
  },
  extend: {},
  plugins: [],
}

