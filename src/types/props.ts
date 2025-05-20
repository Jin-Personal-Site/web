import React from 'react'

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

export interface AriaProps {
	'aria-label'?: string
	'aria-describedby'?: string
	'aria-hidden'?: boolean
	role?: string
}

// Common combination interfaces
export interface InteractiveProps extends Stylable, Clickable, Disableable {}
export interface AccessibleProps extends Stylable, AriaProps {}
export interface BaseComponentProps
	extends Stylable,
		HasChildren,
		Identifiable {}
