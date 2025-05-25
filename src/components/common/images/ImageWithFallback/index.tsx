'use client'

import Image from 'next/image'

type ImageProps = React.ComponentProps<typeof Image>

interface Props extends Omit<ImageProps, 'onError'> {
	fallbackSrc: string
}

export default function ImageWithFallback({ fallbackSrc, ...props }: Props) {
	return (
		<Image
			{...props}
			alt=''
			onError={(e) => {
				const target = e.target as HTMLImageElement
				target.src = fallbackSrc
			}}
		/>
	)
}
