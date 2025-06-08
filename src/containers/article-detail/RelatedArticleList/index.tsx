import Image from 'next/image'
import Link from 'next/link'
import { tv } from 'tailwind-variants'

import BaseChip from '@/components/common/chips/BaseChip'
import Dot from '@/components/common/separator/Dot'
import { datetime } from '@/libs/datetime'
import { getReadingTime } from '@/libs/text'
import { ArticleDetailModel } from '@/models/article'
import { getRelatedArticles } from '@/services/article-list'
import { Stylable } from '@/types/props'

const relatedArticleListStyles = tv({
	slots: {
		wrapper: '',
		titleWrapper: 'mb-4 flex items-center justify-between',
		title: 'text-xl font-bold',
		titleLink: 'text-text-muted block text-sm font-medium',
		articleItem:
			'bg-surface-card border-border mb-4 flex h-30 items-center overflow-hidden rounded-2xl border-1',
		articleThumbnail:
			'border-r-border aspect-[1/1] h-full w-auto border-r-1 object-cover object-center',
		articleDetailWrapper:
			'flex h-full flex-1 flex-col overflow-hidden px-2.5 py-1.5',
		articleTitle: 'text-text-base font-semibold',
		articleMetadata: 'text-text-muted mt-auto text-xs',
		articleTagWrapper:
			'-mx-0.5 mt-1 overflow-hidden text-xs text-ellipsis whitespace-nowrap',
	},
})

interface Props extends Stylable {
	article: ArticleDetailModel
}

export default async function RelatedArticleList({
	article,
	className,
}: Props) {
	const relatedArticles = await getRelatedArticles(article.relatedArticles)
	const {
		wrapper,
		titleWrapper,
		title,
		titleLink,
		articleItem,
		articleThumbnail,
		articleDetailWrapper,
		articleTitle,
		articleMetadata,
		articleTagWrapper,
	} = relatedArticleListStyles()

	return (
		<div className={wrapper({ class: className })}>
			<div className={titleWrapper()}>
				<p className={title()}>Related Articles</p>
				<Link
					href={{
						pathname: '/articles',
						query: {
							related: article.id,
						},
					}}
					className={titleLink()}
				>
					View all →
				</Link>
			</div>
			{relatedArticles.map((article) => (
				<Link
					key={article.id}
					href={`/articles/${article.slug}`}
					className={articleItem()}
				>
					<Image
						src={article.thumbnail}
						alt={article.title}
						width={100}
						height={100}
						className={articleThumbnail()}
					/>
					<div className={articleDetailWrapper()}>
						<p className={articleTitle()}>{article.title}</p>
						<p className={articleMetadata()}>
							{getReadingTime(article.wordCount)} min read
							<Dot />
							{datetime.toFormat(article.postedAt, 'MMM d, yyyy')}
						</p>
						<div className={articleTagWrapper()}>
							{article.tags.map((tag) => (
								<BaseChip key={tag.name} size='small'>
									{tag.name}
								</BaseChip>
							))}
						</div>
					</div>
				</Link>
			))}
		</div>
	)
}
