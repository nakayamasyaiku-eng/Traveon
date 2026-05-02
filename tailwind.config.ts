import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5FA8F5",
        accent: "#0A2A66",
        textPrimary: "#111111",
        textSecondary: "#666666",
        traveon: {
          50: "#f4f8ff",
          100: "#e8f0ff",
          200: "#cddbf0",
          800: "#173d73",
          950: "#0A1F3C",
        },
      },
      boxShadow: {
        glass: "0 8px 24px rgba(0,0,0,0.08)",
        'glass-hover': "0 12px 32px rgba(0,0,0,0.12)",
        soft: "0 24px 70px rgba(10,31,60,0.10)",
      },
      transitionTimingFunction: {
        apple: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      keyframes: {
        flight: {
          "0%": { strokeDashoffset: "1000", opacity: "0" },
          "10%": { opacity: "0.6" },
          "80%": { strokeDashoffset: "0", opacity: "0.6" },
          "100%": { strokeDashoffset: "0", opacity: "0.3" },
        },
      },
      animation: {
        "flight-path": "flight 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards",
      },
    },
  },
  plugins: [],
};
export default config;
