import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";

export default defineConfig({
	base: "/mxm-delote-beauty/",

	plugins: [
		react(),
		legacy({
			targets: ["defaults", "not IE 11"]
		})
	],

	resolve: {
		alias: [
			{
				find: /^(app|pages|widgets|features|entities|shared)/,
				replacement: fileURLToPath(new URL("./src/$1", import.meta.url))
			}
		]
	}
});
