import { Metadata } from 'next'
import React from 'react'

import ProjectContent from '@/containers/project-detail-page/ProjectContent'
import ProjectHero from '@/containers/project-detail-page/ProjectHero'
import { getProjectDetail } from '@/services/project-detail'

interface Params {
	slug: string
}

export const metadata: Metadata = {
	title: 'Project detail | Vinh Nguyen - Full-Stack Developer',
	description: 'Learn more about Nguyen Quang Vinh - Software Engineer',
}

export default async function Page({ params }: { params: Promise<Params> }) {
	const { slug } = await params
	const project = await getProjectDetail(slug)

	return (
		<div className='px-4'>
			<ProjectHero project={project} />
			<ProjectContent project={project} />
		</div>
	)
}
