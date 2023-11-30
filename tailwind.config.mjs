/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'lobster': ['Lobster', 'sans-serif'],
			'quicksand': ['Quicksand', 'sans-serif'],
		colors: {
			'title': '#004f69',
			'dark': '#232b2b',
			'light': '#fbf6d2',
			'subTitle': '#29443a',
		},
	},
	plugins: [
		require('@tailwindcss/typography'),

		],
	}
}
