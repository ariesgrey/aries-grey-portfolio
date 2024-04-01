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
			...defaultTheme.screens,
		},
		colors: {
			transparent: "transparent",
			current: "currentColor",
			black: colors.black,
			white: colors.white,
			teal: {
				100: "#bfe1e0",
				200: "#9fd1d1",
				300: "#80c2c1",
				400: "#60b3b2",
				500: "#40a4a2",
				600: "#209493",
				DEFAULT: "#008583",
				800: "#006f6d",
				900: "#005957",
				950: "#004342",
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
				600: "#414242",
				900: "#303131",
				dark: "#202121",
			},
		},
		extend: {
			fontFamily: {
				sans: ["var(--font-syne)", ...defaultTheme.fontFamily.sans],
				mono: ["var(--font-space-mono)", ...defaultTheme.fontFamily.mono],
			},
		},
	},
	plugins: [],
};
