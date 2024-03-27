import { Montserrat, Inconsolata } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-montserrat",
});

const inconsolata = Inconsolata({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inconsolata",
});

export const metadata = {
	title: "Aries Grey Portfolio",
	description: "Aries Grey Richards' software engineering portfolio website",
};

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			className={`${montserrat.variable} ${inconsolata.variable}`}>
			<body>{children}</body>
		</html>
	);
}
