import { useCallback, useEffect, useState } from 'react'

export function useMeta(name: string, initValue: string = '') {
	const [metaValue, setMetaValue] = useState(initValue)

	useEffect(() => {
		const meta = document.querySelector(`meta[name="${name}"]`)
		if (meta) {
			setMetaValue(meta.getAttribute('content') || initValue)
		} else {
			const newMeta = document.createElement('meta')
			newMeta.name = name
			newMeta.content = initValue
			document.head.appendChild(newMeta)
		}
	}, [initValue, name])

	const updateMeta = useCallback(
		(value: string) => {
			const meta = document.querySelector(`meta[name="${name}"]`)
			if (meta) {
				meta.setAttribute('content', value)
			} else {
				const newMeta = document.createElement('meta')
				newMeta.name = name
				newMeta.content = value
				document.head.appendChild(newMeta)
			}
			setMetaValue(value)
		},
		[name],
	)

	return [metaValue, updateMeta] as const
}
