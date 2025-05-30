'use client'

import { createContext, useCallback } from 'react'

import { useLocalStorage } from '@/hooks/useLocalStorage'
import { useMeta } from '@/hooks/useMeta'
import { HasChildren } from '@/types/props'

export enum Theme {
	LIGHT = 'light',
	DARK = 'dark',
	PREFER_SYSTEM = 'system',
}

export const ThemeContext = createContext<{
	theme?: Theme | null
	setTheme?: (theme: Theme) => any
}>({})

interface Props extends HasChildren {}

export default function ThemeProvider({ children }: Props) {
	const [theme, setTheme] = useLocalStorage<Theme>('theme', Theme.PREFER_SYSTEM)
	const [_, setThemeMeta] = useMeta('site-theme')

	const changeTheme = useCallback(
		(theme: Theme) => {
			setTheme(theme)
			setThemeMeta(theme)
		},
		[setTheme, setThemeMeta],
	)

	return (
		<ThemeContext.Provider value={{ theme, setTheme: changeTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}
