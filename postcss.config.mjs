/** @type {import('postcss-load-config').Config} */
const config = {
	plugins: {
		'@tailwindcss/postcss': {
			optimize: {
				minify: true,
			},
		},
		autoprefixer: {},
		...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
	},
}

export default config
