import Image, { ImageProps } from 'next/image'

export default function StorageImage(props: ImageProps) {
	const prefix = 'http://localhost:10000/jin-personal-site/'
	const { src, alt, ...otherProps } = props

	return <Image src={prefix + src} alt={alt} {...otherProps} />
}

