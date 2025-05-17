import Image from 'next/image'
import Link from 'next/link'
import { FiGithub } from 'react-icons/fi'
import { HiExternalLink } from 'react-icons/hi'
import { FaArrowRight } from 'react-icons/fa'
import BaseButton from '@/components/common/buttons/BaseButton'
import PictureFrame from '@/components/common/frame'
import React from 'react'
import { tv } from 'tailwind-variants'
import { classnames } from '@/libs/tailwind'
import TextButton from '@/components/common/buttons/TextButton'
import { RxCaretRight } from 'react-icons/rx'

type ProjectItem = {
	name: string
	slug: string
	repoUrl?: string
	image: string
	mainColor: string
	websiteUrl?: string
	description: string
	techStack: string[]
}

const projects: ProjectItem[] = [
	{
		name: 'Beverage Store System',
		slug: 'beverage-store-system',
		repoUrl: 'https://github.com/orgs/VT-Store-Manager/repositories',
		image: '/project1.png',
		mainColor: 'orange',
		description:
			'Built a complete ordering system for a chain café, including customer, store, and delivery apps with real-time updates.',
		websiteUrl: '',
		techStack: [
			'NodeJS',
			'NestJS',
			'MongoDB',
			'Redis',
			'Socket.IO',
			'VueJS',
			'NuxtJS',
			'Vuetify',
			'Typescript',
			'Pinia',
			'SCSS',
			'Momo',
			'Twilio',
			'Google Map API',
			'AWS S3',
			'Swagger',
			'Postman',
		],
	},
	{
		name: 'Horse Racing Portal',
		slug: 'horse-racing-portal',
		repoUrl: '',
		image: '/project2.png',
		mainColor: 'blue',
		description:
			'Providing outsourcing services to renew user interface, develop new features and CMS for engaging more users, increasing business turnover and reducing monthly operating cost.',
		websiteUrl: 'https://tospo-keiba.jp',
		techStack: [
			'VueJS',
			'Typescript',
			'Pinia',
			'SCSS',
			'Laravel',
			'PostgreSQL',
			'Redis',
			'AWS',
		],
	},
	{
		name: 'My Portfolio',
		slug: 'horse-racing-portal',
		repoUrl: '',
		image: '/project3.png',
		mainColor: 'gray',
		description:
			'Providing outsourcing services to renew user interface, develop new features and CMS for engaging more users, increasing business turnover and reducing monthly operating cost.',
		websiteUrl: 'https://tospo-keiba.jp',
		techStack: [
			'NextJS',
			'ReactJS',
			'Typescript',
			'Redux',
			'Tailwind',
			'Canvas',
			'GSAP',
			'Storybook',
			'Postgres',
			'AWS',
		],
	},
	{
		name: 'VKN Social Media',
		slug: 'horse-racing-portal',
		repoUrl: '',
		image: '/project4.png',
		mainColor: 'pink',
		description:
			'Providing outsourcing services to renew user interface, develop new features and CMS for engaging more users, increasing business turnover and reducing monthly operating cost.',
		websiteUrl: 'https://tospo-keiba.jp',
		techStack: [
			'NextJS',
			'ReactJS',
			'Typescript',
			'Redux',
			'Tailwind',
			'Canvas',
			'GSAP',
			'Storybook',
			'Postgres',
			'AWS',
		],
	},
]

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

export default function ProjectSection() {
	return (
		<section id='project' className='home-section'>
			<h2 className='mb-20 text-shadow-[0_4px_8px_#fff1,0_8px_30px_#fff4]'>
				<p className='text-text-muted mb-2 text-center text-xs uppercase'>
					Featured case studies
				</p>
				<p className='mb-8 text-center text-3xl font-bold'>
					Curated{' '}
					<span className='text-colorful inline-block -translate-x-1 font-serif text-4xl leading-12 font-bold italic'>
						work
					</span>
				</p>
			</h2>

			{projects.map((project) => (
				<React.Fragment key={project.name}>
					<PictureFrame className='h-45 w-full'>
						<div
							className={classnames(
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
								className={classnames(
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
						<p className='text-text-muted mt-3 text-sm'>
							{project.description}
						</p>

						<div className='-mx-0.5 mt-3 pb-8 break-words'>
							{project.techStack.map((tech) => (
								<span
									key={tech}
									className={classnames(
										'mx-0.5 my-0.5 inline-block rounded-md px-1.5 py-0.75 text-xs font-medium',
										projectColors({ techChip: project.mainColor as any }),
									)}
								>
									{tech}
								</span>
							))}
						</div>
					</div>
				</React.Fragment>
			))}

			<div className='flex-center mt-15'>
				{/* <Link href={'/projects'}> */}
				<BaseButton
					size='small'
					color='secondary'
					className='flex-center px-4 leading-5 font-semibold'
				>
					See more projects
					<FaArrowRight
						size={12}
						className='animate-slide-left ml-1.5 transition-all duration-300'
					/>
				</BaseButton>
				{/* </Link> */}
			</div>
		</section>
	)
}
