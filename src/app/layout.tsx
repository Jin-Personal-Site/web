import { ReactLenis } from 'lenis/react'
import { Viewport } from 'next'
import { EB_Garamond, Lexend } from 'next/font/google'
import React from 'react'

import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import ThemeProvider from '@/components/providers/ThemeProvider'
import '@/styles/global.css'

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
		<ThemeProvider>
			<html
				lang='en'
				className={`scroll-smooth ${sansSerifFont.variable} ${serifFont.variable}`}
			>
				<head>
					<script
						dangerouslySetInnerHTML={{
							__html: `
							(function () {
								try {
									let theme = localStorage.getItem('theme')
									if (!theme) {
										theme = 'system'
										localStorage.setItem('theme', theme)
									}
									const meta = document.createElement('meta')
									meta.setAttribute('name', 'site-theme')
									meta.setAttribute('content', theme)
									document.getElementsByTagName('head')[0].appendChild(meta)
								} catch (exception) {
									console.warn('Init theme failed', exception)
								}
							})()
						`,
						}}
					></script>
				</head>
				<body className='flex min-h-lvw flex-col antialiased'>
					<ReactLenis root>
						<Header />
						<main className='flex-1'>{children}</main>
						<Footer />
					</ReactLenis>
				</body>
			</html>
		</ThemeProvider>
	)
}
