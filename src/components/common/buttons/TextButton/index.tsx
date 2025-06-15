import { VariantProps, tv } from 'tailwind-variants'

import { HasChildren, Stylable } from '@/types/props'

export const textButtonStyles = tv({
	base: 'transition-base text-text-base cursor-pointer font-bold select-none hover:opacity-70',
	variants: {
		size: {
			small: 'text-sm',
			medium: 'text-base',
			large: 'text-lg',
		},
		disabled: {
			true: 'text-text-muted! cursor-not-allowed opacity-80',
			false: '',
		},
	},
	defaultVariants: {
		size: 'medium',
		disabled: false,
	},
})

type TextButtonVariants = VariantProps<typeof textButtonStyles>

interface Props extends TextButtonVariants, Stylable, HasChildren {
	onClick?: React.MouseEventHandler
}

export default function TextButton({
	size,
	disabled,
	children,
	className,
	onClick,
}: Props) {
	return (
		<span
			className={textButtonStyles({ size, disabled, class: className })}
			onClick={onClick && !disabled ? onClick : undefined}
		>
			{children}
		</span>
	)
}
