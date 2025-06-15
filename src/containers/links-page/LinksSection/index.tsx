import Link from 'next/link'
import { tv } from 'tailwind-variants'

import BaseButton from '@/components/common/buttons/BaseButton'
import SocialIcon from '@/components/contact/SocialIcon'
import { getSocialInfo } from '@/services/overview-info'
import { Stylable } from '@/types/props'

const linksSectionStyle = tv({
	slots: {
		wrapper: 'flex-col-center *:self-stretch',
		socialButton:
			'flex-center bg-surface-card border-[theme(color.text.base/0.3)] text-text-base relative mb-4 w-full font-medium',
		socialIcon: 'absolute top-1/2 left-5 -translate-y-1/2',
	},
})

interface Props extends Stylable {}

export default async function LinksSection({ className }: Props) {
	const socials = await getSocialInfo()
	const { wrapper, socialButton, socialIcon } = linksSectionStyle()

	return (
		<div className={wrapper({ class: className })}>
			{socials.map((social) => (
				<BaseButton
					as={Link}
					key={social.key}
					href={social.url}
					target='_blank'
					rel='noopener noreferrer'
					className={socialButton()}
					color='secondary'
					size='large'
					variant='flat'
				>
					<SocialIcon socialKey={social.key} className={socialIcon()} />
					{social.name}
				</BaseButton>
			))}
		</div>
	)
}
