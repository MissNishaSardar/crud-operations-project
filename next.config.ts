import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	reactCompiler: true,
	typedRoutes: true,
	images: {
		remotePatterns: [new URL("https://picsum.photos/200/**")],
	},
};

export default nextConfig;
