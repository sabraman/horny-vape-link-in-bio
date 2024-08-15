import type { Config } from "tailwindcss";
import fluid, { extract, screens, fontSize } from "fluid-tailwind";

const config: Config = {
	content: {
		files: [
			"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
			"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
			"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		],
		extract,
	},
	theme: {
		fontFamily: {
			gajraj: ["Gajraj One", "sans-serif"],
		},
		screens: {
			xs: "20rem",
			...screens,
		},
		fontSize,
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
			animation: {
				border: "border 12s ease infinite",
			},
			keyframes: {
				border: {
					"0%, 100%": { backgroundPosition: "0% 50%" },
					"50%": { backgroundPosition: "100% 50%" },
				},
			},
			animationDuration: {
				"2s": "2s",
				"3s": "3s",
				"4s": "4s",
				"5s": "5s",
				"6s": "6s",
				"7s": "7s",
				"8s": "8s",
				"9s": "9s",
				"10s": "10s",
			},
		},
	},
	plugins: [require("tailwindcss-animate"), require("fluid-tailwind")],
};
export default config;
