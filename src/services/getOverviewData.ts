import { IconType } from 'react-icons'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { RiTelegram2Line } from 'react-icons/ri'
import { TbBrandGmail, TbBrandMessenger } from 'react-icons/tb'

import overviewDataPromise from '@/../public/json/overview.json'

export const getOverviewInfo = async () => {
	const { startWorkingDate, completedProjects } = await overviewDataPromise

	return { startWorkingDate, completedProjects }
}

export const getSocialInfo = async () => {
	const { socials } = await overviewDataPromise

	const socialIconSet: Record<string, IconType> = {
		github: FiGithub,
		linkedin: FiLinkedin,
		gmail: TbBrandGmail,
		telegram: RiTelegram2Line,
		messenger: TbBrandMessenger,
	}

	return socials.map((social) => ({
		...social,
		icon: socialIconSet[social.key],
	}))
}
