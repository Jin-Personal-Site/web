import overviewDataPromise from '@/../public/json/overview.json'

export const getOverviewInfo = async () => {
	const { startWorkingDate, completedProjects } = await overviewDataPromise

	return { startWorkingDate, completedProjects }
}

export type SocialItem = {
	key: string
	name: string
	url: string
}

export const getSocialInfo = async (): Promise<SocialItem[]> => {
	const { socials } = await overviewDataPromise

	return socials
}
