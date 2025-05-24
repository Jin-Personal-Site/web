import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FiGithub } from 'react-icons/fi'

import PictureFrame from '@/components/common/frame'
import ImageWithFallback from '@/components/common/images/ImageWithFallback'
import { fakeImage } from '@/libs/faker'
import { capitalizeText } from '@/libs/text'
import { ProjectDetailModel, ProjectType } from '@/models/project'

interface Props {
	project: ProjectDetailModel
}

export default function ProjectHero({ project }: Props) {
	return (
		<React.Fragment>
			<div className='flex flex-col'>
				<h1>{project.projectName}</h1>
				<div className='flex items-center'>
					{project.liveDemoUrl && (
						<Link
							href={project.liveDemoUrl}
							aria-label='Live demo URL'
							target='_blank'
						>
							Check it out ↗
						</Link>
					)}
					<Link href={project.repoUrl} target='_blank'>
						<FiGithub />
					</Link>
				</div>
			</div>
			<p>{project.tagline}</p>
			<div className='flex items-center'>
				{project.techStack.slice(0, 9).map((tech) => (
					<ImageWithFallback
						key={tech.name}
						src={tech.icon}
						alt={tech.name}
						fallbackSrc={fakeImage(50, 50)}
						width={25}
						height={25}
						className='rounded-sm object-center object-contain mr-2'
					/>
				))}
			</div>
			<div className='flex justify-between'>
				<p>
					{project.period.start} - {project.period.end || 'Present'}
				</p>
				<div className='flex items-center'>
					<span>{capitalizeText(project.projectType)} project</span>
					{project.projectType === ProjectType.EMPLOYMENT &&
						project.companyEmployment && (
							<>
								{' | '}
								<p>{project.companyEmployment.name}</p>
								<Image
									src={project.companyEmployment.icon}
									alt={project.companyEmployment.name}
									width={20}
									height={20}
								/>
							</>
						)}
				</div>
			</div>
			<PictureFrame>
				<Image
					src={project.mainImage}
					alt={project.description}
					width={300}
					height={200}
					className='w-full h-full object-top object-cover'
				/>
			</PictureFrame>
		</React.Fragment>
	)
}
