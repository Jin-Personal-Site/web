import { Meta, StoryObj } from '@storybook/react'

import PdfViewer from '.'

const meta: Meta<typeof PdfViewer> = {
	title: 'Common/Pdf/PdfViewer',
	component: PdfViewer,
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		pdfUrl: '/resumes/Nguyen-Quang-Vinh-CV.pdf',
	},
}
