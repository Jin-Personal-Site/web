'use client'
import { useEffect, useState } from 'react'

import { DateInstanceType, datetime, TZDateType } from '@/libs/datetime'
import { classnames } from '@/libs/tailwind'

interface Props {
	getCurrentTimeFn?: () => DateInstanceType
	toTimeFormat?: (date: TZDateType, format: string) => string
}

export default function CurrentTime({
	getCurrentTimeFn = () => datetime.nowAtTz('Asia/Ho_Chi_Minh'),
	toTimeFormat = datetime.toFormat,
}: Props) {
	const [time, setTime] = useState(getCurrentTimeFn())
	const [showColon, setShowColon] = useState(true)

	useEffect(() => {
		const timerId = setInterval(() => {
			setTime(getCurrentTimeFn())
			setShowColon((value) => !value)
		}, 1000)

		return () => {
			clearInterval(timerId)
		}
	}, [])

	return (
		<>
			{toTimeFormat(time, 'HH')}
			<span
				className={classnames(
					'mx-0.5 inline-block translate-y-[-1px] font-extrabold transition-opacity duration-100',
					{
						'opacity-0': !showColon,
					},
				)}
			>
				:
			</span>
			{toTimeFormat(time, 'mm aaa')}
		</>
	)
}
