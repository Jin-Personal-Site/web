import Image from 'next/image'
import { tv } from 'tailwind-variants'

import { Stylable } from '@/types/props'

const coverImageStyles = tv({
	slots: {
		wrapper:
			'absolute top-0 left-0 -z-1 w-dvw mask-[linear-gradient(to_bottom,transparent,theme(colors.black/0.2)_50%,transparent)]',
		image: 'aspect-[4/5] w-full object-cover object-top',
	},
})

interface Props extends Stylable {
	imgSrc: string
	imgAlt: string
}

export default function CoverImage({ className, imgSrc, imgAlt }: Props) {
	const { wrapper, image } = coverImageStyles()

	return (
		<div className={wrapper({ class: className })}>
			<Image
				src={imgSrc}
				alt={imgAlt}
				className={image()}
				width={400}
				height={500}
				loading='eager'
				priority={true}
				aria-label={imgAlt}
			/>
		</div>
	)
}
