export default function manifest() {
	return {
		name: "Aries Grey Development",
		short_name: "Aries Grey",
		description:
			"Aries Grey Richards' software development website and portfolio.",
		start_url: "/",
		display: "standalone",
		background_color: "#e6e7e7",
		theme_color: "#008381",
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
