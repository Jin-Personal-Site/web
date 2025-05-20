import { VariantProps, tv } from 'tailwind-variants'

import { HasChildren, Stylable } from '@/types/props'

export const chipStyles = tv({
	base: 'inline-flex items-center',
	variants: {
		size: {
			medium: 'mx-0.5 my-0.5 rounded-md px-1.5 py-0.75 text-xs',
			large: 'mx-1 my-1 rounded-lg px-2 py-1 text-sm',
		},
		type: {
			default: 'bg-gray-600/60 text-text-base',
			outlined: '',
			elevated: '',
			text: '',
		},
		rounded: {
			true: 'rounded-full',
			false: '',
		},
	},
	compoundVariants: [
		{
			size: ['medium', 'large'],
			rounded: true,
			class: 'rounded-full',
		},
	],
	defaultVariants: {
		size: 'medium',
		type: 'default',
		rounded: false,
	},
})

type ChipVariants = VariantProps<typeof chipStyles>

interface Props extends ChipVariants, Stylable, HasChildren {}

export default function CommonChip({
	className,
	children,
	size,
	type,
	rounded,
}: Props) {
	return (
		<span
			className={chipStyles({
				size,
				type,
				rounded,
				class: className,
			})}
		>
			{children}
		</span>
	)
}
