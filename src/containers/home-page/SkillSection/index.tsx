import Image from 'next/image'
import React from 'react'

type SkillSetItem = {
	title: string
	skills: {
		name: string
		image: string
		color?: string
	}[]
}

const skillSets: SkillSetItem[] = [
	{
		title: 'Frontend',
		skills: [
			{ name: 'Javascript', image: '/images/tech/js.png', color: '#FEE000' },
			{ name: 'Typescript', image: '/images/tech/ts.png', color: '#0279CE' },
			{ name: 'Vue', image: '/images/tech/vue.png', color: '#47B781' },
			{ name: 'React', image: '/images/tech/react.png', color: '#5FDBF7' },
			{ name: 'Nuxt', image: '/images/tech/nuxt.svg', color: '#00DC82' },
			{ name: 'Next', image: '/images/tech/next.png', color: '#FAFAFAAA' },
			{ name: 'Redux', image: '/images/tech/redux.png', color: '#764DBF' },
			{
				name: 'Angular',
				image: '/images/tech/angular.webp',
				color: '#B62E32',
			},
			{
				name: 'Bootstrap',
				image: '/images/tech/bootstrap.png',
				color: '#7111F6',
			},
			{ name: 'SCSS', image: '/images/tech/sass.png', color: '#CC679B' },
			{
				name: 'Tailwind',
				image: '/images/tech/tailwind.svg',
				color: '#44A8B3',
			},
			{
				name: 'GSAP',
				image: '/images/tech/gsap.svg',
				color: '#8AC63F',
			},
			// {
			// 	name: 'Framer Motion',
			// 	image: '/images/tech/framer-motion.png',
			// 	color: '#59529D',
			// },
		],
	},
	{
		title: 'Backend',
		skills: [
			{ name: 'NodeJS', image: '/images/tech/node.png', color: '#4E9C40' },
			{ name: 'Nest', image: '/images/tech/nest.png', color: '#E0234F' },
			{
				name: 'Fastify',
				image: '/images/tech/fastify.svg',
				color: '#FAFAFAAA',
			},
			{
				name: 'Express',
				image: '/images/tech/express.png',
				color: '#FAFAFAAA',
			},
			{ name: 'PHP', image: '/images/tech/php.png', color: '#7779B1' },
			{ name: 'Laravel', image: '/images/tech/laravel.png', color: '#FC2D1E' },
		],
	},
	{
		title: 'Database',
		skills: [
			{
				name: 'PostgreSQL',
				image: '/images/tech/postgresql.webp',
				color: '#31678E',
			},
			{
				name: 'MySQL',
				image: '/images/tech/mysql.png',
				color: '#00595D',
			},
			{ name: 'MongoDB', image: '/images/tech/mongodb.svg', color: '#13AA53' },
			{ name: 'Redis', image: '/images/tech/redis.webp', color: '#CD332A' },
			{ name: 'Prisma', image: '/images/tech/prisma.png', color: '#FAFAFAAA' },
			{
				name: 'Mongoose',
				image: '/images/tech/mongoose.png',
				color: '#870000',
			},
		],
	},
	{
		title: 'Testing',
		skills: [
			{ name: 'Cypress', image: '/images/tech/cypress.webp', color: '#4FB091' },
			{ name: 'Jest', image: '/images/tech/jest.png', color: '#9C425B' },
			{
				name: 'Storybook',
				image: '/images/tech/storybook.png',
				color: '#FF4685',
			},
		],
	},
	{
		title: 'Tools',
		skills: [
			{ name: 'Webpack', image: '/images/tech/webpack.png', color: '#8ED5FA' },
			{ name: 'Vite', image: '/images/tech/vite.png', color: '#BD32FE' },
			{ name: 'Git', image: '/images/tech/git.png', color: '#F05434' },
			{ name: 'Github', image: '/images/tech/github.svg', color: '#a468ff' },
			{ name: 'Docker', image: '/images/tech/docker.png', color: '#2297ED' },
			{ name: 'AWS', image: '/images/tech/aws.png', color: '#FA9800' },
			{ name: 'AWS CDK', image: '/images/tech/aws-cdk.png', color: '#67B0CC' },
			{
				name: 'GSC',
				image: '/images/tech/google-search-console.svg',
				color: '#FAFAFAAA',
			},
			{
				name: 'GTM',
				image: '/images/tech/google-tag-manager.webp',
				color: '#4485F5',
			},
			{
				name: 'GA4',
				image: '/images/tech/google-analytics.webp',
				color: '#E67202',
			},
		],
	},
]

export default function SkillSection() {
	return (
		<section id='skill' className='home-section'>
			<h3 className='text-link mb-8 text-2xl font-bold'>My Technical Skills</h3>
			{skillSets.map((category) => (
				<React.Fragment key={category.title}>
					<h4 className='mb-4 text-xl font-bold tracking-wide'>
						{category.title}
					</h4>
					<div className='skill-detail mb-10 grid grid-cols-2 gap-x-2 gap-y-4 px-4 break-words'>
						{category.skills.map((skill) => (
							<div
								key={skill.name}
								className='flex items-center overflow-visible'
							>
								<Image
									src={skill.image || '/images/tech/js.png'}
									alt={skill.name}
									width={32}
									height={32}
									className='mr-3 overflow-visible'
									style={{
										filter: `drop-shadow(0 0 3px ${
											skill.color || '#FAFAFAAA'
										})`,
									}}
								/>
								<span className='font-medium'>{skill.name}</span>
							</div>
						))}
					</div>
				</React.Fragment>
			))}
		</section>
	)
}
