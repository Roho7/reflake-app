/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        base: {
          50: "#FEFFF9",
          100: "#EEF0DE",
          500: "#C8CDA2",
          700: "#6B6D59",
        },
        seal: {
          500: "#1A3746",
        },
        tangerine: {
          500: "#E75529",
        },
        mango: {
          500: "#F1A63B",
        },
      },
    },
  },
  plugins: [],
};
