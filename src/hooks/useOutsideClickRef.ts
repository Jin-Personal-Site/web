import { MutableRefObject, useCallback, useEffect, useRef } from 'react'

export const useOutsideClickRef = <T extends HTMLElement>(
	outsideClickCb: () => void,
	ignoreElement?: MutableRefObject<HTMLElement | null>,
) => {
	const ref = useRef<T | null>(null)

	const handleClickOutside = useCallback(
		(event: Event) => {
			const clickedEl = event.target as Node
			if (
				ref.current &&
				!ref.current.contains(clickedEl) &&
				!ignoreElement?.current?.contains(clickedEl)
			) {
				outsideClickCb()
			}
		},
		[outsideClickCb, ignoreElement],
	)

	useEffect(() => {
		console.log('addEventListeners')
		document.addEventListener('mousedown', handleClickOutside)

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return ref
}
