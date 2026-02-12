/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#001B4D",
          dark: "#002366",
        },
        secondary: {
          DEFAULT: "#0056D2",
          bright: "#3B82F6",
        },
        accent: "#00A3FF",
        "background-light": "#F8FAFC",
        "background-dark": "#0F172A",
      },
      fontFamily: {
        display: ["Plus Jakarta Sans", "Poppins", "Inter", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        'xl': '1rem',
        '2xl': '2rem',
      },
    },
  },
  plugins: [],
}
