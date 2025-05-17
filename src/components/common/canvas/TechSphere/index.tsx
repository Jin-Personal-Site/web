'use client'

import { useEffect, useRef } from 'react'

import { classnames } from '@/libs/tailwind'
import { Stylable } from '@/types/props'

interface Props extends Stylable {}

export function TechSphere({ className }: Props) {
	const canvasRef = useRef<HTMLCanvasElement>(null)

	useEffect(() => {
		draw(canvasRef.current)
	}, [])

	const draw = (canvas: HTMLCanvasElement | null) => {
		if (!canvas) return
		const offScreenCanvas =
			'OffscreenCanvas' in window ? canvas.transferControlToOffscreen() : canvas

		const worker = new Worker('/workers/TechSphere.worker.js')
		worker.postMessage({ canvas: offScreenCanvas }, [offScreenCanvas])
	}

	return (
		<>
			<canvas
				ref={canvasRef}
				height={1000}
				width={1000}
				className={classnames(className)}
			/>
		</>
	)
}
