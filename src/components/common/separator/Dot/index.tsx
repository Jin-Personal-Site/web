import { tv } from 'tailwind-variants'

import { Polymorphic, Stylable } from '@/types/props'

const dotStyles = tv({
	base: 'mx-1.5 font-bold',
})

interface Props extends Polymorphic, Stylable {}

export default function Dot({ className, as: Tag = 'span' }: Props) {
	return <Tag className={dotStyles({ class: className })}>·</Tag>
}
