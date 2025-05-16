import React from 'react'

const learningJourney = [
	{
		date: 'Aug/2019',
		description:
			'Started learning Software Engineering at HCMUTE, learned foundational knowledge of software development.',
	},
	{
		date: 'Jul/2021',
		description:
			'Learned how a website is built by learning HTML/CSS/JS and got acquainted with code version controlling with Git.',
	},
	{
		date: 'Feb/2022',
		description:
			'Launched backend development by learning NodeJS and ExpressJS.',
	},
	{
		date: 'Mar/2022',
		description:
			'Started a project with backend responsibility using NodeJS, ExpressJS, MongoDB, Mongoose, and adapted real-time communication with Socket.IO.',
	},
	{
		date: 'Aug/2022',
		description:
			'My first job, learned VueJS to work on a project as a Front-end developer (Typescript/VueJS/NuxtJS/TailwindCSS).',
	},
	{
		date: 'Dec/2022',
		description:
			'Participated in another project, got acquainted with Docker, and worked as a Front-end developer using Typescript/VueJS/SCSS.',
	},
	{
		date: 'Sep/2022',
		description:
			'Extended my NodeJS knowledge by using NestJS, doing my scholar thesis with a project using NestJS, MongoDB, Mongoose.',
	},
	{
		date: 'Feb/2023',
		description:
			'Learned React to support an expanding project in the company.',
	},
	{
		date: 'Sep/2023',
		description:
			'Expanded my backend skills to take more responsibility in company projects (PHP/Laravel/PostgreSQL/Redis).',
	},
	{
		date: 'Feb/2024',
		description:
			'Got in touch with Cypress and implemented E2E testing for a project in the company.',
	},
	{
		date: 'Apr/2024',
		description:
			'Learned about Infrastructure as Code by using AWS CDK to build AWS infrastructure.',
	},
	{
		date: 'Sep/2024',
		description:
			'Honed cloud knowledge by taking more time to understand AWS services.',
	},
	{
		date: 'Nov/2024',
		description:
			'Honed my Front-end skills and learned React, Next.js, Redux. Learned Jest to implement Unit testing with a simple backend system.',
	},
	{
		date: 'Feb/2025',
		description:
			'Leveraged my new AWS knowledge to design AWS infrastructure, CI/CD, and used CDK to set up infrastructure.',
	},
	{
		date: 'Apr/2025',
		description:
			'Started this portfolio website using Next.js, Redux, and Prisma, and built a CMS website using React.',
	},
]

export default function LearningJourneySection() {
	return (
		<section id='learning-journey'>
			<h2>My Learning Journey</h2>
			<p>
				I’ve always been curious about how systems work—from building my first
				website in college to scaling a real-world app for my thesis. I love
				solving problems and continuously improving my skills.
			</p>
			<ul>
				{learningJourney.map((item, index) => (
					<li key={index}>
						<strong>{item.date}:</strong> {item.description}
					</li>
				))}
			</ul>
			<p>
				Currently diving into AWS (EC2, RDS, CloudWatch), advanced TypeScript,
				and UI/UX principles to level up as a full-stack engineer. I self-learn
				through online courses, real projects, and building side apps to apply
				what I learn.
			</p>
		</section>
	)
}
