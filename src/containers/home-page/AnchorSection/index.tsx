import Image from 'next/image'
import Link from 'next/link'
import { FaRobot } from 'react-icons/fa6'
import { LuHeartHandshake, LuMapPinned } from 'react-icons/lu'
import { PiLayoutBold } from 'react-icons/pi'
import { tv } from 'tailwind-variants'

import TechImage from '@/../public/Development_Languages.png'
import InProgressImage from '@/../public/chart.jpg'
import RemoteImage from '@/../public/half-earth.webp'
import SampleImage from '@/../public/portrait.png'
import CurrentTime from '@/components/common/time/CurrentTime'
import { classnames } from '@/libs/tailwind'

// import { TechSphere } from '@/components/common/canvas/TechSphere'

const anchorCardStyles = tv({
	slots: {
		cardContainer:
			'border-border bg-surface-card relative mb-6 flex h-84 flex-col justify-between rounded-xl border-2 shadow-[inset_0_0_40px_#ffffff11]',
		cardFlashBorder:
			'after:absolute after:-top-0.5 after:left-1/2 after:h-0.5 after:w-95/100 after:-translate-x-1/2 after:rounded-full after:bg-linear-to-r after:from-transparent after:from-0% after:via-gray-500 after:via-50% after:to-transparent after:to-100%',
		cardImageWrapper: 'relative h-24',
		cardImage:
			'h-72 rounded-t-xl mask-radial-from-black/75 mask-radial-from-0% mask-radial-to-70% mask-radial-at-center object-cover object-top',
		cardContent: 'relative z-5 p-6',
		cardIcon: 'text-[42px] text-[#444]',
		cardTitle: 'text-text-muted/70 my-2 mt-1.5 text-left text-sm font-medium',
		cardText: 'text-text-base text-left text-lg font-bold',
	},
})

export default function AnchorSection() {
	const {
		cardContainer,
		cardFlashBorder,
		cardImageWrapper,
		cardImage,
		cardContent,
		cardIcon,
		cardTitle,
		cardText,
	} = anchorCardStyles()

	return (
		<section className='home-section'>
			{/* <h2 className='text-link text-2xl font-bold'>My Portfolio</h2>
			<h3 className='mb-6 text-3xl font-extrabold'>Explore Sections</h3> */}
			{/* <div className='h-full w-full'>
				<TechSphere className='h-full w-full bg-white/5' />
			</div> */}
			<Link
				href={'#about'}
				className={cardContainer({ class: cardFlashBorder() })}
			>
				<div className={cardImageWrapper()}>
					<Image src={SampleImage} alt='' className={cardImage()} />
				</div>
				<div className={cardContent()}>
					<LuHeartHandshake className={cardIcon()} />
					<p className={cardTitle()}>Collaboration</p>
					<p className={cardText()}>
						I priority client collaboration, fostering open communication
					</p>
				</div>
			</Link>
			<Link
				href={'#about'}
				className={cardContainer({
					class: classnames(
						cardFlashBorder(),
						'shadow-[inset_0_0_20px_#ffffff11]',
					),
				})}
			>
				<div className={cardImageWrapper()}>
					<p className='text-text-muted absolute top-2 left-1/2 -translate-x-1/2 text-center text-[22px] leading-6 font-extrabold'>
						I&apos;m very flexible with time zone communications
					</p>
					<Image
						src={RemoteImage}
						alt=''
						className={cardImage({
							class: 'relative h-69 translate-y-15 mask-radial-to-90%',
						})}
					/>
				</div>
				<div className={cardContent()}>
					<LuMapPinned className={cardIcon()} />
					<p className={cardTitle()}>Remote</p>
					<p className={cardText()}>
						Vietnam - <CurrentTime />
					</p>
				</div>
			</Link>
			<Link
				href={'#about'}
				className={cardContainer({ class: cardFlashBorder() })}
			>
				<div className={cardImageWrapper()}>
					<Image src={TechImage} alt='' className={cardImage()} />
				</div>
				<div className={cardContent()}>
					<FaRobot className={cardIcon()} />
					<p className={cardTitle()}>Tech Enthusiast</p>
					<p className={cardText()}>
						Passionate about cutting-edge development technologies
					</p>
				</div>
			</Link>
			<Link
				href={'#about'}
				className={cardContainer({ class: cardFlashBorder() })}
			>
				<div className={cardImageWrapper()}>
					<Image src={InProgressImage} alt='' className={cardImage()} />
				</div>
				<div className={cardContent()}>
					<PiLayoutBold className={cardIcon()} />
					<p className={cardTitle()}>The Inside Scoop</p>
					<p className={cardText()}>Currently building a Saas Application</p>
				</div>
			</Link>
			{/* <Link
				href={'#skill'}
				className='border-border bg-surface-card mb-4 block rounded-xl border p-4 shadow-[inset_0_0_80px_#ffffff1f]'
			>
				<Image
					src={projectSampleImage}
					alt=''
					className='mb-5 max-h-24 w-full rounded-lg'
					objectPosition='center'
					objectFit='cover'
				/>
				<div className='flex items-center'>
					<div className='flex-1'>
						<p className='text-text-muted mb-1 text-left text-sm font-medium'>
							Tech Enthusiast
						</p>
						<p className='text-text-base text-left text-base font-semibold'>
							Passion in cutting-edge development technologies
						</p>
					</div>
					<button className='pl-3'>
						<FaArrowRight className='animate-slide-left transition-all duration-500' />
					</button>
				</div>
			</Link>
			<Link
				href={'#project'}
				className='border-border bg-surface-card mb-4 block rounded-xl border p-4 shadow-[inset_0_0_80px_#ffffff1f]'
			>
				<Image
					src={projectSampleImage}
					alt=''
					className='mb-5 max-h-24 w-full rounded-lg'
					objectPosition='center'
					objectFit='cover'
				/>
				<div className='flex items-center'>
					<div className='flex-1'>
						<p className='text-text-muted mb-1 text-left text-sm font-medium'>
							Craftsman
						</p>
						<p className='text-text-base text-left text-base font-semibold'>
							Projects I led and developed through self-learning
						</p>
					</div>
					<button className='pl-3'>
						<FaArrowRight className='animate-slide-left transition-all duration-500' />
					</button>
				</div>
			</Link>
			<Link
				href={'#article'}
				className='border-border bg-surface-card mb-4 block rounded-xl border p-4 shadow-[inset_0_0_80px_#ffffff1f]'
			>
				<Image
					src={projectSampleImage}
					alt=''
					className='mb-5 max-h-24 w-full rounded-lg'
					objectPosition='center'
					objectFit='cover'
				/>
				<div className='flex items-center'>
					<div className='flex-1'>
						<p className='text-text-muted mb-1 text-left text-sm font-medium'>
							Sharing Enthusiast
						</p>
						<p className='text-text-base text-left text-base font-semibold'>
							Eager to share my experience, research or remind key principles
						</p>
					</div>
					<button className='pl-3'>
						<FaArrowRight className='animate-slide-left transition-all duration-500' />
					</button>
				</div>
			</Link>
			<Link
				href={'#contact'}
				className='border-border mb-4 block rounded-xl border p-4 shadow-[inset_0_0_80px_#ffffff1f]'
			>
				<p className='text-text-base text-left text-base font-semibold'>
					Let&apos;s work together in your next project
				</p>
				<div className='mt-4 flex justify-center'>
					<LuCopy size={16} className='mr-2' />
					<p className='font-base font-medium'>nguyenquanqvinh@gmail.com</p>
				</div>
			</Link> */}
		</section>
	)
}
