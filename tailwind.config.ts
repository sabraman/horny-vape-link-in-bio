import type { Config } from "tailwindcss";
import { Gajraj_One } from "next/font/google";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      gajraj: ["Gajraj One", "sans-serif"],
    },
    extend: {
      dropShadow: {
        "horny-sm": "0 0 5px rgba(255,24,124,0.7)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "horny-pink": "#ff187c",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
