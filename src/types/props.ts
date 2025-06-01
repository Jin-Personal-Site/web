import { TvSlotsMap } from '@/libs/tailwind'
import React from 'react'
import { TV } from 'tailwind-variants'

export interface Stylable {
	className?: string
	style?: React.CSSProperties
}

export interface HasChildren {
	children: React.ReactNode
}

export interface Clickable {
	onClick?: React.MouseEventHandler
	onMouseEnter?: React.MouseEventHandler
	onMouseLeave?: React.MouseEventHandler
}

export interface Disableable {
	disabled?: boolean
}

export interface Loadable {
	loading?: boolean
}

export interface Identifiable {
	id?: string
	'data-testid'?: string
}

export interface Polymorphic {
	as?: React.ElementType
}

export interface AriaProps {
	'aria-label'?: string
	'aria-describedby'?: string
	'aria-hidden'?: boolean
	role?: string
}

export interface Forwardable<T = HTMLElement> {
	ref?: React.RefObject<T>
}

export interface Suppressable {
	suppressHydrationWarning?: boolean
}

export interface DeepStylable<T extends Pick<ReturnType<TV>, 'slots'>> {
	slotClassName?: Partial<TvSlotsMap<T>>
}

// Common combination interfaces
export interface InteractiveProps extends Stylable, Clickable, Disableable {}
export interface AccessibleProps extends Stylable, AriaProps {}
export interface BaseComponentProps
	extends Stylable,
		HasChildren,
		Identifiable {}
