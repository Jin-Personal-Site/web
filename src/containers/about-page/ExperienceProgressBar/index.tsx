'use client'

import { useLenis } from 'lenis/react'
import Image from 'next/image'
import { useRef } from 'react'

import PortraitImage from '@/../public/portrait.png'
import { classnames } from '@/libs/tailwind'
import { Stylable } from '@/types/props'

interface Props extends Stylable {}

export default function ExperienceProgressBar({ className }: Props) {
	const progressBarRef = useRef<HTMLDivElement>(null)

	useLenis(() => {
		const progressBarEl = progressBarRef.current
		if (!progressBarEl) return

		const { top } = progressBarEl.getBoundingClientRect()
		const startScrollPosition = window.innerHeight / 2
		const progressBarHeight = Math.max(startScrollPosition - top, 0)

		progressBarEl.style.height = `${progressBarHeight}px`
	})

	return (
		<div
			className={classnames(
				'border-border bg-surface-card absolute top-1/2 left-2 h-full w-2 -translate-y-1/2 rounded-full border-1',
				className,
			)}
		>
			<div
				className='via-primary relative h-0 max-h-full w-full rounded-full bg-gradient-to-b from-gray-700/20 via-53% to-pink-600 transition-[height] duration-50'
				ref={progressBarRef}
			>
				<span></span>
				<Image
					src={PortraitImage}
					width={20}
					alt=''
					className='from-primary/20 bg-surface-page to-primary border-primary absolute bottom-0 left-1/2 z-10 h-7 w-6 max-w-none -translate-x-1/2 translate-y-1/2 rounded-full border-[0.5px] bg-gradient-to-br object-cover object-top shadow-[0_0_5px_#0006] transition-all duration-100'
				/>
			</div>
		</div>
	)
}
