import { IconType } from 'react-icons'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { RiTelegram2Line } from 'react-icons/ri'
import { TbBrandGmail, TbBrandMessenger } from 'react-icons/tb'

import { Stylable } from '@/types/props'

const socialIconSet: Record<string, IconType> = {
	github: FiGithub,
	linkedin: FiLinkedin,
	gmail: TbBrandGmail,
	telegram: RiTelegram2Line,
	messenger: TbBrandMessenger,
}

interface Props extends Stylable {
	socialKey: string
	size?: number
}

export default function SocialIcon({
	socialKey,
	size = 24,
	className,
	style,
}: Props) {
	const SocialIcon = socialIconSet[socialKey]

	if (!SocialIcon) return <></>

	return <SocialIcon size={size} className={className} style={style} />
}
