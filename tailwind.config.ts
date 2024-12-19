import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: "#1C7DD9",
        customDark: "#1A202C",
        gray: colors.gray,
        slate: colors.slate,
      },
    },
  },
  plugins: [require("tailgrids/plugin")],
};

export default config;
