import { twMerge } from 'tailwind-merge'

import { Identifiable, Polymorphic, Stylable } from '@/types/props'

interface Props extends Stylable, Identifiable, Polymorphic {
	eyebrowText?: string
	headline: string
	accent?: string
}

export default function SectionHeading({
	as: Tag = 'h2',
	id,
	className,
	style,
	eyebrowText,
	headline,
	accent,
}: Props) {
	return (
		<Tag
			className={twMerge(
				'mb-10 text-shadow-[0_4px_8px_#fff1,0_8px_30px_#fff4]',
				className,
			)}
			id={id}
			style={style}
		>
			{eyebrowText && (
				<p className='text-text-muted mb-2 text-center text-xs uppercase'>
					{eyebrowText}
				</p>
			)}
			<p className='text-center text-3xl font-semibold'>
				{headline}
				{accent && (
					<>
						{' '}
						<span className='text-colorful inline-block font-serif text-4xl leading-8 font-bold italic'>
							{accent}
						</span>
					</>
				)}
			</p>
		</Tag>
	)
}
