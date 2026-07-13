import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#f3f7f0",
          100: "#e3eddd",
          500: "#4f7a49",
          700: "#31552e",
          900: "#1c321d"
        },
        earth: "#b96d45",
        cream: "#faf7ee"
      },
      boxShadow: {
        soft: "0 18px 45px rgba(35, 55, 32, 0.10)"
      }
    }
  },
  plugins: []
} satisfies Config;
