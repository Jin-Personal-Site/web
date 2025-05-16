import { faker } from '@faker-js/faker'

export const fakeImage = () =>
	faker.image.urlPicsumPhotos({
		width: 1920,
		height: 1080,
	})
