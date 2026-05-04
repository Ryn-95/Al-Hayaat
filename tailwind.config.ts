import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "var(--green)",
        "green-dark": "var(--green-dark)",
        "green-tint": "var(--green-tint)",
        brown: "var(--brown)",
        parchment: "var(--parchment)",
        "parchment-dark": "var(--parchment-dark)",
        ink: "var(--ink)",
        dust: "var(--dust)",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        playfair: ["var(--font-playfair)", "serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
