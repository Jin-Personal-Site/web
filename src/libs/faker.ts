import { faker } from '@faker-js/faker'

export const fakeImage = () =>
	faker.image.urlPicsumPhotos({
		width: 1920,
		height: 1080,
	})

export const fakeParagraph = (numberOfSentences: number) =>
	faker.lorem.paragraph(numberOfSentences)
