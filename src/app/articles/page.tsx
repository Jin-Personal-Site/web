import { Metadata } from 'next'
import React from 'react'
import { tv } from 'tailwind-variants'

import CoverImage from '@/components/common/images/CoverImage'
import ContactSection from '@/components/contact/GetInTouch'
import SectionHeading from '@/components/heading/SectionHeading'
import ArticleListItem from '@/containers/article-list/ArticleListItem'
import ArticleSearchBar from '@/containers/article-list/ArticleSearchBar'
import ArticleSortFilter from '@/containers/article-list/ArticleSortFilter'
import ArticleTopicList from '@/containers/article-list/ArticleTopicList'
import { getAllArticles, getAllTopics } from '@/services/article-list'

export const metadata: Metadata = {
	title: 'Articles | Vinh Nguyen - Full-Stack Developer',
	description:
		'Explore my collection of articles on software development, programming insights, and technical tutorials',
}

const articleListStyles = tv({
	slots: {
		wrapper: 'px-4 pt-10',
		headingWrapper: 'mb-8',
		searchBar: 'mb-16',
		topicList: 'mb-4',
		sortFilter: 'mb-7',
		articleListWrapper: '',
		articleListItem: 'first:pt-0',
		contactSection: 'mt-50',
	},
})

export default async function Page() {
	const allArticles = await getAllArticles()
	const allTopics = await getAllTopics()

	const {
		wrapper,
		headingWrapper,
		searchBar,
		topicList,
		sortFilter,
		articleListWrapper,
		articleListItem,
		contactSection,
	} = articleListStyles()

	return (
		<React.Fragment>
			<div className={wrapper()}>
				<CoverImage
					imgSrc='https://picsum.photos/100/120.webp?random=1000'
					imgAlt='Cover Image'
				/>
				<SectionHeading
					eyebrowText='My Articles'
					headline='Curated Articles with'
					accent='Handpicked Insights'
					slotClassName={{
						accentStyle: 'pb-1',
					}}
					className={headingWrapper()}
				/>
				<ArticleSearchBar className={searchBar()} />
				<ArticleTopicList topics={allTopics} className={topicList()} />
				<ArticleSortFilter className={sortFilter()} />
				<div className={articleListWrapper()}>
					{allArticles.map((article, index) => (
						<ArticleListItem
							key={article.id}
							article={article}
							className={articleListItem()}
							lazy={index >= 1}
						/>
					))}
				</div>
				<ContactSection className={contactSection()} />
			</div>
		</React.Fragment>
	)
}
