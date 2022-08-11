/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				mypurple: '#6a59d1',
				myblack: '#0e2431',
			}
		},
	},
	plugins: [],
}
