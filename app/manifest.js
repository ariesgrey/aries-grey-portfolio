export default function manifest() {
	return {
		name: "Aries Grey Portfolio",
		short_name: "Aries Grey",
		description: "Aries Grey's software engineering portfolio website",
		start_url: "/",
		display: "standalone",
		background_color: "#f5f5f6",
		theme_color: "#125E5E",
		icons: [
			{
				src: "/icon-192.png",
				sizes: "192x192",
				type: "image/png",
			},
			{
				src: "/icon-512.png",
				sizes: "512x512",
				type: "image/png",
			},
		],
	};
}
