import Link from 'next/link'
import { tv } from 'tailwind-variants'

import { getSocialInfo } from '@/services/overview-info'

import SocialIcon from '../SocialIcon'

const socialLinks = tv({
	slots: {
		linkSocial: 'flex-center px-3 py-2',
		iconSocial:
			'transition-base text-text-muted hover:text-button-primary-hover hover:drop-shadow-button-primary-hover',
	},
})

interface Props {
	size?: number
	linkStyle?: string
	iconStyle?: string
}

export default async function SocialMedia({
	size = 24,
	linkStyle,
	iconStyle,
}: Props) {
	const socials = await getSocialInfo()
	const { linkSocial, iconSocial } = socialLinks()

	return (
		<>
			{socials.map((social) => {
				return (
					<Link
						key={social.name}
						href={social.url}
						passHref={true}
						target='_blank'
						aria-label={social.name}
						className={linkSocial({ class: linkStyle })}
						title={`Open ${social.name} profile in new tab`}
					>
						<SocialIcon
							socialKey={social.key}
							size={size}
							className={iconSocial({ class: iconStyle })}
						/>
					</Link>
				)
			})}
		</>
	)
}
