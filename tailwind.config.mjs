import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			center: true,
			padding: '2rem',
		},
		extend: {
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
