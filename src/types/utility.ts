import { IconType } from 'react-icons'

export type Period = {
	start: string
	end?: string
}

export type ExternalItem<T extends IconType | string = IconType> = {
	name: string
	icon: T
	url?: string
}
