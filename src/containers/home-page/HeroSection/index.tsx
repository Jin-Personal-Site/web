import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import { tv } from 'tailwind-variants'

import BaseButton from '@/components/common/buttons/BaseButton'
import TextButton from '@/components/common/buttons/TextButton'
import { datetime } from '@/libs/datetime'
import { getOverviewInfo } from '@/services/getOverviewData'

export default async function HeroSection() {
	const { startWorkingDate, completedProjects } = await getOverviewInfo()

	return (
		<section
			id='hello'
			className='home-section -mt-22 flex h-svh flex-col justify-center pt-20 pb-4'
		>
			<div className='bg-button-primary my-auto h-0.5 w-60 -translate-y-3 self-center overflow-visible rounded-full drop-shadow-2xl'></div>
			<h1 className='text-text-base text-4xl font-extrabold tracking-wide uppercase'>
				<span className=''>Fullstack</span>
				<br />
				<span className='ml-5 inline-block'>Developer</span>
			</h1>
			<p className='text-text-muted mt-2 text-lg'>
				Hi, I’m <strong>Vinh</strong> — a software engineer expertise in
				crafting seamless full-stack website experiences.
			</p>
			<div className='mt-10 self-start'>
				<Link href='/book-call' className='block select-none' draggable={false}>
					<BaseButton>Book a call</BaseButton>
				</Link>
				<Link
					href='/resume-preview'
					className='group hover:text-hover mt-5 ml-2 flex items-center'
				>
					<TextButton className='flex-center'>
						My Resume
						<FaArrowRight className='animate-slide-left ml-2 transition-all duration-300' />
					</TextButton>
				</Link>
			</div>
			<WorkingExperienceVisual
				startWorkingDate={startWorkingDate}
				completedProjects={completedProjects}
				className='-mx-6 mt-auto'
			/>
		</section>
	)
}

const itemStyles = tv({
	slots: {
		itemText: 'text-text-muted px-3 text-center leading-5 font-medium',
		itemHighlightValue: 'text-primary text-2xl font-bold',
	},
})

function WorkingExperienceVisual({
	startWorkingDate,
	completedProjects,
	className = '',
}: {
	startWorkingDate: string
	completedProjects: number
	className: string
}) {
	const workedYears = datetime.getWorkedYears(startWorkingDate)
	const workedHours = datetime.getWorkedHours(startWorkingDate)

	const { itemText, itemHighlightValue } = itemStyles()

	return (
		<div
			className={`grid w-dvw grid-cols-[1fr_1fr_1fr] justify-items-center py-4 ${className}`}
		>
			<p className={itemText()}>
				<span className={itemHighlightValue()}>
					{workedYears > 0 ? `${workedYears}+` : '1'}
				</span>
				<br />
				Years of
				<br />
				Experience
			</p>
			<p className={itemText()}>
				<span className={itemHighlightValue()}>{completedProjects}</span>
				<br />
				Completed
				<br />
				Projects
			</p>
			<p className={itemText()}>
				{/* From 01-08-2022 */}
				<span className={itemHighlightValue()}>
					{workedHours > 1000 ? Math.floor(workedHours / 1000) : 1}k+
				</span>
				<br />
				Hours
				<br />
				Worked
			</p>
		</div>
	)
}
