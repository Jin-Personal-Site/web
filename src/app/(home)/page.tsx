import { Metadata } from 'next'
import React from 'react'

import AnchorSection from '@/containers/home-page/AnchorSection'
import ArticleSection from '@/containers/home-page/ArticleSection'
import ContactSection from '@/containers/home-page/ContactSection'
import HeroSection from '@/containers/home-page/HeroSection'
import ProjectSection from '@/containers/home-page/ProjectSection'
import SkillSection from '@/containers/home-page/SkillSection'

export const metadata: Metadata = {
	title: 'Portfolio | Vinh Nguyen - Full-Stack Developer',
	description: 'Nguyen Quang Vinh - Software Engineer',
}

export default function Page() {
	return (
		<React.Fragment>
			<HeroSection />
			<AnchorSection />
			<SkillSection />
			<ProjectSection />
			<ArticleSection />
			<ContactSection />
		</React.Fragment>
	)
}
