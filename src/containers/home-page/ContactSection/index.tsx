import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { twMerge } from 'tailwind-merge'

import BaseButton from '@/components/common/buttons/BaseButton'
import { Stylable } from '@/types/props'

interface Props extends Stylable {}

export default function ContactSection({ className }: Props) {
	return (
		<section
			id='contact'
			className={twMerge('mb-20 flex flex-col items-center px-6', className)}
		>
			<h2 className='text-text-base text-center text-2xl font-extrabold uppercase'>
				Let’s Build Something Together
			</h2>
			<BaseButton size='medium' className='mt-5! mb-4! rounded-full! px-6 py-3'>
				Get In Touch
				<FaArrowRight className='animate-slide-left ml-2 transition-all duration-500' />
			</BaseButton>
			<p className='text-text-muted mt-2 text-center leading-5'>
				Got a project in mind? Drop me a line!
				<br />
				I’d love to hear how I can help.
			</p>
			<div className='hidden'>
				<div>
					<h3>Your Info</h3>
					<ul>
						<li>
							✉️ <strong>Email:</strong>{' '}
							<a href='mailto:nguyenquanqvinh@gmail.com'>
								nguyenquanqvinh@gmail.com
							</a>
						</li>
						<li>
							📞 <strong>Phone:</strong>
							{' +84 34 7070 634'}
						</li>
						<li>
							🌐 <strong>LinkedIn:</strong>{' '}
							<a href='https://www.linkedin.com/in/quanqvinh'>in/quanqvinh</a>
						</li>
						<li>
							💻 <strong>GitHub:</strong>{' '}
							<a href='https://github.com/quanqvinh'>github.com/quanqvinh</a>
						</li>
					</ul>
				</div>
				<div>
					<h3>Contact Form</h3>
					<form>
						<label>
							Name (required)
							<input type='text' name='name' placeholder='Your name' required />
						</label>
						<label>
							Email (required)
							<input
								type='email'
								name='email'
								placeholder='Your email address'
								required
							/>
						</label>
						<label>
							Message (required)
							<textarea
								name='message'
								placeholder='Tell me about your project...'
								required
							/>
						</label>
						<input type='hidden' name='honeypot' />
						<button type='submit'>Send Message</button>
					</form>
				</div>
			</div>
		</section>
	)
}
