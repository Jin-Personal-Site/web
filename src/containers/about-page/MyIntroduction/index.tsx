import { toWords } from 'number-to-words'
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
					I’m glad you’re here! I’m Quang Vinh, a dedicated full-stack developer who loves building valuable, impactful applications. With over ${toWords(workedYears)} years of experience in both frontend and backend development, I solve complex problems by creating clean, comprehensive solutions that work across the whole system. My expertise includes Node.js, JavaScript, TypeScript, and modern frameworks such as Nest.js, Vue, and React.
				`}</p>
				<p className='text-text-muted mb-3'>{`
					Outside of coding, I enjoy keeping life balanced. Reading helps me explore new ideas, build self-awareness, and grow emotionally. I also like to jog regularly—it keeps me active, clears my mind, and boosts both my well-being and productivity.
				`}</p>
				<p className='text-text-muted mb-3'>{`
					I believe that small daily improvements lead to remarkable growth, fueling my dedication to continuous learning and personal development!
				`}</p>
			</React.Fragment>

			<div className='flex-center'>
				<SocialMedia />
			</div>
		</React.Fragment>
	)
}
