import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: ["var(--font-bebas)", "cursive"],
        syne: ["var(--font-syne)", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
      colors: {
        accent: "#4d9fff",
        accent2: "#ff4d6d",
        accent3: "#4dffcb",
        dark: {
          bg: "#0a0a0a",
          bg2: "#111111",
          bg3: "#181818",
          border: "#2a2a2a",
          text: "#f0ede6",
          muted: "#aaaaaa",
        },
        light: {
          bg: "#f5f3ef",
          bg2: "#ede9e3",
          bg3: "#e4e0d8",
          border: "#d0ccc4",
          text: "#111111",
          muted: "#666666",
        },
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scrollLine: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.2" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.8s ease both",
        scrollLine: "scrollLine 2s infinite",
      },
    },
  },
  plugins: [],
};

export default config;
