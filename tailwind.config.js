// tailwind.config.js
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class', // or 'media' or 'class'
  mode: "jit",
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};