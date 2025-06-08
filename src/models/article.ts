import { DateType } from '@/libs/datetime'
import { IconType } from 'react-icons'

export type ArticleDetailModel = {
	id: number
	title: string
	slug: string
	description: string
	coverImage?: string
	thumbnail: string
	content: string
	context?: ArticleContext
	wordCount: number
	isFeatured?: boolean
	relatedArticles: number[]
	nextArticle?: number | null
	tags: Tag[]
	author: Author
	postedAt: DateType
	updatedAt: DateType
}

export type ArticleListItemModel = Pick<
	ArticleDetailModel,
	| 'id'
	| 'title'
	| 'slug'
	| 'description'
	| 'thumbnail'
	| 'isFeatured'
	| 'postedAt'
	| 'wordCount'
	| 'tags'
>

export type ArticleContext = {
	title: string
	description: string
}

export type Tag = {
	name: string
	slug: string
}

export type Author = {
	name: string
	avatar: string
}

export type Topic = Tag & {
	articleCount: number
}

export enum SortKindValue {
	NEWEST = 'newest',
	OLDEST = 'oldest',
	ALPHABET = 'alphabetical',
	ALPHABETICAL_REVERSE = 'alphabetical_reverse',
	FEATURED = 'featured',
	MOST_VIEWED = 'most_viewed',
}

export type SortItemType = {
	icon: IconType
	sortName: string
	sortDescription: string
	sortValue: SortKindValue
}
