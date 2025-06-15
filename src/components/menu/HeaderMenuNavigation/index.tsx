import { capitalize } from 'lodash'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CgDarkMode } from 'react-icons/cg'
import { FiHome, FiLogIn, FiSearch, FiUser } from 'react-icons/fi'
import { IoClose, IoLink } from 'react-icons/io5'
import { LuBookA, LuBookHeart, LuCalendarClock } from 'react-icons/lu'
import {
	MdLanguage,
	MdOutlineArticle,
	MdOutlineWebStories,
} from 'react-icons/md'
import { tv } from 'tailwind-variants'

import pageLogo from '@/../public/images/logo.svg'
import SmoothScrollTo from '@/components/common/scroll/SmoothScrollTo'
import SocialIcon from '@/components/contact/SocialIcon'
import { SocialItem } from '@/services/overview-info'

import LanguageGroupButton from '../LanguageGroupButton'
import ThemeGroupButton from '../ThemeGroupButton'

const navigationStyles = tv({
	slots: {
		container:
			'bg-surface-card text-text-base border-border mx-auto mt-20 mb-auto w-90 max-w-9/10 scroll-smooth rounded-xl border-1',
		searchWrapper: 'border-b-border flex h-10 items-center border-b-1',
		searchIcon: 'px-3',
		searchInput: 'h-full flex-1 text-sm focus-visible:outline-0',
		closeButton: 'px-3',
		navList: 'max-h-[65svh] overflow-y-auto overscroll-contain pb-4',
		navSection: 'border-t-border border-t-1 px-3 pt-2 pb-3 first:border-t-0',
		navHeading: 'text-text-muted mb-2 text-xs font-medium',
		navItem: 'mt-3 flex items-center',
		navItemIcon:
			'bg-invert/10 flex-center mr-3 h-10 w-10 rounded-lg text-xl text-white',
		navItemName: 'text-sm font-medium',
		navItemDescription: 'text-text-muted text-xs',
		themeGroupButtons: 'border-b-border mx-5 my-5 border-b-[0.5px] pt-1 pb-3',
		languageGroupButtons: 'mx-5 mt-5 pt-1',
		menuFooter:
			'border-t-border flex h-10 items-center justify-between border-t-1 px-3',
		menuFooterIcon: 'h-6 w-6 opacity-40',
		menuFooterExtraText: 'text-text-muted text-xs text-nowrap',
	},
})

export type HeaderMenuNavItem = {
	icon: JSX.Element
	href: string
	name: string
	description?: string
	targetBlank?: boolean
}

export type HeaderMenuNavList = {
	title: string
	navItems: HeaderMenuNavItem[]
}

interface Props {
	onClose?: () => void
	socialItems: SocialItem[]
}

export default function MenuNavigation({ onClose, socialItems }: Props) {
	const {
		container,
		searchWrapper,
		searchIcon,
		searchInput,
		closeButton,
		navList,
		navSection,
		navHeading,
		navItem,
		navItemIcon,
		navItemName,
		navItemDescription,
		themeGroupButtons,
		languageGroupButtons,
		menuFooter,
		menuFooterIcon,
		menuFooterExtraText,
	} = navigationStyles()

	const menu: HeaderMenuNavList[] = [
		{
			title: 'Navigation',
			navItems: [
				{
					icon: <FiHome />,
					href: '/',
					name: 'Home',
					description: 'Welcome to my forever work-in-progress!',
				},
				{
					icon: <FiUser />,
					href: '/about',
					name: 'About',
					description: 'Learn more about me!',
				},
				{
					icon: <MdOutlineWebStories />,
					href: '/projects',
					name: 'Projects',
					description: 'Showcase my projects',
				},
				{
					icon: <MdOutlineArticle />,
					href: '/articles',
					name: 'Articles',
					description: 'Thoughts, mental models, and sharing',
				},
				{
					icon: <LuBookHeart />,
					href: '/guestbook',
					name: 'Guestbook',
					description: 'Leave a message for me',
				},
				{
					icon: <LuCalendarClock />,
					href: '/book-call',
					name: 'Book a call',
					description: 'Book a call with me',
				},
				{
					icon: <IoLink />,
					href: '/links',
					name: 'Links',
					description: 'All my links are here',
				},
			],
		},
		{
			title: 'Account',
			navItems: [
				{
					icon: <FiLogIn />,
					href: '/login',
					name: 'Sign in',
				},
			],
		},
		{
			title: 'Resources',
			navItems: [
				{
					icon: <LuBookA />,
					href: '/resume-preview',
					name: 'My Résumé',
				},
			],
		},
		{
			title: 'Social',
			navItems: socialItems.map((social) => {
				return {
					icon: <SocialIcon socialKey={social.key} size={20} />,
					name: social.name,
					href: social.url,
					description: `View my ${capitalize(social.name)} profile`,
					targetBlank: true,
				}
			}),
		},
	]

	return (
		<div className={container()}>
			<div className={searchWrapper()}>
				<label htmlFor='menu-search' className={searchIcon()}>
					<FiSearch />
				</label>
				<input
					id='menu-search'
					className={searchInput()}
					placeholder='Search...'
				/>
				{onClose && (
					<button className={closeButton()} onClick={onClose}>
						<IoClose />
					</button>
				)}
			</div>
			<nav className={navList()}>
				{menu.map((menuSection) => (
					<div key={menuSection.title} className={navSection()}>
						<p className={navHeading()}>{menuSection.title}</p>
						{menuSection.navItems.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className={navItem()}
								onClick={onClose}
							>
								<div className={navItemIcon()}>{item.icon}</div>
								<div>
									<p className={navItemName()}>{item.name}</p>
									<p className={navItemDescription()}>{item.description}</p>
								</div>
							</Link>
						))}
					</div>
				))}
				<div id='preference' className={navSection()}>
					<p className={navHeading()}>Preferences</p>
					<div className={navItem()}>
						<div className={navItemIcon()}>
							<CgDarkMode />
						</div>
						<div>
							<p className={navItemName()}>Theme</p>
							<p className={navItemDescription()}>Switch your visual style</p>
						</div>
					</div>
					<ThemeGroupButton className={themeGroupButtons()} />
					<div className={navItem()}>
						<div className={navItemIcon()}>
							<MdLanguage />
						</div>
						<div>
							<p className={navItemName()}>Language</p>
							<p className={navItemDescription()}>
								Choose your preferred language
							</p>
						</div>
					</div>
					<LanguageGroupButton className={languageGroupButtons()} />
				</div>
			</nav>
			<aside className={menuFooter()}>
				<Image src={pageLogo} alt='' className={menuFooterIcon()} />
				<div>
					<SmoothScrollTo
						target='#preference'
						className={menuFooterExtraText()}
					>
						Go to <span className='underline'>Preferences</span>
					</SmoothScrollTo>
				</div>
			</aside>
		</div>
	)
}
