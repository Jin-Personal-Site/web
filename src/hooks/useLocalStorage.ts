import { useCallback, useEffect, useState } from 'react'

const getLocalStorage = (key: string): string | null => {
	if (typeof window === 'undefined') {
		return null
	}

	return localStorage.getItem(key)
}

export function useLocalStorage<T extends string = string>(
	key: string,
	initialValue: T | null = null,
) {
	const [state, setState] = useState<T | null>(null)

	useEffect(() => {
		setState(<T>getLocalStorage(key) || initialValue)
	}, [])

	const setValue = useCallback(
		(value: T | (() => T)) => {
			const storageValue = typeof value === 'function' ? value() : value
			localStorage.setItem(key, storageValue)

			setState(storageValue)
		},
		[key],
	)

	const deleteValue = useCallback(() => {
		localStorage.removeItem(key)
	}, [key])

	return [state, setValue, deleteValue] as const
}
