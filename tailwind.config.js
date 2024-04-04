/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}", // Tremor module
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.violet,
        "theme-orange": "#df711a",
        "theme-light-blue": "#64CACF",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@headlessui/tailwindcss"),
    require("@tushargugnani/tailwind-group-peer-checked"),
  ],
};
