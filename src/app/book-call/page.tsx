import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Book a call | Vinh Nguyen - Full-Stack Developer',
}

export default function Page() {
	return (
		<section className='h-full px-6'>
			<p className='text-text-muted/20 text-center text-2xl font-bold uppercase'>
				Book a call
			</p>
		</section>
	)
}
