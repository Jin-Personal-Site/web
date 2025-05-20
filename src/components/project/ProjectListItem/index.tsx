import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'

import PictureFrame from '@/components/common/frame'
import { Project } from '@/models/project'

const projectColors = tv({
	variants: {
		backgroundImage: {
			orange: 'bg-linear-to-b from-orange-600 to-orange-950',
			blue: 'bg-linear-to-b from-blue-600 to-blue-950',
			gray: 'bg-linear-to-b from-gray-600 to-gray-950',
			pink: 'bg-linear-to-b from-pink-600 to-pink-950',
		},
		image: {
			orange:
				'border-1 border-orange-400 shadow-[0_0_20px_var(--color-orange-500)]',
			blue: 'border-1 border-blue-400 shadow-[0_0_20px_var(--color-blue-500)]',
			gray: 'border-1 border-gray-400 shadow-[0_0_20px_var(--color-gray-500)]',
			pink: 'border-1 border-pink-400 shadow-[0_0_20px_var(--color-pink-500)]',
		},
		techChip: {
			orange: 'bg-orange-600/15 text-orange-500/90',
			blue: 'bg-blue-600/15 text-blue-500/90',
			gray: 'bg-gray-600/15 text-gray-400/90',
			pink: 'bg-pink-600/15 text-pink-400/90',
		},
		icon: {
			orange:
				'text-orange-400/50 hover:drop-shadow-[0_0_5px_var(--color-orange-500)]',
			blue: 'text-blue-400/50 hover:drop-shadow-[0_0_5px_var(--color-blue-500)]',
			gray: 'text-gray-400/50 hover:drop-shadow-[0_0_5px_var(--color-gray-500)]',
			pink: 'text-pink-400/50 hover:drop-shadow-[0_0_5px_var(--color-pink-500)]',
		},
	},
})

interface Props {
	project: Project
}

export default function ProjectListItem({ project }: Props) {
	return (
		<div>
			<PictureFrame className='h-45 w-full'>
				<div
					className={twMerge(
						'relative h-full w-full shadow-[inset_0_0_10px_#000a]',
						projectColors({ backgroundImage: project.mainColor as any }),
					)}
				>
					<Image
						src={project.image}
						width={270}
						height={160}
						placeholder='empty'
						loading='lazy'
						alt=''
						className={twMerge(
							'absolute bottom-[-15px] left-1/2 max-h-38 -translate-x-1/2 rotate-3 rounded-lg object-cover object-top',
							projectColors({ image: project.mainColor as any }),
						)}
					/>
				</div>
			</PictureFrame>
			<div className='mt-6 mb-12 px-2'>
				<h4 className='mt-4 flex items-center text-lg font-medium'>
					<span className='text-md inline-flex items-center font-bold'>
						<Link href={`/projects/${project.slug}`}>{project.name}</Link>
					</span>
				</h4>
				<p className='text-text-muted mt-3 text-sm'>{project.description}</p>

				<div className='-mx-0.5 mt-3 pb-8 break-words'>
					{project.techStack.map((tech) => (
						<span
							key={tech}
							className={twMerge(
								'mx-0.5 my-0.5 inline-block rounded-md px-1.5 py-0.75 text-xs font-medium',
								projectColors({ techChip: project.mainColor as any }),
							)}
						>
							{tech}
						</span>
					))}
				</div>
			</div>
		</div>
	)
}
