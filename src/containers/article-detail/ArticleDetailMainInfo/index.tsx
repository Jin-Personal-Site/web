import { tv } from 'tailwind-variants'

import AuthorWithSocial from '@/components/author/AuthorWithSocial'
import BaseChip from '@/components/common/chips/BaseChip'
import Dot from '@/components/common/separator/Dot'
import { datetime } from '@/libs/datetime'
import { getReadingTime } from '@/libs/text'
import { ArticleDetailModel } from '@/models/article'
import { Stylable } from '@/types/props'

const articleMainInfoStyles = tv({
	slots: {
		wrapper: '',
		articleTitle: 'text-text-base text-3xl font-bold',
		articleMetadata: 'text-text-muted mt-4',
		authorWrapper: 'mt-3',
		articleDescription: 'text-text-base mt-6 text-lg',
		articleTagWrapper: '-mx-1 mt-4',
		articleTag: 'text-text-base bg-text-muted/15 border-border border-1',
	},
})

interface Props extends Stylable {
	article: ArticleDetailModel
}

export default function ArticleDetailMainInfo({ article, className }: Props) {
	const {
		wrapper,
		articleTitle,
		articleMetadata,
		authorWrapper,
		articleTagWrapper,
		articleTag,
		articleDescription,
	} = articleMainInfoStyles()

	return (
		<div className={wrapper({ class: className })}>
			<h1 className={articleTitle()}>{article.title}</h1>
			<p className={articleMetadata()}>
				{getReadingTime(article.wordCount)} min read
				<Dot />
				Posted on {datetime.toFormat(article.postedAt, 'MMM d, yyyy')}
			</p>
			<AuthorWithSocial
				avatarUrl={article.author.avatar}
				className={authorWrapper()}
				authorName={article.author.name}
				anchorText='@quanqvinh'
				socialUrl='https://www.linkedin.com/in/quanqvinh'
			/>
			<p className={articleDescription()}>{article.description}</p>
			<div className={articleTagWrapper()}>
				{article.tags.map((tag) => (
					<BaseChip key={tag.slug} className={articleTag()} size='large'>
						{tag.name}
					</BaseChip>
				))}
			</div>
		</div>
	)
}
