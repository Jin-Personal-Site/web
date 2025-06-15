'use client'

import { useContext } from 'react'
import { tv } from 'tailwind-variants'

import { Theme, ThemeContext } from '@/components/providers/ThemeProvider'
import { classnames } from '@/libs/tailwind'
import { Stylable } from '@/types/props'

const themeGroupButtonStyles = tv({
	slots: {
		groupContainer: 'grid grid-cols-3 gap-3',
		button:
			'transition-base text-nowra flex flex-1 flex-col items-center justify-center text-center text-xs',
		buttonPreview:
			'before:border-border before:mb-1 before:h-8 before:w-full before:rounded-lg before:border-1 before:outline-2 before:outline-transparent',
		buttonSelected: 'before:outline-primary text-primary font-bold',
	},
})

interface Props extends Stylable {}

export default function ThemeGroupButton({ className }: Props) {
	const { theme, setTheme } = useContext(ThemeContext)
	const { groupContainer, button, buttonPreview, buttonSelected } =
		themeGroupButtonStyles()

	return (
		<div className={groupContainer({ class: className })}>
			<button
				className={classnames([
					button(),
					buttonPreview({ class: 'before:bg-white' }),
					{ [buttonSelected()]: theme === Theme.LIGHT },
				])}
				onClick={() => setTheme?.(Theme.LIGHT)}
			>
				Light
			</button>
			<button
				className={classnames([
					button(),
					buttonPreview({ class: 'before:bg-[#0d0d0d]' }),
					{ [buttonSelected()]: theme === Theme.DARK },
				])}
				onClick={() => setTheme?.(Theme.DARK)}
			>
				Dark
			</button>
			<button
				className={classnames([
					button(),
					buttonPreview({
						class:
							'before:bg-linear-90 before:from-[#0d0d0d] before:from-50% before:to-white before:to-50%',
					}),
					{ [buttonSelected()]: theme === Theme.PREFER_SYSTEM },
				])}
				onClick={() => setTheme?.(Theme.PREFER_SYSTEM)}
			>
				System
			</button>
		</div>
	)
}
