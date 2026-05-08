import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#2B6140", // Vert profond islamique
          light: "#E6F0EA",
          dark: "#1A401A",
        },
        secondary: {
          DEFAULT: "#9A8C74", // Or vieilli / Sable
          light: "#EAE5DC",
          dark: "#6B5F4A",
        },
        beige: "#F8F6F0",
        cream: "#FCFAF6",
        text: {
          primary: "#1A1A1A",
          secondary: "#4A4A4A",
          muted: "#8A8A8A",
        },
        ink: "#111827",
        parchment: {
          DEFAULT: "#F9F8F6",
          dark: "#F0ECE1",
        },
        green: {
          DEFAULT: "#2D6A4F",
          dark: "#1B4332",
        },
        brown: {
          DEFAULT: "#8B7355",
          dark: "#5C4A3D",
        },
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        playfair: ["var(--font-playfair)", "serif"],
      },
      fontSize: {
        "display": ["clamp(2.5rem, 5vw, 4rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "h1": ["clamp(2rem, 4vw, 3rem)", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "h2": ["clamp(1.5rem, 3vw, 2.25rem)", { lineHeight: "1.3" }],
        "h3": ["clamp(1.25rem, 2vw, 1.75rem)", { lineHeight: "1.4" }],
      },
      borderRadius: {
        "card": "16px",
        "button": "8px",
      },
      boxShadow: {
        "card": "0 4px 20px -2px rgba(0, 0, 0, 0.05)",
        "card-hover": "0 12px 30px -4px rgba(0, 0, 0, 0.08)",
      }
    },
  },
  plugins: [],
} satisfies Config;
