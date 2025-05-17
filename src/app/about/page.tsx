import React from 'react'

import MyIntroduction from '@/containers/about-page/MyIntroduction'
import PictureCarousel from '@/containers/about-page/PictureCarousel'

export default function Page() {
	return (
		<div className='p-4'>
			<h2 className='mb-8 text-shadow-[0_4px_8px_#fff1,0_8px_30px_#fff4]'>
				<p className='text-text-muted mb-2 text-center text-xs uppercase'>
					More about me
				</p>
				<p className='mb-8 text-center text-3xl font-bold'>
					Hi there! I&apos;m{' '}
					<span className='text-colorful inline-block -translate-x-1 font-serif text-4xl leading-12 font-bold italic'>
						Vinh
					</span>
				</p>
			</h2>
			<PictureCarousel />
			<MyIntroduction />
		</div>
	)
}
