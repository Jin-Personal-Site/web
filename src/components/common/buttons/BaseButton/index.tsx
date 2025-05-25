import React from 'react'
import { VariantProps, tv } from 'tailwind-variants'

import { AccessibleProps, HasChildren, InteractiveProps } from '@/types/props'

export const buttonStyles = tv({
	base: 'flex-center transition-base cursor-pointer rounded-xl border-2 font-bold select-none',
	variants: {
		color: {
			primary:
				'bg-button-primary hover:bg-button-primary-hover border-[#222] text-white',
			secondary:
				'bg-button-secondary hover:bg-button-secondary-hover text-text-base border-[#222]',
			neutral:
				'bg-button-neutral hover:bg-button-neutral-hover text-button-neutral-text border-border hover:text-button-neutral-text',
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
			color: 'neutral',
			disabled: true,
			class: 'bg-button-neutral-disabled hover:bg-button-neutral-text-disabled',
		},
		{
			variant: 'tactile',
			disabled: true,
			class: '-translate-y-[2px] shadow-[0_2px_0_#666]',
		},
		{
			variant: 'tactile',
			color: 'neutral',
			class:
				'border-border shadow-[0_4px_0_var(--color-border)] hover:shadow-[0_6px_0_var(--color-border)] active:shadow-[0_0_0_var(--color-border)]',
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

interface Props
	extends ButtonVariants,
		InteractiveProps,
		AccessibleProps,
		HasChildren {
	type?: 'button' | 'submit' | 'reset'
}

export default function Button({
	color,
	size,
	disabled,
	variant,
	children,
	className = '',
	onClick,
	type = 'button',
	...props
}: Props) {
	return (
		<button
			type={type}
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
		</button>
	)
}
