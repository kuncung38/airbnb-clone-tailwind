/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        'custom-black': '#444444',
        'custom-grey' : '#666666',
      },
      scale: ['active'],
    },
  },
  plugins: [],
}
