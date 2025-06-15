'use client'

import { useMemo, useRef, useState } from 'react'
import { FaSortAlphaDown, FaSortAlphaDownAlt } from 'react-icons/fa'
import { LuCalendar, LuEye, LuStar } from 'react-icons/lu'
import { MdUnfoldLess, MdUnfoldMore } from 'react-icons/md'
import { tv } from 'tailwind-variants'

import ArticleSortItem from '@/containers/article-list/ArticleSortItem'
import { useOutsideClickRef } from '@/hooks/useOutsideClickRef'
import { classnames } from '@/libs/tailwind'
import { SortItemType, SortKindValue } from '@/models/article'
import { Polymorphic, Stylable } from '@/types/props'

const sortFilterStyles = tv({
	slots: {
		container: 'select-none',
		wrapper:
			'border-border bg-surface-card transition-base hover:bg-border/70 relative flex cursor-pointer items-center justify-between rounded-xl border-1 py-2 pr-3 pl-2',
		currentSort: '',
		sortIcon: 'text-xl transition-colors duration-300',
		sortDropList:
			'bg-surface-card border-border absolute top-full left-0 z-1 translate-y-1.5 rounded-xl border-1 p-2',
		sortKindItem: 'py-1',
	},
})

interface Props extends Stylable, Polymorphic {}

const sortKinds: SortItemType[] = [
	{
		icon: LuStar,
		sortName: 'Featured',
		sortDescription: 'Featured articles first',
		sortValue: SortKindValue.FEATURED,
	},
	{
		icon: LuEye,
		sortName: 'Most viewed',
		sortDescription: 'Most viewed articles first',
		sortValue: SortKindValue.MOST_VIEWED,
	},
	{
		icon: LuCalendar,
		sortName: 'Newest',
		sortDescription: 'Most recent articles first',
		sortValue: SortKindValue.NEWEST,
	},
	{
		icon: LuCalendar,
		sortName: 'Oldest',
		sortDescription: 'Oldest articles first',
		sortValue: SortKindValue.OLDEST,
	},
	{
		icon: FaSortAlphaDown,
		sortName: 'A to Z',
		sortDescription: 'Alphabetical order',
		sortValue: SortKindValue.ALPHABET,
	},
	{
		icon: FaSortAlphaDownAlt,
		sortName: 'Z to A',
		sortDescription: 'Reverse alphabetical order',
		sortValue: SortKindValue.ALPHABETICAL_REVERSE,
	},
]

export default function ArticleSortFilter({
	className,
	as: Tag = 'div',
}: Props) {
	const {
		container,
		wrapper,
		currentSort,
		sortIcon,
		sortDropList,
		sortKindItem,
	} = sortFilterStyles()

	const [currentSortItem, setCurrentSortItem] = useState<SortKindValue>(
		SortKindValue.NEWEST,
	)
	const [isOpen, setIsOpen] = useState(false)
	const dropListParentRef = useRef<HTMLDivElement | null>(null)
	const dropListRef = useOutsideClickRef<HTMLDivElement>(
		() => setIsOpen(false),
		dropListParentRef,
	)

	const currentSortDesc = useMemo(
		() =>
			sortKinds.find((item) => item.sortValue === currentSortItem) ||
			sortKinds[0],
		[currentSortItem],
	)

	return (
		<Tag className={container({ class: className })}>
			<div
				ref={dropListParentRef}
				className={wrapper({
					class: classnames({ 'shadow-[inset_0_0_5px_#fff4]': isOpen }),
				})}
				onClick={() => setIsOpen((value) => !value)}
			>
				<ArticleSortItem
					item={currentSortDesc}
					className={currentSort()}
					slotClassName={{
						currentSelected: 'hidden',
					}}
				/>
				{isOpen ? (
					<MdUnfoldLess className={sortIcon()} />
				) : (
					<MdUnfoldMore className={sortIcon()} />
				)}
				{isOpen && (
					<div ref={dropListRef} className={sortDropList()}>
						{sortKinds.map((kind) => (
							<ArticleSortItem
								key={kind.sortValue}
								item={kind}
								className={sortKindItem()}
								slotClassName={
									currentSortItem === kind.sortValue
										? {
												wrapper: 'bg-text-base/10!',
											}
										: {
												wrapper: 'hover:bg-text-base/5',
												icon: 'text-text-muted',
											}
								}
								isCurrent={currentSortItem === kind.sortValue}
								onClick={() => setCurrentSortItem(kind.sortValue)}
							/>
						))}
					</div>
				)}
			</div>
		</Tag>
	)
}
