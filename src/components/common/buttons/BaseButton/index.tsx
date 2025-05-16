import React from 'react'
import { tv, VariantProps } from 'tailwind-variants'

export const buttonStyles = tv({
	base: 'flex-center transition-base -translate-y-[4px] cursor-pointer rounded-xl border-2 font-bold select-none hover:-translate-y-[6px] active:translate-y-0 active:duration-100',
	variants: {
		color: {
			primary:
				'bg-button-primary hover:bg-button-primary-hover border-[#222] text-white shadow-[0_4px_0_#222] hover:shadow-[0_6px_0_#222] active:shadow-[0_0_0_#222]',
			secondary:
				'bg-button-secondary hover:bg-button-secondary-hover text-text-base border-[#222] shadow-[0_4px_0_#222] hover:shadow-[0_6px_0_#222] active:shadow-[0_0_0_#222]',
		},
		size: {
			small: 'rounded-xl px-3 py-2 text-sm',
			medium: 'rounded-[0.875rem] px-4 py-2.5 text-base',
			large: 'rounded-2xl px-5 py-3 text-lg',
		},
		disabled: {
			true: 'text-text-muted! bg-button-primary-disabled! -translate-y-[2px]! cursor-not-allowed border-[#666]! opacity-80 shadow-[0_2px_0_#666]!',
			false: '',
		},
	},
	defaultVariants: {
		color: 'primary',
		size: 'medium',
		disabled: false,
	},
})

type ButtonVariants = VariantProps<typeof buttonStyles>

interface Props extends ButtonVariants {
	children: React.ReactNode
	className?: string
	onClick?: React.MouseEventHandler
}

export default function Button({
	color,
	size,
	disabled,
	children,
	className = '',
	onClick,
}: Props) {
	return (
		<button
			className={buttonStyles({ color, size, disabled, class: className })}
			onClick={onClick && !disabled ? onClick : undefined}
		>
			{children}
		</button>
	)
}
