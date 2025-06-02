'use client'

import React, { useMemo, useReducer, useState } from 'react'
import { LuHash } from 'react-icons/lu'
import { MdUnfoldLess, MdUnfoldMore } from 'react-icons/md'
import { tv } from 'tailwind-variants'

import BaseChip from '@/components/common/chips/BaseChip'
import { classnames } from '@/libs/tailwind'
import { Topic } from '@/models/article'
import { Polymorphic, Stylable } from '@/types/props'

const articleTopicListStyles = tv({
	slots: {
		container:
			'border-border bg-surface-card transition-base rounded-xl border-1 py-2 pr-3 pl-2 select-none',
		titleWrapper: 'flex items-center justify-between py-2 pl-1',
		title: 'flex items-center',
		allTopicsLabel:
			'bg-text-base/10 border-text-base/30 transition-base invisible ml-4 border-1 px-2 text-[0.6875rem] font-medium',
		titleIcon: 'text-text-base/50 transition-base mr-1 text-xl',
		foldTopicIcon: 'text-xl',
		topicWrapper: '-mx-1 mt-4 flex flex-wrap',
		topicItem:
			'text-text-base/80 dark:text-text-base border-border transition-base cursor-pointer rounded-xl border-1 bg-gray-600/30 px-2 py-1.5 text-xs font-medium hover:opacity-70',
		selectedTopicItem: 'border-primary bg-primary/30!',
	},
})

interface Props extends Stylable, Polymorphic {
	topics: Topic[]
}

type SelectedTopicState = Topic[]

enum SelectedTopicActionType {
	SELECT = 'select',
	UNSELECT = 'unselect',
}

type SelectedTopicAction = {
	type: SelectedTopicActionType
	payload: Topic
}

const selectedTopicReducer = (
	state: SelectedTopicState,
	action: SelectedTopicAction,
) => {
	const { type, payload: topic } = action

	switch (type) {
		case SelectedTopicActionType.SELECT:
			return [
				...state.filter((selectedTopic) => selectedTopic.slug !== topic.slug),
				topic,
			].sort((a, b) => b.articleCount - a.articleCount)

		case SelectedTopicActionType.UNSELECT:
			return state
				.filter((selectedTopic) => selectedTopic.slug !== topic.slug)
				.sort((a, b) => b.articleCount - a.articleCount)

		default:
			return state.sort((a, b) => b.articleCount - a.articleCount)
	}
}

export default function ArticleTopicList({
	topics,
	className,
	as: Tag = 'div',
}: Props) {
	const {
		container,
		titleWrapper,
		title,
		allTopicsLabel,
		titleIcon,
		foldTopicIcon,
		topicItem,
		selectedTopicItem,
	} = articleTopicListStyles()
	const [selectedTopics, dispatch] = useReducer(
		selectedTopicReducer,
		[] as Topic[],
	)
	const [isShowAll, setIsShowAll] = useState(false)

	const unselectedTopics = useMemo(() => {
		const selectedTopicSlugs = selectedTopics.map((topic) => topic.slug)
		return topics
			.filter((topic) => !selectedTopicSlugs.includes(topic.slug))
			.sort((a, b) => b.articleCount - a.articleCount)
	}, [topics, selectedTopics])

	return (
		<Tag className={container({ class: className })}>
			<div
				className={titleWrapper()}
				onClick={() => setIsShowAll((value) => !value)}
			>
				<h2 className={title()}>
					<LuHash className={titleIcon()} /> Topics
					<BaseChip
						className={allTopicsLabel({
							className: classnames({
								visible: selectedTopics.length === 0,
								'opacity-30': isShowAll,
							}),
						})}
						rounded={true}
					>
						All topics
					</BaseChip>
				</h2>
				{isShowAll ? (
					<MdUnfoldLess className={foldTopicIcon()} />
				) : (
					<MdUnfoldMore className={foldTopicIcon()} />
				)}
			</div>
			<div>
				{selectedTopics.map((topic) => (
					<BaseChip
						key={topic.slug}
						className={topicItem({ class: selectedTopicItem() })}
						size='large'
						onClick={() =>
							dispatch({
								type: SelectedTopicActionType.UNSELECT,
								payload: topic,
							})
						}
					>
						{topic.name} ({topic.articleCount})
					</BaseChip>
				))}
				{isShowAll &&
					unselectedTopics.map((topic) => (
						<BaseChip
							key={topic.slug}
							className={topicItem()}
							size='large'
							onClick={() =>
								dispatch({
									type: SelectedTopicActionType.SELECT,
									payload: topic,
								})
							}
						>
							{topic.name} ({topic.articleCount})
						</BaseChip>
					))}
			</div>
		</Tag>
	)
}
