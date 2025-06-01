import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'
import {
	ClassProp,
	TV,
	TVProps,
	TVReturnType,
	VariantProps,
} from 'tailwind-variants'

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

export type ClassValue = Parameters<typeof twMerge>[number]

export type TvSlotsMap<T extends Pick<ReturnType<TV>, 'slots'>> = {
	[K in keyof T['slots']]: ClassValue
}

export const classnames = (...inputs: Parameters<typeof clsx>): string => {
	return twMerge(clsx(...inputs))
}

/**
 * Applies custom slot classes to a tailwind-variants component
 *
 * @template T - The TVReturnType of the component
 * @template K - The return type of the component (defaults to ReturnType<T>)
 * @param tvSlots - The original tailwind-variants slots object
 * @param customSlots - Object containing custom classes to apply to each slot
 * @returns The modified slots object with custom classes applied
 */
export const applyCustomSlots = <
	T extends TVReturnType<any, Record<string, ClassValue>, any, any, any>,
	K = ReturnType<T>,
>(
	tvSlots: K,
	customSlots: TvSlotsMap<T>,
): K => {
	// If tvSlots is a string, return it as-is (no slots to modify)
	if (typeof tvSlots === 'string') {
		return tvSlots
	}

	// Get list of slot names that exist in both tvSlots and customSlots
	const slotNames: Array<keyof TvSlotsMap<T>> = Object.keys(customSlots).filter(
		(slotName) => Object.keys(tvSlots as any).includes(slotName),
	) as any

	// For each matching slot, create a new function that combines the original and custom classes
	for (const slotName of slotNames) {
		const slot = (tvSlots as any)[slotName]

		// Override the original slot function to merge custom classes
		;(tvSlots as any)[slotName] = (props: ClassProp = {}) => {
			// Get component classes from props (supports both class and className)
			const componentClass = props.class || props.className || ''
			// Get custom classes for this slot
			const customClass = customSlots[slotName] || ''
			// Merge component and custom classes
			const _class = classnames(componentClass, customClass)

			// Call original slot function with merged classes
			return slot({ class: _class })
		}
	}

	return tvSlots
}
