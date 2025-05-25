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
		unoptimized: true,
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'localhost',
				port: '10000',
				pathname: '/jin-personal-site/**',
				search: '',
			},
			{
				protocol: 'https',
				hostname: 'picsum.photos',
			},
			// new URL('https://picsum.photos/**')
		],
		// domains: ['picsum.photos'],
	},
}

export default nextConfig
