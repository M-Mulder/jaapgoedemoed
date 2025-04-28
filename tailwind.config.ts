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
        // Flat color structure instead of nested objects
        bgMain: "#0f0f0f", // Deep dark background
        bgLight: "#1a1a1a", // Slightly lighter for cards, sections
        bgLighter: "#252525", // For hover states, highlights
        
        textMain: "#e6e6e6", // Off-white for main text
        textMuted: "#a3a3a3", // Muted/secondary text
        textAccent: "#f0f0f0", // Bright text for emphasis
        
        accentMain: "#d4af37", // Gold accent color
        accentHover: "#e5c158", // Slightly lighter for hover states
        
        borderMain: "#333333", // Subtle border color
        borderLight: "#444444", // Lighter border for contrast
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
  darkMode: "class", // We'll set the site to always use dark mode
};

export default config;
