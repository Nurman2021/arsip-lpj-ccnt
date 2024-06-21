/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'lpj-teal': {
					200: '#81E6D9',
					300: '#4FD1C5'
				}
			}
		}
	},
	plugins: []
};
