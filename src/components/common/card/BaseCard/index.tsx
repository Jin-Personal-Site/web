import Image, { StaticImageData } from 'next/image'
import { IconType } from 'react-icons'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'

import { HasChildren, Stylable } from '@/types/props'

const cardStyles = tv({
	slots: {
		cardContainer:
			'border-border bg-surface-card relative mb-6 flex h-84 flex-col justify-between rounded-xl border-2 shadow-[inset_0_0_40px_#ffffff11]',
		cardFlashBorder:
			'after:absolute after:-top-0.5 after:left-1/2 after:h-0.5 after:w-95/100 after:-translate-x-1/2 after:rounded-full after:bg-linear-to-r after:from-transparent after:from-0% after:via-gray-500 after:via-50% after:to-transparent after:to-100%',
		cardImageWrapper: 'relative h-24',
		cardImage:
			'h-72 rounded-t-xl mask-radial-from-black/75 mask-radial-from-0% mask-radial-to-70% mask-radial-at-center object-cover object-top',
		cardContent: 'relative z-5 p-6',
		cardIcon: 'text-[42px] text-[#444]',
		cardTitle: 'text-text-muted/70 my-2 mt-1.5 text-left text-sm font-medium',
		cardText: 'text-text-base text-left text-lg font-bold',
	},
})

interface Props extends Stylable, Partial<HasChildren> {
	defaultContent?: {
		image: string | StaticImageData
		icon: string | IconType
		title: string
		describe: string
	}
}

export default function BaseCard({
	className,
	children,
	defaultContent,
}: Props) {
	const {
		cardContainer,
		cardFlashBorder,
		cardImageWrapper,
		cardImage,
		cardContent,
		cardIcon,
		cardTitle,
		cardText,
	} = cardStyles()

	return (
		<div
			className={cardContainer({
				class: twMerge(cardFlashBorder(), className),
			})}
		>
			{children ??
				(defaultContent && (
					<>
						<div className={cardImageWrapper()}>
							<Image
								src={defaultContent?.image}
								alt=''
								className={cardImage()}
							/>
						</div>
						<div className={cardContent()}>
							<defaultContent.icon className={cardIcon()} />
							<p className={cardTitle()}>{defaultContent.title}</p>
							<p className={cardText()}>{defaultContent.describe}</p>
						</div>
					</>
				))}
		</div>
	)
}
