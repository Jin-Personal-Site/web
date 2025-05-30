'use client'

import { useRef } from 'react'
import { HiMenu } from 'react-icons/hi'
import { tv } from 'tailwind-variants'

import MenuButton from '@/components/common/buttons/MenuButton'
import Modal, { ModalHandle } from '@/components/common/dialog/Modal'
import { SocialItem } from '@/services/overview-info'

import HeaderMenuNavigation from '../HeaderMenuNavigation'

const headerStyles = tv({
	slots: {
		menuButton: 'flex-center h-10 w-10',
		hoverEffect:
			'transition-base cursor-pointer hover:scale-110 hover:drop-shadow-[0_0_5px_var(--color-text-base)]',
		modal: 'flex',
	},
})

interface Props {
	socialMediaList: SocialItem[]
}

export default function HeaderMenu({ socialMediaList }: Props) {
	const { menuButton, hoverEffect, modal } = headerStyles()
	const modalRef = useRef<ModalHandle | null>(null)

	return (
		<>
			<MenuButton
				className={menuButton({ class: hoverEffect() })}
				onClick={() => modalRef.current?.openModal()}
			>
				<HiMenu size={24} />
			</MenuButton>
			<Modal
				className={modal()}
				ref={modalRef}
				aria-label='Navigation Menu'
				aria-modal='true'
				onClick={(e) => {
					if (e.target === e.currentTarget) modalRef.current?.closeModal()
				}}
			>
				<HeaderMenuNavigation
					onClose={modalRef.current?.closeModal}
					socialItems={socialMediaList}
				/>
			</Modal>
		</>
	)
}
