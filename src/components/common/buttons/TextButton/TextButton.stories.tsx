import { RxCaretRight } from 'react-icons/rx'

import { getVariantValues } from '@/libs/tailwind'
import { Meta, StoryObj } from '@storybook/react'

import TextButton, { textButtonStyles } from './index'

const textButtonVariants = getVariantValues(textButtonStyles.variants)

const meta: Meta<typeof TextButton> = {
	title: 'Common/Button/TextButton',
	component: TextButton,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		size: {
			options: textButtonVariants.size,
			control: { type: 'inline-radio' },
		},
		disabled: {
			options: textButtonVariants.disabled,
			control: 'boolean',
		},
	},
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		...textButtonStyles.defaultVariants,
	},
	render: (args) => <TextButton {...args}>Text Button</TextButton>,
}

export const SeeAllProject: Story = {
	args: {
		...textButtonStyles.defaultVariants,
		className: 'font-normal flex-center leading-5',
	},
	render: (args) => (
		<TextButton {...args}>
			<span className='text-text-base'>See more projects</span>
			<RxCaretRight
				className='border-text-muted/20 bg-surface-card ml-1 inline-block translate-y-px rounded-full border-1'
				size={20}
			/>
		</TextButton>
	),
}
