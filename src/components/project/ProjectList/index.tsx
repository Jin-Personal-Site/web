import { twMerge } from 'tailwind-merge'

import { ProjectModel } from '@/models/project'
import { Polymorphic, Stylable } from '@/types/props'

import ProjectListItem from '../ProjectListItem'

interface Props extends Stylable, Polymorphic {
	projects: ProjectModel[]
}

export default function ProjectList({
	as: Tag = 'div',
	className,
	projects,
}: Props) {
	return (
		<Tag className={twMerge('', className)}>
			{projects.map((project) => (
				<ProjectListItem key={project.name} project={project} />
			))}
		</Tag>
	)
}
