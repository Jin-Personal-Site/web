import type { NextConfig } from 'next'

console.log(process.env.DATABASE_URL)
const nextConfig: NextConfig = {
	output: 'export',
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

