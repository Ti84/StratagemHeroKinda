/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "25%": { transform: "translateX(5px)" },
          "50%": { transform: "translateX(-5px)" },
          "75%": { transform: "translateX(5px)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        wiggle: 'wiggle 0.25s linear infinite',
      },
      colors: {
        'purple': '#27005a',
        'darkpurple': '#150030',
        'brightblue': '#00d0de',
      },
    },
  },
  plugins: [],
};
