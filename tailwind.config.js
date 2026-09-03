/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#f8fafc",
        card: "#ffffff",
        cardAlt: "#f1f5f9",
        cardMuted: "#e2e8f0",
        ink: "#0f172a",
        inkMuted: "#475569",
        inkLight: "#64748b",
        borderLight: "#e2e8f0",
        borderHover: "#cbd5e1",
        // Crisp accents
        amberAccent: "#f59e0b",
        amberDark: "#d97706",
        amberLight: "#fef3c7",
        cobaltAccent: "#2563eb",
        cobaltDark: "#1d4ed8",
        cobaltLight: "#eff6ff",
        emeraldAccent: "#10b981",
        emeraldDark: "#059669",
        emeraldLight: "#ecfdf5",
        roseAccent: "#f43f5e",
        roseDark: "#e11d48",
        roseLight: "#fff1f2",
        purpleAccent: "#8b5cf6",
        purpleLight: "#f5f3ff",
      },
      fontFamily: {
        sans: ["Outfit", "Plus Jakarta Sans", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Outfit", "sans-serif"],
        gaming: ["Plus Jakarta Sans", "Chakra Petch", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      boxShadow: {
        cardLight: "0 2px 10px -2px rgba(15, 23, 42, 0.05), 0 1px 3px -1px rgba(15, 23, 42, 0.04)",
        cardElevated: "0 10px 25px -4px rgba(15, 23, 42, 0.08), 0 4px 10px -2px rgba(15, 23, 42, 0.04)",
        cardHover: "0 20px 35px -6px rgba(15, 23, 42, 0.1), 0 6px 15px -3px rgba(15, 23, 42, 0.06)",
        // 3D tactile buttons
        "3d-amber": "0 3px 0 #b45309",
        "3d-cobalt": "0 3px 0 #1e40af",
        "3d-emerald": "0 3px 0 #047857",
        "3d-rose": "0 3px 0 #be123c",
        "3d-slate": "0 3px 0 #334155",
        "3d-white": "0 3px 0 #cbd5e1",
      },
      keyframes: {
        equalizer: {
          "0%, 100%": { height: "4px" },
          "50%": { height: "14px" },
        },
      },
      animation: {
        "equalizer-1": "equalizer 0.7s ease-in-out infinite 0.1s",
        "equalizer-2": "equalizer 0.7s ease-in-out infinite 0.3s",
        "equalizer-3": "equalizer 0.7s ease-in-out infinite 0.5s",
      },
    },
  },
  plugins: [],
};