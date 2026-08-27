/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F5F3EF",
          100: "#EAE6E0",
          200: "#D5CCC4",
          900: "#080808",
        },
        secondary: {
          100: "#A8A39A",
          200: "#9A9590",
          300: "#8C8680",
        },
        accent: {
          50: "#FFD666",
          100: "#FFC854",
          200: "#FFB52E",
          300: "#D4872B",
          400: "#8B5620",
        },
        surface: {
          50: "#11100F",
          100: "#1A1915",
          200: "#2A261F",
          300: "#3A3530",
        },
      },
      spacing: {
        22: "5.5rem",
        26: "6.5rem",
      },
      fontFamily: {
        sans: ["Inter", "Segoe UI", "sans-serif"],
        display: ["Sora", "Inter", "sans-serif"],
        mono: ["IBM Plex Mono", "Consolas", "monospace"],
      },
    },
  },
  plugins: [],
};
