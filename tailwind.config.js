/** @type {import('tailwindcss').Config} */
module.exports = {
  content:[ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [

    function ({ addUtilities }) {
      const newUtilities = {
        '.move-square': {
          animation: 'spinSquare 2s linear infinite',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}

