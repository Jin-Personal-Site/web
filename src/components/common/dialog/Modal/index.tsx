'use client'

import { AriaAttributes, useImperativeHandle, useState } from 'react'
import { tv } from 'tailwind-variants'

import { Forwardable, HasChildren, InteractiveProps } from '@/types/props'

export interface ModalHandle {
	openModal: () => void
	closeModal: () => void
}

const modalStyles = tv({
	slots: {
		modal:
			'fixed inset-0 z-50 m-auto h-dvh w-dvw max-w-none bg-transparent backdrop-blur-xs',
	},
})

interface Props
	extends HasChildren,
		InteractiveProps,
		AriaAttributes,
		Forwardable<ModalHandle> {}
export default function Modal({
	children,
	className,
	style,
	ref,
	...props
}: Props) {
	const { modal } = modalStyles()
	const [isOpen, setIsOpen] = useState(false)

	const openModal = () => {
		setIsOpen(true)
	}

	const closeModal = () => {
		setIsOpen(false)
	}

	useImperativeHandle(ref, () => ({ openModal, closeModal }), [])

	if (!isOpen) return <></>

	return (
		<div
			role='dialog'
			className={modal({ class: className })}
			style={style}
			{...props}
		>
			{children}
		</div>
	)
}
