import { Metadata } from 'next'
import { tv } from 'tailwind-variants'

import ContactSection from '@/components/contact/GetInTouch'
import LinksSection from '@/containers/links-page/LinksSection'
import ProfileSection from '@/containers/links-page/ProfileSection'

export const metadata: Metadata = {
	title: 'Nguyen Quang Vinh',
	description:
		"Links to Nguyen Quang Vinh social media's profiles and other platforms",
}

const linkPageStyles = tv({
	slots: {
		container: '',
		profileSection: 'px-6',
		linksSection: 'mt-6 px-6',
		contactSection: 'mt-40',
	},
})

export default function Page() {
	const { container, profileSection, linksSection, contactSection } =
		linkPageStyles()

	return (
		<div className={container()}>
			<ProfileSection className={profileSection()} />
			<LinksSection className={linksSection()} />
			<ContactSection className={contactSection()} />
		</div>
	)
}
