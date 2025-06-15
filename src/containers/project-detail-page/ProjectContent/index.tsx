import React from 'react'
import { tv } from 'tailwind-variants'

import { ProjectDetailModel } from '@/models/project'

const projectContentStyles = tv({
	slots: {
		wrapper: 'prose dark:prose-invert prose-img:rounded-2xl mt-20 mb-12',
	},
})

interface Props {
	project: ProjectDetailModel
}

export default function ProjectContent({ project }: Props) {
	const { wrapper } = projectContentStyles()

	return (
		<React.Fragment>
			<div
				id='content'
				dangerouslySetInnerHTML={{ __html: project.content }}
				className={wrapper()}
			/>
		</React.Fragment>
	)
}
