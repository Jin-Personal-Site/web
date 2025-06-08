import React from 'react'
import { tv } from 'tailwind-variants'

import BaseChip from '@/components/common/chips/BaseChip'
import { datetime } from '@/libs/datetime'
import { ArticleDetailModel } from '@/models/article'
import { Stylable } from '@/types/props'

const articleFooterStyles = tv({
	slots: {
		wrapperStyle: 'border-t-border mt-8 mb-10 border-t-1 border-dashed pt-4',
		articleTagWrapper: '-mx-1',
		articleTag: 'text-text-base bg-text-muted/15 border-border border-1',
		lastModifiedStyle: 'text-text-muted mt-2 text-sm italic',
	},
})

interface Props extends Stylable {
	article: ArticleDetailModel
}

export default function ArticleFooter({ article }: Props) {
	const { wrapperStyle, articleTagWrapper, articleTag, lastModifiedStyle } =
		articleFooterStyles()

	return (
		<div className={wrapperStyle()}>
			<div className={articleTagWrapper()}>
				{article.tags.map((tag) => (
					<BaseChip key={tag.slug} className={articleTag()} size='large'>
						{tag.name}
					</BaseChip>
				))}
			</div>
			<p className={lastModifiedStyle()}>
				Last updated on {datetime.toFormat(article.updatedAt, 'MMM d, yyyy')}
			</p>
		</div>
	)
}
