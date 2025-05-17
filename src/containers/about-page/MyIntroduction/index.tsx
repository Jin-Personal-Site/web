import React from 'react'

import SocialMedia from '@/components/contact/SocialMedia'
import { datetime } from '@/libs/datetime'
import { getOverviewInfo } from '@/services/getOverviewData'

export default async function MyIntroduction() {
	const { startWorkingDate } = await getOverviewInfo()
	const workedYears = datetime.getWorkedYears(startWorkingDate)

	return (
		<React.Fragment>
			<React.Fragment>
				<p className='text-text-muted mb-3'>{`
					I'm glad to see you here. I'm Quang Vinh, a conscientious full-stack developer passionate about crafting valuable and impactful applications. With over ${workedYears} years of hands-on experience spanning both frontend and backend development, I excel at solving complex problems through clean, comprehensive solutions that consider the entire system holistically. My technical expertise encompasses Node.js, JavaScript, TypeScript, and modern frameworks including Nest.js, Vue, and React.
				`}</p>
				<p className='text-text-muted mb-3'>{`
					Beyond the code, I embrace a balanced approach to life. I find solace in reading books, which deepens my understanding of life, self-awareness, and emotional intelligence. Regular jogging keeps me physically active and mentally refreshed, contributing to my overall well-being and productivity.
				`}</p>
				<p className='text-text-muted mb-3'>{`
					I firmly believe that consistent, incremental improvement – even just 1% better each day – leads to remarkable growth over time. This philosophy drives my commitment to continuous learning and personal development!
				`}</p>
			</React.Fragment>

			<div className='flex-center'>
				<SocialMedia />
			</div>
		</React.Fragment>
	)
}
