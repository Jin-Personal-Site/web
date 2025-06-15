import { IconType } from 'react-icons'
import { FaCircleInfo } from 'react-icons/fa6'
import { tv } from 'tailwind-variants'

import { applyCustomSlots } from '@/libs/tailwind'
import { DeepStylable, Stylable } from '@/types/props'

const cardStyles = tv({
	slots: {
		wrapper:
			'bg-surface-card border-border rounded-2xl border-1 px-4 pt-3 pb-4',
		headingIconStyle: 'mr-2',
		titleStyle: 'text-text-base flex items-center text-sm font-semibold',
		descriptionStyle: 'text-text-muted mt-2 text-[0.8125rem]',
	},
})

interface Props extends Stylable, DeepStylable<typeof cardStyles> {
	title: string
	description: string
	color?: string
	icon?: IconType
}

export default function DescriptionCard({
	className,
	title,
	description,
	color = 'var(--tw-color-text-base)',
	icon: Icon = FaCircleInfo,
	slotClassName = {},
}: Props) {
	const { wrapper, titleStyle, headingIconStyle, descriptionStyle } =
		applyCustomSlots(cardStyles(), slotClassName)

	return (
		<div
			className={wrapper({ class: className })}
			style={{
				boxShadow: `-1.5px 0 0 color-mix(in srgb, ${color} 100%, white 10%)`,
			}}
		>
			<h2 className={titleStyle()}>
				<Icon
					className={headingIconStyle()}
					style={{
						color: `color-mix(in srgb, ${color} 100%, white 10%)`,
					}}
				/>
				{title}
			</h2>
			<p className={descriptionStyle()}>{description}</p>
		</div>
	)
}
