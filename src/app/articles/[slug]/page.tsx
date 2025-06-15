import { Metadata } from 'next'
import React from 'react'
import { tv } from 'tailwind-variants'

import CoverImage from '@/components/common/images/CoverImage'
import ContactSection from '@/components/contact/GetInTouch'
import ArticleContent from '@/containers/article-detail/ArticleContent'
import ArticleDetailMainInfo from '@/containers/article-detail/ArticleDetailMainInfo'
import ArticleFooter from '@/containers/article-detail/ArticleFooter'
import LatestArticleList from '@/containers/article-detail/LatestArticleList'
import RelatedArticleList from '@/containers/article-detail/RelatedArticleList'
import { getAllArticleSlugs, getArticleDetail } from '@/services/article-list'

interface Params {
	slug: string
}

export async function generateStaticParams(): Promise<Params[]> {
	const allSlugs = await getAllArticleSlugs()
	return allSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
	params,
}: {
	params: Promise<Params>
}): Promise<Metadata> {
	const { slug } = await params
	const article = await getArticleDetail(slug)

	return {
		title: article.title + ' | Quang Vinh',
		description: article.description,
		keywords: article.tags.map((tag) => tag.name).join(', '),
		authors: { name: article.author.name, url: 'quanqvinh.online' },
		robots: { index: true, follow: true },
		openGraph: {
			title: article.title,
			description: article.description,
			type: 'article',
			images: article.thumbnail,
			publishedTime: new Date(article.postedAt).toISOString(),
			modifiedTime: new Date(article.updatedAt).toISOString(),
			authors: article.author.name,
			emails: 'nguyenquanqvinh@gmail.com',
			tags: article.tags.map((tag) => tag.name),
		},
		twitter: {
			card: 'summary_large_image',
			title: article.title,
			description: article.description,
			images: article.thumbnail,
		},
	}
}

const articleDetailStyles = tv({
	slots: {
		wrapper: 'px-4 pt-10',
		articleSection: 'mb-40',
		articleMainInfo: '',
		articleContent: '',
		articleFooter: '',
		relatedArticleList: 'mt-20',
		latestArticleList: 'mt-20',
		contactSection: '',
	},
})

export default async function Page({ params }: { params: Promise<Params> }) {
	const { slug } = await params
	const article = await getArticleDetail(slug)

	const {
		wrapper,
		articleSection,
		articleMainInfo,
		articleContent,
		articleFooter,
		relatedArticleList,
		latestArticleList,
		contactSection,
	} = articleDetailStyles()

	return (
		<React.Fragment>
			<div className={wrapper()}>
				<CoverImage
					imgSrc={article.coverImage || article.thumbnail}
					imgAlt={article.title}
				/>
				<div className={articleSection()}>
					<ArticleDetailMainInfo
						className={articleMainInfo()}
						article={article}
					/>
					<ArticleContent className={articleContent()} article={article} />
					<ArticleFooter className={articleFooter()} article={article} />
					<RelatedArticleList
						className={relatedArticleList()}
						article={article}
					/>
					<LatestArticleList
						className={latestArticleList()}
						article={article}
					/>
				</div>
				<ContactSection className={contactSection()} />
			</div>
		</React.Fragment>
	)
}
