/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
	content: [
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
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
				100: "#d0dfdf",
				200: "#b8cfcf",
				light: "#a0bfbf",
				400: "#84acac",
				500: "#679898",
				600: "#4b8585",
				700: "#2e7171",
				DEFAULT: "#125e5e",
				900: "#0e4b4b",
				950: "#092f2f",
			},
			gray: {
				50: "#f5f5f6",
				100: "#e6e6e7",
				200: "#cfd0d2",
				light: "#aeafb2",
				400: "#85868b",
				500: "#6a6b70",
				600: "#5a5b60",
				700: "#4d4d51",
				DEFAULT: "#444546",
				900: "#323234",
				950: "#252527",
			},
		},
		extend: {
			fontFamily: {
				sans: ["var(--font-montserrat)", ...defaultTheme.fontFamily.sans],
				mono: ["var(--font-inconsolata)", ...defaultTheme.fontFamily.mono],
			},
		},
	},
	plugins: [],
};
