import React from 'react'
import { VariantProps, tv } from 'tailwind-variants'

import {
	AccessibleProps,
	HasChildren,
	InteractiveProps,
	Polymorphic,
} from '@/types/props'

export const buttonStyles = tv({
	base: 'flex-center transition-base cursor-pointer rounded-xl border-2 font-bold select-none',
	variants: {
		color: {
			primary:
				'bg-button-primary hover:bg-button-primary-hover border-[#222] text-white',
			secondary:
				'bg-button-secondary hover:bg-button-secondary-hover text-text-base border-[#222]',
			invert:
				'bg-button-invert hover:bg-button-invert-hover text-button-invert-text border-border hover:text-button-invert-text',
		},
		size: {
			small: 'rounded-xl px-3 py-2 text-sm',
			medium: 'rounded-[0.875rem] px-4 py-2.5 text-base',
			large: 'rounded-2xl px-5 py-3 text-lg',
		},
		disabled: {
			true: 'text-text-muted! bg-button-primary-disabled! cursor-not-allowed border-[#666]/80! opacity-80',
			false: '',
		},
		variant: {
			tactile:
				'-translate-y-[4px] shadow-[0_4px_0_#222] hover:-translate-y-[6px] hover:shadow-[0_6px_0_#222] active:translate-y-0 active:shadow-[0_0_0_#222] active:duration-100',
			flat: 'border-[1.5px]',
		},
	},
	compoundVariants: [
		{
			color: 'invert',
			disabled: true,
			class: 'bg-button-invert-disabled hover:bg-button-invert-text-disabled',
		},
		{
			variant: 'tactile',
			disabled: true,
			class: '-translate-y-[2px] shadow-[0_2px_0_#666]',
		},
		{
			variant: 'tactile',
			color: 'invert',
			class:
				'border-[#333] shadow-[0_4px_0_#333] hover:shadow-[0_6px_0_#333] active:shadow-[0_0_0_#333]',
		},
		{
			variant: 'tactile',
			color: 'secondary',
			class:
				'shadow-[0_4px_0_#222] hover:shadow-[0_6px_0_#222] active:shadow-[0_0_0_#222]',
		},
	],
	defaultVariants: {
		color: 'primary',
		size: 'medium',
		disabled: false,
		variant: 'tactile',
	},
})

type ButtonVariants = VariantProps<typeof buttonStyles>

type Props<T extends React.ElementType> = ButtonVariants &
	InteractiveProps &
	AccessibleProps &
	HasChildren &
	Polymorphic<T>

export default function Button<T extends React.ElementType>({
	color,
	size,
	disabled,
	variant,
	children,
	className = '',
	onClick,
	as: buttonTag,
	...props
}: Props<T>) {
	const Tag: React.ElementType = buttonTag || 'button'
	return (
		<Tag
			className={buttonStyles({
				color,
				size,
				disabled,
				variant,
				class: className,
			})}
			onClick={onClick && !disabled ? onClick : undefined}
			{...props}
		>
			{children}
		</Tag>
	)
}
