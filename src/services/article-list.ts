import articleList from '@/../public/json/article-list.json'
import topicList from '@/../public/json/article-topic.json'
import {
	ArticleDetailModel,
	ArticleListItemModel,
	Topic,
} from '@/models/article'

export const getAllArticles = async (): Promise<ArticleListItemModel[]> => {
	return await articleList
}

export const getAllTopics = async (): Promise<Topic[]> => {
	return await topicList
}

export const getAllArticleSlugs = async (): Promise<string[]> => {
	const allArticles = await articleList
	return allArticles.map((article) => article.slug)
}

export const getArticleDetail = async (
	slug: string,
): Promise<ArticleDetailModel> => {
	const allArticles: ArticleDetailModel[] = await articleList
	const article = allArticles.find((article) => article.slug === slug)

	if (!article) throw new Error('Article not found')

	return article
}

export const getRelatedArticles = async (
	articleIds: number[],
): Promise<ArticleDetailModel[]> => {
	const allArticles: ArticleDetailModel[] = await articleList

	const relatedArticles = allArticles.filter((article) =>
		articleIds.includes(article.id),
	)

	const orderMap = articleIds.reduce(
		(res, cur, index) => {
			res[cur] = index
			return res
		},
		{} as Record<number, number>,
	)

	return relatedArticles.sort((a, b) => orderMap[a.id] - orderMap[b.id])
}

export const getLatestArticles = async (
	amount: number,
): Promise<ArticleDetailModel[]> => {
	const allArticles: ArticleDetailModel[] = await articleList

	return allArticles.slice(0, amount)
}
