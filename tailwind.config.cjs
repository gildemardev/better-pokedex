/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				title: "#CCCFD4",
				highlight: "#FFAD31",
				subtitle: "#717171",
				dark: "#707070",
				bug: "#729F3F",
				fighting: "#D56723",
				fairy: "#FDB9E9",
			}
		},
	},
	plugins: [],
}
