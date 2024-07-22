import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {      
      backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
    },
    colors: {
      "background": "#1A1A1A",
      "text": "#F1F1F1",
      "red": "#FF444C",
      "yellow": "#CEB733",
      "grey": "#585858",
      "lines": "#F1F1F1",
      "orange": "#FF8C00", 
      "white": "#FFFFFF",
      "black": "#000000"
    }
  },
  plugins: [],
};
export default config;
