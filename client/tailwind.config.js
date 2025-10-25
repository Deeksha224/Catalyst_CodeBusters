export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        shine: {
          "0%": { "background-position": "100%" },
          "100%": { "background-position": "-100%" },
        },
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        shine: "shine 5s linear infinite",
        gradient: "gradient 8s linear infinite",
      },
      fontFamily: {
        monts: "Montserrat",
        bruno: "Bruno Ace",
        zen: "Zen Dots",
        michroma: "Michroma",
        orbitron: "Orbitron",
        space: "Space Grotesk",
      },
    },
  },
  plugins: [],
};
