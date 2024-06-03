import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Nunito Variable"', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: []
};
