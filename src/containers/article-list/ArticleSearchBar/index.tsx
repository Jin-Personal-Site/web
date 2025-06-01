import { FiSearch } from 'react-icons/fi'
import { tv } from 'tailwind-variants'

import { DeepStylable, Polymorphic, Stylable } from '@/types/props'

const searchBarStyles = tv({
	slots: {
		wrapper:
			'group dark:border-border bg-surface-card/20 flex items-center rounded-2xl border-[1.5px] border-black/10 px-4 py-3 backdrop-blur-xs focus-within:shadow-[inset_0_0_10px_#0002] dark:focus-within:shadow-[inset_0_0_10px_#fff2]',
		searchIcon:
			'text-text-muted group-focus-within:text-text-base transition-base mr-2',
		searchInput: 'text-text-base flex-1 outline-0',
	},
})

interface Props
	extends Stylable,
		DeepStylable<typeof searchBarStyles>,
		Polymorphic {}

export default function ArticleSearchBar({
	className,
	as: Tag = 'div',
}: Props) {
	const { wrapper, searchIcon, searchInput } = searchBarStyles()

	return (
		<Tag className={className}>
			<div className={wrapper()}>
				<label htmlFor='menu-search' className={searchIcon()}>
					<FiSearch />
				</label>
				<input
					id='menu-search'
					className={searchInput()}
					placeholder='Search...'
				/>
			</div>
		</Tag>
	)
}
