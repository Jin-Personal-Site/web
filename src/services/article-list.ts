import articleList from '@/../public/json/article-list.json'
import topicList from '@/../public/json/article-topic.json'
import { ArticleListItemModel, Topic } from '@/models/article'

export const getAllArticles = async (): Promise<ArticleListItemModel[]> => {
	return await articleList
}

export const getAllTopics = async (): Promise<Topic[]> => {
	return await topicList
}
