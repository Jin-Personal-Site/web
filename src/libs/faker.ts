import { faker } from '@faker-js/faker'

export const fakeImage = (width = 1920, height = 1080) =>
	faker.image.urlPicsumPhotos({
		width,
		height,
	})

export const fakeParagraph = (numberOfSentences: number) =>
	faker.lorem.paragraph(numberOfSentences)

export const fakeSentence = (min = 15, max = 20) =>
	faker.lorem.sentence({ min, max })
