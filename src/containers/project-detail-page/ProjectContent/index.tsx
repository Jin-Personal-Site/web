import React from 'react'

import { ProjectDetailModel } from '@/models/project'

interface Props {
	project: ProjectDetailModel
}

export default function ProjectContent({ project }: Props) {
	return (
		<React.Fragment>
			<h2>Description</h2>
			<p>{project.description}</p>
			<div id='content' dangerouslySetInnerHTML={{ __html: project.content }} />
		</React.Fragment>
	)
}
