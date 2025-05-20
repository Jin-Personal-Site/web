import { LuNotebookPen } from 'react-icons/lu'
import { TbSocial } from 'react-icons/tb'

import BaseCard from '@/components/common/card/BaseCard'

export default function AboutExplore() {
	return (
		<section className='mb-20 mt-30'>
			<h2 className='mb-10 text-shadow-[0_4px_8px_#fff1,0_8px_30px_#fff4]'>
				<p className='text-text-muted mb-2 text-center text-xs uppercase'>
					Discover more
				</p>
				<p className='text-center text-3xl font-semibold'>
					Explore my{' '}
					<span className='text-colorful inline-block font-serif text-4xl leading-8 font-bold italic'>
						sites
					</span>
				</p>
			</h2>
			{/* TODO: Implement Spotify card */}
			<BaseCard
				defaultContent={{
					image: '',
					icon: LuNotebookPen,
					title: 'Guestbook',
					describe: 'Let me know you are here',
				}}
			/>
			<BaseCard
				defaultContent={{
					image: '',
					icon: TbSocial,
					title: 'Links',
					describe: 'Links to my social media',
				}}
			/>
		</section>
	)
}
