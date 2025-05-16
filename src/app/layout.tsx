import '@/styles/global.css'

import { Viewport } from 'next'
import { EB_Garamond, Lexend } from 'next/font/google'
import React from 'react'

import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'

export const viewport: Viewport = {
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: '#ffffff' },
		{ media: '(prefers-color-scheme: dark)', color: '#0d0d0d' },
	],
}

const sansSerifFont = Lexend({
	subsets: ['latin', 'vietnamese'],
	weight: ['800', '700', '600', '500', '400'],
	variable: '--font-sans',
	display: 'swap',
})

const serifFont = EB_Garamond({
	subsets: ['latin', 'vietnamese'],
	weight: ['800', '700', '600', '500', '400'],
	variable: '--font-serif',
	style: ['normal', 'italic'],
	display: 'swap',
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang='en'
			className={`scroll-smooth ${sansSerifFont.variable} ${serifFont.variable}`}
		>
			<body className='flex min-h-lvw flex-col antialiased'>
				<Header />
				<main className='flex-1'>{children}</main>
				<Footer />
			</body>
		</html>
	)
}
