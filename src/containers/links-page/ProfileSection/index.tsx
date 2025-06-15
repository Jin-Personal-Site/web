import Image from 'next/image'
import Link from 'next/link'
import { FiExternalLink } from 'react-icons/fi'
import { tv } from 'tailwind-variants'

import SampleImage from '@/../public/portrait.png'
import BaseButton from '@/components/common/buttons/BaseButton'
import BaseChip from '@/components/common/chips/BaseChip'
import { Stylable } from '@/types/props'

const profileSectionStyles = tv({
	slots: {
		wrapper: 'flex-col-center',
		avatar: 'h-30 w-30 rounded-full object-cover object-top',
		name: 'mt-2 text-2xl font-bold',
		chipWrapper: 'flex-center mt-2 *:mx-1',
		chip: 'border-1 px-2',
		mainLinksWrapper: 'flex-center mt-5 *:mx-1.5',
		linkButton: 'rounded-full px-6 font-normal',
	},
})

interface Props extends Stylable {}

export default function ProfileSection({ className }: Props) {
	const {
		wrapper,
		avatar,
		name,
		chipWrapper,
		chip,
		mainLinksWrapper,
		linkButton,
	} = profileSectionStyles()

	return (
		<div className={wrapper({ class: className })}>
			<Image
				src={`https://picsum.photos/100/100.webp?random=${Math.floor(Math.random() * 1000)}`}
				alt=''
				className={avatar()}
			/>
			<h1 className={name()}>Nguyen Quang Vinh</h1>
			<div className={chipWrapper()}>
				<BaseChip
					size='medium'
					className={chip({
						class:
							'border-blue-800/20 bg-blue-500/20 text-blue-800 dark:bg-blue-500/15 dark:text-blue-400',
					})}
					rounded
				>
					Developer
				</BaseChip>
				<BaseChip
					size='medium'
					className={chip({
						class:
							'border-green-800/20 bg-green-500/20 text-green-800 dark:bg-green-500/15 dark:text-green-400',
					})}
					rounded
				>
					Freelancer
				</BaseChip>
				<BaseChip
					size='medium'
					className={chip({
						class:
							'border-purple-800/20 bg-purple-500/20 text-purple-800 dark:bg-purple-500/15 dark:text-purple-400',
					})}
					rounded
				>
					Problem Solver
				</BaseChip>
			</div>
			<div className={mainLinksWrapper()}>
				<BaseButton
					as={Link}
					href={'/'}
					target='_blank'
					rel='noopener noreferrer'
					color='primary'
					size='medium'
					variant='tactile'
					className={linkButton()}
				>
					Website&nbsp;
					<FiExternalLink />
				</BaseButton>
				<BaseButton
					as={Link}
					href={'mailto:nguyenquanqvinh@gmail.com'}
					target='_blank'
					rel='noopener noreferrer'
					color='secondary'
					size='medium'
					variant='tactile'
					className={linkButton({
						class: '',
					})}
				>
					Email Me&nbsp;
					<FiExternalLink />
				</BaseButton>
			</div>
		</div>
	)
}
