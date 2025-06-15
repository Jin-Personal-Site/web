import { tv } from 'tailwind-variants'

import { classnames } from '@/libs/tailwind'
import { Stylable } from '@/types/props'

const languageGroupButtonStyles = tv({
	slots: {
		groupContainer: 'grid grid-cols-2 gap-3',
		button: 'border-border flex-center h-8 rounded-lg border-1 text-xs',
		selectedButton: 'bg-border border-text-base/30 font-bold',
	},
})

interface Props extends Stylable {}

export default function LanguageGroupButton({ className }: Props) {
	const language = 'en'
	const { groupContainer, button, selectedButton } = languageGroupButtonStyles()
	return (
		<div className={groupContainer({ class: className })}>
			<button
				className={classnames(button(), {
					[selectedButton()]: language === 'en',
				})}
			>
				🇺🇸 English
			</button>
			<button
				className={classnames(button(), {
					[selectedButton()]: false, // TODO: update when implement multi language feature
				})}
			>
				🇻🇳 Vietnamese
			</button>
		</div>
	)
}
