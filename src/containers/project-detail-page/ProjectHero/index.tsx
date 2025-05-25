import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaCircleInfo } from 'react-icons/fa6'
import { FiGithub } from 'react-icons/fi'
import { MdOutlineArrowOutward, MdOutlineMoreHoriz } from 'react-icons/md'
import { tv } from 'tailwind-variants'

import BaseButton from '@/components/common/buttons/BaseButton'
import PictureFrame from '@/components/common/frame/PictureFrame'
import ImageWithFallback from '@/components/common/images/ImageWithFallback'
import { fakeImage } from '@/libs/faker'
import { capitalizeText } from '@/libs/text'
import { ProjectDetailModel, ProjectType } from '@/models/project'

const projectHeroStyles = tv({
	slots: {
		header: 'flex flex-col',
		headingName: 'text-2xl font-extrabold',
		headingUrl: 'mt-3 flex items-center',
		liveDemoUrl: 'rounded-full font-medium',
		repoUrl: 'ml-4 text-xl',
		tagline: 'text-text-muted mt-3 text-sm',
		techStack: 'mt-3 flex items-center',
		techItem: 'mr-2.5 rounded-sm object-contain object-center',
		moreTechIcon:
			'flex-center bg-surface-card text-text-muted h-6 w-6 rounded-full',
		extraInfo: 'text-text-muted mt-6 flex justify-between text-sm',
		extraInfoPeriod: '',
		extractInfoType: 'flex items-center',
		extraInfoCompanyIcon: 'mr-1.5',
		descriptionCard:
			'bg-surface-card border-border mt-6 rounded-2xl border-1 px-4 pt-3 pb-4',
		descriptionIcon: 'mr-1.5',
		descriptionHeading:
			'text-text-base flex items-center text-sm font-semibold',
		description: 'text-text-muted mt-2 text-[0.8125rem]',
		mainImageFrame: 'mt-8',
		mainImageFrameLayer:
			'absolute top-0 left-0 block h-full w-full rounded-xl shadow-[inset_0_0_20px_var(--color-surface-card)]',
		mainImage: 'h-full w-full object-cover object-top',
	},
})

interface Props {
	project: ProjectDetailModel
}

export default function ProjectHero({ project }: Props) {
	const {
		header,
		headingName,
		headingUrl,
		liveDemoUrl,
		repoUrl,
		tagline,
		techStack,
		techItem,
		moreTechIcon,
		extraInfo,
		extraInfoPeriod,
		extractInfoType,
		extraInfoCompanyIcon,
		descriptionCard,
		descriptionIcon,
		descriptionHeading,
		description,
		mainImageFrame,
		mainImageFrameLayer,
		mainImage,
	} = projectHeroStyles()

	return (
		<React.Fragment>
			<div className={header()}>
				<h1 className={headingName()}>{project.projectName}</h1>
				<div className={headingUrl()}>
					<Link
						href={project.liveDemoUrl ?? '#'}
						aria-label='Live demo URL'
						target='_blank'
					>
						<BaseButton
							color='neutral'
							size='small'
							variant='flat'
							disabled={!Boolean(project.liveDemoUrl)}
							className={liveDemoUrl()}
						>
							Check it out&nbsp;
							<MdOutlineArrowOutward />
						</BaseButton>
					</Link>

					<Link
						href={project.repoUrl}
						target='_blank'
						aria-label={`Github repository of ${project.projectName}`}
						className={repoUrl()}
					>
						<FiGithub />
					</Link>
				</div>
			</div>
			<p className={tagline()}>{project.tagline}</p>
			<div className={techStack()}>
				{project.techStack
					.filter((tech) => tech.isHighlight)
					.map((tech) => (
						<ImageWithFallback
							key={tech.name}
							src={tech.icon}
							alt={tech.name}
							fallbackSrc={fakeImage(50, 50)}
							width={24}
							height={24}
							className={techItem()}
						/>
					))}
				{project.techStack.filter((tech) => !tech.isHighlight).length && (
					<div className={moreTechIcon()}>
						<MdOutlineMoreHoriz />
					</div>
				)}
			</div>
			<div className={extraInfo()}>
				<p className={extraInfoPeriod()}>
					{project.period.start} - {project.period.end || 'Present'}
				</p>
				<div className={extractInfoType()}>
					{project.projectType === ProjectType.EMPLOYMENT ? (
						<>
							<Image
								src={project.companyEmployment.icon}
								alt={project.companyEmployment.name}
								width={18}
								height={18}
								className={extraInfoCompanyIcon()}
							/>
							<span>{project.companyEmployment.name}</span>
						</>
					) : (
						<span>{capitalizeText(project.projectType)} project</span>
					)}
				</div>
			</div>
			<div
				className={descriptionCard()}
				style={{
					boxShadow: `-1.5px 0 0 color-mix(in srgb, ${project.mainColor} 100%, white 10%)`,
				}}
			>
				<h2 className={descriptionHeading()}>
					<FaCircleInfo
						className={descriptionIcon()}
						style={{
							color: `color-mix(in srgb, ${project.mainColor} 100%, white 10%)`,
						}}
					/>
					Description
				</h2>
				<p className={description()}>{project.description}</p>
			</div>
			<PictureFrame className={mainImageFrame()}>
				<div className={mainImageFrameLayer()}></div>
				<Image
					src={project.mainImage}
					alt={project.description}
					width={300}
					height={200}
					className={mainImage()}
					loading='lazy'
					placeholder='blur'
					blurDataURL='data:image/webp;base64,UklGRsoEAABXRUJQVlA4WAoAAAAgAAAAEAIAKQEASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDgg3AIAADAxAJ0BKhECKgE+nU6jTiWkIyIgCACwE4lpbt+hsw3X+v/tgNz/5/yGQiAAT2AfAfpesOEF2lQLJdrxcnIfvmwPt3Y3zY8mmSAJzOGrtKgqTuw91RtKoZO3dZdMgsPjk3i7T3l9ek+OmiPD48bqSACrbCLeM782KaG70d0veAMnxSxB150UvHHSx4h1k25pWSqaE+I/0EA/QEne2wFWTbYCw+PEOtscRaVjyQq2pbiT9EdZNtgKsm2wJSseNrzqgChz1FT958lrHiHWTbYs9WPEOrwIMtuvghSRvQ3eeoqfvPUVP3pLbMg2TbYCrJtsBVk22AqybbAWwN7ncQ6ybbAVZNtgKsm2wFWTbYCq7rYjrJtsBVk22AqybbAyPeeoALtT4IUSyjC6I6ybbAVZNtgKsm2oysm2wFWWaH6G7z1FT956ip/Emrn0YGQVZORZKgKsm2wFQ/DGRcUPXh8/RHWTbXvlTmI/lAVZNtgD++flThi6RSgwlT956ip+89RUytVzmD3MHuYPcwe5g9zWdYFkmAD+9xw0q4DH8jC6GTLYSgZZmZFFK5jKdVBdqtjVqlzPGqmKqY1t7mkh72l9RLv2vy7h7hnKz7WLLaFe5afRXNaFrN4g3wfVh6aEvJBPFSj0JVULOuCejedsbP92tQkTAxLfqjxW56x+bSwUfOMNoaLBz9k2AVbxM/o0XyfD0Eyc4zW0lYhoPgSbfC1eYrpTTlxZEH4Xtv6acyFGVUKwMSAxOwG8NhMauqb55IGYMkDkadcs0SeWY0A6ydMZJUOif1MczoUNupg1Sl2sBSabGZ1P+nbsUqhBJZPaoeLBXs1LNIYKwT5hI19wCnj700xd6PmdyTP5HrgkgW4XHmJAGgqS1vvBbvjgSPAIxlmOkNQOdJX9UTkMJEf3baypJqvEMAZYA5+FbOEjJ8zubX34N4XX+Df4IxlhK4lYvqBi1R3VaTj3xIVZSVtQAA=='
				/>
			</PictureFrame>
		</React.Fragment>
	)
}
