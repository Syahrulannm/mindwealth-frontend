/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      //gradient color
      backgroundImage: {
        "gradient-custom": "linear-gradient(to right, #0284c7, #0ea5e9)", //blue-500 ke sky-500
        "gradient-custom-hover": "linear-gradient(to right, #0ea5e9, #0284c7)", //blue-500 ke sky-500

        //Tambah variasi lain
      },
      //Colors
      colors: {
        primary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        secondary: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
      },
      // typography
      typography: {
        dark: {
          css: {
            color: "#e5e7eb",
            a: { color: "#93c5fd" },
            strong: { color: "#facc15" },
          },
        },
      },
      //google fonts
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Georgia", "serif"],
      },
    },
  },
  plugins: [
    //gradient color
    function ({ addUtilities }) {
      addUtilities({
        ".gradient-text": {
          backgroundClip: "text",
          "-webkit-background-clip": "text",
          color: "transparent",
        },
      });
    },
    require("@tailwindcss/typography"),
  ],
};
