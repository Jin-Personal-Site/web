import { Meta, StoryObj } from '@storybook/react'

import { TechSphere } from '.'

const meta: Meta<typeof TechSphere> = {
	title: 'Common/Canvas/TechSphere',
	component: TechSphere,
	parameters: {
		layout: 'centered',
	},
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		className: 'h-full w-full bg-gray-100',
	},
	render: (args) => (
		<div className='h-100 w-100'>
			<TechSphere {...args} />
		</div>
	),
}
