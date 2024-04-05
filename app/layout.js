import { Syne, Space_Mono } from "next/font/google";
import "./globals.css";
import Menu from "@/components/Menu";

// Fonts
const syne = Syne({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-syne",
});

const space_mono = Space_Mono({
	subsets: ["latin"],
	weight: ["400", "700"],
	display: "swap",
	variable: "--font-space-mono",
});

// Metadata
export const metadata = {
	title: "Aries Grey Development",
	description:
		"Aries Grey Richards' software development website and portfolio.",
	icons: {
		icon: [
			{
				media: "(prefers-color-scheme: light)",
				url: "/favicon-light.ico",
			},
			{
				media: "(prefers-color-scheme: light)",
				url: "/icon-light.png",
			},
			{
				media: "(prefers-color-scheme: dark)",
				url: "/favicon-dark.ico",
			},
			{
				media: "(prefers-color-scheme: dark)",
				url: "/icon-dark.png",
			},
		],
		apple: "/apple-icon.png",
	},
};

// Navigation
const navigation = [
	{
		name: "Home",
		href: "/",
	},
	{
		name: "About",
		href: "/about",
	},
	{
		name: "Portfolio",
		href: "/portfolio",
	},
	{
		name: "Contact",
		href: "/contact",
	},
];

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={`${syne.variable} ${space_mono.variable}`}>
			<body className="bg-gray-light text-gray-dark">
				<Menu navigation={navigation} />
				{children}
			</body>
		</html>
	);
}
