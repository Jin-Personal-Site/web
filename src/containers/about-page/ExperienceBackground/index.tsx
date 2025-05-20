/**
 * Work experience entry should include:
 *
 * 1. 📅 Period
 *    • From – To (e.g. Aug 2022 – Present)
 *
 * 2. 🏢 Company & Role
 *    • Company Name, Location (City, Country)
 *    • Position Title (e.g. Front‑End Developer)
 *    • Work Type (On‑site / Hybrid / Remote)
 *
 * 3. 🎯 Key Responsibility & Learnings
 *    • Brief “What I did” sentence
 *    • “What I learned” bullet (new skills, tools, processes)
 *
 * 4. 🚀 Impact & Achievements
 *    • “Problems I solved” bullet with metrics where possible
 *      (e.g. “Reduced page load time by 30% through code-splitting.”)
 *    • “Approach” bullet describing your standout strategy
 *      (e.g. “Introduced automated E2E tests with Cypress to cut regressions by 50%.”)
 *
 * 5. 🔧 Tech Stack
 *    • List of main tools & frameworks
 *      (e.g. Vue.js, TypeScript, TailwindCSS, AWS CDK)
 */
import { capitalize } from 'lodash'
import React from 'react'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { LuBriefcase } from 'react-icons/lu'
import { MdOutlineCalendarMonth } from 'react-icons/md'

import BaseChip from '@/components/common/chips/BaseChip'
import { datetime } from '@/libs/datetime'
import { fakeSentence } from '@/libs/faker'

import ExperienceProgressBar from '../ExperienceProgressBar'

type Period = {
	from: string
	to?: string
	toPresent?: boolean
}

type PositionItem = {
	positionTitle: string
	period: Period
	responsibility: string
	learnings: string[]
	impacts: string[]
	achievements: string[]
}

type WorkExperienceItem = {
	period: Period
	company: {
		name: string
		location: string
		country: string
		workingType: 'hybrid' | 'remote' | 'on-site'
	}
	positions: PositionItem[]
	techStack: string[]
}

const myExperiences: WorkExperienceItem[] = [
	{
		period: {
			from: '2022/08',
			toPresent: true,
		},
		company: {
			name: 'Vitalify Asia Co., Ltd.',
			location: 'Ho Chi Minh City',
			country: 'Vietnam',
			workingType: 'hybrid',
		},
		positions: [
			{
				positionTitle: 'Front-end Developer',
				period: {
					from: '2022/08',
					to: '2023/08',
				},
				responsibility: fakeSentence(),
				learnings: [fakeSentence(5, 8), fakeSentence(5, 8), fakeSentence(5, 8)],
				impacts: [
					fakeSentence(10, 15),
					fakeSentence(10, 15),
					fakeSentence(10, 15),
				],
				achievements: [
					fakeSentence(10, 15),
					fakeSentence(10, 15),
					fakeSentence(10, 15),
				],
			},
			{
				positionTitle: 'Full-stack Developer',
				period: {
					from: '2023/09',
					toPresent: true,
				},
				responsibility: fakeSentence(),
				learnings: [fakeSentence(5, 8), fakeSentence(5, 8), fakeSentence(5, 8)],
				impacts: [
					fakeSentence(10, 15),
					fakeSentence(10, 15),
					fakeSentence(10, 15),
				],
				achievements: [
					fakeSentence(10, 15),
					fakeSentence(10, 15),
					fakeSentence(10, 15),
				],
			},
		],
		techStack: [
			'Typescript',
			'Vue',
			'Nuxt',
			'Laravel',
			'PostgreSQL',
			'Docker',
			'AWS',
			'AWS CDK',
			'Agile',
			'Google Search',
			'Web Performance',
			'Estimation',
			'Code Versioning',
			'Teamwork',
		],
	},
]

export default function ExperienceBackground() {
	const companyDescribe = (item: WorkExperienceItem) => {
		return (
			<React.Fragment>
				<p className='text-text-muted uppercase text-sm'>
					{datetime.toFormat(item.period.from, 'MMM yyyy')} -{' '}
					{item.period.toPresent
						? 'Present'
						: item.period.to
							? datetime.toFormat(item.period.to, 'MMM yyyy')
							: ''}
				</p>
				<p className='font-semibold text-lg flex items-center'>
					{item.company.name}
				</p>
				<p className='flex items-center text-sm'>
					<HiOutlineLocationMarker className='mr-2' />
					{item.company.location}, {item.company.country}
				</p>
				<p className='flex items-center text-sm'>
					<LuBriefcase className='mr-2' />
					{capitalize(item.company.workingType)}
				</p>
			</React.Fragment>
		)
	}

	const positionDescribe = (
		workItem: WorkExperienceItem,
		positionItem: PositionItem,
	) => {
		return (
			<div className='mt-8 ml-4 first-of-type:mt-6'>
				<p className='font-semibold'>{positionItem.positionTitle}</p>
				<p className='text-xs font-medium flex items-center'>
					<MdOutlineCalendarMonth
						size={13}
						className='inline-block mr-1 -translate-y-px'
					/>
					{datetime.toFormat(positionItem.period.from, 'MMM yyyy')} -{' '}
					{positionItem.period.toPresent
						? 'Present'
						: positionItem.period.to
							? datetime.toFormat(positionItem.period.to, 'MMM yyyy')
							: ''}
				</p>
				<div className='mt-4'>
					<p className='text-xs text-text-muted'>
						🎯 Responsibility: {positionItem.responsibility}
					</p>
					<div className='text-xs text-text-muted mt-4'>
						📖 What I learned:
						{positionItem.learnings.map((learning) => {
							return (
								<p className='ml-5' key={learning}>
									- {learning}
								</p>
							)
						})}
					</div>
					<div className='text-xs text-text-muted mt-3'>
						🚀 Problems I solved:
						{positionItem.impacts.map((impact) => {
							return (
								<p className='ml-5' key={impact}>
									- {impact}
								</p>
							)
						})}
					</div>
					<div className='text-xs text-text-muted mt-3'>
						🎉 My standout strategies:
						{positionItem.achievements.map((achievement) => {
							return (
								<p className='ml-5' key={achievement}>
									- {achievement}
								</p>
							)
						})}
					</div>
				</div>
			</div>
		)
	}

	return (
		<section className='mb-20 mt-30'>
			<h2 className='mb-12 text-shadow-[0_4px_8px_#fff1,0_8px_30px_#fff4]'>
				<p className='text-text-muted mb-1 text-center text-xs uppercase'>
					The experience
				</p>
				<p className='mb-8 text-center text-3xl font-semibold'>
					Works bring me{' '}
					<span className='text-colorful inline-block -translate-x-1 font-serif text-4xl leading-8 font-bold italic'>
						hands-on experiences
					</span>
				</p>
			</h2>
			<div className='relative pl-10'>
				{myExperiences.map((expItem) => {
					return (
						<React.Fragment key={expItem.company.name}>
							{companyDescribe(expItem)}
							<div className='relative pl-2 '>
								{expItem.positions.map((position) => {
									return (
										<React.Fragment key={position.positionTitle}>
											{positionDescribe(expItem, position)}
										</React.Fragment>
									)
								})}
							</div>
							<div className='mt-4'>
								{expItem.techStack.map((tech) => {
									return (
										<BaseChip
											className='rounded-lg px-2 font-normal'
											key={tech}
										>
											{tech}
										</BaseChip>
									)
								})}
							</div>
						</React.Fragment>
					)
				})}
				<ExperienceProgressBar className='h-[calc(100%-20px)]' />
			</div>
		</section>
	)
}
