'use client'

import BaseChip from '@/components/common/chips/BaseChip'
import { DateType, datetime } from '@/libs/datetime'
import { Polymorphic, Stylable } from '@/types/props'

interface Props extends Stylable, Polymorphic {
	time: DateType
}

export default function ArticlePostedTime({
	time,
	className,
	as: Tag = 'p',
}: Props) {
	return (
		<Tag className={className}>
			<span>{datetime.toFormat(time, 'MMM d, yyyy')}</span>{' '}
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
		</Tag>
	)
}
