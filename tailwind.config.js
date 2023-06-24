/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      'navy-blue': "hsl(213, 96%, 18%)",
      'light-blue': "hsl(210, 22%, 49%)",
      "grayish-blue": "hsl(212, 33%, 89%)",
      'white': "hsl(0, 0%, 100%)",
      "off-white": "hsl(229, 24%, 87%)",
      'purplish': "hsl(243, 100%, 62%)",
      'marineB': "hsl(213, 96%, 18%)",
      'lightblue': "hsl(206, 94%, 87%)",
      'red': "hsl(354, 84%, 57%)",
      'blue': "#1fb6ff",
      'pink': "#ff49db",
      'orange': "#ff7849",
      'green': "#13ce66",
      "gray-dark": "#273444",
      'gray': "#8492a6",
      
    },
    fontFamily: {
      sans: ["ubuntu", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
