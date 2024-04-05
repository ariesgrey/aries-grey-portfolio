/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
	content: [
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: "selector",
	theme: {
		screens: {
			xs: "360px",
			sm: "480px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1540px",
		},
		colors: {
			transparent: "transparent",
			current: "currentColor",
			black: colors.black,
			white: colors.white,
			teal: {
				100: "#bfdfde",
				200: "#9fcfcf",
				300: "#80c0bf",
				400: "#60b1b0",
				500: "#40a2a0",
				600: "#209291",
				DEFAULT: "#008381",
				800: "#006d6b",
				900: "#005755",
				950: "#004140",
			},
			gray: {
				50: "#f3f4f4",
				light: "#e6e7e7",
				200: "#c5c6c6",
				300: "#a4a5a5",
				mid: "#838484",
				500: "#737474",
				600: "#626363",
				700: "#525353",
				800: "#414242",
				900: "#303131",
				dark: "#202121",
			},
			peach: {
				DEFAULT: "#d85d4f",
			},
			yellow: {
				DEFAULT: "#d7cd69",
			},
		},
		extend: {
			fontFamily: {
				sans: ["var(--font-syne)", ...defaultTheme.fontFamily.sans],
				mono: ["var(--font-space-mono)", ...defaultTheme.fontFamily.mono],
			},
			transitionDuration: {
				400: "400ms",
			},
			aria: {
				"current-page": "current='page'",
				"current-false": "current='false'",
			},
		},
	},
	plugins: [],
};
