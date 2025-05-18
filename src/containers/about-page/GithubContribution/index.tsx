'use client'

import GitHubCalendar, { Activity } from 'react-github-calendar'

import './GithubContribution.css'

export default function GithubContribution() {
	const shownMonths = 6

	const selectLastHalfYear = (contributions: Activity[]): Activity[] => {
		const currentYear = new Date().getFullYear()
		const currentMonth = new Date().getMonth()

		return contributions.filter((activity) => {
			const date = new Date(activity.date)
			const monthOfDay = date.getMonth()

			return (
				date.getFullYear() === currentYear &&
				monthOfDay > currentMonth - shownMonths &&
				monthOfDay <= currentMonth
			)
		})
	}
	return (
		<section className='mb-20 mt-30 flex flex-col items-center'>
			<h2 className='mb-10 text-shadow-[0_4px_8px_#fff1,0_8px_30px_#fff4]'>
				<p className='text-text-muted mb-2 text-center text-xs uppercase'>
					My coding journey visualized
				</p>
				<p className='text-center text-3xl font-semibold'>
					Github{' '}
					<span className='text-colorful inline-block -translate-x-1 font-serif text-4xl leading-8 font-bold italic'>
						Contributions
					</span>
				</p>
			</h2>
			<GitHubCalendar
				username='quanqvinh'
				transformData={selectLastHalfYear}
				labels={{
					totalCount: `{{count}} activities in ${shownMonths} month${shownMonths > 1 ? 's' : ''}`,
				}}
				style={{ alignItems: 'center', width: '100% !important' }}
				fontSize={13}
				theme={{
					light: ['#0d111c', '#1f2757', '#2f3b85', '#3e4eae', '#4c5fd5'],
					dark: ['#0d111c', '#1f2757', '#2f3b85', '#3e4eae', '#4c5fd5'],
				}}
			/>
		</section>
	)
}
