import Image from 'next/image'
import Link from 'next/link'
import { tv } from 'tailwind-variants'

import { getSocialInfo } from '@/services/overview-info'

const socialLinks = tv({
	slots: {
		linkSocial: 'px-3 py-2 flex-center',
		iconSocial:
			'transition-base text-text-muted hover:text-button-primary-hover hover:drop-shadow-button-primary-hover',
	},
})

export default async function SocialMedia() {
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
						className={linkSocial()}
						title={`Open ${social.name} profile in new tab`}
					>
						{typeof social.icon === 'function' ? (
							<social.icon size={24} className={iconSocial()} />
						) : (
							<Image
								src={social.icon}
								alt={social.name}
								width={24}
								height={24}
							/>
						)}
					</Link>
				)
			})}
		</>
	)
}
