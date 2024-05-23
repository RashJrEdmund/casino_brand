import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "app-gold": {
          500: "var(--app-gold-500)",
        },
        "app-red": {
          500: "var(--app-red-500)",
        },
        "app-purple": {
          500: "var(--app-purple-500)",
          400: "var(--app-purple-400)",
        },
      },
      spacing: {
        17: "4.5rem",
        21: "5.5rem", // since p-20 is 5rem
        "app-max-w": "var(--app-max-w)",
        "app-dynamic-max-w": "var(--app-dynamic-max-w)",
        "app-section-min-w": "var(--app-section-min-w)",
      }
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      // for adding custom utilities. // https://tailwindcss.com/docs/plugins

      const newUtilities = {
        ".grid-auto-fill-400": {
          "grid-template-columns": "repeat(auto-fill, minmax(400px, 1fr))",
        },
        ".grid-auto-fill-500": {
          "grid-template-columns": "repeat(auto-fill, minmax(500px, 1fr))", // using min(500px, 97vw) to attempt responsiveness
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};

export default config;
