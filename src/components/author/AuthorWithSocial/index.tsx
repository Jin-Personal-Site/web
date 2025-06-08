import Image from 'next/image'
import Link from 'next/link'
import { tv } from 'tailwind-variants'

import Dot from '@/components/common/separator/Dot'
import { Polymorphic, Stylable } from '@/types/props'

const authorWithSocialStyles = tv({
	slots: {
		wrapperStyle: 'flex items-center',
		avatarImageStyle:
			'shadow-[0_0_5px_theme(color.text.base/0.2)] rounded-xl object-cover object-center',
		authorNameWrapper: 'ml-3',
		authorNameStyle: 'text-text-base font-semibold',
		authorDetailStyle: 'text-text-muted mt-0.5 text-sm',
		authorSocialLinkStyle:
			'text-button-link dark:text-[color-mix(in_srgb,theme(color.primary)_100%,white_70%)] font-medium',
	},
})

interface Props extends Polymorphic, Stylable {
	avatarUrl: string
	authorName: string
	anchorText: string
	socialUrl: string
}

export default function AuthorWithSocial({
	avatarUrl,
	authorName,
	anchorText,
	socialUrl,
	as: Tag = 'address',
	className,
}: Props) {
	const {
		wrapperStyle,
		avatarImageStyle,
		authorNameWrapper,
		authorNameStyle,
		authorDetailStyle,
		authorSocialLinkStyle,
	} = authorWithSocialStyles()

	return (
		<Tag className={wrapperStyle({ class: className })}>
			<Image
				src={avatarUrl}
				alt={authorName}
				width={45}
				height={45}
				className={avatarImageStyle()}
			/>
			<div className={authorNameWrapper()}>
				<p
					aria-label={`Author name: ${authorName}`}
					className={authorNameStyle()}
				>
					{authorName}
				</p>
				<p className={authorDetailStyle()}>
					Full-Stack Developer
					<Dot />
					<Link
						href={socialUrl}
						target='_blank'
						rel='noopener noreferrer'
						aria-label={`Visit ${authorName}'s ${anchorText}`}
						className={authorSocialLinkStyle()}
					>
						{anchorText}
					</Link>
				</p>
			</div>
		</Tag>
	)
}
