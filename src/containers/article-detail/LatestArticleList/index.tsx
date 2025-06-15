import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import { tv } from 'tailwind-variants'

import BaseButton from '@/components/common/buttons/BaseButton'
import BaseChip from '@/components/common/chips/BaseChip'
import Dot from '@/components/common/separator/Dot'
import { datetime } from '@/libs/datetime'
import { getReadingTime } from '@/libs/text'
import { ArticleDetailModel } from '@/models/article'
import { getLatestArticles } from '@/services/article-list'
import { Stylable } from '@/types/props'

const latestArticleListStyles = tv({
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
			'flex h-full flex-1 flex-col overflow-hidden px-2.5 pt-1.5 pb-2',
		articleTitle: 'text-text-base font-semibold',
		articleMetadata: 'text-text-muted mt-auto text-xs',
		articleTagWrapper:
			'-mx-0.5 mt-1 overflow-hidden text-xs text-ellipsis whitespace-nowrap',
		buttonWrapper: 'mt-8 flex justify-center',
		allArticleButton: 'flex-center px-4 leading-5 font-semibold',
		buttonIcon: 'animate-slide-left ml-1.5 transition-all duration-300',
	},
})

interface Props extends Stylable {
	article: ArticleDetailModel
}

export default async function LatestArticleList({ article, className }: Props) {
	const latestArticles = await getLatestArticles(3)
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
		buttonWrapper,
		allArticleButton,
		buttonIcon,
	} = latestArticleListStyles()

	return (
		<div className={wrapper({ class: className })}>
			<div className={titleWrapper()}>
				<p className={title()}>Latest Articles</p>
				<Link href='/articles' className={titleLink()}>
					View all →
				</Link>
			</div>
			{latestArticles.map((article) => (
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
			<div className={buttonWrapper()}>
				<Link href='/articles' aria-label='View all articles page'>
					<BaseButton
						size='small'
						color='secondary'
						className={allArticleButton()}
					>
						View all Articles
						<FaArrowRight size={12} className={buttonIcon()} />
					</BaseButton>
				</Link>
			</div>
		</div>
	)
}
