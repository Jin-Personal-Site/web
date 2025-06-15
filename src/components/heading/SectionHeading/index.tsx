import { tv } from 'tailwind-variants'

import { applyCustomSlots } from '@/libs/tailwind'
import {
	DeepStylable,
	Identifiable,
	Polymorphic,
	Stylable,
} from '@/types/props'

const sectionHeadingStyles = tv({
	slots: {
		wrapperStyle: 'mb-10 text-shadow-[0_4px_8px_#fff1,0_8px_30px_#fff4]',
		eyebrowTextStyle: 'text-text-muted mb-2 text-center text-xs uppercase',
		headlineStyle: 'text-center text-3xl font-semibold',
		accentStyle:
			'text-colorful inline-block overflow-visible font-serif text-4xl font-bold italic',
	},
})

interface Props
	extends Stylable,
		DeepStylable<typeof sectionHeadingStyles>,
		Identifiable,
		Polymorphic {
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
	slotClassName = {},
}: Props) {
	const { wrapperStyle, eyebrowTextStyle, headlineStyle, accentStyle } =
		applyCustomSlots(sectionHeadingStyles(), slotClassName)

	return (
		<Tag className={wrapperStyle({ class: className })} id={id} style={style}>
			{eyebrowText && <p className={eyebrowTextStyle()}>{eyebrowText}</p>}
			<p className={headlineStyle()}>
				{headline}
				{accent && (
					<>
						{' '}
						<span className={accentStyle()}>{accent}</span>
					</>
				)}
			</p>
		</Tag>
	)
}
