/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      md: "640px",
      desktop: "1280px",
    },
    extend: {},
  },
  plugins: [],
};
