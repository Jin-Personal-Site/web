'use client'

import BaseChip from '@/components/common/chips/BaseChip'
import { DateType, datetime } from '@/libs/datetime'
import { Polymorphic, Stylable } from '@/types/props'

interface Props extends Stylable, Polymorphic {
	time: DateType
	showDiff?: boolean
}

export default function ArticlePostedTime({
	time,
	className,
	as: Tag = 'p',
	showDiff = false,
}: Props) {
	return (
		<Tag className={className}>
			<span>Posted on {datetime.toFormat(time, 'MMM d, yyyy')}</span>{' '}
			{showDiff && (
				<>
					<span suppressHydrationWarning={true}>
						({datetime.toFormatDistance(time).replace(/^about /i, '')})
					</span>
					{datetime.getDiffDays(time) <= 7 && (
						<BaseChip
							className='ml-3 bg-green-700/10 text-[0.625rem] text-green-700 dark:text-green-500'
							rounded={false}
							suppressHydrationWarning={true}
						>
							Recently released
						</BaseChip>
					)}
				</>
			)}
		</Tag>
	)
}
