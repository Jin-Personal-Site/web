import React from 'react'

import { classnames } from '@/libs/tailwind'
import { HasChildren, Stylable } from '@/types/props'

interface Props extends Stylable, HasChildren {}

export default function PictureFrame({ children, className }: Props) {
	return (
		<div
			className={classnames(
				'bg-surface-card relative rounded-3xl border-1 border-[#444] p-2',
				'before:to-100%- before:absolute before:top-[0.5px] before:left-1/2 before:h-px before:w-8/10 before:-translate-1/2 before:bg-linear-to-r before:bg-linear-[90deg,transparent,#fffa_25%,#fff_50%,#fffa_75%,transparent]',
				'after:to-100%- after:absolute after:top-[8px] after:left-1/2 after:h-[0.8px] after:w-7/10 after:-translate-1/2 after:bg-linear-[90deg,transparent,#fffa_50%,transparent]',
				className,
			)}
		>
			<div className='bg-surface-card h-full w-full overflow-hidden rounded-2xl border-0 border-[#444]'>
				{children}
			</div>
		</div>
	)
}
