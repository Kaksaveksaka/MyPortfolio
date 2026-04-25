/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        night: "#050816",
        panel: "#0d1323",
        panelAlt: "#111a2d",
        edge: "#22314b",
        mist: "#e7eefb",
        muted: "#8d9ab3",
        cyan: "#65e6ff",
        lime: "#c9ff73",
        amber: "#ffb86c",
      },
      fontFamily: {
        sans: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(101, 230, 255, 0.08), 0 24px 60px rgba(2, 8, 23, 0.55)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "0.95" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        "pulse-soft": "pulseSoft 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};