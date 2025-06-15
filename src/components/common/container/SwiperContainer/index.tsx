'use client'

import { ReactNode, TouchEvent, useRef } from 'react'

import { Stylable } from '@/types/props'

interface Props extends Stylable {
	children: ReactNode
	onSwipeUp?: () => void
	onSwipeDown?: () => void
	onSwipeLeft?: () => void
	onSwipeRight?: () => void
	onTap?: () => void
}

export default function SwiperContainer({
	children,
	className,
	...handlers
}: Props) {
	const containerRef = useRef(null)
	const touchRef = useRef({
		startX: 0,
		startY: 0,
		endX: 0,
		endY: 0,
	})

	const onTouchStart = (e: TouchEvent) => {
		touchRef.current.startX = e.changedTouches[0].clientX
		touchRef.current.startY = e.changedTouches[0].clientY
	}

	const onTouchEnd = (e: TouchEvent) => {
		touchRef.current.endX = e.changedTouches[0].clientX
		touchRef.current.endY = e.changedTouches[0].clientY

		handleGesture()
	}

	const handleGesture = () => {
		const { startX, startY, endX, endY } = touchRef.current

		if (endX === startX && endY === startY) {
			handlers.onTap?.()
		} else if (Math.abs(startX - endX) >= Math.abs(startY - endY)) {
			// Horizontal swipe
			if (endX < startX) {
				handlers.onSwipeRight?.()
			} else {
				handlers.onSwipeLeft?.()
			}
		} else {
			// Vertical swipe
			if (endY < startY) {
				handlers.onSwipeDown?.()
			} else {
				handlers.onSwipeUp?.()
			}
		}
	}

	return (
		<div
			ref={containerRef}
			className={className}
			onTouchStart={onTouchStart}
			onTouchEnd={onTouchEnd}
		>
			{children}
		</div>
	)
}
