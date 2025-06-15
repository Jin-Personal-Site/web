import capitalize from 'lodash/capitalize'

export const capitalizeText = (text: string) => {
	return capitalize(text)
}

export const getReadingTime = (wordCount: number, wpm = 183): number => {
	return Math.ceil(wordCount / wpm)
}
