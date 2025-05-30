'use client'

import { HasChildren, Polymorphic, Stylable } from '@/types/props'

interface Props extends Polymorphic, Stylable, HasChildren {
	target: string
}

export default function SmoothScroll({
	target,
	className,
	style,
	as: Tag = 'div',
	children,
}: Props) {
	const onScrollTo = () => {
		const targetEl = document.querySelector(target)
		if (!targetEl) {
			return
		}

		targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' })
	}

	return (
		<Tag className={className} style={style} onClick={onScrollTo}>
			{children}
		</Tag>
	)
}
