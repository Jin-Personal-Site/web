import { datetime } from '@/libs/datetime'
import { Meta, StoryObj } from '@storybook/react'

import CurrentTime from '.'

const meta: Meta<typeof CurrentTime> = {
	title: 'Common/Time/CurrentTime',
	component: CurrentTime,
	parameters: {
		layout: 'centered',
	},
	render: (args) => (
		<p>
			<CurrentTime {...args} />
		</p>
	),
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		getCurrentTimeFn: () => datetime.nowAtTz('Asia/Ho_Chi_Minh'),
	},
}

export const JapanTime: Story = {
	args: {
		getCurrentTimeFn: () => datetime.nowAtTz('Asia/Tokyo'),
	},
}
