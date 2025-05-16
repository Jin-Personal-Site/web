import Image from 'next/image'
import Link from 'next/link'
import { FiCommand } from 'react-icons/fi'
import { tv } from 'tailwind-variants'

import pageLogo from '@/../public/images/logo.svg'
import React from 'react'

const headerHoverEffect = tv({
	base: 'transition-base cursor-pointer hover:scale-110 hover:drop-shadow-[0_0_5px_var(--color-text-base)] ',
})

export default function Header() {
	return (
		<React.Fragment>
			<header id='header' className='sticky top-0 z-20 h-20 w-dvw'>
				<div className='relative flex h-full items-center justify-between px-6'>
					<Link href='/' aria-label='Home Page' title='Direct to Home page'>
						<Image
							src={pageLogo}
							alt=''
							height={42}
							className={`${headerHoverEffect()}`}
							loading='eager'
							priority={true}
							fetchPriority='high'
						/>
					</Link>
					<button
						className={`flex-center h-10 w-10 ${headerHoverEffect()}`}
						aria-label='Menu'
						title='Toggle Menu'
					>
						<FiCommand size={24} />
					</button>
				</div>
			</header>
			<div className='pointer-events-none fixed top-0 left-0 z-10 h-24 w-dvw'>
				<div className='relative h-full w-full'>
					<div className='absolute top-0 left-0 z-1 h-full w-full mask-b-from-black mask-b-from-30% mask-b-to-80% backdrop-blur-[4px]'></div>
					<div className='absolute top-0 left-0 h-full w-full mask-b-from-black mask-b-from-60% backdrop-blur-[2px]'></div>
				</div>
			</div>
		</React.Fragment>
	)
}
