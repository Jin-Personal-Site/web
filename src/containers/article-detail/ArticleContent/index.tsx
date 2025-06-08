import React from 'react'
import { tv } from 'tailwind-variants'

import DescriptionCard from '@/components/card/DescriptionCard'
import { ArticleDetailModel } from '@/models/article'
import { Stylable } from '@/types/props'

const articleContentStyles = tv({
	slots: {
		container: 'mt-10 mb-4',
		contextWrapper: '',
		contentWrapper: 'prose dark:prose-invert prose-img:rounded-2xl',
	},
})

interface Props extends Stylable {
	article: ArticleDetailModel
}

export default function ArticleContent({ article, className }: Props) {
	const { container, contextWrapper, contentWrapper } = articleContentStyles()

	return (
		<div className={container({ class: className })}>
			{article.context && (
				<DescriptionCard
					className={contextWrapper()}
					title={article.context.title}
					description={article.context.description}
				/>
			)}
			<div
				id='content'
				dangerouslySetInnerHTML={{ __html: article.content }}
				className={contentWrapper()}
			/>
		</div>
	)
}
