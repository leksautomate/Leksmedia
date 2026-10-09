import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--bg)",
        elevated: "var(--bg-elevated)",
        surface: "var(--surface)",
        border: "var(--border)",
        gold: {
          DEFAULT: "var(--gold)",
          soft: "var(--gold-soft)",
          dim: "var(--gold-dim)",
          glow: "var(--gold-glow)",
        },
        ink: {
          DEFAULT: "#f5f5f4",
          soft: "rgba(245, 245, 244, 0.7)",
          mute: "rgba(245, 245, 244, 0.4)",
        },
      },
      fontFamily: {
        serif: ["Instrument Serif", "Georgia", "serif"],
        sans: ["Inter", "-apple-system", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        display: ["Plus Jakarta Sans", "sans-serif"],
      },
      animation: {
        "border-beam": "border-beam 12s linear infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "orb-pulse": "orbPulse 3s ease-in-out infinite",
        "fade-in": "fadeIn 0.5s ease-out forwards",
      },
      keyframes: {
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
        orbPulse: {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(184, 150, 90, 0.3), 0 0 60px rgba(184, 150, 90, 0.1)",
          },
          "50%": {
            boxShadow: "0 0 35px rgba(184, 150, 90, 0.5), 0 0 90px rgba(184, 150, 90, 0.2)",
          },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
