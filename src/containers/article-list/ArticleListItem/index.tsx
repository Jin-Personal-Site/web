import Image from 'next/image'
import Link from 'next/link'
import { LuClock } from 'react-icons/lu'
import { tv } from 'tailwind-variants'

import BaseChip from '@/components/common/chips/BaseChip'
import PictureFrame from '@/components/common/frame/PictureFrame'
import { getReadingTime } from '@/libs/text'
import { ArticleListItemModel } from '@/models/article'
import { Polymorphic, Stylable } from '@/types/props'

import ArticlePostedTime from '../ArticlePostedTime'

const articleListItemStyles = tv({
	slots: {
		container:
			'border-t-border border-dashed py-8 not-[:first-of-type]:border-t-1',
		thumbnailFrame: 'mx-px',
		thumbnail: 'aspect-[2/1] w-full rounded-xl object-cover object-center',
		postedTime: 'text-text-muted mt-3 text-xs',
		title: 'text-text-base mt-3 text-lg font-bold',
		description: 'text-text-base/75 mt-1 mb-5 text-[0.8125rem]',
		readingEstimation: 'text-text-base flex items-center text-xs',
		readingEstimationIcon: 'mr-1 text-green-700 dark:text-green-400',
		tagsWrapper: 'mx-[-0.1875rem] mt-3',
		tagItem: 'mx-[0.1875rem] bg-gray-600/25',
	},
})

interface Props extends Stylable, Polymorphic {
	article: ArticleListItemModel
	lazy?: boolean
}

export default function ArticleListItem({
	article,
	className,
	as: Tag = 'div',
	lazy,
}: Props) {
	const {
		container,
		thumbnailFrame,
		thumbnail,
		postedTime,
		title,
		description,
		readingEstimation,
		readingEstimationIcon,
		tagsWrapper,
		tagItem,
	} = articleListItemStyles()

	return (
		<Tag className={container({ class: className })}>
			<Link href={`/articles/${article.slug}`} aria-label={article.title}>
				<PictureFrame className={thumbnailFrame()}>
					<Image
						src={article.thumbnail}
						alt={article.title}
						width={400}
						height={(400 * 2) / 3}
						loading={lazy ? 'lazy' : 'eager'}
						className={thumbnail()}
					/>
				</PictureFrame>
			</Link>
			<ArticlePostedTime time={article.postedAt} className={postedTime()} />
			<Link href={`/articles/${article.slug}`} aria-label={article.title}>
				<h3 className={title()}>{article.title}</h3>
			</Link>
			<p className={description()}>{article.description}</p>
			<p className={readingEstimation()}>
				<LuClock className={readingEstimationIcon()} />{' '}
				<span>{getReadingTime(article.wordCount)} min read</span>
			</p>
			<div className={tagsWrapper()}>
				{article.tags.map((tag) => (
					<Link
						key={tag.slug}
						href={{
							pathname: '/articles',
							query: {
								tag: tag.slug,
							},
						}}
						prefetch={false}
						aria-label={tag.name}
					>
						<BaseChip className={tagItem()}>{tag.name}</BaseChip>
					</Link>
				))}
			</div>
		</Tag>
	)
}
