import { tv } from 'tailwind-variants'

import BaseChip from '@/components/common/chips/BaseChip'
import { applyCustomSlots, classnames } from '@/libs/tailwind'
import { SortItemType } from '@/models/article'
import { DeepStylable, InteractiveProps, Stylable } from '@/types/props'

const sortItemStyles = tv({
	slots: {
		wrapper:
			'flex max-w-full cursor-pointer items-center rounded-lg px-3 not-[:first-child]:mt-1',
		icon: 'text-text-base mr-3 text-xl',
		textWrapper: 'mr-auto pt-0.5 pr-2 pb-1',
		name: 'text-text-base text-sm font-medium',
		description: 'text-text-muted text-xs',
		currentSelected:
			'bg-primary invisible ml-3 px-2 text-[0.6875rem] font-medium',
	},
})

interface Props
	extends InteractiveProps,
		Stylable,
		DeepStylable<typeof sortItemStyles> {
	item: SortItemType
	isCurrent?: boolean
}

export default function SortItem({
	item,
	className,
	onClick,
	isCurrent,
	slotClassName = {},
}: Props) {
	const { wrapper, icon, textWrapper, name, description, currentSelected } =
		applyCustomSlots(sortItemStyles(), slotClassName)

	return (
		<div
			className={wrapper({ class: className })}
			{...(onClick ? { onClick } : {})}
		>
			<item.icon className={icon()} />
			<div className={textWrapper()}>
				<p className={name()}>{item.sortName}</p>
				<p className={description()}>{item.sortDescription}</p>
			</div>
			<BaseChip
				className={currentSelected({
					class: classnames({ visible: isCurrent }),
				})}
				rounded={true}
			>
				Current
			</BaseChip>
		</div>
	)
}
