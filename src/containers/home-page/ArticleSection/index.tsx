import { datetime } from '@/libs/datetime'
import Link from 'next/link'
import React from 'react'

interface Article {
	title: string
	thumbnail: string
	description: string
	estimateReading: number
	createdAt: string | number
	link: string
}

const featuredArticles: Article[] = [
	{
		title: 'Understanding React Hooks',
		thumbnail: '',
		description: 'A deep dive into the use of hooks in React.',
		estimateReading: 5,
		createdAt: '2025-04-27T12:18:10.354Z',
		link: '#',
	},
	{
		title: 'Building Scalable Applications',
		thumbnail: '',
		description: 'Best practices for building scalable web applications.',
		estimateReading: 5,
		createdAt: '2025-04-27T12:18:10.354Z',
		link: '#',
	},
	{
		title: 'JavaScript ES6 Features',
		thumbnail: '',
		description: 'An overview of the new features introduced in ES6.',
		estimateReading: 5,
		createdAt: '2025-04-27T12:18:10.354Z',
		link: '#',
	},
]

export default function ArticleSection() {
	return (
		<section id='article' className='home-section'>
			<h2 className='mb-20 text-shadow-[0_4px_8px_#fff1,0_8px_30px_#fff4]'>
				<p className='text-text-muted mb-2 text-center text-xs uppercase'>
					Desire to write and share knowledge
				</p>
				<p className='mb-8 text-center text-3xl font-bold'>
					Featured{' '}
					<span className='text-colorful inline-block -translate-x-1 font-serif text-4xl leading-12 font-bold italic'>
						articles
					</span>
				</p>
			</h2>
			<Link
				href='/article'
				className='text-text-muted mt-4 mb-12 block text-base font-medium'
			>
				View all →
			</Link>
			<div>
				{featuredArticles.map((article) => (
					<div key={article.title} className='border-t-border border-t-2 py-12'>
						<div className='text-text-muted text-sm font-semibold opacity-70'>
							{datetime.toFormat(article.createdAt, 'yyyy-MM-dd')}
							{` . ${article.estimateReading} minute${
								article.estimateReading > 1 && 's'
							} reading`}
						</div>
						<div className='!border-b-border block !border-0 border-b-2'>
							{/* <Image
								src={fakeImage()}
								alt=""
								width={100}
								height={60}
							/> */}
							<h3 className='text-text-base text-xl font-bold'>
								{article.title}
							</h3>
							<p className='text-text-muted mt-3 text-sm'>
								{article.description}
							</p>
							<Link
								href={article.link}
								className='mt-8 block text-base font-medium'
							>
								Read the article →
							</Link>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}
