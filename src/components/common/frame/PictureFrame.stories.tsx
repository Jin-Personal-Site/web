import { Meta, StoryObj } from '@storybook/react'

import PictureFrame from '.'

const meta: Meta<typeof PictureFrame> = {
	title: 'Common/Frame/PictureFrame',
	component: PictureFrame,
	parameters: {
		layout: 'centered',
	},
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {},
	render: (args) => (
		<PictureFrame className='h-60 w-100'>
			<img
				src='/project.png'
				alt=''
				className='h-full w-full object-cover object-center shadow-[inset_0_0_10px_#ccc]'
			/>
		</PictureFrame>
	),
}

export const Pink: Story = {
	args: {},
	render: (args) => (
		<PictureFrame className='h-60 w-100'>
			<div className='h-full w-full bg-linear-to-b from-pink-700 to-pink-950'></div>
		</PictureFrame>
	),
}

export const Orange: Story = {
	args: {},
	render: (args) => (
		<PictureFrame className='h-60 w-100'>
			<div className='h-full w-full bg-linear-to-b from-orange-700 to-orange-950'></div>
		</PictureFrame>
	),
}
