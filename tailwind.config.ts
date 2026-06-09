import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        nova: {
          black: "#0A0617",
          ink: "#10091f",
          plum: "#2D0B5F",
          violet: "#6A00FF",
          electric: "#6A00FF",
          bright: "#B200FF",
          lilac: "#C084FC",
          fuchsia: "#FF3DFF",
          pink: "#FF6CF0",
          gold: "#FBBF24",
          amber: "#F59E0B",
          soft: "#f7f2ff"
        }
      },
      boxShadow: {
        glow: "0 28px 100px rgba(255, 61, 255, 0.32)",
        gold: "0 20px 70px rgba(251, 191, 36, 0.32)"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"]
      }
    }
  },
  plugins: []
};

export default config;
