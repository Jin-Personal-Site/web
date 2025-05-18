'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

import PortraitImage from '@/../public/portrait.png'
import { classnames } from '@/libs/tailwind'
import { Stylable } from '@/types/props'

interface Props extends Stylable {}

export default function ExperienceProgressBar({ className }: Props) {
	const progressBarRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const onHandleProgressBar = () => {
			const progressBarEl = progressBarRef.current
			if (!progressBarEl) return

			const { top } = progressBarEl.getBoundingClientRect()
			const startScrollPosition = window.innerHeight / 2
			const progressBarHeight = Math.max(startScrollPosition - top, 0)

			progressBarEl.style.height = `${progressBarHeight}px`
		}
		document.addEventListener('scroll', onHandleProgressBar)

		return () => {
			document.removeEventListener('scroll', onHandleProgressBar)
		}
	})

	return (
		<div
			className={classnames(
				'absolute left-2 top-1/2 -translate-y-1/2 h-full w-2 rounded-full border-1 border-border bg-surface-card',
				className,
			)}
		>
			<div
				className='w-full h-0 max-h-full relative bg-gradient-to-b from-gray-700/20 via-primary via-53% to-pink-600 transition-[height] duration-50 rounded-full'
				ref={progressBarRef}
			>
				<span></span>
				<Image
					src={PortraitImage}
					width={20}
					alt=''
					className='w-6 h-7 object-top object-cover absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 z-10 max-w-none rounded-full bg-gradient-to-br from-primary/20 bg-surface-page to-primary transition-all shadow-[0_0_5px_#0006] border-[0.5px] border-primary'
				/>
			</div>
		</div>
	)
}
