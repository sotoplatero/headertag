const colors = require('tailwindcss/colors')
const config = {
	mode: "jit",
	purge: [
		"./src/**/*.{html,js,svelte,ts}",
	],
	theme: {
		colors: {...colors},
		extend: {},
	},
	plugins: [
		require('@tailwindcss/line-clamp')
	],
};

module.exports = config;
