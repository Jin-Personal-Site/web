import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'
import { TV, VariantProps } from 'tailwind-variants'

export const getVariantValues = <
	T extends Record<string, Record<string, string>>,
>(
	variants: T,
): {
	[P in keyof T]: keyof T[P] extends 'true' | 'false'
		? boolean[]
		: (keyof T[P])[]
} => {
	const initialAccumulator = {} as {
		[P in keyof T]: keyof T[P] extends 'true' | 'false'
			? boolean[]
			: (keyof T[P])[]
	}

	return (Object.keys(variants) as Array<keyof T>).reduce((acc, currentKey) => {
		const innerKeysArray = Object.keys(variants[currentKey])

		if (innerKeysArray.every((key) => ['true', 'false'].includes(key))) {
			acc[currentKey] = innerKeysArray.map(
				(keyStr) => JSON.parse(keyStr) as boolean,
			) as any
		} else {
			acc[currentKey] = innerKeysArray as (keyof T[typeof currentKey])[] as any
		}
		return acc
	}, initialAccumulator)
}

export type RequiredVariants<
	T extends VariantProps<ReturnType<TV>>,
	K extends keyof T,
> = Omit<T, K> & Required<Pick<T, K>>

export type ClassValue =
	| ClassArray
	| ClassDictionary
	| string
	| number
	| bigint
	| null
	| boolean
	| undefined
export type ClassDictionary = Record<string, any>
export type ClassArray = ClassValue[]

export const classnames = (...inputs: ClassValue[]): string => {
	return twMerge(clsx(...inputs))
}
