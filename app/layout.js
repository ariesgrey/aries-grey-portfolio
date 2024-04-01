import { Syne, Space_Mono } from "next/font/google";
import "./globals.css";

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

export const metadata = {
	title: "Aries Grey Development",
	description:
		"Aries Grey Richards' software development website and portfolio.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={`${syne.variable} ${space_mono.variable}`}>
			<body>{children}</body>
		</html>
	);
}
