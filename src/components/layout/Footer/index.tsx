import Link from 'next/link'
import { tv } from 'tailwind-variants'

import { getSocialInfo } from '@/services/getOverviewData'

const socialLinks = tv({
	slots: {
		linkSocial: 'px-3 py-2',
		iconSocial:
			'transition-base text-text-base hover:text-button-primary-hover hover:drop-shadow-button-primary-hover',
	},
})

const footerNav = tv({
	slots: {
		navGroup: 'flex w-1/2 flex-col items-start',
		navGroupName: 'my-4 font-bold',
		navItem:
			'transition-base hover:text-button-primary-hover hover:drop-shadow-button-primary-hover/30 my-2 cursor-pointer font-medium hover:drop-shadow-md',
	},
})

export default async function Footer() {
	const socials = await getSocialInfo()
	const { navGroup, navGroupName, navItem } = footerNav()
	const { linkSocial, iconSocial } = socialLinks()

	return (
		<footer id='footer' className='px-6 py-4'>
			<h3 className='text-xl font-extrabold'>Nguyen Quang Vinh</h3>
			<p className='text-text-muted text-sm font-medium'>
				Help you develop your own application from scratch
			</p>
			<div className='-mx-3 my-4 flex'>
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
							<social.icon size={24} className={iconSocial()} />
						</Link>
					)
				})}
			</div>

			<div className='flex'>
				<div className={navGroup()}>
					<p className={navGroupName()}>Portfolio</p>
					{[
						{ url: '#hello', name: 'Home' },
						{ url: '#skills', name: 'Skills' },
						{ url: '#projects', name: 'Projects' },
						{ url: '#contact', name: 'Contact' },
					].map((link) => (
						<Link
							key={link.url}
							href={link.url}
							className={navItem()}
							aria-label={`${link.name} Section`}
							title={`Scroll to ${link.name} section`}
						>
							{link.name}
						</Link>
					))}
				</div>
				<div className={navGroup()}>
					<p className={navGroupName()}>Websites</p>

					{[
						{ url: '/articles', name: 'Articles' },
						{ url: '/guest-book', name: 'Guest Book' },
						{ url: '/threads', name: 'Threads' },
						{ url: '/notifications', name: 'Notifications' },
					].map((link) => (
						<Link
							key={link.url}
							href={link.url}
							className={navItem()}
							aria-label={`${link.name} Page`}
							title={`Direct to ${link.name} page`}
						>
							{link.name}
						</Link>
					))}
				</div>
			</div>
			<div className='footer-bottom mt-6'>
				<div className='bg-border/30 h-[1.5px] rounded-full'></div>
				<p className='text-text-muted/80 mt-6 mb-4 text-sm font-medium'>
					Copyright © 2025 Nguyen Quang Vinh. All rights reserved.
				</p>
			</div>
		</footer>
	)
}
