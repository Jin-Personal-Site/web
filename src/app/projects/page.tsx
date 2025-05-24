import React from 'react'

import ContactSection from '@/components/contact/GetInTouch'
import SectionHeading from '@/components/heading/SectionHeading'
import ProjectList from '@/components/project/ProjectList'
import { getAllProjects } from '@/services/project'

export default async function Page() {
	const projects = await getAllProjects()

	return (
		<div className='px-4 mt-16'>
			<SectionHeading
				eyebrowText='Featured case studies'
				headline='Curated'
				accent='work'
			/>
			<ProjectList projects={projects} />
			<ContactSection className='mt-50' />
		</div>
	)
}
