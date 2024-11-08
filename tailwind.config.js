/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#1A73E8",
        secondary: "#0C1A2E",
        tertiary: "#4D9FEC",
        black: "#0e0a0a",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      screens: {
        sm: "500px",
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
