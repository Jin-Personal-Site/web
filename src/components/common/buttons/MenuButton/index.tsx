import React from 'react'

import { HasChildren, InteractiveProps, Polymorphic } from '@/types/props'

interface Props extends HasChildren, Polymorphic, InteractiveProps {}

export default function MenuButton({
	children,
	className,
	style,
	as: Tag = 'button',
	...props
}: Props) {
	return (
		<React.Fragment>
			<Tag
				className={className}
				style={style}
				aria-label='Menu'
				title='Toggle Menu'
				{...props}
			>
				{children}
			</Tag>
		</React.Fragment>
	)
}
