import { getVariantValues } from '@/libs/tailwind'
import { Meta, StoryObj } from '@storybook/react'

import Button, { buttonStyles } from './index'

const buttonVariants = getVariantValues(buttonStyles.variants)

const meta: Meta<typeof Button> = {
	title: 'Common/Button/CommonButton',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		color: {
			options: buttonVariants.color,
			control: { type: 'inline-radio' },
		},
		size: {
			options: buttonVariants.size,
			control: { type: 'inline-radio' },
		},
		disabled: {
			options: buttonVariants.disabled,
			control: 'boolean',
		},
	},
	render: (args) => <Button {...args}>Common Button</Button>,
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		...buttonStyles.defaultVariants,
	},
}

export const Primary: Story = {
	argTypes: {
		color: {
			options: ['primary'],
		},
	},
	args: {
		...buttonStyles.defaultVariants,
		color: 'primary',
	},
}

export const Secondary: Story = {
	argTypes: {
		color: {
			options: ['secondary'],
		},
	},
	args: {
		...buttonStyles.defaultVariants,
		color: 'secondary',
	},
}
