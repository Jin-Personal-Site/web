import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	output: 'export',
	typescript: {
		tsconfigPath:
			process.env.NODE_ENV === 'production'
				? './tsconfig.build.json'
				: './tsconfig.json',
	},
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'localhost',
				port: '10000',
				pathname: '/jin-personal-site/**',
				search: '',
			},
		],
	},
}

export default nextConfig

