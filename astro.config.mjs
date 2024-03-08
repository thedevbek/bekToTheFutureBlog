import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import tailwind from "@astrojs/tailwind";



// https://astro.build/config
export default defineConfig({
	site: 'https://bektothefuture.com/',
	integrations: [
		tailwind(),
		partytown({
			config: {
				forward: ["dataLayer.push"],
			},
		}),
		[mdx()],
	],
});