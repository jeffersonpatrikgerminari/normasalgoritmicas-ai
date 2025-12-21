import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#111827",
        slate: "#4B5563",
        surface: "#F9FAFB",
        accent: "#1E3A8A",
        accent2: "#065F46",
      },
    },
  },
  plugins: [],
} satisfies Config;
