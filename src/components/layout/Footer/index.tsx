import Link from 'next/link'
import { tv } from 'tailwind-variants'

import SocialMedia from '@/components/contact/SocialMedia'

const footerNav = tv({
	slots: {
		navGroup: 'flex w-1/2 flex-col items-start',
		navGroupName: 'my-4 font-bold',
		navItem:
			'transition-base hover:text-button-primary-hover hover:drop-shadow-button-primary-hover/30 my-2 cursor-pointer font-medium hover:drop-shadow-md',
	},
})

export default function Footer() {
	const { navGroup, navGroupName, navItem } = footerNav()

	return (
		<footer id='footer' className='px-6 py-4'>
			<h3 className='text-xl font-extrabold'>Nguyen Quang Vinh</h3>
			<p className='text-text-muted text-sm font-medium'>
				Help you develop your own application from scratch
			</p>
			<div className='-mx-3 my-4 flex'>
				<SocialMedia />
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
