import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { tv } from 'tailwind-variants'

import pageLogo from '@/../public/images/logo.svg'
import HeaderMenu from '@/components/menu/HeaderMenu'
import { getSocialInfo } from '@/services/overview-info'

const headerStyles = tv({
	slots: {
		container: 'sticky top-0 z-100 h-20 w-dvw',
		wrapper: 'relative flex h-full items-center justify-between px-6',
		logoLink: '',
		logoImage: '',
		menuButton: 'flex-center h-10 w-10',
	},
})

const headerHoverEffect = tv({
	base: 'transition-base cursor-pointer hover:scale-110 hover:drop-shadow-[0_0_5px_var(--color-text-base)] ',
})

const headerBlurLayer = tv({
	slots: {
		blurContainer: 'pointer-events-none fixed top-0 left-0 z-50 h-24 w-dvw',
		blurWrapper: 'relative h-full w-full',
		blurLayer1:
			'absolute top-0 left-0 z-1 h-full w-full mask-b-from-black mask-b-from-30% mask-b-to-80% backdrop-blur-[4px]',
		blurLayer2:
			'absolute top-0 left-0 h-full w-full mask-b-from-black mask-b-from-60% backdrop-blur-[2px]',
	},
})

export default async function Header() {
	const { container, wrapper, logoLink, logoImage } = headerStyles()
	const { blurContainer, blurWrapper, blurLayer1, blurLayer2 } =
		headerBlurLayer()

	const socialItems = await getSocialInfo()

	return (
		<React.Fragment>
			<header id='header' className={container()}>
				<div className={wrapper()}>
					<Link
						href='/'
						aria-label='Home Page'
						title='Direct to Home page'
						className={logoLink()}
					>
						<Image
							src={pageLogo}
							alt=''
							height={40}
							className={logoImage({ class: headerHoverEffect() })}
							loading='eager'
							priority={true}
							fetchPriority='high'
						/>
					</Link>
					<HeaderMenu socialMediaList={socialItems} />
				</div>
			</header>
			<div className={blurContainer()}>
				<div className={blurWrapper()}>
					<div className={blurLayer1()}></div>
					<div className={blurLayer2()}></div>
				</div>
			</div>
		</React.Fragment>
	)
}
