'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { tv } from 'tailwind-variants'

import SwiperContainer from '@/components/common/container/SwiperContainer'
import { fakeImage } from '@/libs/faker'

const pictures: Array<{
	imageUrl: string
	caption: string
}> = [
	// { imageUrl: fakeImage(), caption: 'I code' },
	// { imageUrl: fakeImage(), caption: 'I travel' },
	// { imageUrl: fakeImage(), caption: 'I jog' },
	// { imageUrl: fakeImage(), caption: 'I read' },
	{ imageUrl: '/project1.png', caption: 'I code' },
	{ imageUrl: '/project2.png', caption: 'I travel' },
	{ imageUrl: '/project3.png', caption: 'I jog' },
	{ imageUrl: '/project4.png', caption: 'I read' },
]

const carouselStyle = tv({
	slots: {
		carouselWrapper: 'relative mb-10 h-80 w-full',
		slideWrapper: 'h-60 w-60 transition-all duration-500',
		slideCurrent:
			'absolute top-1/2 left-1/2 z-10 transform-[translate(-50%,-50%)]',
		slidePrev:
			'absolute top-1/2 left-0 z-5 transform-[translate(-30px,-50%)_perspective(800px)_rotateY(45deg)_scale(85%)] brightness-50',
		slideNext:
			'absolute top-1/2 left-full z-5 transform-[translate(calc(-100%+30px),-50%)_perspective(800px)_rotateY(-45deg)_scale(85%)] brightness-50',
		slideHidden:
			'absolute top-1/2 left-1/2 z-1 -translate-1/2 scale-50 brightness-30',
		slideImage: 'h-full w-full rounded-2xl object-cover object-center',
	},
})

export default function PictureCarousel() {
	const [currentIndex, setCurrentIndex] = useState(1)
	const prevIndex =
		currentIndex - 1 < 0 ? pictures.length - 1 : currentIndex - 1
	const nextIndex = currentIndex + 1 >= pictures.length ? 0 : currentIndex + 1
	const {
		carouselWrapper,
		slideWrapper,
		slideCurrent,
		slidePrev,
		slideNext,
		slideHidden,
		slideImage,
	} = carouselStyle()
	const intervalRef = useRef<number>(0)

	const resetInterval = () => {
		if (intervalRef.current) {
			clearInterval(intervalRef.current)
		}
		intervalRef.current = setInterval(() => {
			setCurrentIndex((value) => (value + 1) % pictures.length)
		}, 3000) as any
	}

	const onChangeCurrentSlide = (index: number) => {
		resetInterval()
		setCurrentIndex(index)
	}

	useEffect(() => {
		resetInterval()
		return () => {
			clearInterval(intervalRef.current)
		}
	}, [])

	return (
		<SwiperContainer
			className={carouselWrapper()}
			onSwipeLeft={() => onChangeCurrentSlide(prevIndex)}
			onSwipeRight={() => onChangeCurrentSlide(nextIndex)}
		>
			{pictures.map((picture, index) => {
				let imageWrapperClass: string

				if (index === currentIndex) {
					imageWrapperClass = slideWrapper({ class: slideCurrent() })
				} else if (index === prevIndex) {
					imageWrapperClass = slideWrapper({ class: slidePrev() })
				} else if (index === nextIndex) {
					imageWrapperClass = slideWrapper({ class: slideNext() })
				} else {
					imageWrapperClass = slideWrapper({ class: slideHidden() })
				}

				return (
					<div key={picture.imageUrl} className={imageWrapperClass}>
						<Image
							src={picture.imageUrl}
							width={100}
							height={100}
							alt=''
							className={slideImage()}
							onClick={() => {
								onChangeCurrentSlide(index)
							}}
						/>
					</div>
				)
			})}
		</SwiperContainer>
	)
}
