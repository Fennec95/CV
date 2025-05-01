/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ["'Cormorant Garamond'", "serif"],
        crimson: ["'Crimson Pro'", "serif"],
        garamond: ["'EB Garamond'", "serif"],
        uncial: ["'Uncial Antiqua'", "cursive"],
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
