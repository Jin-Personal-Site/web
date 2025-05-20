import { getVariantValues } from '@/libs/tailwind'
import { Meta, StoryObj } from '@storybook/react'

import BaseChip, { chipStyles } from '.'

const chipVariants = getVariantValues(chipStyles.variants)

const meta: Meta<typeof BaseChip> = {
	title: 'Common/Chip/BaseChip',
	component: BaseChip,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		size: {
			options: chipVariants.size,
			control: { type: 'inline-radio' },
		},
		type: {
			options: chipVariants.type,
			control: { type: 'inline-radio' },
		},
		rounded: {
			options: chipVariants.rounded,
			control: 'boolean',
		},
	},
	render: (args) => <BaseChip {...args}>Base chip</BaseChip>,
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		...chipStyles.defaultVariants,
	},
}

export const Large: Story = {
	args: {
		...chipStyles.defaultVariants,
		size: 'large',
	},
}
