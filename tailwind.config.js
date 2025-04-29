/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      colors: {
        background: {
          DEFAULT: "#0f0f0f", // Deep dark background
          light: "#1a1a1a", // Slightly lighter for cards, sections
          lighter: "#252525", // For hover states, highlights
        },
        text: {
          DEFAULT: "#e6e6e6", // Off-white for main text
          muted: "#a3a3a3", // Muted/secondary text
          accent: "#f0f0f0", // Bright text for emphasis
        },
        accent: {
          DEFAULT: "#d4af37", // Gold accent color
          hover: "#e5c158", // Slightly lighter for hover states
        },
        border: {
          DEFAULT: "#333333", // Subtle border color
          light: "#444444", // Lighter border for contrast
        },
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        mono: ["var(--font-space-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
